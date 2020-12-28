import readlineSync from 'readline-sync';
import { getIntRandomNumber, gcd } from '../utils/helpers.js';

export default () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}`);
  console.log('Find the greatest common divisor of given numbers.');

  for (let i = 0; i < 3; i += 1) {
    const firstNumber = getIntRandomNumber();
    const secondNumber = getIntRandomNumber();
    const correctAnswer = gcd(firstNumber, secondNumber);

    console.log(
      `Question: ${firstNumber} ${secondNumber}`,
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
