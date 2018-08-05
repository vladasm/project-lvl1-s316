import readlineSync from 'readline-sync';
import { getRandomNumber, checkRightAnswer } from '..';

const getRightAnswer = (number1, number2) => {
  let result = 0;
  if (number2 > 0) {
    const divisor = number1 % number2; result = getRightAnswer(number2, divisor);
  } else { result = number1; }
  return result;
};

export const playRound = () => {
  const number1 = getRandomNumber(100) + 1;
  const number2 = getRandomNumber(100) + 1;

  console.log(`Question: ${number1} ${number2}`);
  const answer = readlineSync.question('Your answer: ');

  const rightAnswer = String(getRightAnswer(number1, number2));
  return checkRightAnswer(answer, rightAnswer);
};

export const displayTask = () => console.log('Find the greatest common divisor of given numbers.');
