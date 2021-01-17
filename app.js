
// import functions and grab DOM elements
//import { guessNumber } from '/utils.js';
const guessesSpace = document.getElementById('guesses-space');
const guessResults = document.getElementById('guess-results');
const numberGuessed = document.getElementById('number-guessed');
const guessButton = document.getElementById('guess-button');

let randomNumber = Math.ceil(Math.random() * 20);
let guessesRemaining = 4;

guessButton.addEventListener('click', () => {
    guessNumber(randomNumber, numberGuessed);
    guessesSpace.textContent = guessesRemaining;
});

function guessNumber(randomNumber, numberGuessed){
    
    --guessesRemaining;

    if (guessesRemaining < 1){
        guessButton.disabled = true;
        guessResults.textContent = 'No more guesses';
    }else if (Number(numberGuessed.value) > randomNumber){
        guessResults.textContent = 'Too High!';
    } else if (Number(numberGuessed.value) === randomNumber){
        guessResults.textContent = 'You win!';
    } else if (Number(numberGuessed.value) < randomNumber){
        guessResults.textContent = 'Too low!';
    }
}
