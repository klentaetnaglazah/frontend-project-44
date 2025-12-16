import { greetings, askQuestion } from '../src/cli.js';
import { getRandomNumber } from '../src/utils.js';

const isPrime = (num) => {
    if (num <= 1) return false;
    if (num <= 3) return true;

    if (num % 2 === 0 || num % 3 === 0) return false;

    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return false;
};

export const playPrimeGame = async () => {
    const name = greetings();
    console.log('Anser "yes" if given number is prime. Otherwise answer "no".');

    const roundsCount = 3;

    for (let i = 0; i < roundsCount; i += 1) {
        const number = getRandomNumber(1, 100);
        console.log(`Question: ${number}`);
        const userAnswer = await askQuestion('Your answer: ');
        const correctAnswer = isPrime(number) ? 'yes' : 'no';

        if (userAnswer.toLowerCase() === correctAnswer) {
            console.log('Correct!');
        } else {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
            console.log(`Let's try again, ${name}!`);
            return;
        }
    }
    console.log(`Congratulations, ${name}!`);
};
