import readlineSync from 'readline-sync';

const greeting = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".');

  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}!`);
  return name;
};

const randomNumber = () => {
  const number = Math.floor(Math.random() * 100);
  console.log(`Question: ${number}`);
  return number;
};

const oppositeAnswer = answer => (answer === 'yes' ? 'no' : 'yes');

const answers = (name) => {
  const number = randomNumber();
  const answer = readlineSync.question('Your answer: ');

  const otherAnswer = oppositeAnswer(answer);
  if (number % 2 === 0 && answer === 'yes') {
    console.log('Correct!');
    return true;
  }
  if (number % 2 !== 0 && answer === 'no') {
    console.log('Correct!');
    return true;
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${otherAnswer}'. 
Let's try again, ${name}!`);
  return false;
};

const main = () => {
  const name = greeting();
  let isCorrect = answers(name);
  for (let i = 1; i <= 2; i += 1) {
    if (isCorrect) {
      isCorrect = answers(name);
    }
    if (!isCorrect) {
      return false;
    }
  }
  console.log(`Congratulations, ${name}!`);
  return true;
};

export default main;
