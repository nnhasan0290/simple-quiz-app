const questions = [
  {
    question: "Question number one?",
    a: "option-one",
    b: "option-two",
    c: "option-three",
    d: "option-four",
    correct: "a",
  },
  {
    question: "Question number two?",
    a: "option-one",
    b: "option-two",
    c: "option-three",
    d: "option-four",
    correct: "b",
  },
  {
    question: "Question number three?",
    a: "option-one",
    b: "option-two",
    c: "option-three",
    d: "option-four",
    correct: "b",
  },
  {
    question: "Question number four?",
    a: "option-one",
    b: "option-two",
    c: "option-three",
    d: "option-four",
    correct: "a",
  },
];

let currentQues = 0;
let score = 0;

let ansEls = document.querySelectorAll(".answer");
const deselection = () => {
  ansEls.forEach((ans) => {
    ans.checked = false;
  });
};

const a_text = document.getElementById("a_text");

function loadQuiz() {
  deselection();
  a_text.innerText = questions[currentQues].a;

  document.querySelector(".question").innerHTML =
    questions[currentQues].question;

  document.getElementById("b_text").innerText = questions[currentQues].b;

  document.getElementById("c_text").innerText = questions[currentQues].c;

  document.getElementById("d_text").innerText = questions[currentQues].d;
}

loadQuiz();

function getSelected() {
  let answer = undefined;
  ansEls.forEach((ans) => {
    if (ans.checked) {
      answer = ans.id;
    }
  });
  return answer;
}

document.getElementById("submit").addEventListener("click", () => {
  let answer = getSelected();

  if (answer == questions[currentQues].correct) {
    score++;
  }
  if (answer) {
    currentQues++;
    if (currentQues < questions.length) {
      loadQuiz();
    } else {
      document.querySelector(
        ".quiz-container"
      ).innerHTML = `<h2> You have answered correctly ${score} out of ${
        questions.length + 1
      } questions</h2><button onclick="location.reload()">Reload</button>`;
    }
  }
});
