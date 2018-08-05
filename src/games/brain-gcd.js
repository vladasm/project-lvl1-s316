import { getRandomNumber, checkAnswer, main } from '..';

const getRightAnswer = (number1, number2) => {
  let result = 0;
  if (number2 > 0) {
    const divisor = number1 % number2; result = getRightAnswer(number2, divisor);
  } else { result = number1; }
  return result;
};

const playRound = () => {
  const number1 = getRandomNumber(100) + 1;
  const number2 = getRandomNumber(100) + 1;

  const question = `Question: ${number1} ${number2}`;

  const rightAnswer = String(getRightAnswer(number1, number2));
  return checkAnswer(question, rightAnswer);
};

const displayTask = () => console.log('Find the greatest common divisor of given numbers.');

const startGame = () => main(displayTask, playRound);

export default startGame;