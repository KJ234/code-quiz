var StartBtn = document.getElementById("startButton");
var title = document.querySelector("#title-section");
var qtion = document.querySelector("#question");
var row = document.querySelector(".show");
var HighscoresButton = document.getElementById("Highscores");
var choicesContainer = document.getElementById("choices");
var timeEl = document.getElementById("time");
var allElements = document.getElementById("container");
var showTextAnswers = document.getElementById("feedback");
var showWrongAnswers = document.getElementById("wrong");
var highScoresArea = document.querySelector("#highScoresList");

function StartQuiz() {
  StartBtn.style.display = "none";
  row.style.display = "none";

  console.log(questions);
}
StartBtn.addEventListener("click", StartQuiz);
