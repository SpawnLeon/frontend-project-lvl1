import readlineSync from 'readline-sync';
import { isPrime, getIntRandomNumber } from '../utils/helpers.js';

export default () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}`);
  console.log('"yes" if given number is prime. Otherwise answer "no"');
  for (let i = 0; i < 3; i += 1) {
    const currentRandomNumber = getIntRandomNumber();
    const correctAnswer = isPrime(currentRandomNumber) ? 'yes' : 'no';
    console.log(`Question: ${currentRandomNumber}`);
    const answer = readlineSync.question('Your answer: ');
    if (correctAnswer !== answer) {
      console.log('"yes" is wrong answer ;(. Correct answer was "no".');
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};
