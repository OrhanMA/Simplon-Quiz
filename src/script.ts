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

let currentQuestionIndex: number = 0;
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
  displayQuestion(questions[currentQuestionIndex]);
  console.log("je marche");
  checkAnswer();
});

function checkAnswer() {
  let correctAnswer = questions[currentQuestionIndex].correctAnswer;
  button1.addEventListener("click", () => {
    if (button1.textContent === correctAnswer) {
      console.log(`The current index is: ${currentQuestionIndex}`);
      score += 10;
      currentQuestionIndex++;
      console.log(
        `${button1.textContent} is not the right answer. ${correctAnswer} was.`
      );
      button1.textContent = "";
      console.log(
        `After the check, the current index is now: ${currentQuestionIndex}`
      );
      displayQuestion(questions[currentQuestionIndex]);
      console.log(`Current correct answer: ${correctAnswer}`);
      correctAnswer = questions[currentQuestionIndex].correctAnswer;
      console.log(`The next correct answer will be: ${correctAnswer}`);
    } else {
      console.log(`The current index is: ${currentQuestionIndex}`);
      score -= 5;
      currentQuestionIndex++;
      console.log(
        `${button1.textContent} is not the right answer. ${correctAnswer} was.`
      );

      button1.textContent = "";
      console.log(
        `After the check, the current index is now: ${currentQuestionIndex}`
      );
      displayQuestion(questions[currentQuestionIndex]);
      console.log(`Current correct answer: ${correctAnswer}`);
      correctAnswer = questions[currentQuestionIndex].correctAnswer;
      console.log(`The next correct answer will be: ${correctAnswer}`);
    }
  });
}
/*
Logique de la function checkAnswer

Je prend le bonne reponse en argument
Je prend un des quatres bouttons en argument
J'ajoute un event listener au boutton qui attend un clique
Quand le clique est effectue:
Si le texte du boutton est egal au texte de la bonne reponse {
  J'augmente le score par 10
  J'augmente l'index de la question actuelle par 1
  Je reinitialise l'etat du boutton en lui donnant un string vide
  J'execute la fonction qui affiche la question suivante
}
Si le texte du boutton est different du texte de la bonne reponse {
  Je diminue le score de 5 points
  j'augmente l'index de la question actuelle par 1
  J'execute la fonction qui affiche la question suivante
}

*/
