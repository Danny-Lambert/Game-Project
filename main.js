//create lets which can be changed for the score depending on result
let userScore = 0;
let computerScore = 0;
let userScoreNumber = document.getElementById("human-score");
let computerScoreNumber = document.getElementById("robot-score");
// Create const for each element (think of the getting sources from book analogy)
const scoreBoard = document.querySelector(".score-board");
const outcome = document.querySelector(".outcome");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const lizard = document.getElementById("lizard");
const spock = document.getElementById("spock");
//give the computer a random number which equals a outcome
function getComputerChoice () {
    const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    const randomNumber = Math.floor(Math.random() * 5);
    return choices[randomNumber];
}

function main(){
        rock.addEventListener('click', function() {
            game ("rock")
        })
        paper.addEventListener('click', function() {
            game ("paper")
        })
        scissors.addEventListener('click', function() {
            game ("scissors")
        })
        lizard.addEventListener('click', function() {
            game ("lizard")
        })
        spock.addEventListener('click', function() {
            game ("spock")
        })
    }
//outcome functions
function win(userChoice, computerChoice){
    userScore ++;
    userScoreNumber.innerHTML = userScore;
    outcome.innerHTML = userChoice + " beats " + computerChoice;
}
function lose(userChoice, computerChoice){
    computerScore ++;
    computerScoreNumber.innerHTML = computerScore;
    outcome.innerHTML = userChoice + " lost to " + computerChoice;
}
function draw(userMove, computerChoice){
    outcome.innerHTML = userMove + " drew with " + computerChoice;
}
//all the different types of combinations and win/lose/draw
function game (userChoice) {
    const computerChoice = getComputerChoice();
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
            lose (userChoice, computerChoice);
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
            win (userChoice, computerChoice);
            break;
        case "rockrock": 
        case "paperpaper":
        case "scissorsscissors":
        case "lizardlizard":
        case "spockspock":
            draw (userChoice, computerChoice);

}
}

main ();