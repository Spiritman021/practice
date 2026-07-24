(() => {
  "use strict";

  const app = document.getElementById("quiz-app");
  const body = document.body;
  const questionBankUrl = body.dataset.questionBank;
  const notesUrl = body.dataset.notesUrl;
  const indexUrl = body.dataset.indexUrl;
  const attemptStorageKey = "dbmsQuizAttempts.v1";

  let bank = null;
  let questions = [];
  let responses = [];
  let currentIndex = 0;
  let secondsLeft = 0;
  let timerId = null;
  let quizActive = false;
  let quizStartedAt = null;
  let attemptSaved = false;

  const escapeHtml = (value) => String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

  const shuffle = (items) => {
    const copy = [...items];
    for (let index = copy.length - 1; index > 0; index -= 1) {
      const randomIndex = Math.floor(Math.random() * (index + 1));
      [copy[index], copy[randomIndex]] = [copy[randomIndex], copy[index]];
    }
    return copy;
  };

  const validateQuestionBank = (candidate) => {
    if (!candidate || !Array.isArray(candidate.questions) || candidate.questions.length !== 30) {
      throw new Error("The question bank must contain exactly 30 questions.");
    }

    const ids = new Set();
    candidate.questions.forEach((question, index) => {
      if (!question.id || ids.has(question.id)) {
        throw new Error(`Question ${index + 1} has a missing or duplicate ID.`);
      }
      ids.add(question.id);

      if (!Array.isArray(question.options) || question.options.length !== 5) {
        throw new Error(`Question ${index + 1} must contain exactly five options.`);
      }
      if (!Number.isInteger(question.answer) || question.answer < 0 || question.answer > 4) {
        throw new Error(`Question ${index + 1} has an invalid answer index.`);
      }
    });
    return candidate;
  };

  const loadQuestionBank = async () => {
    let loadedBank = null;

    if (location.protocol !== "file:") {
      try {
        const response = await fetch(questionBankUrl, { cache: "no-store" });
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        loadedBank = await response.json();
      } catch (error) {
        console.warn("Could not fetch the JSON question bank; using the local fallback.", error);
      }
    }

    loadedBank = loadedBank || window.DBMS_QUIZ_FALLBACK;
    bank = validateQuestionBank(loadedBank);
    document.title = `${bank.section} ${bank.title} Quiz | DBMS Notes New`;
    renderStartScreen();
  };

  const renderError = (error) => {
    app.innerHTML = `
      <section class="error-card">
        <h1>Quiz could not be loaded</h1>
        <p>${escapeHtml(error.message)}</p>
        <div class="result-actions">
          <a class="secondary-btn" href="${escapeHtml(notesUrl)}">Return to notes</a>
        </div>
      </section>
    `;
  };

  const renderStartScreen = () => {
    stopTimer();
    quizActive = false;
    const negativeMark = Number(bank.negativeMarks).toFixed(2).replace(/0$/, "");

    app.innerHTML = `
      <section class="start-card">
        <div class="start-hero">
          <span class="section-badge">SECTION ${escapeHtml(bank.section)} · EXAM QUIZ</span>
          <h1>${escapeHtml(bank.title)}</h1>
          <p>Practice this topic in an IBPS SO IT-style interface. Question order is shuffled for every attempt.</p>
        </div>
        <div class="start-body">
          <div class="exam-facts">
            <div class="fact"><strong>${bank.questions.length}</strong><span>MCQ questions</span></div>
            <div class="fact"><strong>5</strong><span>Options per question</span></div>
            <div class="fact"><strong>${bank.durationMinutes} min</strong><span>Exam timer</span></div>
            <div class="fact"><strong>−${negativeMark}</strong><span>Wrong-answer penalty</span></div>
          </div>
          <ol class="instructions">
            <li>Each correct answer carries <strong>${bank.positiveMarks} mark</strong>; each wrong answer deducts <strong>${negativeMark} mark</strong>.</li>
            <li>Unattempted questions carry no penalty.</li>
            <li>Use the question palette to move between questions.</li>
            <li>You may clear a response or mark a question for review before submitting.</li>
            <li>The test is automatically submitted when the timer reaches zero.</li>
          </ol>
          <button class="primary-btn" type="button" data-action="start">Start shuffled quiz →</button>
        </div>
      </section>
    `;
  };

  const beginQuiz = () => {
    questions = shuffle(bank.questions);
    responses = questions.map(() => ({ selected: null, visited: false, marked: false }));
    currentIndex = 0;
    responses[0].visited = true;
    secondsLeft = bank.durationMinutes * 60;
    quizActive = true;
    quizStartedAt = Date.now();
    attemptSaved = false;
    startTimer();
    renderExam();
  };

  const startTimer = () => {
    stopTimer();
    timerId = window.setInterval(() => {
      secondsLeft -= 1;
      updateTimerDisplay();
      if (secondsLeft <= 0) {
        secondsLeft = 0;
        stopTimer();
        submitQuiz(true);
      }
    }, 1000);
  };

  const stopTimer = () => {
    if (timerId !== null) {
      window.clearInterval(timerId);
      timerId = null;
    }
  };

  const formatTime = (totalSeconds) => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  };

  const updateTimerDisplay = () => {
    const timer = document.getElementById("timer-value");
    const timerCounter = document.getElementById("timer-counter");
    if (!timer || !timerCounter) return;

    timer.textContent = formatTime(secondsLeft);
    timerCounter.classList.toggle("timer-warning", secondsLeft <= 300 && secondsLeft > 60);
    timerCounter.classList.toggle("timer-danger", secondsLeft <= 60);
  };

  const answeredCount = () => responses.filter((response) => response.selected !== null).length;
  const markedCount = () => responses.filter((response) => response.marked).length;

  const renderExam = (scrollToTop = true) => {
    const question = questions[currentIndex];
    const response = responses[currentIndex];
    const optionsHtml = question.options.map((option, optionIndex) => `
      <button
        class="option${response.selected === optionIndex ? " selected" : ""}"
        type="button"
        data-option="${optionIndex}"
        aria-pressed="${response.selected === optionIndex}"
      >
        <span class="option-marker">${String.fromCharCode(65 + optionIndex)}</span>
        <span>${escapeHtml(option)}</span>
      </button>
    `).join("");

    const paletteHtml = questions.map((_, index) => {
      const item = responses[index];
      const classes = ["palette-btn"];
      if (item.visited) classes.push("visited");
      if (item.selected !== null) classes.push("answered");
      if (item.marked) classes.push("marked");
      if (index === currentIndex) classes.push("current");
      return `
        <button
          class="${classes.join(" ")}"
          type="button"
          data-index="${index}"
          aria-label="Question ${index + 1}${item.selected !== null ? ", answered" : ""}${item.marked ? ", marked for review" : ""}"
        >${index + 1}</button>
      `;
    }).join("");

    app.innerHTML = `
      <section class="exam-header">
        <div>
          <h1>${escapeHtml(bank.section)} · ${escapeHtml(bank.title)}</h1>
          <p>${escapeHtml(bank.exam)} · Questions are in randomized order</p>
        </div>
        <div class="exam-counters">
          <div class="counter"><span>Answered</span><strong>${answeredCount()} / ${questions.length}</strong></div>
          <div class="counter" id="timer-counter"><span>Time left</span><strong id="timer-value">${formatTime(secondsLeft)}</strong></div>
        </div>
      </section>

      <div class="exam-layout">
        <section class="question-panel">
          <div class="question-strip">
            <span>Question ${currentIndex + 1} of ${questions.length}</span>
            <span>${escapeHtml(question.topic)}</span>
          </div>
          <div class="question-content">
            <h2>${escapeHtml(question.question)}</h2>
            <div class="options" role="radiogroup" aria-label="Answer options">
              ${optionsHtml}
            </div>
          </div>
          <div class="question-actions">
            <button class="action-btn" type="button" data-action="previous" ${currentIndex === 0 ? "disabled" : ""}>← Previous</button>
            <button class="action-btn" type="button" data-action="clear" ${response.selected === null ? "disabled" : ""}>Clear response</button>
            <button class="action-btn mark" type="button" data-action="mark">${response.marked ? "Unmark & Next" : "Mark for Review & Next"}</button>
            <button class="action-btn save" type="button" data-action="save">Save & Next →</button>
          </div>
        </section>

        <aside class="palette-panel">
          <h2>Question Palette</h2>
          <p>${answeredCount()} answered · ${markedCount()} marked for review</p>
          <div class="palette">${paletteHtml}</div>
          <div class="legend">
            <span><i></i> Not visited</span>
            <span><i class="not-answered"></i> Not answered</span>
            <span><i class="answered"></i> Answered</span>
            <span><i class="marked"></i> Marked</span>
          </div>
          <button class="danger-btn submit-test" type="button" data-action="submit">Submit test</button>
        </aside>
      </div>
    `;
    updateTimerDisplay();
    if (scrollToTop) window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const selectOption = (optionIndex) => {
    responses[currentIndex].selected = optionIndex;
    renderExam(false);
  };

  const goToQuestion = (index) => {
    currentIndex = index;
    responses[currentIndex].visited = true;
    renderExam();
  };

  const nextQuestion = () => {
    if (currentIndex < questions.length - 1) {
      goToQuestion(currentIndex + 1);
      return;
    }

    const nextPending = responses.findIndex((response) => !response.visited || response.selected === null);
    goToQuestion(nextPending >= 0 ? nextPending : 0);
  };

  const toggleMarkAndNext = () => {
    responses[currentIndex].marked = !responses[currentIndex].marked;
    nextQuestion();
  };

  const scoreQuiz = () => {
    let correct = 0;
    let incorrect = 0;
    let unanswered = 0;

    questions.forEach((question, index) => {
      const selected = responses[index].selected;
      if (selected === null) unanswered += 1;
      else if (selected === question.answer) correct += 1;
      else incorrect += 1;
    });

    const score = (correct * bank.positiveMarks) - (incorrect * bank.negativeMarks);
    return { correct, incorrect, unanswered, score };
  };

  const getTimeTakenSeconds = () => {
    const maximumSeconds = bank.durationMinutes * 60;
    if (!quizStartedAt) return Math.max(0, maximumSeconds - secondsLeft);
    const elapsedSeconds = Math.round((Date.now() - quizStartedAt) / 1000);
    return Math.min(maximumSeconds, Math.max(0, elapsedSeconds));
  };

  const saveAttempt = (result, timeExpired) => {
    if (attemptSaved) return null;

    const attempted = result.correct + result.incorrect;
    const totalTimeTakenSeconds = getTimeTakenSeconds();
    const maximumScore = questions.length * bank.positiveMarks;
    const record = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`,
      quizKey: questionBankUrl,
      section: bank.section,
      title: bank.title,
      exam: bank.exam,
      completedAt: new Date().toISOString(),
      submissionType: timeExpired ? "auto" : "manual",
      totalQuestions: questions.length,
      attempted,
      correct: result.correct,
      wrong: result.incorrect,
      unattempted: result.unanswered,
      score: Number(result.score.toFixed(2)),
      maximumScore,
      accuracy: attempted ? Math.round((result.correct / attempted) * 100) : 0,
      totalTimeTakenSeconds,
      totalTimeTaken: formatTime(totalTimeTakenSeconds)
    };

    try {
      const savedValue = window.localStorage.getItem(attemptStorageKey);
      const parsedValue = savedValue ? JSON.parse(savedValue) : [];
      const attempts = Array.isArray(parsedValue) ? parsedValue : [];
      attempts.push(record);
      window.localStorage.setItem(attemptStorageKey, JSON.stringify(attempts));
      attemptSaved = true;
      return record;
    } catch (error) {
      console.warn("Quiz attempt could not be saved to local storage.", error);
      return null;
    }
  };

  const submitQuiz = (timeExpired = false) => {
    if (!quizActive) return;
    if (!timeExpired) {
      const unanswered = responses.filter((response) => response.selected === null).length;
      const message = unanswered
        ? `${unanswered} question(s) are unanswered. Submit the test now?`
        : "Submit the test and view your result?";
      if (!window.confirm(message)) return;
    }

    quizActive = false;
    stopTimer();
    renderResults(timeExpired);
  };

  const renderResults = (timeExpired) => {
    const result = scoreQuiz();
    const maximumScore = questions.length * bank.positiveMarks;
    const percentage = Math.max(0, Math.round((result.score / maximumScore) * 100));
    const attempted = result.correct + result.incorrect;
    const accuracy = attempted ? Math.round((result.correct / attempted) * 100) : 0;
    const scoreText = Number(result.score.toFixed(2)).toString();
    const savedAttempt = saveAttempt(result, timeExpired);
    const timeTaken = savedAttempt?.totalTimeTaken || formatTime(getTimeTakenSeconds());

    let performance = "Keep revising";
    if (percentage >= 85) performance = "Excellent exam readiness";
    else if (percentage >= 70) performance = "Strong performance";
    else if (percentage >= 55) performance = "Good foundation";

    const reviewHtml = questions.map((question, index) => {
      const selected = responses[index].selected;
      const correct = selected === question.answer;
      const unanswered = selected === null;
      const statusClass = unanswered ? "unanswered" : (correct ? "" : "incorrect");
      const statusText = unanswered ? "Unattempted" : (correct ? "✓ Correct" : "✗ Incorrect");
      const userAnswer = unanswered ? "Not answered" : `${String.fromCharCode(65 + selected)}. ${question.options[selected]}`;
      const correctAnswer = `${String.fromCharCode(65 + question.answer)}. ${question.options[question.answer]}`;

      return `
        <article class="review-card ${statusClass}">
          <span class="review-status">${statusText}</span>
          <h3>${index + 1}. ${escapeHtml(question.question)}</h3>
          <p class="answer-line"><strong>Your answer:</strong> ${escapeHtml(userAnswer)}</p>
          <p class="answer-line"><strong>Correct answer:</strong> ${escapeHtml(correctAnswer)}</p>
          <div class="explanation"><strong>Explanation:</strong> ${escapeHtml(question.explanation)}</div>
        </article>
      `;
    }).join("");

    app.innerHTML = `
      <section class="result-hero">
        <span class="section-badge">${timeExpired ? "TIME COMPLETED · AUTO-SUBMITTED" : "TEST SUBMITTED"}</span>
        <h1>${performance}</h1>
        <p>${escapeHtml(bank.section)} ${escapeHtml(bank.title)} · ${escapeHtml(bank.exam)}</p>
        <div class="result-score">
          <div><strong>${scoreText}</strong><span>out of ${maximumScore}</span></div>
        </div>
        <p>Final percentage: <strong>${percentage}%</strong> · Accuracy: <strong>${accuracy}%</strong></p>
      </section>

      <section class="result-stats" aria-label="Result summary">
        <div class="result-stat"><strong>${attempted}</strong><span>Attempted</span></div>
        <div class="result-stat correct"><strong>${result.correct}</strong><span>Correct</span></div>
        <div class="result-stat wrong"><strong>${result.incorrect}</strong><span>Incorrect</span></div>
        <div class="result-stat unanswered"><strong>${result.unanswered}</strong><span>Unattempted</span></div>
        <div class="result-stat"><strong>${timeTaken}</strong><span>Total time taken</span></div>
        <div class="result-stat"><strong>−${Number((result.incorrect * bank.negativeMarks).toFixed(2))}</strong><span>Negative marks</span></div>
      </section>

      <div class="result-actions">
        <button class="primary-btn" type="button" data-action="reattempt">Reattempt with new order</button>
        <a class="secondary-btn" href="${escapeHtml(notesUrl)}">Read Section ${escapeHtml(bank.section)} notes</a>
        <a class="secondary-btn" href="${escapeHtml(indexUrl)}">All DBMS sections</a>
      </div>

      <h2 class="review-heading">Answer Review and Explanations</h2>
      ${reviewHtml}
    `;
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  app.addEventListener("click", (event) => {
    const option = event.target.closest("[data-option]");
    if (option && quizActive) {
      selectOption(Number(option.dataset.option));
      return;
    }

    const paletteButton = event.target.closest("[data-index]");
    if (paletteButton && quizActive) {
      goToQuestion(Number(paletteButton.dataset.index));
      return;
    }

    const actionButton = event.target.closest("[data-action]");
    if (!actionButton) return;

    switch (actionButton.dataset.action) {
      case "start":
      case "reattempt":
        beginQuiz();
        break;
      case "previous":
        if (currentIndex > 0) goToQuestion(currentIndex - 1);
        break;
      case "clear":
        responses[currentIndex].selected = null;
        renderExam(false);
        break;
      case "mark":
        toggleMarkAndNext();
        break;
      case "save":
        nextQuestion();
        break;
      case "submit":
        submitQuiz(false);
        break;
      default:
        break;
    }
  });

  window.addEventListener("beforeunload", (event) => {
    if (!quizActive) return;
    event.preventDefault();
    event.returnValue = "";
  });

  loadQuestionBank().catch(renderError);
})();
