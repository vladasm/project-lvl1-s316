import readlineSync from 'readline-sync';

const getName = () => {
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}!`);
  return name;
};

const getRandomNumber = n => Math.floor(Math.random() * n);

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

  console.log(`Question: ${number1} ${operation} ${number2}`);
  const answer = readlineSync.question('Your answer: ');

  const rightAnswer = String(getRightAnswer(number1, number2, operation));

  if (answer === rightAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
  return false;
};

const getTask = () => console.log('What is the result of the expression?');

const roundCount = 3;
const main = () => {
  console.log('Welcome to the Brain Games!');
  getTask();
  const name = getName();

  for (let rightAnswerCount = 0; rightAnswerCount < roundCount; rightAnswerCount += 1) {
    if (!playRound()) {
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default main;
