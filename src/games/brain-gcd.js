import { getRandomNumber, main } from '..';

const getRightAnswer = (number1, number2) => {
  let result = 0;
  if (number2 > 0) {
    const divisor = number1 % number2;
    result = getRightAnswer(number2, divisor);
  } else { result = number1; }
  return String(result);
};

const getQuestion = (number1, number2) => `Question: ${number1} ${number2}`;

const generateData = () => {
  const number1 = getRandomNumber(100) + 1;
  const number2 = getRandomNumber(100) + 1;

  return fn => fn(number1, number2);
};

const displayTask = () => console.log('Find the greatest common divisor of given numbers.');

const startGame = () => main(displayTask, generateData, getQuestion, getRightAnswer);

export default startGame;
