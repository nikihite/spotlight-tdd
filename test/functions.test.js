// IMPORT MODULES under test here:
import { addExclamationPoints, myFunction } from '../functions.js';

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
