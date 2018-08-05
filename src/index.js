import readlineSync from 'readline-sync';

export const getName = () => {
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}!`);
  return name;
};

export const getRandomNumber = n => Math.floor(Math.random() * n);

export const checkRightAnswer = (answer, rightAnswer) => {
  if (answer === rightAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
  return false;
};

const roundCount = 3;
const main = (displayTask, playRound) => {
  console.log('Welcome to the Brain Games!');
  displayTask();
  const name = getName();
  displayTask();

  for (let rightAnswerCount = 0; rightAnswerCount < roundCount; rightAnswerCount += 1) {
    if (!playRound()) {
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default main;
