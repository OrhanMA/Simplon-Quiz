"use strict";

console.log("test");

interface Question {
  question: string;
  options: string[];
  correctAnswer: string;
  image: string;
}

const questions: Question[] = [
  {
    question: "Q.1 Which continent is China in?",
    options: ["Africa", "Americas", "Europe", "Asia"],
    correctAnswer: "Asia",
    image: "../assets/asia.png",
  },
  {
    question: "Q.2 What is the capital of China?",
    options: ["Beijing", "Pyongyang", "Shanghai", "Hongkong"],
    correctAnswer: "Beijing",
    image: "../assets/beijing.jpeg",
  },
  {
    question: "Q.3 What is China's major export?",
    options: ["Machinery", "Electronics", "Rice", "Materials"],
    correctAnswer: "Electronics",
    image: "../assets/usine.jpeg",
  },
  {
    question: "Q.4 What is China's total population (in billions)?",
    options: ["1.4", "24", "2.8", "2"],
    correctAnswer: "1.4",
    image: "../assets/monument.jpg",
  },
  {
    question: "Q.5 What is China's most popular religion?",
    options: ["Catholicism", "Buddhism", "Christianity", "Islam"],
    correctAnswer: "Buddhism",
    image: "../assets/buddhism.jpg",
  },
];

let currentQuestionIndex: number = 0;
let score: number = 0;
const questionContainer = document.querySelector(
  ".question-container"
) as HTMLDivElement;

const questionElement = document.querySelector(".question") as HTMLDivElement;
const buttonDiv = document.createElement("div") as HTMLDivElement;
buttonDiv.classList.add("buttonDiv");
const button1 = document.querySelector("#button1") as HTMLButtonElement;
const button2 = document.querySelector("#button2") as HTMLButtonElement;
const button3 = document.querySelector("#button3") as HTMLButtonElement;
const button4 = document.querySelector("#button4") as HTMLButtonElement;
function displayQuestion(question: Question) {
  questionElement.textContent = question.question;
  questionContainer.appendChild(questionElement);
  questionContainer.appendChild(buttonDiv);
  button1.textContent = question.options[0];
  buttonDiv.appendChild(button1);
  button2.textContent = question.options[1];
  buttonDiv.appendChild(button2);
  button3.textContent = question.options[2];
  buttonDiv.appendChild(button3);
  button4.textContent = question.options[3];
  buttonDiv.appendChild(button4);
  questionTimer();
  checkAnswer();
  /*   const buttons: NodeListOf<HTMLButtonElement> =
    document.querySelectorAll(".button");
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", () => {});
  } */
}

const presentation = document.querySelector(".presentation") as HTMLDivElement;

const form = document.querySelector("form") as HTMLFormElement;
let inputName: any = document.querySelector("#playerName") as HTMLInputElement;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(inputName.value);
  localStorage.setItem("playerName", inputName.value);
  const playerName = localStorage.getItem("playerName");
  console.log(`${playerName} is the player's name`);
  const preGame = document.querySelector(".preGame") as HTMLDivElement;
  const preGameHeading = document.createElement("h2") as HTMLHeadingElement;
  preGameHeading.classList.add("preGameHeading");
  preGameHeading.textContent = `Ok ${playerName}, you're about to play the game but before you need to know a few rules:`;
  preGame.appendChild(preGameHeading);
  const preGameRules = document.createElement("ul") as HTMLUListElement;
  preGameRules.classList.add("preGameRules");
  preGame.appendChild(preGameRules);
  createLiRules(
    preGameRules,
    "You have 20 seconds to answer or your question is automatically false"
  );
  createLiRules(
    preGameRules,
    "A good answer grants you 10 points and a bad answer takes away 5 points from you."
  );
  createLiRules(preGameRules, "Last but not least, enjoy!");
  const goBtn = document.createElement("button") as HTMLButtonElement;
  goBtn.classList.add("goBtn");
  goBtn.textContent = "Ok I get it, let's go";
  preGame.appendChild(goBtn);
  presentation.style.display = "none";
  preGame.style.display = "flex";
  goBtn.addEventListener("click", () => {
    const preGame = document.querySelector(".preGame") as HTMLDivElement;
    preGame.style.display = "none";
    questionContainer.style.display = "flex";
    displayQuestion(questions[currentQuestionIndex]);
  });
});

function createLiRules(ulElement: HTMLUListElement, text: string) {
  const newLi = document.createElement("li") as HTMLLIElement;
  newLi.textContent = text;
  ulElement.appendChild(newLi);
}

const buttons: NodeListOf<Element> = document.querySelectorAll(".button");
const questionResultDiv = document.querySelector(
  ".question-result"
) as HTMLDivElement;

const images = document.querySelectorAll("img");
console.log(images);
function displayQuestionResult(correctAnswer: string) {
  questionContainer.style.display = "none";
  questionResultDiv.style.display = "flex";
  const answerHeading = document.createElement("h2") as HTMLHeadingElement;
  answerHeading.classList.add("answerHeading");
  answerHeading.textContent = "The right answer is:";
  questionResultDiv.appendChild(answerHeading);
  const answerDiv = document.createElement("div") as HTMLDivElement;
  answerDiv.classList.add("answerDiv");
  questionResultDiv.appendChild(answerDiv);

  const currentImage = images[currentQuestionIndex];
  currentImage.style.display = "block";
  answerDiv.appendChild(currentImage);
  const answerTextDiv = document.createElement("div") as HTMLDivElement;
  answerTextDiv.classList.add("answerTextDiv");
  answerDiv.appendChild(answerTextDiv);
  const textAnswer = document.createElement("h3") as HTMLHeadingElement;
  textAnswer.textContent = correctAnswer;
  answerTextDiv.appendChild(textAnswer);
  const scoreAnswer = document.createElement("p") as HTMLParagraphElement;
  scoreAnswer.textContent = `Your score is now: ${score}.`;
  answerTextDiv.appendChild(scoreAnswer);
  const nextButton = document.createElement("button") as HTMLButtonElement;
  nextButton.classList.add("nextButton");
  nextButton.textContent = "Next question";
  questionResultDiv.appendChild(nextButton);
  nextButton.addEventListener("click", () => {
    if (currentQuestionIndex === 5) {
      questionContainer.style.display = "none";
      questionResultDiv.style.display = "none";
      displayFinalResult(score);
    } else {
      answerHeading.remove();
      answerDiv.remove();
      nextButton.remove();
      questionResultDiv.style.display = "none";
      questionContainer.style.display = "flex";
      displayQuestion(questions[currentQuestionIndex]);
      questionTimer();
    }
  });
}

function checkAnswer() {
  let correctAnswer = questions[currentQuestionIndex].correctAnswer;
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", () => {
      console.log("button is clicked");
      /*       console.log(buttons[i].textContent, correctAnswer); */
      if (buttons[i].textContent === correctAnswer) {
        /*  console.log(
          `${buttons[i].textContent} is the right answer. ${correctAnswer} was.`
        ); */
        score += 10;
        displayQuestionResult(correctAnswer);
        currentQuestionIndex++;
        buttons[i].textContent = "";
        correctAnswer = questions[currentQuestionIndex].correctAnswer;
        /*  console.log(`The next correct answer will be: ${correctAnswer}`); */
      } else {
        /*   console.log(
          `${buttons[i].textContent} is not the right answer. ${correctAnswer} was.`
        ); */
        score -= 5;
        displayQuestionResult(correctAnswer);
        currentQuestionIndex++;

        buttons[i].textContent = "";

        correctAnswer = questions[currentQuestionIndex].correctAnswer;

        /* console.log(`The next correct answer will be: ${correctAnswer}`); */
      }
    });
  }
}

function displayFinalResult(score: number) {
  const playerName = localStorage.getItem("playerName");
  const finalResultDiv = document.querySelector(
    ".final-result-container"
  ) as HTMLDivElement;
  finalResultDiv.style.display = "flex";
  const finalHeading = document.createElement("h2") as HTMLHeadingElement;
  finalHeading.textContent = `Well, well, well ${playerName}... Let's see how you did... :`;
  finalResultDiv.appendChild(finalHeading);
  const scoreDisplay = document.createElement("h3") as HTMLParagraphElement;
  if (score >= 40) {
    scoreDisplay.textContent = `Bro what! You scored ${score}! ${score} damn points! You're some China expert or  what? GGWP!!!`;
  } else if (score >= 20 && score < 40) {
    scoreDisplay.textContent = `You scored ${score} points! That a great game, well done!`;
  } else {
    scoreDisplay.textContent = `You end up with ${score}. It's ok, nobody is an know-it-all! Me neither!`;
  }
  finalResultDiv.appendChild(scoreDisplay);
  const againBtn = document.createElement("button") as HTMLButtonElement;
  againBtn.textContent = "Play again";
  finalResultDiv.appendChild(againBtn);
  /*   againBtn.addEventListener("click", () => {
    finalResultDiv.style.display = "none";
    presentation.style.display = "flex";
  }); */
}

function questionTimer() {
  if (questionContainer.style.display === "flex") {
    /*     setTimeout(() => {
      setFalseAnswer();
    }, 19000); */
    setInterval(() => {
      decrementByOne();
    }, 1000);
  }
}
const secondsDisplay = document.querySelector(
  ".secondsDisplay"
) as HTMLParagraphElement;

function setFalseAnswer() {
  starterTimer = 20;
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].textContent = "";
  }
  const button1 = document.querySelector("#button1") as HTMLButtonElement;
  button1.click();
}

let starterTimer: number = 20;

function decrementByOne() {
  if (secondsDisplay.textContent === "0") {
    return;
  } else {
    secondsDisplay.textContent = `${starterTimer--}`;
  }
}
