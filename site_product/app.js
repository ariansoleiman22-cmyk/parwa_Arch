const quizData = [
  {
    number: 1,
    topic: "Harvard Architecture",
    question: "Harvard architecture uses",
    options: [
      "A. Single memory for data and instructions",
      "B. Separate memory for data and instructions",
      "C. Cache memory only",
      "D. Virtual memory",
    ],
    answer: "B",
  },
  {
    number: 2,
    topic: "Harvard Architecture",
    question: "One main advantage of Harvard architecture is",
    options: [
      "A. Lower cost",
      "B. Simpler design",
      "C. Faster instruction execution",
      "D. Larger memory size",
    ],
    answer: "C",
  },
  {
    number: 3,
    topic: "Harvard Architecture",
    question: "Which system commonly uses Harvard architecture?",
    options: [
      "A. General-purpose computers",
      "B. Microcontrollers",
      "C. Mainframes",
      "D. Supercomputers",
    ],
    answer: "B",
  },
  {
    number: 4,
    topic: "Harvard Architecture",
    question: "In Harvard architecture, instruction and data memories are accessed",
    options: [
      "A. Sequentially",
      "B. Using the same bus",
      "C. Simultaneously",
      "D. Indirectly",
    ],
    answer: "C",
  },
  {
    number: 5,
    topic: "Harvard Architecture",
    question: "Modified Harvard architecture differs because it",
    options: [
      "A. Removes instruction memory",
      "B. Uses multiple CPUs",
      "C. Allows limited data access to instruction memory",
      "D. Eliminates buses",
    ],
    answer: "C",
  },
  {
    number: 6,
    topic: "Buses",
    question: "A bus is used to",
    options: [
      "A. Store data",
      "B. Execute instructions",
      "C. Transfer data and signals",
      "D. Generate clock signals",
    ],
    answer: "C",
  },
  {
    number: 7,
    topic: "Buses",
    question: "Which bus carries memory addresses?",
    options: [
      "A. Data bus",
      "B. Address bus",
      "C. Control bus",
      "D. System bus",
    ],
    answer: "B",
  },
  {
    number: 8,
    topic: "Buses",
    question: "The data bus is usually",
    options: [
      "A. Unidirectional",
      "B. Bidirectional",
      "C. Serial only",
      "D. Optical",
    ],
    answer: "B",
  },
  {
    number: 9,
    topic: "Buses",
    question: "Control bus signals include",
    options: [
      "A. Read and write",
      "B. Data values",
      "C. Addresses",
      "D. Clock frequency",
    ],
    answer: "A",
  },
  {
    number: 10,
    topic: "Buses",
    question: "Increasing data bus width mainly improves",
    options: [
      "A. Storage capacity",
      "B. Processing speed",
      "C. Instruction length",
      "D. Power consumption",
    ],
    answer: "B",
  },
  {
    number: 11,
    topic: "Registers",
    question: "Registers are used to",
    options: [
      "A. Permanently store data",
      "B. Store intermediate results",
      "C. Store programs only",
      "D. Replace memory",
    ],
    answer: "B",
  },
  {
    number: 12,
    topic: "Registers",
    question: "The Program Counter (PC) stores",
    options: [
      "A. Data to be processed",
      "B. Address of next instruction",
      "C. Result of execution",
      "D. Stack address",
    ],
    answer: "B",
  },
  {
    number: 13,
    topic: "Registers",
    question: "Accumulator register is mainly used for",
    options: [
      "A. Address calculation",
      "B. Instruction decoding",
      "C. Arithmetic and logic operations",
      "D. Program control",
    ],
    answer: "C",
  },
  {
    number: 14,
    topic: "Registers",
    question: "Instruction Register (IR) holds",
    options: [
      "A. Data values",
      "B. Current instruction",
      "C. Memory address",
      "D. Status flags",
    ],
    answer: "B",
  },
  {
    number: 15,
    topic: "Registers",
    question: "Status register contains",
    options: ["A. Instructions", "B. Data", "C. Flags", "D. Addresses"],
    answer: "C",
  },
  {
    number: 16,
    topic: "Hardware Interaction",
    question: "A program interacts with hardware mainly through",
    options: [
      "A. Software loops",
      "B. Operating system only",
      "C. Instructions",
      "D. Compiler",
    ],
    answer: "C",
  },
  {
    number: 17,
    topic: "Hardware Interaction",
    question: "Input/output devices are accessed using",
    options: [
      "A. Variables",
      "B. Registers and ports",
      "C. Stacks",
      "D. Caches",
    ],
    answer: "B",
  },
  {
    number: 18,
    topic: "Hardware Interaction",
    question: "Device drivers are used to",
    options: [
      "A. Write programs",
      "B. Control hardware devices",
      "C. Store data",
      "D. Manage memory",
    ],
    answer: "B",
  },
  {
    number: 19,
    topic: "Hardware Interaction",
    question: "When a program executes, instructions are",
    options: [
      "A. Interpreted by memory",
      "B. Decoded by CPU",
      "C. Stored in registers",
      "D. Sent to I/O devices",
    ],
    answer: "B",
  },
  {
    number: 20,
    topic: "Hardware Interaction",
    question: "Hardware interrupts are used to",
    options: [
      "A. Stop programs permanently",
      "B. Notify CPU of events",
      "C. Increase clock speed",
      "D. Store data",
    ],
    answer: "B",
  },
  {
    number: 21,
    topic: "SIC",
    question: "SIC is mainly used for",
    options: [
      "A. Commercial computing",
      "B. Teaching computer architecture",
      "C. Gaming",
      "D. Networking",
    ],
    answer: "B",
  },
  {
    number: 22,
    topic: "SIC",
    question: "SIC uses",
    options: [
      "A. 8-bit instructions",
      "B. 16-bit instructions",
      "C. 24-bit instructions",
      "D. 32-bit instructions",
    ],
    answer: "C",
  },
  {
    number: 23,
    topic: "SIC",
    question: "SIC memory is",
    options: [
      "A. Byte-addressable",
      "B. Bit-addressable",
      "C. Word-addressable",
      "D. Cache-only",
    ],
    answer: "A",
  },
  {
    number: 24,
    topic: "SIC",
    question: "SIC has how many registers?",
    options: ["A. 1", "B. 3", "C. 5", "D. 10"],
    answer: "C",
  },
  {
    number: 25,
    topic: "SIC",
    question: "The main register in SIC for arithmetic is",
    options: ["A. X", "B. PC", "C. A", "D. SW"],
    answer: "C",
  },
  {
    number: 26,
    topic: "SIC",
    question: "SIC instruction format consists of",
    options: [
      "A. Opcode only",
      "B. Opcode and operand",
      "C. Operand only",
      "D. Address only",
    ],
    answer: "B",
  },
  {
    number: 27,
    topic: "SIC",
    question: "Which is a SIC instruction?",
    options: ["A. MOV", "B. ADD", "C. PUSH", "D. JMP"],
    answer: "B",
  },
  {
    number: 28,
    topic: "SIC",
    question: "SIC supports which addressing mode?",
    options: [
      "A. Immediate only",
      "B. Indirect only",
      "C. Direct and indexed",
      "D. Relative only",
    ],
    answer: "C",
  },
  {
    number: 29,
    topic: "SIC",
    question: "The LDA instruction is used to",
    options: [
      "A. Load accumulator",
      "B. Store accumulator",
      "C. Add values",
      "D. Jump to address",
    ],
    answer: "A",
  },
  {
    number: 30,
    topic: "SIC",
    question: "STA instruction means",
    options: [
      "A. Store accumulator",
      "B. Set accumulator",
      "C. Stack access",
      "D. Stop execution",
    ],
    answer: "A",
  },
  {
    number: 31,
    topic: "RISC",
    question: "RISC stands for",
    options: [
      "A. Rapid Instruction System Computer",
      "B. Reduced Instruction Set Computer",
      "C. Random Instruction Set Computer",
      "D. Real-time Instruction System Computer",
    ],
    answer: "B",
  },
  {
    number: 32,
    topic: "RISC",
    question: "RISC architecture emphasizes",
    options: [
      "A. Complex instructions",
      "B. Fewer simple instructions",
      "C. Microprogramming",
      "D. Large memory",
    ],
    answer: "B",
  },
  {
    number: 33,
    topic: "RISC",
    question: "RISC instructions usually execute in",
    options: [
      "A. Multiple cycles",
      "B. Variable cycles",
      "C. One clock cycle",
      "D. Ten cycles",
    ],
    answer: "C",
  },
  {
    number: 34,
    topic: "RISC",
    question: "RISC architecture uses",
    options: [
      "A. Few registers",
      "B. Many registers",
      "C. No registers",
      "D. Only memory",
    ],
    answer: "B",
  },
  {
    number: 35,
    topic: "RISC",
    question: "RISC processors are commonly used in",
    options: [
      "A. Embedded systems",
      "B. Mainframes",
      "C. Supercomputers only",
      "D. Analog systems",
    ],
    answer: "A",
  },
  {
    number: 36,
    topic: "Vector Processing",
    question: "Vector processors operate on",
    options: [
      "A. Single data",
      "B. Multiple instructions",
      "C. Data arrays",
      "D. Control signals",
    ],
    answer: "C",
  },
  {
    number: 37,
    topic: "Vector Processing",
    question: "Vector processing improves",
    options: [
      "A. Accuracy",
      "B. Speed for repetitive calculations",
      "C. Power consumption",
      "D. Memory size",
    ],
    answer: "B",
  },
  {
    number: 38,
    topic: "Vector Processing",
    question: "Vector processors are commonly used in",
    options: [
      "A. Text editing",
      "B. Scientific computing",
      "C. Web browsing",
      "D. File storage",
    ],
    answer: "B",
  },
  {
    number: 39,
    topic: "Vector Processing",
    question: "SIMD stands for",
    options: [
      "A. Single Instruction Multiple Data",
      "B. Simple Instruction Memory Data",
      "C. Serial Instruction Multiple Data",
      "D. System Integrated Memory Device",
    ],
    answer: "A",
  },
  {
    number: 40,
    topic: "Vector Processing",
    question: "Vector registers store",
    options: [
      "A. Instructions",
      "B. Single values",
      "C. Multiple data elements",
      "D. Addresses",
    ],
    answer: "C",
  },
  {
    number: 41,
    topic: "Stack & Subroutines",
    question: "CALL instruction is used to",
    options: [
      "A. Stop program",
      "B. Call a subroutine",
      "C. Clear stack",
      "D. Load data",
    ],
    answer: "B",
  },
  {
    number: 42,
    topic: "Stack & Subroutines",
    question: "When CALL is executed, the return address is stored in",
    options: ["A. Accumulator", "B. Memory", "C. Stack", "D. Register R0"],
    answer: "C",
  },
  {
    number: 43,
    topic: "Stack & Subroutines",
    question: "Stack operates on which principle?",
    options: ["A. FIFO", "B. LIFO", "C. Random", "D. Sequential"],
    answer: "B",
  },
  {
    number: 44,
    topic: "Stack & Subroutines",
    question: "Stack Pointer (SP) points to",
    options: [
      "A. Top of stack",
      "B. Bottom of stack",
      "C. Program memory",
      "D. Data memory only",
    ],
    answer: "A",
  },
  {
    number: 45,
    topic: "Stack & Subroutines",
    question: "RET instruction is used to",
    options: [
      "A. Restart program",
      "B. Return from subroutine",
      "C. Reset stack",
      "D. Load return value",
    ],
    answer: "B",
  },
  {
    number: 46,
    topic: "Stack & Subroutines",
    question: "AVR stack grows",
    options: ["A. Upward", "B. Downward", "C. Sideways", "D. Randomly"],
    answer: "B",
  },
  {
    number: 47,
    topic: "Stack & Subroutines",
    question: "CALL instruction increases stack usage because it",
    options: [
      "A. Stores data",
      "B. Stores instructions",
      "C. Stores return address",
      "D. Stores registers",
    ],
    answer: "C",
  },
  {
    number: 48,
    topic: "Stack & Subroutines",
    question: "Which memory is used for stack in AVR?",
    options: [
      "A. Program memory",
      "B. EEPROM",
      "C. SRAM",
      "D. Cache",
    ],
    answer: "C",
  },
  {
    number: 49,
    topic: "Stack & Subroutines",
    question: "Nested subroutine calls are possible because of",
    options: ["A. Registers", "B. Stack", "C. ALU", "D. Control unit"],
    answer: "B",
  },
  {
    number: 50,
    topic: "Stack & Subroutines",
    question: "Stack is mainly used for",
    options: [
      "A. Storing instructions",
      "B. Arithmetic operations",
      "C. Temporary data and return addresses",
      "D. Permanent storage",
    ],
    answer: "C",
  },
];

const reviewData = [
  {
    number: "Q1",
    tag: "Harvard Architecture",
    question: "What are the advantages and disadvantages of Harvard Architecture?",
    blocks: [
      {
        type: "list",
        title: "Advantages of Harvard Architecture?",
        items: [
          "Separate memory for data and instructions",
          "Faster execution",
          "Reduced data traffic on buses",
          "Better performance in microcontrollers",
        ],
      },
      {
        type: "list",
        title: "Disadvantages of Harvard Architecture?",
        items: [
          "More complex hardware design",
          "Higher cost",
          "Programs are harder to modify because memories are separate",
        ],
      },
    ],
  },
  {
    number: "Q2",
    tag: "SIC",
    question: "What are the applications of Simplified Instructional Computer (SIC)?",
    blocks: [
      {
        type: "list",
        title: "Answer",
        items: [
          "Teaching computer architecture concepts",
          "Learning instruction formats and addressing modes",
          "Understanding basic assembly language programming",
          "Educational and academic use",
        ],
      },
    ],
  },
  {
    number: "Q3",
    tag: "Buses",
    question: "Difference between Data Bus and Address Bus:",
    blocks: [
      {
        type: "table",
        headers: ["Data Bus", "Address Bus"],
        rows: [
          ["Carries actual data", "Carries memory addresses"],
          ["Bidirectional", "Unidirectional"],
          [
            "Transfers data between CPU and memory",
            "Identifies location of data",
          ],
        ],
      },
    ],
  },
  {
    number: "Q4",
    tag: "Stack & Subroutines",
    question: "What is the role of the stack in an AVR microcontroller?",
    blocks: [
      {
        type: "paragraph",
        text:
          "The stack is used to temporarily store return addresses, register values, and local data during subroutine calls and interrupts. It follows the LIFO (Last In First Out) principle.",
      },
    ],
  },
  {
    number: "Q5",
    tag: "Vector Processing",
    question: "What is a vector processor?",
    blocks: [
      {
        type: "paragraph",
        text:
          "A vector processor is a processor that performs the same operation on multiple data elements at the same time, which increases speed in repetitive and scientific computations.",
      },
    ],
  },
  {
    number: "Q6",
    tag: "Stack & Subroutines",
    question: "Difference between CALL Instruction and RET Instruction:",
    blocks: [
      {
        type: "table",
        headers: ["CALL Instruction", "RET Instruction"],
        rows: [
          ["Calls a subroutine", "Returns from subroutine"],
          ["Stack size increases", "Stack size decreases"],
          ["Used to jump to function", "Used to return to main program"],
        ],
      },
    ],
  },
];

const topicOrder = [
  "All",
  "Harvard Architecture",
  "Buses",
  "Registers",
  "Hardware Interaction",
  "SIC",
  "RISC",
  "Vector Processing",
  "Stack & Subroutines",
];

const state = {
  topic: "All",
  order: "default",
  questionPool: [],
  currentIndex: 0,
  lastQuestionNumber: null,
  selections: {},
  mistakesOnly: false,
  finished: false,
  started: false,
  currentStreak: 0,
  bestStreak: 0,
  points: 0,
  currentQuestionStartedAt: 0,
  responseTimes: [],
  shownHalfway: false,
  autoAdvanceTimer: null,
  questionSwapTimer: null,
};

const topicStrip = document.getElementById("topic-strip");
const topicLabel = document.getElementById("topic-label");
const progressLabel = document.getElementById("progress-label");
const progressFill = document.getElementById("progress-fill");
const levelLabel = document.getElementById("level-label");
const streakLabel = document.getElementById("streak-label");
const pointsLabel = document.getElementById("points-label");
const answeredCount = document.getElementById("answered-count");
const correctCount = document.getElementById("correct-count");
const wrongCount = document.getElementById("wrong-count");
const introPanel = document.getElementById("intro-panel");
const startQuizButton = document.getElementById("start-quiz-button");
const journeyBanner = document.getElementById("journey-banner");
const journeyTitle = document.getElementById("journey-title");
const journeyText = document.getElementById("journey-text");
const questionBadge = document.getElementById("question-badge");
const questionTopic = document.getElementById("question-topic");
const questionText = document.getElementById("question-text");
const optionList = document.getElementById("option-list");
const feedbackBox = document.getElementById("feedback-box");
const topicInsight = document.getElementById("topic-insight");
const streakInsight = document.getElementById("streak-insight");
const speedInsight = document.getElementById("speed-insight");
const questionPanel = document.querySelector(".question-panel");
const questionLoader = document.getElementById("question-loader");
const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");
const finishButton = document.getElementById("finish-button");
const resultPanel = document.getElementById("result-panel");
const scoreHeading = document.getElementById("score-heading");
const scoreSummary = document.getElementById("score-summary");
const summaryCorrect = document.getElementById("summary-correct");
const summaryWrong = document.getElementById("summary-wrong");
const summaryUnanswered = document.getElementById("summary-unanswered");
const resultLevel = document.getElementById("result-level");
const resultPoints = document.getElementById("result-points");
const resultBadges = document.getElementById("result-badges");
const retryButton = document.getElementById("retry-button");
const mistakesButton = document.getElementById("mistakes-button");
const mistakeList = document.getElementById("mistake-list");
const reviewList = document.getElementById("review-list");

function shuffle(array) {
  const copy = [...array];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]];
  }
  return copy;
}

function getCorrectOption(question) {
  return question.options.find((option) => option.startsWith(question.answer));
}

function getAverageResponseTime() {
  if (!state.responseTimes.length) {
    return 0;
  }
  return Math.round(
    state.responseTimes.reduce((total, time) => total + time, 0) / state.responseTimes.length
  );
}

function getLevel(stats = getStats()) {
  const ratio = stats.total ? stats.correct / stats.total : 0;
  if (ratio >= 0.8 || state.points >= 400) {
    return "Advanced";
  }
  if (ratio >= 0.45 || state.points >= 180) {
    return "Intermediate";
  }
  return "Beginner";
}

function getBadges(stats = getStats()) {
  const badges = [];
  if (stats.total && stats.correct === stats.total) {
    badges.push("Perfect Score");
  }
  if (getAverageResponseTime() && getAverageResponseTime() < 3500) {
    badges.push("Fast Thinker");
  }
  if (state.bestStreak >= 5) {
    badges.push("Hot Streak");
  }
  return badges;
}

function getTopicInsight(topic) {
  const topicQuestions = quizData.filter((item) => item.topic === topic && state.selections[item.number]);
  if (!topicQuestions.length) {
    return "هێشتا لەم topic ـەدا وەڵامت نەداوە";
  }
  const correct = topicQuestions.filter((item) => state.selections[item.number] === item.answer).length;
  const ratio = correct / topicQuestions.length;
  if (ratio >= 0.75) {
    return "لەو topic ـەدا باشتر دەبیت";
  }
  if (ratio >= 0.4) {
    return "هێشتا لە ڕێگای فێربووندایت";
  }
  return "پێویستت بە دووبارەکردنەوەی ئەم topic ـە هەیە";
}

function getExplanation(question) {
  return `لە answer key ـی ئەم question bank ـەدا، وەڵامی ڕاست ${getCorrectOption(question)} نیشان کراوە.`;
}

function getSpeedLabel() {
  const average = getAverageResponseTime();
  if (!average) {
    return "--";
  }
  if (average < 3500) {
    return "Fast";
  }
  if (average < 6500) {
    return "Steady";
  }
  return "Careful";
}

function showJourneyMessage(title, text) {
  journeyBanner.hidden = false;
  journeyTitle.textContent = title;
  journeyText.textContent = text;
}

function getStats(pool = state.questionPool) {
  const answered = pool.filter((item) => Boolean(state.selections[item.number]));
  const correct = answered.filter((item) => state.selections[item.number] === item.answer);
  const wrong = answered.filter((item) => state.selections[item.number] !== item.answer);
  const unanswered = pool.length - answered.length;

  return {
    total: pool.length,
    answered: answered.length,
    correct: correct.length,
    wrong: wrong.length,
    unanswered,
  };
}

function buildQuestionPool(resetIndex = true) {
  const basePool =
    state.topic === "All"
      ? quizData
      : quizData.filter((item) => item.topic === state.topic);

  let selectedPool = state.order === "random" ? shuffle(basePool) : [...basePool];

  if (state.mistakesOnly) {
    selectedPool = selectedPool.filter(
      (item) => state.selections[item.number] && state.selections[item.number] !== item.answer
    );
  }

  state.questionPool = selectedPool;
  if (resetIndex) {
    state.currentIndex = 0;
  } else {
    state.currentIndex = Math.min(state.currentIndex, Math.max(selectedPool.length - 1, 0));
  }
}

function clearAutoAdvance() {
  clearTimeout(state.autoAdvanceTimer);
  state.autoAdvanceTimer = null;
}

function clearQuestionSwap() {
  clearTimeout(state.questionSwapTimer);
  state.questionSwapTimer = null;
  questionPanel.classList.remove("is-switching");
  questionLoader.classList.remove("is-active");
}

function animateQuestionChange(nextIndex) {
  clearAutoAdvance();
  clearQuestionSwap();
  questionPanel.classList.remove("is-entered");
  questionPanel.classList.add("is-switching");
  questionLoader.classList.add("is-active");
  state.questionSwapTimer = setTimeout(() => {
    state.currentIndex = nextIndex;
    renderQuiz();
  }, 90);
}

function renderTopics() {
  topicStrip.innerHTML = "";

  topicOrder.forEach((topic) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `topic-button${state.topic === topic ? " is-active" : ""}`;
    button.textContent = topic === "All" ? "هەموو topic ـەکان" : topic;
    button.addEventListener("click", () => {
      clearAutoAdvance();
      clearQuestionSwap();
      state.topic = topic;
      state.mistakesOnly = false;
      state.finished = false;
      state.lastQuestionNumber = null;
      buildQuestionPool(true);
      renderTopics();
      renderQuiz();
    });
    topicStrip.appendChild(button);
  });
}

function renderOptions(question) {
  const selected = state.selections[question.number];
  const isChecked = Boolean(selected);

  optionList.innerHTML = "";

  question.options.forEach((option) => {
    const key = option.charAt(0);
    const button = document.createElement("button");
    button.type = "button";
    button.className = "option-button";

    if (selected === key) {
      button.classList.add("selected");
    }

    if (isChecked && key === question.answer) {
      button.classList.add("correct");
    } else if (isChecked && selected === key && key !== question.answer) {
      button.classList.add("wrong");
    }

    button.innerHTML = `
      <span class="option-label">${key}</span>
      <span class="option-copy">${option.slice(3)}</span>
    `;

    button.addEventListener("click", () => {
      const responseTime = Math.max(Date.now() - state.currentQuestionStartedAt, 300);
      state.responseTimes.push(responseTime);
      state.selections[question.number] = key;
      state.finished = false;
      state.started = true;
      button.classList.add("bounce");
      if (key !== question.answer) {
        button.classList.add("shake");
      }
      if (key === question.answer) {
        state.currentStreak += 1;
        state.bestStreak = Math.max(state.bestStreak, state.currentStreak);
        state.points += 10;
        if (responseTime < 3500) {
          state.points += 5;
        }
      } else {
        state.currentStreak = 0;
        state.points = Math.max(0, state.points + 2);
      }
      clearAutoAdvance();
      renderQuiz();

      if (state.currentIndex < state.questionPool.length - 1) {
        state.autoAdvanceTimer = setTimeout(() => {
          animateQuestionChange(state.currentIndex + 1);
        }, 380);
      }
    });

    optionList.appendChild(button);
  });
}

function renderFeedback(question) {
  const selected = state.selections[question.number];
  const isChecked = Boolean(selected);

  if (!isChecked) {
    feedbackBox.hidden = true;
    feedbackBox.className = "feedback-box";
    feedbackBox.textContent = "";
    return;
  }

  const correctOption = getCorrectOption(question);
  const isCorrect = selected === question.answer;

  feedbackBox.hidden = false;
  feedbackBox.className = `feedback-box ${isCorrect ? "success" : "error"}`;
  feedbackBox.innerHTML = isCorrect
    ? `وەڵامەکەت دروستە. <strong>${correctOption}</strong><br>${getExplanation(question)}`
    : `وەڵامەکەت هەڵەیە. وەڵامی ڕاست: <strong>${correctOption}</strong><br>${getExplanation(question)}`;
}

function renderResults() {
  const stats = getStats();

  if (!stats.total || (!state.finished && stats.unanswered > 0)) {
    resultPanel.hidden = true;
    return;
  }

  const wrongQuestions = state.questionPool.filter(
    (item) => state.selections[item.number] && state.selections[item.number] !== item.answer
  );
  const scorePercent = stats.total ? Math.round((stats.correct / stats.total) * 100) : 0;

  resultPanel.hidden = false;
  scoreHeading.textContent = `${stats.correct} لە ${stats.total} دروست بوو`;
  scoreSummary.textContent =
    stats.unanswered > 0
      ? `تا ئێستا ${stats.correct} وەڵامی دروست و ${stats.wrong} وەڵامی هەڵەت هەیە، ${stats.unanswered} پرسیاریش بێ وەڵام ماوە.`
      : `ئەنجامی تۆ ${scorePercent}% بوو. ${wrongQuestions.length ? "پرسیارە هەڵەکانت لە خوارەوە هەن." : "هەموو وەڵامەکانت دروستن."}`;
  summaryCorrect.textContent = String(stats.correct);
  summaryWrong.textContent = String(stats.wrong);
  summaryUnanswered.textContent = String(stats.unanswered);
  resultLevel.textContent = getLevel(stats);
  resultPoints.textContent = `${state.points} XP`;
  resultBadges.textContent = getBadges(stats).join(" • ") || "No badge";

  mistakeList.innerHTML = "";
  wrongQuestions.forEach((item) => {
    const card = document.createElement("article");
    card.className = "mistake-item";
    card.innerHTML = `
      <strong>Q${item.number}. ${item.question}</strong>
      <p>هەڵبژاردنی تۆ: ${
        item.options.find((option) => option.startsWith(state.selections[item.number])) ||
        "هیچ"
      }</p>
      <p>وەڵامی ڕاست: ${getCorrectOption(item)}</p>
    `;
    mistakeList.appendChild(card);
  });

  mistakesButton.disabled = wrongQuestions.length === 0;
}

function renderQuiz() {
  const stats = getStats();
  const total = state.questionPool.length;
  const question = state.questionPool[state.currentIndex];
  const questionChanged = question && state.lastQuestionNumber !== question.number;

  renderTopics();

  topicLabel.textContent =
    state.topic === "All" ? "هەموو topic ـەکان" : `بەشی ئێستا: ${state.topic}`;
  progressLabel.textContent = total
    ? `پرسیار ${state.currentIndex + 1} لە ${total}`
    : "هیچ پرسیارێک نەماوە";
  progressFill.style.width = total ? `${((state.currentIndex + 1) / total) * 100}%` : "0%";
  levelLabel.textContent = `Level: ${getLevel(stats)}`;
  streakLabel.textContent = `🔥 ${state.currentStreak} streak`;
  pointsLabel.textContent = `${state.points} XP`;
  answeredCount.textContent = String(stats.answered);
  correctCount.textContent = String(stats.correct);
  wrongCount.textContent = String(stats.wrong);

  if (!state.started) {
    introPanel.hidden = false;
  } else {
    introPanel.hidden = true;
  }

  if (stats.answered >= Math.ceil(Math.max(total, 1) / 2) && total > 0 && !state.finished) {
    showJourneyMessage("You’re halfway there", "نیوەی ڕێگاکەت بڕیوە. هەروەها بەردەوام بە.");
  } else if (state.finished) {
    showJourneyMessage("Final Results", "ئەنجامی کۆتایی ئامادەیە.");
  } else {
    journeyBanner.hidden = true;
  }

  if (!question) {
    questionBadge.textContent = "No Questions";
    questionTopic.textContent = state.mistakesOnly
      ? "هیچ هەڵەیەک بۆ دووبارەکردنەوە نەماوە"
      : "پرسیار نییە";
    questionText.textContent = state.mistakesOnly
      ? "لەو بەشەدا هیچ هەڵەیەکت نییە، دەتوانیت topic یەکی تر هەڵبژێریت."
      : "بەشەکە هیچ پرسیارێکی تێدا نییە.";
    state.lastQuestionNumber = null;
    optionList.innerHTML = "";
    feedbackBox.hidden = true;
    questionLoader.classList.remove("is-active");
    prevButton.disabled = true;
    nextButton.disabled = true;
    finishButton.disabled = true;
    renderResults();
    return;
  }

  const isChecked = Boolean(state.selections[question.number]);
  state.lastQuestionNumber = question.number;
  questionBadge.textContent = `Question ${question.number}`;
  questionTopic.textContent = question.topic;
  questionText.textContent = question.question;
  topicInsight.textContent = getTopicInsight(question.topic);
  streakInsight.textContent = `${state.currentStreak}`;
  speedInsight.textContent = getSpeedLabel();
  prevButton.disabled = state.currentIndex === 0;
  nextButton.disabled = state.currentIndex === total - 1;
  finishButton.disabled = total === 0;
  finishButton.textContent =
    stats.unanswered > 0 ? "کۆتایی و بینینی ئەنجام" : "بینینی ئەنجامی کۆتایی";

  renderOptions(question);
  renderFeedback(question);
  renderResults();

  if (questionChanged) {
    state.currentQuestionStartedAt = Date.now();
    questionPanel.classList.remove("is-switching", "is-entered");
    requestAnimationFrame(() => {
      questionPanel.classList.add("is-entered");
    });
  } else {
    questionPanel.classList.remove("is-switching");
  }

  questionLoader.classList.remove("is-active");
}

function moveQuestion(direction) {
  const nextIndex = state.currentIndex + direction;
  if (nextIndex < 0 || nextIndex >= state.questionPool.length) {
    return;
  }
  animateQuestionChange(nextIndex);
}

function renderReviewCards() {
  reviewList.innerHTML = "";

  reviewData.forEach((item) => {
    const card = document.createElement("article");
    card.className = "review-card reveal-card";

    const header = document.createElement("div");
    header.className = "review-card-header";
    header.innerHTML = `
      <h3>${item.number}. ${item.question}</h3>
      <span class="tag">${item.tag}</span>
    `;
    card.appendChild(header);

    item.blocks.forEach((block) => {
      if (block.title) {
        const title = document.createElement("p");
        title.innerHTML = `<strong>${block.title}</strong>`;
        card.appendChild(title);
      }

      if (block.type === "paragraph") {
        const paragraph = document.createElement("p");
        paragraph.textContent = block.text;
        card.appendChild(paragraph);
      }

      if (block.type === "list") {
        const list = document.createElement("ul");
        block.items.forEach((line) => {
          const itemElement = document.createElement("li");
          itemElement.textContent = line;
          list.appendChild(itemElement);
        });
        card.appendChild(list);
      }

      if (block.type === "table") {
        const table = document.createElement("table");
        const thead = document.createElement("thead");
        const tbody = document.createElement("tbody");
        const headRow = document.createElement("tr");

        block.headers.forEach((heading) => {
          const th = document.createElement("th");
          th.textContent = heading;
          headRow.appendChild(th);
        });

        thead.appendChild(headRow);

        block.rows.forEach((row) => {
          const tableRow = document.createElement("tr");
          row.forEach((cell) => {
            const td = document.createElement("td");
            td.textContent = cell;
            tableRow.appendChild(td);
          });
          tbody.appendChild(tableRow);
        });

        table.append(thead, tbody);
        card.appendChild(table);
      }
    });

    reviewList.appendChild(card);
  });
}

function setupRevealAnimations() {
  const targets = document.querySelectorAll(".reveal-section, .reveal-card");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: "0px 0px -5% 0px",
    }
  );

  targets.forEach((target) => observer.observe(target));
}

function setupScrollDepth() {
  const leftGlow = document.querySelector(".ambient-glow-left");
  const rightGlow = document.querySelector(".ambient-glow-right");

  const updateDepth = () => {
    const scrollY = window.scrollY || window.pageYOffset;
    const heroShift = Math.min(scrollY * 0.08, 16);
    document.documentElement.style.setProperty("--hero-shift", `${heroShift}px`);

    if (leftGlow) {
      leftGlow.style.transform = `translate3d(${Math.min(scrollY * 0.012, 8)}px, ${Math.min(scrollY * 0.03, 14)}px, 0)`;
    }

    if (rightGlow) {
      rightGlow.style.transform = `translate3d(${Math.max(scrollY * -0.01, -8)}px, ${Math.min(scrollY * 0.02, 10)}px, 0)`;
    }
  };

  updateDepth();
  window.addEventListener("scroll", updateDepth, { passive: true });
}

function setupAmbientExperience() {
  const particleField = document.getElementById("particle-field");
  const particleCount = 18;

  if (particleField) {
    for (let index = 0; index < particleCount; index += 1) {
      const particle = document.createElement("span");
      particle.className = "particle";
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${20 + Math.random() * 80}%`;
      particle.style.animationDuration = `${10 + Math.random() * 8}s`;
      particle.style.animationDelay = `${Math.random() * 6}s`;
      particleField.appendChild(particle);
    }
  }

  const updateMouseLight = (event) => {
    document.documentElement.style.setProperty("--mouse-x", `${event.clientX}px`);
    document.documentElement.style.setProperty("--mouse-y", `${event.clientY}px`);
  };

  window.addEventListener("pointermove", updateMouseLight, { passive: true });
}

document.querySelectorAll(".mode-button").forEach((button) => {
  button.addEventListener("click", () => {
    document
      .querySelectorAll(".mode-button")
      .forEach((item) => item.classList.toggle("is-active", item === button));

    clearAutoAdvance();
    clearQuestionSwap();
    state.order = button.dataset.order;
    state.mistakesOnly = false;
    state.lastQuestionNumber = null;
    buildQuestionPool(true);
    renderQuiz();
  });
});

startQuizButton.addEventListener("click", () => {
  state.started = true;
  state.currentQuestionStartedAt = Date.now();
  introPanel.hidden = true;
  showJourneyMessage("Ready?", "دەست پێ بکە و streak ـەکەت دروست بکە.");
  document.getElementById("quiz-app").scrollIntoView({ behavior: "smooth", block: "start" });
  renderQuiz();
});

finishButton.addEventListener("click", () => {
  clearAutoAdvance();
  clearQuestionSwap();
  state.finished = true;
  renderQuiz();
  resultPanel.scrollIntoView({ behavior: "smooth", block: "start" });
});

prevButton.addEventListener("click", () => moveQuestion(-1));
nextButton.addEventListener("click", () => moveQuestion(1));

retryButton.addEventListener("click", () => {
  const currentTopic = state.topic;
  state.mistakesOnly = false;
  state.finished = false;
  state.started = true;
  state.lastQuestionNumber = null;
  state.selections = {};
  state.currentStreak = 0;
  state.bestStreak = 0;
  state.points = 0;
  state.responseTimes = [];
  state.shownHalfway = false;
  state.topic = currentTopic;
  clearAutoAdvance();
  clearQuestionSwap();
  buildQuestionPool(true);
  renderQuiz();
});

mistakesButton.addEventListener("click", () => {
  clearAutoAdvance();
  clearQuestionSwap();
  state.mistakesOnly = true;
  state.finished = false;
  state.lastQuestionNumber = null;
  buildQuestionPool(true);
  renderQuiz();
});

renderReviewCards();
renderTopics();
buildQuestionPool(true);
setupAmbientExperience();
setupRevealAnimations();
setupScrollDepth();
renderQuiz();
