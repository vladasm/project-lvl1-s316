import readlineSync from 'readline-sync';
import { getRandomNumber, checkRightAnswer } from '..';

const isEven = number => (number % 2 === 0);

const getRightAnswer = number => (isEven(number) ? 'yes' : 'no');

export const playRound = () => {
  const question = getRandomNumber(100);

  console.log(`Question: ${question}`);
  const answer = readlineSync.question('Your answer: ');

  const rightAnswer = getRightAnswer(question);
  return checkRightAnswer(answer, rightAnswer);
};

export const displayTask = () => console.log('Answer "yes" if number even otherwise answer "no".');
