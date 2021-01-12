# guessing game

#HTMl setup
    1. Number input
    2. Button
    3. Guesses remaining span
    4. Too high/ too low/ you got it



1. get the DOM elements
2. Initialize the global state ('let')
    -Random number: n
    -Guesses remaining: 4
3. Add event listener to the button
    -onclick
        -state decreases remaining guesses ('--')
        -stores guess in a variable ('someInput.value')
        -compare guess to the random number ('math.ceil(Math.random() * 20)')
        -if user guess is greater than inject ('too high')
            -Update the View
                -Check if there are any guesses left
                -if not, disable input ('losing message')
                -change the remaining guesses ('textContent')
        -if user guess is less than inject ('too low')
            -Update the View
                -Check if there are any guesses left
                -if not, disable input ('losing message')
                -change the remaining guesses ('textContent')
        -if user guess is equal to inject ('you got it')
            -Update the View
                -Check if there are any guesses left
                -if not, disable input ('losing message')
                -change the remaining guesses ('textContent')
4. Reset Button: Add an eventlistener
    -onclick
        -reset remaining guesses to 4
        -create a new random number
        -update the View
            -re-enable the inputs if they're disabled
            -update the game text

