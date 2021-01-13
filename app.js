
// import functions and grab DOM elements
import { guessNumber } from '/utlis.js';

const guessButton = document.getElementById('guess-button');

let randomNumber = Math.ceil(Math.random() * 20);
let guessesRemaining = 4;

guessButton.addEventListener('click', () => {
    guessNumber(randomNumber, guessesRemaining)
});
