function computerPlay(){

  let moves = ['rock', 'paper', 'scissors'];
  random_choice = Math.floor(Math.random() * Math.floor(3));
  return(moves[random_choice]);

}

function playRound(playerSelection, computerSelection) {

  playerSelection = playerSelection.toLowerCase();

  while (playerSelection == computerSelection) {
    computerSelection = computerPlay();
  }

  if (playerSelection == 'rock' && computerSelection == 'scissors') {
    return(`You Win! Rock beats Scissors`);
  }else if (playerSelection == 'rock' && computerSelection == 'paper') {
    return(`You Lose! Paper beats Rock`);
  }else if (playerSelection == 'paper' && computerSelection == 'rock') {
    return(`You Win! Paper beats Rock`);
  }else if (playerSelection == 'paper' && computerSelection == 'scissors') {
    return(`You Lose! Scissors beats Paper`);
  }else if (playerSelection = 'scissors' && computerSelection == 'paper') {
    return(`You Win! Scissors beats Paper`);
  }else{
    return(`You Lose! Rock beats Scissors`);
  }

}

function game() {

  let playerSelection = prompt('Enter Rock, Paper or Scissors').toLowerCase();
  let computerSelection = computerPlay();
  return(playRound(playerSelection, computerSelection));

}

for (i = 0; i < 5; i ++) {
  console.log(game());  
}
