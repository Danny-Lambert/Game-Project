"use strict";

//create lets which can be changed for the score depending on result
var userScore = 0;
var computerScore = 0;
var userScoreNumber = document.getElementById("human-score");
var computerScoreNumber = document.getElementById("robot-score"); // Create const for each element (think of the getting sources from book analogy)

var scoreBoard = document.querySelector(".score-board");
var outcome = document.querySelector(".outcome");
var rock = document.getElementById("rock");
var paper = document.getElementById("paper");
var scissors = document.getElementById("scissors");
var lizard = document.getElementById("lizard");
var spock = document.getElementById("spock"); //give the computer a random number which equals a outcome

function getComputerChoice() {
  var choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
  var randomNumber = Math.floor(Math.random() * 5);
  return choices[randomNumber];
}

function main() {
  rock.addEventListener('click', function () {
    game("rock");
  });
  paper.addEventListener('click', function () {
    game("paper");
  });
  scissors.addEventListener('click', function () {
    game("scissors");
  });
  lizard.addEventListener('click', function () {
    game("lizard");
  });
  spock.addEventListener('click', function () {
    game("spock");
  });
} //outcome functions


function win(userChoice, computerChoice) {
  userScore++;
  userScoreNumber.innerHTML = userScore;
  computerScoreNumber = computerScore;
  outcome.innerHTML = userChoice + " beats " + computerChoice;
}

function lose(userChoice, computerChoice) {
  computerScore++;
  userScoreNumber.innerHTML = userScore;
  computerScoreNumber = computerScore;
  outcome.innerHTML = userChoice + " lost to " + computerChoice;
}

function draw(userChoice, computerChoice) {
  userScoreNumber.innerHTML = userScore;
  computerScoreNumber.innerHTML = computerScore;
  outcome.innerHTML = userChoice + " drew with " + computerChoice;
} //all the different types of combinations and win/lose/draw


function game(userChoice) {
  var computerChoice = getComputerChoice();

  switch (userChoice + computerChoice) {
    case "rockpaper":
    case "rockspock":
    case "paperscissors":
    case "paperlizard":
    case "scissorsrock":
    case "scissorsspock":
    case "lizardscissors":
    case "lizardrock":
    case "spockpaper":
    case "spocklizard":
      lose();
      break;

    case "rockscissors":
    case "rocklizard":
    case "paperrock":
    case "paperspock":
    case "scissorspaper":
    case "scissorslizard":
    case "lizardspock":
    case "lizardpaper":
    case "spockrock":
    case "spockscissors":
      win();
      break;

    case "rockrock":
    case "paperpaper":
    case "scissorsscissors":
    case "lizardlizard":
    case "spockspock":
      draw();
  }
}

main();