import readlineSync from 'readline-sync';

const NUMBER_ATTEMPTS = 3;

const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}`);
  return userName;
};

export default (game) => {
  const userName = greeting();
  for (let i = 0; i < NUMBER_ATTEMPTS; i += 1) {
    const { correctAnswer, question, rules } = game(userName);
    console.log(rules);
    console.log(question);
    const answer = readlineSync.question('Your answer: ');
    if (correctAnswer !== answer) {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};
