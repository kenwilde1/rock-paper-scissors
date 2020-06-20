function computerPlay(){
  let moves = ["rock", "paper", "scissors"];
  random_choice = Math.floor(Math.random() * Math.floor(3));
  console.log(moves[random_choice]);
  return(moves[random_choice]);
}

function playRound(playerSelection, computerSelection) {

  playerSelection = playerSelection.toLowerCase();

  if (playerSelection == 'rock' && computerSelection == 'scissors') {
    return(`You Win! ${playerSelection} beats ${computerSelection}`);
  }else if (playerSelection == 'rock' && computerSelection == 'paper') {
    return(`You Lose! ${computerSelection} beats ${playerSelection}`);
  }else if (playerSelection == 'paper' && computerSelection == 'rock') {
    return(`You Win! ${playerSelection} beats ${computerSelection}`);
  }else if (playerSelection == 'paper' && computerSelection == 'scissors') {
    return(`You Lose! ${computerSelection} beats ${playerSelection}`);
  }else if (playerSelection = 'scissors' && computerSelection == 'paper') {
    return(`You Win! ${playerSelection} beats ${computerSelection}`);
  }else{
    return(`You Lose! ${computerSelection} beats ${playerSelection}`);
  }
}

const playerSelection = 'ROCK';
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
