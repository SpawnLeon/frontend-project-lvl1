const MAX_INT_RANSOM_NUMBER = 100;

const isEven = (number) => number % 2 === 0;

const getIntRandomNumber = (number = MAX_INT_RANSOM_NUMBER) => Math.ceil(Math.random() * number);

const getRandMapKey = (map) => {
  const mapKeys = Object.keys(map);
  const mapLength = mapKeys.length;
  const randomNumber = getIntRandomNumber(mapLength - 1);
  return mapKeys[randomNumber];
};

export { isEven, getIntRandomNumber, getRandMapKey };
