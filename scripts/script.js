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

// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('.start-game');
const resultsDiv = document.createElement('div');
resultsDiv.classList.add('results-container');
buttons.forEach(btn => btn.addEventListener('click', (e) => {
  playerSelection = btn.id;

  const container = document.querySelector('.game-container');
  const body = document.querySelector('body');
  resultsDiv.innerHTML = `<span>Player Score: ${playerScore} - Computer Score: ${computerScore}</span>`;


  result = game(playerSelection);

  if (result.slice(0,7) == `You Win`) {
    playerScore++;
    alert(result);
    console.log(`Player Score: ${playerScore} - Computer Score: ${computerScore}`);

    if (playerScore == 5) {
      alert("Game Over! You won, you reached 5 points.")
      playerScore=0;
      computerScore=0;
    }

    resultsDiv.innerHTML = `<span>Player Score: ${playerScore} - Computer Score: ${computerScore}</span>`;
    body.appendChild(resultsDiv);
  }else{
    computerScore++;
    alert(result);
    console.log(`Player Score: ${playerScore} - Computer Score: ${computerScore}`);

    if(computerScore == 5) {
      alert("Game Over! You lost, Computer reached 5 points. ")
      playerScore=0;
      computerScore=0;
    }

    resultsDiv.innerHTML = `<span>Player Score: ${playerScore} - Computer Score: ${computerScore}</span>`;
    body.appendChild(resultsDiv);
  };

}));

const reset = document.querySelector('#reset');
reset.addEventListener('click', function() {

  playerScore = 0;
  computerScore = 0;
  resultsDiv.innerHTML = `<span>Player Score: ${playerScore} - Computer Score: ${computerScore}</span>`;
  const body = document.querySelector('body');
  body.appendChild(resultsDiv);
  console.log("reset");

});
