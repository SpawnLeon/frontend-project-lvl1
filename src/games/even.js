import readlineSync from 'readline-sync';

const isEven = (number) => number % 2 === 0;

const getIntRandomNumber = (number = 100) => Math.ceil(Math.random() * number);

export default () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}`);
  console.log('Answer "yes" if the number is even, otherwise answer "no"');
  for (let i = 0; i < 3; i += 1) {
    const currentRandomNumber = getIntRandomNumber();
    const correctAnswer = isEven(currentRandomNumber) ? 'yes' : 'no';
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
