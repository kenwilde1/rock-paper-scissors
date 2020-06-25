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

function game(playerSelection) {
  let computerSelection = computerPlay();
  const results = playRound(playerSelection, computerSelection);
  return(results);
}

let playerScore = 0;
let computerScore = 0;
let gameFinished = false;

// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');
buttons.forEach(btn => btn.addEventListener('click', (e) => {
  playerSelection = btn.id;

  const container = document.querySelector('.game-container');
  const results = document.createElement('div');

  result = game(playerSelection);

  if (result.slice(0,7) == `You Win`) {
    playerScore++;
    console.log(playerScore);
  }else{
    computerScore++;
    console.log(computerScore);
  };
  if (playerScore == 5 && !gameFinished) {
    results.classList.add('game-container');
    container.appendChild(results);
    results.innerHTML = `<span>You won best of 5! Your score: ${playerScore} Computer's Score ${computerScore}</span>`;
    gameFinished = true;
  }else if (computerScore == 5 && !gameFinished) {
    results.classList.add('game-container');
    container.appendChild(results);
    results.innerHTML = `<span>You lost best of 5! Your score: ${playerScore} Computer's Score ${computerScore}</span>`;
    gameFinished = true;
  };

}));

const reset = document.querySelector('#reset');
reset.addEventListener('click', function() {
  let playerScore = 0;
  let computerScore = 0;
  let gameFinished = false;
  console.log(`${playerScore}${computerScore}${gameFinished}`)
});
