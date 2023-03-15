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
}

const startButton = document.querySelector(".start") as HTMLButtonElement;

startButton.addEventListener("click", () => {
  const presentation = document.querySelector(
    ".presentation"
  ) as HTMLDivElement;
  presentation.style.display = "none";
  questionContainer.style.display = "flex";
  displayQuestion(questions[currentQuestionIndex]);
  checkAnswer();
});

const buttons: NodeListOf<Element> = document.querySelectorAll(".button");
const questionResultDiv = document.querySelector(
  ".question-result"
) as HTMLDivElement;

function displayQuestionResult(correctAnswer: string) {
  questionContainer.style.display = "none";
  questionResultDiv.style.display = "flex";
  const answerHeading = document.createElement("h2") as HTMLHeadingElement;
  answerHeading.classList.add("answerHeading");
  answerHeading.textContent = "Answer:";
  questionResultDiv.appendChild(answerHeading);
  const answerDiv = document.createElement("div") as HTMLDivElement;
  answerDiv.classList.add("answerDiv");
  questionResultDiv.appendChild(answerDiv);
  const answerIllustration = document.createElement("img") as HTMLImageElement;
  answerIllustration.src = questions[currentQuestionIndex].image;
  answerDiv.appendChild(answerIllustration);
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
    }
  });
}

function checkAnswer() {
  let correctAnswer = questions[currentQuestionIndex].correctAnswer;
  for (let i = 0; i < buttons.length; i++) {
    // mettre button array et listener ensuite
    buttons[i].addEventListener("click", () => {
      console.log(buttons[i].textContent, correctAnswer);
      if (buttons[i].textContent === correctAnswer) {
        /*       console.log(`The current index is: ${currentQuestionIndex}`); */
        console.log(
          `${buttons[i].textContent} is the right answer. ${correctAnswer} was.`
        );
        score += 10;
        displayQuestionResult(correctAnswer);
        currentQuestionIndex++;
        buttons[i].textContent = "";
        /*  console.log(
            `After the check, the current index is now: ${currentQuestionIndex}`
            ); */
        correctAnswer = questions[currentQuestionIndex].correctAnswer;
        /*         displayQuestion(questions[currentQuestionIndex]); */
        /*    console.log(`Current correct answer: ${correctAnswer}`); */
        console.log(`The next correct answer will be: ${correctAnswer}`);
      } else {
        /*         console.log(`The current index is: ${currentQuestionIndex}`); */
        console.log(
          `${buttons[i].textContent} is not the right answer. ${correctAnswer} was.`
        );
        score -= 5;
        displayQuestionResult(correctAnswer);
        currentQuestionIndex++;

        buttons[i].textContent = "";
        /*        console.log(
          `After the check, the current index is now: ${currentQuestionIndex}`
        ); */
        correctAnswer = questions[currentQuestionIndex].correctAnswer;
        /*         displayQuestion(questions[currentQuestionIndex]); */
        /*         console.log(`Current correct answer: ${correctAnswer}`); */
        console.log(`The next correct answer will be: ${correctAnswer}`);
      }
    });
  }
}

function displayFinalResult(score: number) {
  const finalResultDiv = document.querySelector(
    ".final-result-container"
  ) as HTMLDivElement;
  finalResultDiv.style.display = "flex";
  const finalHeading = document.createElement("h2") as HTMLHeadingElement;
  finalHeading.textContent = "Well, well, well... Let's see how you did... :";
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
}
