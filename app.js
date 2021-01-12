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
    guessesRemaining--;
    guessesSpace.textContent = guessesRemaining;
    if (guessesRemaining < 1) {
        guessButton.disabled = true;
        guessResults.textContent = 'Game Over';
    }
});










    //    if (numberGuessed > randomNumber) {
         
    //         guessResults.textContent = 'Too High!';
    //          else {
    //             ;
    //         }  
    //    }  


// check if there are guesses left
                //if not disable input
            // change the remaining guesses

        // } else if (numberGuessed !== randomNumber) {
        //     guessResults.textContent = 'Nope!';
        // } else (numberGuessed === randomNumber) 
        //     guessResults.textContent = 'Yes! you win!';
        //});
