const MIN_INT_RANDOM_NUMBER = 0;
const MAX_INT_RANDOM_NUMBER = 100;

const isEven = (number) => number % 2 === 0;

const isPrime = (number) => {
  if (number === 1) return false;
  const upperLimit = Math.ceil(number / 2);
  for (let i = 2; i < upperLimit; i += 1) {
    if (number % i === 0) return false;
  }
  return true;
};

const getIntRandomNumber = (
  min = MIN_INT_RANDOM_NUMBER,
  max = MAX_INT_RANDOM_NUMBER,
) => Math.ceil(Math.random() * (max - min) + min);

const getRandMapKey = (map) => {
  const mapKeys = Object.keys(map);
  const mapLength = mapKeys.length;
  const randomNumber = getIntRandomNumber(0, mapLength - 1);
  return mapKeys[randomNumber];
};

const gcd = (a, b) => {
  if (!b) {
    return a;
  }
  return gcd(b, a % b);
};

const createProgression = (
  startProgression,
  stepProgression,
  countProgressionItem = 5,
) => {
  const result = [];
  let counter = 0;
  let added = startProgression;
  while (counter < countProgressionItem) {
    result.push(added);
    counter += 1;
    added += stepProgression;
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

export {
  isEven,
  getIntRandomNumber,
  getRandMapKey,
  gcd,
  isPrime,
  createProgression,
  hideProgressionElement,
};
