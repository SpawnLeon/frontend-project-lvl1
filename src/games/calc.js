import readlineSync from 'readline-sync';
import { getIntRandomNumber, getRandMapKey } from '../utils/helpers.js';

const operationMap = {
  '+': {
    format: (op1, op2) => `${op1} + ${op2}`,
    process: (op1, op2) => op1 + op2,
  },
  '-': {
    format: (op1, op2) => `${op1} - ${op2}`,
    process: (op1, op2) => op1 - op2,
  },
  '*': {
    format: (op1, op2) => `${op1} * ${op2}`,
    process: (op1, op2) => op1 * op2,
  },
  // '/': {
  //   format: (op1, op2) => `${op1} / ${op2}`,
  //   process: (op1, op2) => op1 / op2,
  // },
};

export default () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}`);
  console.log('What is the result of the expression?');

  for (let i = 0; i < 3; i += 1) {
    const firstOperand = getIntRandomNumber();
    const secondOperand = getIntRandomNumber();
    const randMapKey = getRandMapKey(operationMap);

    const {
      process: operationProcess,
      format: operationFormat,
    } = operationMap[randMapKey];

    const correctAnswer = operationProcess(firstOperand, secondOperand);

    console.log(
      `Question: ${operationFormat(firstOperand, secondOperand)}`,
    );
    const answer = readlineSync.question('Your answer: ');
    if (correctAnswer !== Number(answer)) {
      console.log(
        `"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`,
      );
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};
