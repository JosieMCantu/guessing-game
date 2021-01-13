// import functions and grab DOM elements
const numberGuessed = document.getElementById('number-guessed');
const guessButton = document.getElementById('guess-button');
const guessesSpace = document.getElementById('guesses-space');
const guessResults = document.getElementById('guess-results');

//const resetButton = document.getElementById('reset-button');

// initialize state
let randomNumber = Math.ceil(Math.random() * 20);
let guessesRemaining = 4;

// set event listeners to update state and DOM
guessButton.addEventListener('click', () => {
    console.log(randomNumber);
    guessesRemaining--;
    guessesSpace.textContent = guessesRemaining;
    if (Number(numberGuessed.value) > randomNumber){
        guessResults.textContent = 'Too High!';
    } else if (Number(numberGuessed.value) === randomNumber){
        guessResults.textContent = 'You win!';
    } else if (Number(numberGuessed.value) < randomNumber){
        guessResults.textContent = 'Too low!';
    } else if (guessesRemaining < 1){
        guessButton.disabled = true;
        guessResults.textContent = 'No more guesses';
    }
});
// set reset button