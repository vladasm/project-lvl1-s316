import { getRandomNumber, checkAnswer, main } from '..';

const getRightAnswer = (number1, number2, operation) => {
  let result = 0;
  if (operation === '+') { result = number1 + number2; }
  if (operation === '-') { result = number1 - number2; }
  if (operation === '*') { result = number1 * number2; }
  return result;
};

const playRound = () => {
  const number1 = getRandomNumber(100);
  const number2 = getRandomNumber(100);
  const operation = ['+', '-', '*'][getRandomNumber(3)];

  const question = `Question: ${number1} ${operation} ${number2}`;

  const rightAnswer = String(getRightAnswer(number1, number2, operation));
  return checkAnswer(question, rightAnswer);
};

const displayTask = () => console.log('What is the result of the expression?');

const startGame = () => main(displayTask, playRound);

export default startGame;
