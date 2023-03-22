"use strict";

let numberGoodAnswer: number = 0;
let questionIndex: number = 0;
let playerPoints: number = 0;
let secondsTimer: number = 20;

const presentation = document.querySelector(".presentation") as HTMLDivElement;
const questionDiv = document.querySelector(".questionDiv") as HTMLDivElement;
const answerDiv = document.querySelector(".answerDiv") as HTMLDivElement;
const finalResultDiv = document.querySelector(".finalResult") as HTMLDivElement;

//Initally hidden stuff
questionDiv.style.display = "none";
answerDiv.style.display = "none";
finalResultDiv.style.display = "none";

const questionArray = [
  {
    question:
      "Who's the player that joined the Golden State Warriors in 2017 and formed the greatest basketball team of all times?",
    options: ["Lebron James", "Kevin Durant", "Jayson Tatum", "Devin Booker"],
    correctAnswer: "Kevin Durant",
  },
  {
    question: "Who's the 2011 MVP?",
    options: ["Dwight Howard", "Derrick Rose", "Lebron James", "Blake Griffin"],
    correctAnswer: "Derrick Rose",
  },
  {
    question:
      "Who's the player that won the most championships in NBA History? ",
    options: ["Micheal Jordan", "Bill Russell", "Sam Jones", "Larry Bird"],
    correctAnswer: "Bill Russell",
  },
  {
    question: "In which year did Kobe Bryant retired?",
    options: ["2009", "2012", "2016", "2015"],
    correctAnswer: "2016",
  },
  {
    question: "Which nba player is also called 'Uncle Drew' ?",
    options: ["John Drew", "Dwyane Wade", "Tony Parker", "Kyrie Irving"],
    correctAnswer: "Kyrie Irving",
  },
];

//Getting form input
const form = document.querySelector("form") as HTMLFormElement;
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let usernameInput = document.querySelector(
    "#usernameInput"
  ) as HTMLInputElement;
  // putting it in local storage
  localStorage.setItem("username", usernameInput.value);
  // display the first question
  /*   presentation.classList.add("hide"); */
  presentation.style.display = "none";
  questionDiv.style.display = "flex";
  displayQuestion();
});

// getting HTML elements of question div
const question = document.querySelector(".question") as HTMLHeadingElement;
const button = document.querySelectorAll(".questionButton");
const questionNumber = document.querySelector(
  ".questionNumber"
) as HTMLParagraphElement;
function displayQuestion() {
  question.textContent = questionArray[questionIndex].question;
  for (let i = 0; i < button.length; i++) {
    button[i].textContent = questionArray[questionIndex].options[i];
  }
  questionNumber.textContent = `${questionIndex + 1}/5`;
  clearMyInterval();
  startTimer();
  /*   setTimeout(clearMyInterval, 20000); */
}

for (let i = 0; i < button.length; i++) {
  button[i].addEventListener("click", () => {
    let selectedAnswer = button[i].textContent;
    displayAnswer(selectedAnswer);
  });
}

const secondsDisplay = document.querySelector(
  ".secondsDisplay"
) as HTMLParagraphElement;
let timer: number = 20;
let myInterval;
function startTimer() {
  timer = 20;
  myInterval = setInterval(decrementSeconds, 1000);
}
function decrementSeconds() {
  if (timer <= 0) {
    secondsDisplay.textContent = `Time's up!`;
    clearMyInterval();
  } else {
    secondsDisplay.textContent = `Seconds left: ${timer} seconds`;
    timer--;
  }
}
function clearMyInterval() {
  clearInterval(myInterval);
}

const answer = document.querySelector(".answer") as HTMLHeadingElement;
const roundPoints = document.querySelector(
  ".roundPoints"
) as HTMLParagraphElement;
const nextButton = document.querySelector(".nextButton") as HTMLButtonElement;
function displayAnswer(selectedAnswer) {
  questionDiv.style.display = "none";
  answerDiv.style.display = "flex";
  if (selectedAnswer === questionArray[questionIndex].correctAnswer) {
    answer.textContent = `You're right, the answer is ${selectedAnswer}.`;
    playerPoints += 10;
    roundPoints.textContent = `You won 10 points and you currently have a total of ${playerPoints} points`;
    numberGoodAnswer++;
    questionIndex++;
  } else {
    answer.textContent = `Nope, the answer was ${questionArray[questionIndex].correctAnswer}.`;
    playerPoints -= 5;
    roundPoints.textContent = `You lost 5 points and you currently have a total of ${playerPoints} points.`;
    questionIndex++;
  }
  if (questionIndex > 4) {
    finalResult();
  } else {
    nextButton.addEventListener("click", () => {
      questionDiv.style.display = "flex";
      answerDiv.style.display = "none";
      displayQuestion();
    });
  }
}

const numberRightAnswer = document.querySelector(
  ".numberRightAnswer"
) as HTMLHeadingElement;
const pointsEarned = document.querySelector(
  ".pointsEarned"
) as HTMLParagraphElement;
const playerName = localStorage.getItem("username");
function finalResult() {
  popup.style.display = "unset";
  answerDiv.style.display = "none";
  finalResultDiv.style.display = "flex";
  if (numberGoodAnswer === 5) {
    numberRightAnswer.textContent = `You answered right on all questions! Congrats ${playerName}!`;
  } else {
    numberRightAnswer.textContent = `${playerName}, you answered right on ${numberGoodAnswer}/5 questions!`;
  }
  if (playerPoints < 30) {
    pointsEarned.textContent = `You got ${playerPoints} points in that game.`;
  } else {
    pointsEarned.textContent = `You won ${playerPoints} points in that game!`;
  }
}

const againButton = document.querySelector(".playAgain") as HTMLButtonElement;
againButton.addEventListener("click", () => {
  location.reload();
});

const popupBtn = document.querySelector(".popup-btn") as HTMLButtonElement;
const popup = document.querySelector(".popup") as HTMLDivElement;
popup.style.display = "none";
popupBtn.addEventListener("click", () => {
  popup.style.display = "none";
});
