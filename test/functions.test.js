// IMPORT MODULES under test here:
import { addExclamationPoints, myFunction, multiplyBySeven, multiplyBy12ThenHalve, divideThenMultiply, returnAsAnArray, returnAsAString, makeLuckyGreeting, getSecondItem, getLastItem, renderDogLI, renderDogDiv, } from '../functions.js';

const { test, skip } = QUnit;

test('this test should pass', (expect) => {
    const expected = true;

    const actual = myFunction();

    expect.equal(actual, expected, 'true = true');
});

test('this test should add exclamation points to a string', (expect) => {
    const expected = 'hi niki!!!';

    const actual = addExclamationPoints('hi niki');

    expect.equal(actual, expected);
});

test ('this test should take a number and mutiply it by 7', (expect) =>{
    const expected = 21; 

    const actual = multiplyBySeven(3);

    expect.equal(actual, expected);
});