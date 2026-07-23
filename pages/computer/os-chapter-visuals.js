(() => {
  const page = decodeURIComponent(location.pathname.split('/').pop());
  const visuals = {
    'os-notes-new-1a-operating-system-basics.html': {
      heading: 'Components of a Computer System',
      image: '1a-basics.png',
      alt: 'Operating system between users and applications and the CPU, memory, storage, devices, files, network, and security resources it manages',
      caption: 'The OS acts as both a resource manager and a control program between applications and computer hardware.'
    },
    'os-notes-new-1b-operating-system-overview.html': {
      heading: 'Architecture of Operating System',
      image: '1b-overview.png',
      alt: 'Layered operating-system overview with applications in user space, the system-call boundary, kernel services, and hardware',
      caption: 'The system-call interface separates applications in user space from protected kernel services and hardware access.'
    },
    'os-notes-new-1f-components-of-operating-system.html': {
      heading: 'There are 8 Main Components',
      image: '1f-components.png',
      alt: 'Eight operating-system components surrounding the operating system: process, memory, file, device, storage, network, security, and command management',
      caption: 'The eight components work together: each manages one class of resources while the OS coordinates the whole system.'
    },
    'os-notes-new-1g-operating-system-structure.html': {
      heading: 'Types of Operating System Structures',
      image: '1g-structures.png',
      alt: 'Comparison of simple, monolithic, layered, microkernel, modular, virtual-machine, and exokernel operating-system structures',
      caption: 'OS structures mainly differ in where services run, how tightly components are connected, and how much code remains inside the kernel.'
    },
    'os-notes-new-1h-operating-system-architecture.html': {
      heading: 'Operating System Architecture Diagram',
      image: '1h-architecture.png',
      alt: 'Operating-system architecture from users and applications through the shell, system calls, and kernel to hardware',
      caption: 'Applications reach protected hardware through the shell or GUI, system-call interface, and kernel.'
    },
    'os-notes-new-1i-operating-system-services.html': {
      heading: 'Major Operating System Services',
      image: '1i-services.png',
      alt: 'Major operating-system services including program execution, input-output, files, communication, errors, resources, accounting, and security',
      caption: 'These services give applications a safe, consistent way to execute programs and use system resources.'
    },
    'os-notes-new-1j-operating-system-properties.html': {
      heading: 'Operating System Properties',
      image: '1j-properties.png',
      alt: 'Comparison of batch processing, multiprogramming, multitasking, multiprocessing, time sharing, real-time, distributed systems, and spooling',
      caption: 'OS properties describe how work is organized, how processors and users share resources, and how input and output are scheduled.'
    },
    'os-notes-new-2a-operating-system-processes.html': {
      heading: 'Memory Layout of a Process',
      image: '2a-processes.png',
      alt: 'A passive program becoming an active process with text, data, heap, stack, and a process control block',
      caption: 'A program is a passive file; when started, it becomes a process with allocated memory, execution state, and a PCB.'
    },
    'os-notes-new-2b-states-of-a-process.html': {
      heading: 'Complete Five-State Diagram',
      image: '2b-states.png',
      alt: 'Five-state process model showing new, ready, running, waiting, and terminated states with transition arrows',
      caption: 'Dispatch, preemption, I/O waits, and I/O completion move a process through the five-state model.'
    },
    'os-notes-new-2c-process-schedulers.html': {
      heading: 'Three Types of Process Schedulers',
      image: '2c-schedulers.png',
      alt: 'Long-term, short-term, and medium-term schedulers moving work from the job pool through ready queues, CPU, RAM, and disk',
      caption: 'The long-term scheduler admits jobs, the short-term scheduler selects the next CPU process, and the medium-term scheduler swaps processes.'
    },
    'os-notes-new-2d-process-control-block.html': {
      heading: 'PCB Structure Diagram',
      image: '2d-pcb.png',
      alt: 'Process control block fields in the kernel process table and their use during a context switch',
      caption: 'A PCB preserves everything the OS needs to stop, schedule, and later resume a process correctly.'
    },
    'os-notes-new-2e-operations-on-processes.html': {
      heading: 'Complete Life Cycle with Operations',
      image: '2e-operations.png',
      alt: 'Process lifecycle with create, admit, dispatch, preempt, block, wake-up, and exit operations',
      caption: 'Process operations are the events that drive transitions among new, ready, running, waiting, and terminated states.'
    },
    'os-notes-new-2f-process-suspension-switching.html': {
      heading: 'Complete Suspension Flow',
      image: '2f-suspension.png',
      alt: 'Process suspension moving ready and blocked processes between RAM and disk alongside a process-switch sequence',
      caption: 'Suspension swaps a process out of RAM; switching saves one execution context and restores another on the CPU.'
    },
    'os-notes-new-2g-process-states-machine-cycle.html': {
      heading: 'Relationship Between Process States and Machine Cycle',
      image: '2g-machine-cycle.png',
      alt: 'Ready, running, and waiting process states connected to the CPU fetch, decode, execute, and store machine cycle',
      caption: 'Process states describe OS scheduling, while the machine cycle describes the CPU instructions performed whenever a process is running.'
    },
    'os-notes-new-2h-inter-process-communication.html': {
      heading: 'Two Methods of IPC',
      image: '2h-ipc.png',
      alt: 'Shared-memory and message-passing IPC between two processes with common communication methods',
      caption: 'Shared memory exchanges data through a common region; message passing sends data through kernel-managed communication channels.'
    },
    'os-notes-new-2i-remote-procedure-call.html': {
      heading: 'Complete RPC Diagram',
      image: '2i-rpc.png',
      alt: 'Remote procedure call sequence through client and server stubs, RPC runtime, network, and remote procedure',
      caption: 'Stubs marshal parameters into messages, the RPC runtime transports them, and the result returns as if it were a local function call.'
    },
    'os-notes-new-2j-context-switching.html': {
      heading: 'Complete Context Switching Diagram',
      image: '2j-context-switching.png',
      alt: 'Context switch saving Process A registers, program counter, and stack pointer before loading Process B',
      caption: 'During a context switch, the CPU saves one process state into its PCB and restores the selected process state.'
    },
    'os-notes-new-2k-threads.html': {
      heading: 'Thread Memory Structure',
      image: '2k-threads.png',
      alt: 'Multiple threads sharing process code, data, heap, and files while retaining private stacks, registers, counters, and thread IDs',
      caption: 'Threads share most process resources but keep their own execution state, which makes them lighter than separate processes.'
    },
    'os-notes-new-2l-types-of-threading.html': {
      heading: 'ULT vs KLT',
      image: '2l-thread-types.png',
      alt: 'Comparison of user-level and kernel-level threads across the user-space and kernel-space boundary',
      caption: 'User-level threads are managed quickly in user space; kernel-level threads cost more but support independent blocking and parallel execution.'
    },
    'os-notes-new-2m-multithreading.html': {
      heading: 'Multithreading Models',
      image: '2m-multithreading.png',
      alt: 'Many-to-one, one-to-one, and many-to-many mappings between user threads and kernel threads',
      caption: 'Multithreading models define how user threads map onto kernel threads, determining blocking behavior, overhead, and parallelism.'
    },
    'os-notes-new-2n-system-calls.html': {
      heading: 'How Does System Call Work?',
      image: '2n-system-calls.png',
      alt: 'System-call flow from a user application through a trap into kernel mode and back to user mode',
      caption: 'A system call crosses the protection boundary with a trap, runs a validated kernel handler, and safely returns to user mode.'
    }
  };
  const extraVisuals = {
    'os-notes-new-1g-operating-system-structure.html': [{
      heading: 'Monolithic vs Microkernel',
      image: '1g-monolithic-vs-microkernel.png',
      alt: 'Comparison of a monolithic kernel containing all services and a microkernel keeping drivers and services isolated in user space',
      caption: 'Monolithic kernels favor direct-call speed; microkernels isolate services for reliability but add message-passing overhead.'
    }],
    'os-notes-new-1j-operating-system-properties.html': [{
      heading: '5. Real-Time System',
      image: '1j-time-sharing-vs-realtime.png',
      alt: 'Comparison of fair rotating CPU slices in a time-sharing system and deadline-driven execution in real-time systems',
      caption: 'Time sharing optimizes interactive response and fairness; real-time scheduling prioritizes predictable completion before deadlines.'
    }],
    'os-notes-new-2b-states-of-a-process.html': [{
      heading: 'Seven-State Model',
      image: '2b-seven-state.png',
      alt: 'Seven-state process model adding ready-suspended and blocked-suspended states on disk to the five-state model in memory',
      caption: 'The seven-state model adds suspended states for processes swapped from RAM to disk while preserving whether they are ready or blocked.'
    }],
    'os-notes-new-2h-inter-process-communication.html': [{
      heading: 'Synchronization in IPC',
      image: '2h-ipc-synchronization.png',
      alt: 'Comparison of semaphore, mutex, barrier, and spinlock synchronization around a shared critical section',
      caption: 'Synchronization primitives coordinate access: mutexes enforce ownership, semaphores count access, barriers align participants, and spinlocks busy-wait briefly.'
    }],
    'os-notes-new-2i-remote-procedure-call.html': [{
      heading: 'Types of RPC',
      image: '2i-rpc-sync-vs-async.png',
      alt: 'Timelines comparing a synchronous RPC that blocks the client with an asynchronous RPC that lets the client continue working',
      caption: 'A synchronous RPC waits for the response; an asynchronous RPC lets the client continue and delivers the result later.'
    }],
    'os-notes-new-2j-context-switching.html': [{
      heading: 'Context Switching vs Mode Switching',
      image: '2j-context-vs-mode-switch.png',
      alt: 'Comparison of switching between two process contexts and changing between user and kernel mode within the same process',
      caption: 'A context switch replaces the running process state; a mode switch changes privilege while the same process continues.'
    }]
  };

  const visual = visuals[page];
  if (!visual) return;

  const style = document.createElement('style');
  style.textContent = `
    .chapter-visual{margin:24px 0 30px;padding:10px;border:1px solid var(--line);
      border-radius:16px;background:#f8faff;box-shadow:0 10px 28px rgba(49,46,129,.1)}
    .chapter-visual img{display:block;width:100%;height:auto;border-radius:11px}
    .chapter-visual figcaption{padding:10px 8px 3px;color:var(--muted);
      font-size:.86rem;line-height:1.5;text-align:center}
  `;
  document.head.appendChild(style);

  const target = [...document.querySelectorAll('#article h1, #article h2')]
    .find((heading) => heading.textContent.trim().startsWith(visual.heading));
  if (!target) return;

  const figure = document.createElement('figure');
  figure.className = 'chapter-visual';
  const image = document.createElement('img');
  image.src = `assets/os-chapter-visuals/${visual.image}`;
  image.alt = visual.alt;
  image.loading = 'lazy';
  image.decoding = 'async';
  const caption = document.createElement('figcaption');
  caption.textContent = visual.caption;
  figure.append(image, caption);
  target.after(figure);

  (extraVisuals[page] || []).forEach((extra) => {
    const extraTarget = [...document.querySelectorAll('#article h1, #article h2')]
      .find((heading) => heading.textContent.trim().startsWith(extra.heading));
    if (!extraTarget) return;

    const extraFigure = document.createElement('figure');
    extraFigure.className = 'chapter-visual';
    const extraImage = document.createElement('img');
    extraImage.src = `assets/os-chapter-visuals/${extra.image}`;
    extraImage.alt = extra.alt;
    extraImage.loading = 'lazy';
    extraImage.decoding = 'async';
    const extraCaption = document.createElement('figcaption');
    extraCaption.textContent = extra.caption;
    extraFigure.append(extraImage, extraCaption);
    extraTarget.after(extraFigure);
  });
})();
