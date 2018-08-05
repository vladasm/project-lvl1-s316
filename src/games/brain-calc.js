import readlineSync from 'readline-sync';
import { getRandomNumber, checkRightAnswer } from '..';

const getRightAnswer = (number1, number2, operation) => {
  let result = 0;
  if (operation === '+') { result = number1 + number2; }
  if (operation === '-') { result = number1 - number2; }
  if (operation === '*') { result = number1 * number2; }
  return result;
};

export const playRound = () => {
  const number1 = getRandomNumber(100);
  const number2 = getRandomNumber(100);
  const operation = ['+', '-', '*'][getRandomNumber(3)];

  console.log(`Question: ${number1} ${operation} ${number2}`);
  const answer = readlineSync.question('Your answer: ');

  const rightAnswer = String(getRightAnswer(number1, number2, operation));
  return checkRightAnswer(answer, rightAnswer);
};

export const displayTask = () => console.log('What is the result of the expression?');
