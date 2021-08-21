var readlineSync= require("readline-sync");

var score=0;

var userName= readlineSync.question("What's your name?");

console.log("Welcome "+ userName);

function play(question,answer){
  var userAnswer= readlineSync.question(question);

  if(userAnswer==answer){
    console.log("correct!");
    score= score+1;
  }

  else{
    console.log("wrong!");
   // score=score-1;
  }

  console.log("Current Score: ",score);
  console.log("----------");
}

var questions= [
  {
    question: "Where do BTS live",
    answer: "Seoul"
  },
  {
    question: "Who is the leader of BTS?",
    answer: "Kim Namjoon"
  },
  {
    question: "When did BTS debut?",
    answer: "13th June, 2013"
  },
  {
    question: "What is BTS's debut song?",
    answer: "No More Dream"
  },

{
    question: "When did BTS debut?",
    answer: "13th June, 2013"
  },
  {
    question: "When did BTS debut?",
    answer: "13th June, 2013"
  },
  {
    question: "Who did BTS collaberate with for their song 'Make it Right' ?",
    answer: "Lauv"
  },
 {question: "For which song did BTS win their first ?",
    answer: "13th June, 2013"
 },
 {question: "For which song did BTS win their first KBS?",
    answer: "I Need U"
 },
 {question: "What are BTS fanS called?",
    answer: "ARMY"
 }
];

for( var i=0; i<questions.length; i++){
  var currentQuestion=questions[i];
  play(currentQuestion.question, currentQuestion.answer)
}

console.log("Your Score: ", score)
