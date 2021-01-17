// IMPORT MODULES under test here:
import { guessNumber } from '../app.js';

const test = QUnit.test;

test('should return Too High! when randomNumber is 1 and guessNumber is 4', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'Too High!';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = guessNumber(1, 4);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
    
});

test('should return Too low! when randomNumber is 5 and guessNumber is 10', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'Too low!';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = guessNumber(5, 10);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('should return You win! when randomNumber is 8 and guessNumber is 8', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'You win!';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = guessNumber(8, 8);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
