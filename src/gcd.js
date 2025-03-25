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
    const num1 = getRandomNumber(1, 100);
    const num2 = getRandomNumber(1, 100);
    const question = `${num1} ${num2}`;
    const answer = String(gcd(num1, num2));
    return [question, answer];
};

export default () => runGame(description, generateRound);
