import readlineSync from 'readline-sync';

export const getName = () => {
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}!`);
  return name;
};

export const getRandomNumber = n => Math.floor(Math.random() * n);

const playRound = (generateData, getQuestion, getRightAnswer) => {
  const questionData = generateData();

  console.log(questionData(getQuestion));
  const answer = readlineSync.question('Your answer: ');
  const rightAnswer = questionData(getRightAnswer);

  if (answer === rightAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
  return false;
};

const roundCount = 3;
export const main = (displayTask, generateData, getQuestion, getRightAnswer) => {
  console.log('Welcome to the Brain Games!');
  console.log(displayTask());
  const name = getName();

  for (let rightAnswerCount = 0; rightAnswerCount < roundCount; rightAnswerCount += 1) {
    if (!playRound(generateData, getQuestion, getRightAnswer)) {
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
