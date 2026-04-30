const config = window.powerPracticeConfig;
const facts = Array.from({ length: config.max }, (_, index) => {
    const number = index + 1;
    return {
        number,
        value: number ** config.power,
        expression: config.expression(number)
    };
});

const learnGrid = document.getElementById('learn-grid');
const progressGrid = document.getElementById('progress-grid');
const questionText = document.getElementById('question-text');
const answerInput = document.getElementById('answer-input');

let questions = [];
let currentIndex = 0;
let questionStartedAt = 0;
let isAnswering = false;

facts.forEach(fact => {
    const card = document.createElement('div');
    card.className = 'fact-card';
    card.innerHTML = `
        <div class="fact-expression">${fact.expression}</div>
        <div class="fact-product">${fact.value}</div>
    `;
    learnGrid.appendChild(card);
});

document.getElementById('learn-tab').addEventListener('click', () => switchTab('learn'));
document.getElementById('practice-tab').addEventListener('click', () => switchTab('practice'));
document.getElementById('start-btn').addEventListener('click', startPractice);
document.getElementById('submit-answer').addEventListener('click', submitAnswer);
answerInput.addEventListener('keydown', event => {
    if (event.key === 'Enter') {
        event.preventDefault();
        submitAnswer();
    }
});

function switchTab(tabName) {
    document.getElementById('learn-tab').classList.toggle('active', tabName === 'learn');
    document.getElementById('practice-tab').classList.toggle('active', tabName === 'practice');
    document.getElementById('learn-screen').classList.toggle('active', tabName === 'learn');
    document.getElementById('practice-screen').classList.toggle('active', tabName === 'practice');
}

function startPractice() {
    const count = parseInt(document.getElementById('question-count').value, 10);
    const mode = document.getElementById('practice-mode').value;
    const shuffledFacts = shuffle([...facts]);
    questions = Array.from({ length: count }, (_, index) => {
        const fact = shuffledFacts[index % shuffledFacts.length];
        const type = mode === 'mixed' ? (Math.random() > 0.5 ? 'value' : 'root') : mode;
        return {
            ...fact,
            type,
            userAnswer: null,
            isCorrect: false,
            timeMs: 0
        };
    });
    currentIndex = 0;
    document.getElementById('result-panel').classList.remove('active');
    loadQuestion();
}

function loadQuestion() {
    isAnswering = false;
    const question = questions[currentIndex];
    const asksValue = question.type === 'value';
    document.getElementById('question-title').textContent = `Question ${currentIndex + 1}`;
    document.getElementById('question-help').textContent = asksValue ? `Enter the ${config.answerName}.` : 'Enter the base number.';
    document.getElementById('mode-pill').textContent = asksValue ? config.findValueLabel : config.findRootLabel;
    document.getElementById('score-pill').textContent = `Score: ${getScore()}`;
    document.getElementById('question-pill').textContent = `Question: ${currentIndex + 1}/${questions.length}`;
    questionText.textContent = asksValue ? `${question.expression} = ?` : `?${config.symbol} = ${question.value}`;
    answerInput.value = '';
    answerInput.placeholder = asksValue ? config.answerName : 'Number';
    document.getElementById('feedback').textContent = '';
    document.getElementById('feedback').className = 'feedback';
    renderProgress();
    questionStartedAt = performance.now();
    setTimeout(() => answerInput.focus(), 50);
}

function submitAnswer() {
    if (!questions.length || isAnswering) {
        return;
    }

    isAnswering = true;
    const question = questions[currentIndex];
    const answer = parseInt(answerInput.value, 10);
    const correctAnswer = question.type === 'value' ? question.value : question.number;
    question.userAnswer = Number.isNaN(answer) ? 'Blank' : String(answer);
    question.isCorrect = answer === correctAnswer;
    question.timeMs = Math.max(0, Math.round(performance.now() - questionStartedAt));

    const feedback = document.getElementById('feedback');
    feedback.className = `feedback ${question.isCorrect ? 'correct' : 'wrong'}`;
    feedback.textContent = question.isCorrect ? 'Correct' : `Wrong. Correct answer: ${correctAnswer}`;
    document.getElementById('score-pill').textContent = `Score: ${getScore()}`;
    renderProgress();

    setTimeout(() => {
        if (currentIndex < questions.length - 1) {
            currentIndex++;
            loadQuestion();
        } else {
            showResult();
        }
    }, question.isCorrect ? 450 : 1100);
}

function renderProgress() {
    progressGrid.innerHTML = '';
    questions.forEach((question, index) => {
        const dot = document.createElement('div');
        dot.className = 'progress-dot';
        dot.textContent = index + 1;
        if (question.userAnswer !== null) {
            dot.classList.add(question.isCorrect ? 'correct' : 'wrong');
        }
        if (index === currentIndex) {
            dot.classList.add('current');
        }
        progressGrid.appendChild(dot);
    });
}

function showResult() {
    const score = getScore();
    const totalTime = questions.reduce((sum, question) => sum + question.timeMs, 0);
    document.getElementById('final-score').textContent = `${score}/${questions.length}`;
    document.getElementById('accuracy').textContent = `${Math.round((score / questions.length) * 100)}%`;
    document.getElementById('avg-time').textContent = formatTime(totalTime / questions.length);
    document.getElementById('question-pill').textContent = `Question: ${questions.length}/${questions.length}`;

    const reviewList = document.getElementById('review-list');
    reviewList.innerHTML = '';
    questions.forEach(question => {
        const correctAnswer = question.type === 'value' ? question.value : question.number;
        const prompt = question.type === 'value' ? question.expression : question.value;
        const row = document.createElement('div');
        row.className = 'review-row';
        row.innerHTML = `
            <div><strong>${prompt}</strong><br><span class="muted">Your answer: ${question.userAnswer}</span></div>
            <div>Correct: ${correctAnswer}<br><span class="muted">Time: ${formatTime(question.timeMs)}</span></div>
            <div><span class="status ${question.isCorrect ? 'correct' : 'wrong'}">${question.isCorrect ? 'Correct' : 'Wrong'}</span></div>
        `;
        reviewList.appendChild(row);
    });

    document.getElementById('result-panel').classList.add('active');
}

function getScore() {
    return questions.filter(question => question.userAnswer !== null && question.isCorrect).length;
}

function shuffle(items) {
    for (let index = items.length - 1; index > 0; index--) {
        const swapIndex = Math.floor(Math.random() * (index + 1));
        [items[index], items[swapIndex]] = [items[swapIndex], items[index]];
    }
    return items;
}

function formatTime(milliseconds) {
    if (!Number.isFinite(milliseconds) || milliseconds <= 0) {
        return '0.0s';
    }
    return `${(milliseconds / 1000).toFixed(1)}s`;
}

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js').catch(registrationError => {
            console.log('SW registration failed: ', registrationError);
        });
    });
}
