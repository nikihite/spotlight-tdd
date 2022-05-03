// IMPORT MODULES under test here:
import { addExclamationPoints, myFunction, multiplyBySeven, multiplyBy12ThenHalve, divideThenMultiply, returnAsAnArray, returnAsAString, makeLuckyGreeting, getSecondItem, getLastItem, renderDogLI, renderDogDiv, } from '../functions.js';

const { test, skip } = QUnit;

skip('this test should pass', (expect) => {
    const expected = true;

    const actual = myFunction();

    expect.equal(actual, expected, 'true = true');
});

skip('this test should add exclamation points to a string', (expect) => {
    const expected = 'hi niki!!!';

    const actual = addExclamationPoints('hi niki');

    expect.equal(actual, expected);
});

skip ('this test should take a number and mutiply it by 7', (expect) => {
    const expected = 21; 

    const actual = multiplyBySeven(3);

    expect.equal(actual, expected);
});

skip ('this test should take a number and multiply that number by 12 and then, divide the number by half', (expect) => {
    const expected = 24;

    const actual = multiplyBy12ThenHalve(4);

    expect.equal(actual, expected);
});

skip ('this test should take 3 numbers, divide first by second; then multiply result by third number', (expect) => {

    const expected = 15;

    const actual = divideThenMultiply(25, 5, 3,);

    expect.equal(actual, expected);
    
});

skip ('this test should take in 3 numbers and return them in an array', (expect) => {

    const expected = [3, 2, 1];

    const actual = returnAsAnArray(3, 2, 1);

    expect.deepEqual(actual, expected);
});

skip ('this test should take 3 separate numbers and return them as one big number string', (expect) => {
    const expected = 732;

    const actual = returnAsAString(7, 3, 2,);

    expect.equal(actual, expected);
});

test ('this test should take 2 numbers and return a greeting with the 2 numbers added together', (expect) => {
    const expected = 'Your lucky number is 19';

    const actual = makeLuckyGreeting(10, 9);

    expect.equal(actual, expected);
});