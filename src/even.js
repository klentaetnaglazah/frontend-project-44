import { greetings, askQuestion } from '../src/cli.js'
import { getRandomNumber } from '../src/utils.js'

const isEven = number => number % 2 === 0

export const playEvenGame = () => {
  const name = greetings()
  console.log('Answer "yes" if the number is even, otherwise answer "no".')

  let correctAnswersCount = 0

  while (correctAnswersCount < 3) {
    const number = getRandomNumber(1, 100)
    console.log(`Question: ${number}`)
    const userAnswer = askQuestion('Your answer: ')
    const correctAnswer = isEven(number) ? 'yes' : 'no'

    if (userAnswer === correctAnswer) {
      console.log('Correct!')
      correctAnswersCount += 1
    } 
    else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
      console.log(`Let's try again, ${name}!`)
      return
    }
  }

  console.log(`Congratulations, ${name}!`)
}
