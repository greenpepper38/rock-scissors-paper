
// Array with 3 options
let array = ['Rock', 'Scissors', 'Paper'];

// Assign two variables to track score 
let playerScore = 0;
let computerScore = 0;

// Function to randomize computers selection 
function computerPlay() {
  let compSelection = array[Math.floor(Math.random()*array.length)];
  return compSelection;
}

// Function to play ONE round 
function playSingleRound(){

  let playerChoice = prompt("What material do you choose? ");
  let computerSelection = computerPlay();

  // Display player/computer selections and scores  
  console.log(`You picked: ${playerChoice[0].toUpperCase()}${playerChoice.substring(1)}`);
  console.log(`Computer picked: ${computerSelection}`);
  console.log(`Player Score: ${playerScore} Computer Score: ${computerScore}`);
  
// Logic statements 
  if (playerChoice.toLowerCase() !== 'scissors' && playerChoice.toLowerCase() !== "rock" && 
  playerChoice.toLowerCase() !== "paper") {
    alert("Choose the correct item dipshit!!")
    return playSingleRound();
  } 

  if (playerChoice.toLowerCase() === 'rock') { 
    if (computerSelection.toLowerCase() === 'scissors'){
      playerScore++;
      return "You win! Rock beats Scissors";
    } else if (computerSelection.toLowerCase() === 'paper'){
      computerScore++; 
      return "You lose! Paper beats Rock";
    } else {
      return "It's a draw! No one wins!";
    }
  }

  if (playerChoice.toLowerCase() === 'scissors') { 
    if (computerSelection.toLowerCase() === 'paper'){
      playerScore++;
      return "You win! Scissors beats Paper";
    } else if (computerSelection.toLowerCase() === 'rock'){
      computerScore++; 
      return "You lose! Rock beats Scissors";
    } else {
      return "It's a draw! No one wins!";
    }
  }

  if (playerChoice.toLowerCase() === 'paper') { 
    if (computerSelection.toLowerCase() === 'rock'){
      playerScore++;
      return "You win! Paper beats Rock";
    } else if (computerSelection.toLowerCase() === 'scissors'){
      computerScore++; 
      return "You lose! Scissor beats Paper";
    } else {
      return "It's a draw! No one wins!";
    }
  } 
}

// Function to play 5 games 
function playGame(){
  for (let i = 1; i < 6; i++) {
      playSingleRound();
  } return (playerScore > computerScore) ? "You win!" : 
          (playerScore < computerScore) ? "You lose" : 
          "Tie Time"

}

console.log(playGame());
