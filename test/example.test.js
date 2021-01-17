// IMPORT MODULES under test here:
import { guessNumber } from '../app.js';

const test = QUnit.test;

test('the function should return Too High! when randomNumber is 1 and guessNumber is 4', (expect) => {
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

// test('time to test a function', (expect) => {
//     //Arrange
//     // Set up your arguments and expectations
//     const expected = true;
    
//     //Act 
//     // Call the function you're testing and set the result to a const
//     const actual = false;

//     //Expect
//     // Make assertions about what is expected versus the actual result
//     expect.equal(actual, expected);
// });

// test('time to test a function', (expect) => {
//     //Arrange
//     // Set up your arguments and expectations
//     const expected = true;
    
//     //Act 
//     // Call the function you're testing and set the result to a const
//     const actual = false;

//     //Expect
//     // Make assertions about what is expected versus the actual result
//     expect.equal(actual, expected);
// });
