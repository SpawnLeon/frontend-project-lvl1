import { isPrime, getIntRandomNumber } from '../utils/helpers.js';

export default () => {
  const rules = '"yes" if given number is prime. Otherwise answer "no"';

  const currentRandomNumber = getIntRandomNumber();
  const correctAnswer = isPrime(currentRandomNumber) ? 'yes' : 'no';
  const question = `Question: ${currentRandomNumber}`;
  return { rules, correctAnswer, question };
};
