import { getRandomNumber } from "./utils.js";
import runGame from './index.js';

const description = 'Find the greatest common divisor of given numbers.';

const gcd = (a, b) => {
    if (!b) {
        return a;
    }
    return gcd(b, a % b);
};

const generateRound = () => {
    const number1 = getRandomNumber(1, 100);
    const number2 = getRandomNumber(1, 100);
    const question = `${number1} ${number2}`;
    const answer = String(gcd(number1, number2));
    return [question, answer];
};

export default () => runGame(description, generateRound);
