import readlineSync from 'readline-sync';

const main = () => {
	const name = greeting();
	answers(name);
}
export default main;

const greeting = () => {
	console.log('Welcome to the Brain Games!');
	console.log('Answer "yes" if number even otherwise answer "no".');

  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}!`);
  return name;
};

const answers = (name) => {
	const number = randomNumber();
  const answer = readlineSync.question('Your answer: ');

  const oppositeAnswer = (answer) => {
  	if (answer === 'yes'){
  		return 'no';
  	}
  	if (answer === 'no'){
  		return 'yes'
  	};
  };
  const otherAnswer = oppositeAnswer(answer);

  
  if (number%2 === 0 && answer === 'yes'){
	  return console.log(`Correct!`);
  };
  if (number%2 !== 0 && answer === 'no'){
	  return console.log(`Correct!`);
  }
  else return	console.log(`'${answer}' is wrong answer ;(. Correct answer was '${otherAnswer}'.
Let's try again, ${name}!`);
}

const randomNumber = () => {
  const number  = Math.floor(Math.random()*100);
  console.log(`Question: ${number}`);
  return number;
};
