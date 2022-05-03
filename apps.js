const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e)=> {
    userChoice = e.target.id 
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
} ))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1 

    if(randomNumber === 1) {
        computerChoice = 'Piedra'
    }

    if(randomNumber === 2) {
        computerChoice = 'Papel'
    }

    if(randomNumber === 3){
        computerChoice = 'Tijera'
    }

    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if(computerChoice === userChoice) {
        result = 'Empate!'
    }

    if(computerChoice === 'Piedra' && userChoice === 'Papel') {
        result = 'Ganaste :)'
    }

    if(computerChoice === 'Piedra' && userChoice === 'Tijera') {
        result = 'Perdiste :c'
    }

    if(computerChoice === 'Papel' && userChoice === 'Piedra') {
        result = 'Perdiste :c'
    }

    if(computerChoice === 'Papel' && userChoice === 'Tijera') {
        result = 'Ganaste :)'
    }

    if(computerChoice === 'Tijera' && userChoice === 'Piedra') {
        result = 'Ganaste :)'
    }

    if(computerChoice === 'Tijera' && userChoice === 'Papel') {
        result = 'Perdiste :c'
    }
    resultDisplay.innerHTML = result
}