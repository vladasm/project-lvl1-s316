import { getRandomNumber, checkAnswer, main } from '..';

const isEven = number => (number % 2 === 0);

const getRightAnswer = number => (isEven(number) ? 'yes' : 'no');

export const playRound = () => {
	const number = getRandomNumber(100)
  const question = `Question: ${number}`;

  const rightAnswer = getRightAnswer(number);
  return checkAnswer(question, rightAnswer);
};

export const displayTask = () => console.log('Answer "yes" if number even otherwise answer "no".');

const startGame = () => main(displayTask, playRound);

export default startGame;