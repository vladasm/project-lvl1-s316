import readlineSync from 'readline-sync';

const getName = () => {
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}!`);
  return name;
};

const getRandomNumber = () => Math.floor(Math.random() * 100);

const isEven = number => (number % 2 === 0);

const getRightAnswer = number => (isEven(number) ? 'yes' : 'no');

const playRound = () => {
  const question = getRandomNumber();

  console.log(`Question: ${question}`);
  const answer = readlineSync.question('Your answer: ');

  const rightAnswer = getRightAnswer(question);

  if (answer === rightAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
  return false;
};

const roundCount = 3;
const main = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".');
  const name = getName();
  let rightAnswerCount = 0;

  for (rightAnswerCount = 0; rightAnswerCount < roundCount; rightAnswerCount += 1) {
    if (!playRound()) {
      console.log(`Let's try again, ${name}!`);
      break;
    }
  }
  if (rightAnswerCount === roundCount) { console.log(`Congratulations, ${name}!`); }
};

export default main;
