let userScore = 0
let compScore = 0
const userScoreSpan = document.querySelector('#user-score')
const compScoreSpan = document.querySelector('#computer-score')
const messageP = document.querySelector('.message > p')
const rockDiv = document.querySelector('#rock')
const paperDiv = document.querySelector('#paper')
const scissorsDiv = document.querySelector('#scissors')


function main() {
  rockDiv.addEventListener('click', () => game('Rock'))
  paperDiv.addEventListener('click', () => game('Paper'))
  scissorsDiv.addEventListener('click', () => game('Scissors'))
}

function getComputerChoice() {
  const choices = ['Rock', 'Paper', 'Scissors']
  let number = Math.floor(Math.random() * 3)
  return choices[number]
}

function game(userChoice) {
  let computerChoice = getComputerChoice()
  switch (`${userChoice} ${computerChoice}`) {
    case 'Rock Scissors':
    case 'Scissors Paper':
    case 'Paper Rock':
      win(userChoice, computerChoice)
      break
    case 'Rock Paper':
    case 'Paper Scissors':
    case 'Scissors Rock':
      lose(userChoice, computerChoice)
      break
    case 'Rock Rock':
    case 'Paper Paper':
    case 'Scissors Scissors':
      tie(userChoice, computerChoice)
      break
  }
}

function win(userChoice, computerChoice) {
  userScore ++
  updateScore(userScore, compScore)
  messageP.innerText = `You chose ${userChoice}. ${userChoice} beats ${computerChoice}. You win!`
}

function lose(userChoice, computerChoice) {
  compScore ++
  updateScore(userScore, compScore)
  messageP.innerText = `You chose ${userChoice}. ${userChoice} loses to ${computerChoice}. You lost!`
}

function tie(userChoice, computerChoice) {
  updateScore(userScore, compScore)
  messageP.innerText = `You both chose ${userChoice}. It's a tie!`
}

function updateScore(user, comp) {
  userScoreSpan.innerText = userScore
  compScoreSpan.innerText = compScore
}


main()
