import { getRandomNumber, main } from '..';

const isEven = number => (number % 2 === 0);

const getRightAnswer = number => (isEven(number) ? 'yes' : 'no');

const getQuestion = number => `Question: ${number}`;

const generateData = () => {
  const number = getRandomNumber(100);

  return fn => fn(number);
};

export const displayTask = () => 'Answer "yes" if number even otherwise answer "no".';

const startGame = () => main(displayTask, generateData, getQuestion, getRightAnswer);

export default startGame;
