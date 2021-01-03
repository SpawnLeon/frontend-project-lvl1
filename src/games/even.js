import { isEven, getIntRandomNumber } from '../utils/helpers.js';

export default () => {
  const rules = 'Answer "yes" if the number is even, otherwise answer "no"';
  const currentRandomNumber = getIntRandomNumber();
  const correctAnswer = isEven(currentRandomNumber) ? 'yes' : 'no';
  const question = `Question: ${currentRandomNumber}`;
  return { rules, correctAnswer, question };
};
