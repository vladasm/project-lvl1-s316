import readlineSync from 'readline-sync';

const getName = () => {
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}!`);
  return name;
};

const getRandomNumber = () => Math.floor(Math.random() * 100);

const isEven = number => (number % 2 === 0);

const getRightAnswer = number => (isEven(number) ? 'yes' : 'no');

const playRound = (name) => {
  const question = getRandomNumber();

  console.log(`Question: ${question}`);
  const answer = readlineSync.question('Your answer: ');

  const rightAnswer = getRightAnswer(question);

  if (answer === rightAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'. 
Let's try again, ${name}!`);
  return false;
};

const roundsCount = 3;
const main = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".');
  const name = getName();
  let rightAnswerCount = 0;

  while (rightAnswerCount < roundsCount && playRound(name)) { rightAnswerCount += 1; }
  if (rightAnswerCount === roundsCount) { console.log(`Congratulations, ${name}!`); }
};

export default main;
