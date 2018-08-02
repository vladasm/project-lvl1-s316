import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
console.log('Answer "yes" if number even otherwise answer "no".');

const getName = () => {
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}!`);
  return name;
};


const getRandomNumber = () => Math.floor(Math.random() * 100);

const getRightAnswer = number => (number % 2 === 0 ? 'yes' : 'no');

const playRound = (name) => {
  const number = getRandomNumber();

  console.log(`Question: ${number}`);
  const answer = readlineSync.question('Your answer: ');

  const rightAnswer = getRightAnswer(number);

  if (answer === rightAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'. 
Let's try again, ${name}!`);
  return false;
};

const main = () => {
  const name = getName();
  let rightAnswerCount = 0;
  const numberCount = 3;

  while (rightAnswerCount < numberCount && playRound(name)) { rightAnswerCount += 1; }
  if (rightAnswerCount === numberCount) { console.log(`Congratulations, ${name}!`); }
};

export default main;
