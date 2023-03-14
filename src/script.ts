"use strict";

console.log("test");

interface Question {
  question: string;
  options: string[];
}

const question1: Question = {
  question: "Q.1 Which continent is China in?",
  options: ["Africa", "Americas", "Europe", "Asia"],
};
const question2: Question = {
  question: "Q.2 What is the capital of China?",
  options: ["Beijing", "Pyongyang", "Shanghai", "Hongkong"],
};
const question3: Question = {
  question: "Q.3 What is China's major export?",
  options: ["Machinery", "Electronics", "Rice", "Materials"],
};
const question4: Question = {
  question: "Q.4 What is China's total population (in billions)?",
  options: ["1.4", "24", "2.8", "2"],
};
const question5: Question = {
  question: "Q.5 What is China's most popular religion?",
  options: ["Catholicism", "Buddhism", "Christianity", "Islam"],
};

const main = document.querySelector(".main") as HTMLDivElement;
// selecting a div to make appear the question in
const content = document.createElement("div") as HTMLDivElement;
content.classList.add("content");
main.appendChild(content);

function displayQuestion(
  div: HTMLDivquestion,
  question: interface,
  options: string[]
) {
  // container for the question elements
  const container = document.createElement("div") as HTMLDivElement;
  container.classList.add("container");
  div.appendChild(container);
  // creating the question's element
  const currentQuestion = document.createElement("h2") as HTMLHeadingElement;
  currentQuestion.textContent = question.question;
  currentQuestion.classList.add("question-heading");
  container.appendChild(currentQuestion);
  // div for the answers
  const choicesContainer = document.createElement("div") as HTMLDivElement;
  choicesContainer.classList.add("choices-container");
  container.appendChild(choicesContainer);
  // creating each answers a function
  createAnswer(options);
}

function createAnswer(options: string[]) {
  const choicesContainer = document.querySelector(
    ".choices-container"
  ) as HTMLDivElement;
  for (let i = 0; i < options.length; i++) {
    const answerBtn = document.createElement("button") as HTMLButtonElement;
    answerBtn.textContent = `${options[i]}`;
    answerBtn.classList.add(`${options.indexOf(options[i])}`);
    choicesContainer.appendChild(answerBtn);
  }
}

const presentation = document.querySelector(".presentation") as HTMLDivElement;
const startBtn = document.getElementById("start") as HTMLButtonElement;
content.style.display = "none";
startBtn.addEventListener("click", () => {
  presentation.style.display = "none";
  content.style.display = "flex";
  displayQuestion(content, question1, question1.options);
  const buttons = document.getElementsByTagName("button");
  console.log(buttons);
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", () => {
      console.log(buttons[i]);
      if (buttons[i].classList.contains("3")) {
        console.log(`${buttons[i].textContent} is the right answer`);
        userAnswers.push("3");
      } else if (buttons[i].textContent === "Click to start playing") {
        console.log("does not apply");
      } else {
        console.log(`${buttons[i].textContent} is not the right answer.`);
        userAnswers.push(`${buttons[i].classList}`);
      }
      console.log(userAnswers);
    });
  }
});

const userAnswers: string[] = [];
const rightAnswers: string[] = ["4", "1", "2", "1", "2"];

function checkAnswer() {}
