let randomNumber = parseInt(Math.random() * 100 + 1)

const submit = document.querySelector('#subt')
const userinput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.querySelector('p')

let prevGuess = []
let numGuess = 1

let playGame = true

if (playGame) {
    submit.addEventListener("click", function (e) {
        e.preventDefault()
        const guess = parseInt(userinput.value)
        console.log(guess);
        validateGuess(guess)
    })
}

function validateGuess(guess) {
    //user entered number is vaild or not
    if (isNaN(guess)) {
        alert("Please enter a valid number")
    } else if (guess < 1) {
        alert("Please enter a valid number more than one")
    } else if (guess > 100) {
        alert("Please enter a less then 100")
    } else {
        prevGuess.push(guess)
        if (numGuess > 10) {
            displayGuess(guess)
            displayMesage(`Game over. Random number was ${randomNumber}`)
            endGame()
        } else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }

}

function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMesage(`you guessed it right🎉`)
        endGame()
    } else if (guess < randomNumber) {
        displayMesage(`Number is is  TOOOO low ☹`)
    } else if (guess > randomNumber) {
        displayMesage(`Number is is  TOOOO High ☹`)
    }
}

function displayGuess(guess) {
    userinput.value = ''
    guessSlot.innerHTML += `${guess},  `
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`
}

function displayMesage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame() {
    userinput.value = ''
    userinput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`
    startOver.appendChild(p)
    playGame = false
    newGame()
}

function newGame() {
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener("click", function (e) {
        randomNumber = parseInt(Math.random() * 100 + 1)
        prevGuess = []
        numGuess = 1
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11 - numGuess},  `
        userinput.removeAttribute('disable')
        startOver.replaceChild(p)
        playGame = true;
    })
}

