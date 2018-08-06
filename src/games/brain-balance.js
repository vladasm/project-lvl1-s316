import { getRandomNumber, main } from '..';

const getArray = number => String(number).split('').map(Number);

const getRightAnswer = (number) => {
  const inputArray = getArray(number);

  const iter = (array) => {
    const maxDigit = Math.max(...array);
    const minDigit = Math.min(...array);
    if (maxDigit - minDigit <= 1) {
      return array.sort().join('');
    }
    const balanceNum = Math.floor((maxDigit - minDigit) / 2);
    const minPosion = array.indexOf(minDigit);
    const maxPosion = array.indexOf(maxDigit);
    const result = array;
    result[minPosion] += balanceNum;
    result[maxPosion] -= balanceNum;
    return iter(result);
  };

  return iter(inputArray);
};

const getQuestion = number => `Question: ${number}`;

const generateData = () => {
  const number = getRandomNumber(1000);

  return fn => fn(number);
};

const displayTask = () => console.log('Balance the given number.');

const startGame = () => main(displayTask, generateData, getQuestion, getRightAnswer);

export default startGame;
