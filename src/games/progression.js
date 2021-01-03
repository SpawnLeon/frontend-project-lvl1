import { getIntRandomNumber, createProgression, hideProgressionElement } from '../utils/helpers.js';

export default () => {
  const rules = 'What number is missing in the progression?';

  const startProgression = getIntRandomNumber(0, 50);

  const stepProgression = getIntRandomNumber(20);
  const progressionCollection = createProgression(
    startProgression,
    stepProgression,
  );
  const indexHiddenElement = getIntRandomNumber(0, progressionCollection.length - 1);
  const progressionCollectionWithHidden = hideProgressionElement(
    progressionCollection, indexHiddenElement,
  );
  const correctAnswer = progressionCollection[indexHiddenElement];
  const question = `Question: ${progressionCollectionWithHidden.join(' ')}`;
  return { rules, correctAnswer, question };
};
