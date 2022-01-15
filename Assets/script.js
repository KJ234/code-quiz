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

var secondsLeft = 100;

function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = " Time: " + secondsLeft;

    if (secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
    }
  }, 1000);
}

function StartQuiz() {
  StartBtn.style.display = "none";
  row.style.display = "none";

  console.log(questions);
  setTime();
}
StartBtn.addEventListener("click", StartQuiz);
