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

const getIntRandomNumber = (number = MAX_INT_RANDOM_NUMBER) => Math.ceil(Math.random() * number);

const getRandMapKey = (map) => {
  const mapKeys = Object.keys(map);
  const mapLength = mapKeys.length;
  const randomNumber = getIntRandomNumber(mapLength - 1);
  return mapKeys[randomNumber];
};

const gcd = (a, b) => {
  if (!b) {
    return a;
  }
  return gcd(b, a % b);
};

export {
  isEven,
  getIntRandomNumber,
  getRandMapKey,
  gcd,
  isPrime,
};
