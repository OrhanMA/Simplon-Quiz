"use strict";

console.log("test");

const reponsesJustes: string[] = [
  "asia",
  "beijing",
  "electronics",
  "1.4billion",
  "buddhism",
];

const points: number = 0;

const reponses: Array<string[]> = [
  ["africa", "americas", "europe", "asia"],
  ["beijing", "pyongyang", "shanghai", "hongkong"],
  ["machinery", "electronics", "rice", "materials"],
  ["1.4billion", "24billion", "2.8billion", "1.4million"],
  ["catholicism", "buddhism", "christianity", "islam"],
];

const question1Choices = document.querySelectorAll(".question-1-choices");
console.log(question1Choices);

const question2Choices = document.querySelectorAll(".question-2-choices");
console.log(question2Choices);

const question3Choices = document.querySelectorAll(".question-3-choices");
console.log(question3Choices);

const question4Choices = document.querySelectorAll(".question-4-choices");
console.log(question4Choices);

const question5Choices = document.querySelectorAll(".question-5-choices");
console.log(question5Choices);

function checkAnswer(questionchoices: NodeListOf<Element>) {
  for (let i = 0; i < questionchoices.length; i++) {
    console.log(questionchoices[i].value);
    if (questionchoices.value === reponsesJustes[0]) {
      console.log(`${questionchoices.value} is the right answer`);
    }
  }
}

checkAnswer(question1Choices);
checkAnswer(question2Choices);
checkAnswer(question3Choices);
checkAnswer(question4Choices);
checkAnswer(question5Choices);
