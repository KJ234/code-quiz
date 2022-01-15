var StartBtn = document.getElementById("startButton");
var title = document.querySelector("#title-section");
var qtion = document.querySelector("#question");
var row = document.querySelector(".show");
var HighscoresButton = document.getElementById("highscores");
var choicesContainer = document.getElementById("choices");
var timeEl = document.getElementById("time");
var allElements = document.getElementById("container");
var showTextAnswers = document.getElementById("feedback");
var showWrongAnswers = document.getElementById("wrong");
var storedScores = JSON.parse(localStorage.getItem("userData"));
var highScoresArea = document.querySelector("#highScoresList");
var removeEerything = document.querySelector(".row");

var score = 0;

var secondsLeft = 100;
var timerInterval;

function setTime() {
  // Sets interval in variable
  timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = " Time: " + secondsLeft;

    if (secondsLeft < 1) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      quizComplete();
    }
  }, 1000);
}

var currentQuestionIndex = 0;

function StartQuiz() {
  StartBtn.style.display = "none";
  row.style.display = "none";

  console.log(questions);

  renderQuestion();
  createQuestion();
  setTime();
}

function renderQuestion() {
  qtion.style.visibility = "visible";
}

function checkAnswer(event) {
  var selectedButton = event.target.id;

  var currentAnswer = questions[currentQuestionIndex].answer;

  if (selectedButton === currentAnswer) {
    document.querySelector("#wrong").textContent = "Correct";
    score = score + 7;
  } else {
    document.querySelector("#wrong").textContent = "Wrong ";
    secondsLeft = secondsLeft - 25;
    score = score - 1;
  }

  nextQuestion(selectedButton);
}

function nextQuestion(selectedButton) {
  currentQuestionIndex += 1;
  choicesContainer.innerHTML = "";
  if (selectedButton === questions[currentQuestionIndex].answer) {
    showTextAnswers.style.visibility = "visible";
  } else showWrongAnswers.style.visibility = "visible";

  createQuestion();
}

function createQuestion(question) {
  qtion.textContent = questions[currentQuestionIndex].title;
  questions[currentQuestionIndex].choices.forEach(function (choice) {
    var btn = document.createElement("button");
    btn.textContent = choice;
    choicesContainer.appendChild(btn);
    btn.setAttribute("id", choice);

    btn.addEventListener("click", checkAnswer);
  });
}

function renderingHighscores() {
  renderQuestion();

  var mainEl = $("#mainElement");
  var scores = localStorage.getItem("scores");
  var inputEl = $("<input id='initials'>");
  var SubmitButtonEl = $("<button>" + "submit your score" + "</button>");

  mainEl.append(inputEl);
  mainEl.append(SubmitButtonEl);

  SubmitButtonEl.on("click", function () {
    var userInitials = inputEl.val();

    if (scores) {
      var parseHighscores = JSON.parse(scores);

      parseHighscores.push({
        intials: userInitials,
        score: score,
      });
      localStorage.setItem("scores", JSON.stringify(parseHighscores));
    } else {
      localStorage.setItem("scores", JSON.stringify);
    }
  });
}

function quizComplete() {
  // Setting the timer to stop when all questions are answered so that as above, the timer interval will be cleared just as it would if the timer had ran out
  timeEl.textContent = 0;

  // Updates text content when quiz complete
  qtion.textContent = "Game Over!";
  document.querySelector("#wrong").textContent = "Good Try";
  renderingHighscores();
}

StartBtn.addEventListener("click", StartQuiz);
