"use strict";

console.log("test");

interface Question {
  question: string;
  choice1: string;
  choice2: string;
  choice3: string;
  choice4: string;
  id: number;
}

const question1: Question = {
  question: "Q.1 Which continent is China in?",
  choice1: "Africa",
  choice2: "Americas",
  choice3: "Europe",
  choice4: "Asia",
  id: 1,
};
const question2: Question = {
  question: "Q.2 What is the capital of China?",
  choice1: "Beijing",
  choice2: "Pyongyqng",
  choice3: "Shanghai",
  choice4: "Hongkong",
  id: 2,
};
const question3: Question = {
  question: "Q.3 What is China's major export?",
  choice1: "Machinery",
  choice2: "Electronics",
  choice3: "Rice",
  choice4: "Materials",
  id: 3,
};
const question4: Question = {
  question: "Q.4 What is China's total population (in billions)?",
  choice1: "1.4",
  choice2: "24",
  choice3: "2.8",
  choice4: "2",
  id: 4,
};
const question5: Question = {
  question: "Q.5 What is China's most popular religion?",
  choice1: "Catholicism",
  choice2: "Buddhism",
  choice3: "Christianity",
  choice4: "Islam",
  id: 5,
};

// selecting a div to make appear the question in
const content = document.querySelector(".content") as HTMLDivElement;
content.classList.add("content");

function displayQuestion(
  question: interface,
  answer1: string,
  answer2: string,
  answer3: string,
  answer4: string,
  id: number
) {
  // container for the question elements
  const container = document.createElement("div") as HTMLDivElement;
  container.classList.add("container");
  content.appendChild(container);
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
  createAnswer(answer1);
  createAnswer(answer2);
  createAnswer(answer3);
  createAnswer(answer4);
  const confirmBtn = document.createElement("button") as HTMLButtonElement;
  confirmBtn.textContent = "Confirm";
  confirmBtn.classList.add("confirm-button");
  confirmBtn.classList.add(`${id}`);
  container.appendChild(confirmBtn);
}

function createAnswer(answer: string) {
  const choicesContainer = document.querySelector(
    ".choices-container"
  ) as HTMLDivElement;
  const answerBtn = document.createElement("button") as HTMLButtonElement;
  answerBtn.textContent = answer;
  answerBtn.classList.add(`${answer}`);
  choicesContainer.appendChild(answerBtn);
}

const presentation = document.querySelector(".presentation") as HTMLDivElement;
const startBtn = document.getElementById("start") as HTMLButtonElement;
content.style.display = "none";
startBtn.addEventListener("click", () => {
  presentation.style.display = "none";
  content.style.display = "flex";
  displayQuestion(
    question1,
    question1.choice1,
    question1.choice2,
    question1.choice3,
    question1.choice4,
    question1.id
  );
  const confirmBtn = document.querySelector(
    ".confirm-button"
  ) as HTMLButtonElement;
  confirmBtn.addEventListener("click", () => {
    if (confirmBtn.classList.contains("1")) {
      const container = document.querySelector(".container") as HTMLDivElement;
      container.style.display = "none";
      displayQuestion(
        question2,
        question2.choice1,
        question2.choice2,
        question2.choice3,
        question2.choice4,
        question2.id
      );
    }
  });
});

function displayNext() {}
/* displayQuestion(
  question2,
  question2.choice1,
  question2.choice2,
  question2.choice3,
  question2.choice4,
  question2.id
);
displayQuestion(
  question3,
  question3.choice1,
  question3.choice2,
  question3.choice3,
  question3.choice4,
  question3.id
);
displayQuestion(
  question4,
  question4.choice1,
  question4.choice2,
  question4.choice3,
  question4.choice4,
  question4.id
);
displayQuestion(
  question5,
  question5.choice1,
  question5.choice2,
  question5.choice3,
  question5.choice4,
  question5.id
);
 */
