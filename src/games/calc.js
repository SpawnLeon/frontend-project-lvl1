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
};

export default () => {
  const rules = 'What is the result of the expression?';
  const firstOperand = getIntRandomNumber();
  const secondOperand = getIntRandomNumber();
  const randMapKey = getRandMapKey(operationMap);
  const { process: operationProcess, format: operationFormat } = operationMap[randMapKey];
  const correctAnswer = operationProcess(firstOperand, secondOperand);
  const question = `Question: ${operationFormat(firstOperand, secondOperand)}`;
  return { rules, correctAnswer, question };
};
