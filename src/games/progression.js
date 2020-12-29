import readlineSync from 'readline-sync';
import { getIntRandomNumber } from '../utils/helpers.js';

const createProgression = (
  startProgression,
  endProgression,
  stepProgression,
) => {
  const result = [];
  for (let i = startProgression; i <= endProgression; i += stepProgression) {
    result.push(i);
  }
  return result;
};

const hideProgressionElement = (coll, index) => {
  const result = [];
  for (let i = 0; i < coll.length; i += 1) {
    if (index === i) {
      result.push('..');
    } else {
      result.push(coll[i]);
    }
  }
  return result;
};

export default () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}`);
  console.log('What number is missing in the progression?');

  for (let i = 0; i < 3; i += 1) {
    const startProgression = 0;
    const endProgression = 100;
    const stepProgression = getIntRandomNumber(Math.floor(endProgression / 10));

    const progressionCollection = createProgression(
      startProgression,
      endProgression,
      stepProgression,
    );
    const indexHiddenElement = getIntRandomNumber(progressionCollection.length - 1);
    const progressionCollectionWithHidden = hideProgressionElement(
      progressionCollection, indexHiddenElement,
    );

    const correctAnswer = progressionCollection[indexHiddenElement];

    console.log(
      `Question: ${progressionCollectionWithHidden.join(' ')}`,
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
