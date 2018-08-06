import { getRandomNumber, main } from '..';

const getRightAnswer = (number1, number2, operation) => {
  let result = 0;
  if (operation === '+') { result = number1 + number2; }
  if (operation === '-') { result = number1 - number2; }
  if (operation === '*') { result = number1 * number2; }
  return String(result);
};

const getQuestion = (number1, number2, operation) => `Question: ${number1} ${operation} ${number2}`;

const generateData = () => {
  const number1 = getRandomNumber(100);
  const number2 = getRandomNumber(100);
  const operation = ['+', '-', '*'][getRandomNumber(3)];

  return fn => fn(number1, number2, operation);
};

const displayTask = () => 'What is the result of the expression?';

const startGame = () => main(displayTask, generateData, getQuestion, getRightAnswer);

export default startGame;
