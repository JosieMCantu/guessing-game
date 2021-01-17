export function guessNumber(randomNumber, guessesRemaining){
    const guessesSpace = document.getElementById('guesses-space');
    const guessResults = document.getElementById('guess-results');
    const numberGuessed = document.getElementById('number-guessed');

    --guessesRemaining;
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
}
