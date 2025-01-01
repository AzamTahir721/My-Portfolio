const quizData = [
  {
    question: "What does HTML stand for?",
    choices: [
      "Hyper Text Markup Language",
      "Hyperlinks and Text Markup Language",
      "Home Tool Markup Language",
    ],
    correct: 0,
  },
  {
    question: "What does CSS stand for?",
    choices: [
      "Creative Style Sheets",
      "Cascading Style Sheets",
      "Colorful Style Sheets",
    ],
    correct: 1,
  },
  {
    question: "What does JS stand for?",
    choices: [
      "JavaScript",
      "JavaStyle",
      "JustStyle",
    ],
    correct: 0,
  },
  {
    question: "Which HTML tag is used to define an internal stylesheet?",
    choices: [
      "style",
      "script",
      "css",
    ],
    correct: 0,
  },
  {
    question: "Which property is used to change the background color in CSS?",
    choices: [
      "color",
      "background-color",
      "bgcolor",
    ],
    correct: 1,
  },
  {
    question: "Inside which HTML element do we put JavaScript?",
    choices: [
      "javascript",
      "script",
      "js",
    ],
    correct: 1,
  },
  {
    question: "What is the correct syntax to link an external CSS file?",
    choices: [
      "link rel='stylesheet' href='style.css'",
      "<stylesheet>style.css</stylesheet>",
      "css src='style.css'",
    ],
    correct: 0,
  },
  {
    question: "Which of the following is the correct way to write a comment in JavaScript?",
    choices: [
      "// This is a comment",
      "/* This is a comment */",
      "!-- This is a comment --",
    ],
    correct: 0,
  },
  {
    question: "Which attribute is used to provide an alternative text for an image?",
    choices: [
      "alt",
      "title",
      "src",
    ],
    correct: 0,
  },
  {
    question: "How do you declare a JavaScript variable?",
    choices: [
      "let variableName;",
      "var = variableName;",
      "variable variableName;",
    ],
    correct: 0,
  },
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const choicesEl = document.getElementById("choices");
const submitBtn = document.getElementById("submit");
const resultsEl = document.getElementById("results");
const restartBtn = document.createElement("button");

// Restart Quiz Button
restartBtn.textContent = "Restart Quiz";
restartBtn.className = "btn";
restartBtn.style.marginTop = "20px";
restartBtn.addEventListener("click", () => {
  currentQuestion = 0;
  score = 0;
  resultsEl.textContent = "";
  restartBtn.style.display = "none";
  document.getElementById("quiz").style.display = "block";
  loadQuestion();
});

function loadQuestion() {
  const question = quizData[currentQuestion];
  questionEl.textContent = question.question;
  choicesEl.innerHTML = "";
  question.choices.forEach((choice, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <label>
        <input type="radio" name="choice" value="${index}" />
        ${choice}
      </label>
    `;
    choicesEl.appendChild(li);
  });
}

function showResults() {
  resultsEl.textContent = `You scored ${score} out of ${quizData.length}!`;
  restartBtn.style.display = "block";
  resultsEl.appendChild(restartBtn);
}

submitBtn.addEventListener("click", () => {
  const selected = document.querySelector('input[name="choice"]:checked');
  if (!selected) return alert("Please select an answer!");

  const answer = parseInt(selected.value);
  if (answer === quizData[currentQuestion].correct) score++;

  currentQuestion++;
  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    document.getElementById("quiz").style.display = "none";
    showResults();
  }
});

// Load the first question on page load
loadQuestion();
