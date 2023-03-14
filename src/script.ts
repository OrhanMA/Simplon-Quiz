"use strict";

console.log("test");

interface Question {
  question: string;
  options: string[];
  correctAnswer: string;
}

const questions: Question[] = [
  {
    question: "Q.1 Which continent is China in?",
    options: ["Africa", "Americas", "Europe", "Asia"],
    correctAnswer: "Asia",
  },
  {
    question: "Q.2 What is the capital of China?",
    options: ["Beijing", "Pyongyang", "Shanghai", "Hongkong"],
    correctAnswer: "Beijing",
  },
  {
    question: "Q.3 What is China's major export?",
    options: ["Machinery", "Electronics", "Rice", "Materials"],
    correctAnswer: "Electronics",
  },
  {
    question: "Q.4 What is China's total population (in billions)?",
    options: ["1.4", "24", "2.8", "2"],
    correctAnswer: "1.4",
  },
  {
    question: "Q.5 What is China's most popular religion?",
    options: ["Catholicism", "Buddhism", "Christianity", "Islam"],
    correctAnswer: "Buddhism",
  },
];

let currentQuestion: number = 0;
let score: number = 0;
const questionContainer = document.querySelector(
  ".question-container"
) as HTMLDivElement;

const questionElement = document.querySelector(".question") as HTMLDivElement;
const button1 = document.querySelector("#button1") as HTMLButtonElement;
const button2 = document.querySelector("#button2") as HTMLButtonElement;
const button3 = document.querySelector("#button3") as HTMLButtonElement;
const button4 = document.querySelector("#button4") as HTMLButtonElement;
function displayQuestion(question: Question) {
  questionElement.textContent = question.question;
  questionContainer.appendChild(questionElement);
  button1.textContent = question.options[0];
  questionContainer.appendChild(button1);
  button2.textContent = question.options[1];
  questionContainer.appendChild(button2);
  button3.textContent = question.options[2];
  questionContainer.appendChild(button3);
  button4.textContent = question.options[3];
  questionContainer.appendChild(button4);
}

const startButton = document.querySelector(".start") as HTMLButtonElement;
startButton.addEventListener("click", () => {
  const presentation = document.querySelector(
    ".presentation"
  ) as HTMLDivElement;
  presentation.style.display = "none";
  questionContainer.style.display = "flex";
  displayQuestion(questions[currentQuestion]);
  console.log("je marche");
  checkAnswer(questions[currentQuestion].correctAnswer);
});

function checkAnswer(correctAnswer: string) {
  buttonListener(button1, correctAnswer);
  buttonListener(button2, correctAnswer);
  buttonListener(button3, correctAnswer);
  buttonListener(button4, correctAnswer);
}

function buttonListener(button: HTMLButtonElement, correctAnswer: string) {
  button.addEventListener("click", () => {
    if (button.textContent === correctAnswer) {
      console.log(`${button.textContent} is the right answer`);
      score += 10;
      currentQuestion++;
      button.textContent = "";
      console.log(
        `The current score is ${score} and the next question is number ${
          currentQuestion + 1
        }`
      );
      displayQuestion(questions[currentQuestion]);
      console.log(currentQuestion);
    } else if (button.textContent !== correctAnswer) {
      console.log(`${button.textContent} is not the right answer`);
      score -= 5;
      currentQuestion++;
      button.textContent = "";
      console.log(
        `The current score is ${score} and the next question is number ${
          currentQuestion + 1
        }`
      );
      displayQuestion(questions[currentQuestion]);
      console.log(currentQuestion);
    }
  });
}
