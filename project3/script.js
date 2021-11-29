// selectors
let tries = document.querySelector("#tries");
let highscore = document.querySelector(".highest-score");
let resetBtn = document.querySelector(".reset-btn");
let playBox = document.querySelector(".play-box");
let img = document.querySelector("#main-img");
let checkBtn = document.querySelector(".check-btn");
let hint = document.querySelector(".hint");
let playboxWrapper = document.querySelector(".play-box-wrapper");

const audio = new Audio();
audio.src = "./wrong.wav";

const audio2 = new Audio();
audio2.src = "./correct.wav";
// number variables
let secretNumber = Math.floor(Math.random() * 100) + 2;
console.log(secretNumber);

let triesLeft = 10;
let highestScore = 0;

//set default vals
tries.innerHTML = triesLeft;
highscore.innerHTML = highestScore;

//event listeners
checkBtn.addEventListener("click", () => {
  checkAnswer();
});

resetBtn.addEventListener("click", () => {
  resetGame();
});

// check answer when check btn in clicked
function checkAnswer() {
  // get user val
  const userInput = document.querySelector("#user-input").value;
  // update guess history
  const listItem = document.createElement("li");
  listItem.setAttribute("class", "hgli");
  listItem.innerHTML = userInput;
  document.querySelector(".history-guess-list").append(listItem);

  // check edge cases first
  constraints(userInput);
  // then right and wrong cases
  if (userInput == secretNumber) {
    win(userInput);
  }
  if (userInput < secretNumber && userInput > 1 && userInput < 100) {
    wrongLow(userInput);
  }
  if (userInput > secretNumber && userInput > 1 && userInput < 100) {
    wrongHigh(userInput);
  }
}

function win(inputVal) {
  highestScore = triesLeft;
  highscore.innerHTML = highestScore;

  audio2.play();

  let scoreBox = document.querySelector(".left-score-box");
  let resetBox = document.querySelector(".right-box-btn");
  scoreBox.style.visibility = "hidden";
  resetBox.style.visibility = "hidden";

  document.querySelector(".play-box-wrapper").remove();

  const divWin = document.createElement("div");
  divWin.innerHTML = `
    <div class="winbox">
      <img src="./trophy-win.png" width="100px" / >
      <div class="congrat">Congratulations!</div>
      <div class="m2">Your guess was correct. <span class="users-guess">${inputVal}</span> is my secret number.</div>
      <div class="m3">Your Score: <span class="score">${triesLeft}</span></div>
      <div class="m4">Best: <span class="highScore">${highestScore}</span></div>
      <button class="play-again">Play Again</button>
    </div>
  `;

  document.querySelector(".play-box").appendChild(divWin);

  let playAgain = document.querySelector(".play-again");
  playAgain.addEventListener("click", () => {
    document.querySelector(".winbox").remove();
    document.querySelector(".play-box").append(playboxWrapper);

    scoreBox.style.visibility = "visible";
    resetBox.style.visibility = "visible";

    triesLeft = 10;
    tries.innerHTML = triesLeft;
    resetGame();
  });
}

function lose(inputVal) {
  let scoreBox = document.querySelector(".left-score-box");
  let resetBox = document.querySelector(".right-box-btn");
  scoreBox.style.visibility = "hidden";
  resetBox.style.visibility = "hidden";

  document.querySelector(".play-box-wrapper").remove();

  const divLose = document.createElement("div");
  divLose.innerHTML = `
    <div class="winbox">
      <img src="./lose.png" width="200px" / >
      <div class="congrat">Unfortunately You Lost the Game</div>
      <div class="m2">Dont give up and try again. You can win next time.</div>
      <div class="m3">My Secret Number was ${secretNumber}</div>
      <button class="play-again">Play Again</button>
    </div>
  `;

  document.querySelector(".play-box").append(divLose);

  let playAgain = document.querySelector(".play-again");
  playAgain.addEventListener("click", () => {
    document.querySelector(".winbox").remove();
    document.querySelector(".play-box").append(playboxWrapper);

    scoreBox.style.visibility = "visible";
    resetBox.style.visibility = "visible";

    triesLeft = 10;
    tries.innerHTML = triesLeft;
    secretNumber = Math.floor(Math.random() * 100) + 2;

    resetGame();
  });
}

function wrongLow(inputVal) {
  audio.play();
  if (triesLeft == 1) {
    lose(inputVal);
  } else {
    triesLeft = triesLeft - 1;
    tries.innerHTML = triesLeft;
    hint.innerHTML = "Your number is too low";
  }
}

function wrongHigh(inputVal) {
  audio.play();
  if (triesLeft == 1) {
    lose(inputVal);
  } else {
    triesLeft = triesLeft - 1;
    tries.innerHTML = triesLeft;
    hint.innerHTML = "Your number is too high";
  }
}

function resetGame() {
  triesLeft = 10;
  tries.innerHTML = triesLeft;
  document.querySelector(".history-guess-list").remove();
  let ul = document.createElement("ul");
  ul.setAttribute("class", "history-guess-list");
  document.querySelector(".hist-list").append(ul);
  secretNumber = Math.floor(Math.random() * 100) + 2;
}

function constraints(inputVal) {
  if (inputVal.value == null && !(inputVal.length > 0)) {
    hint.innerHTML = "no input";
  }
  if ((inputVal < 0 || inputVal >= 100) && inputVal.length > 0) {
    hint.innerHTML = "You can only enter numbers between 1 and 100";
  }
  if (inputVal == 0 || inputVal == 1) {
    hint.innerHTML = "You can only enter numbers between 1 and 100";
  }
}
