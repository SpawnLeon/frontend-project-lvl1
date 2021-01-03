import { getIntRandomNumber, gcd } from '../utils/helpers.js';

export default () => {
  const rules = 'Find the greatest common divisor of given numbers.';
  const firstNumber = getIntRandomNumber();
  const secondNumber = getIntRandomNumber();
  const correctAnswer = gcd(firstNumber, secondNumber);
  const question = `Question: ${firstNumber} ${secondNumber}`;
  return { rules, correctAnswer, question };
};
