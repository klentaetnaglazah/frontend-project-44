import { greetings, askQuestion } from '../src/cli.js'

const generateProgression = () => {
  const start = Math.floor(Math.random() * 20) + 1
  const step = Math.floor(Math.random() * 10) + 1
  const length = Math.floor(Math.random() * 6) + 5
  const progression = []

  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step)
  }

  const hiddenIndex = Math.floor(Math.random() * length)
  const hiddenValue = progression[hiddenIndex]
  progression[hiddenIndex] = '..'

  return {
    progression: progression.join(' '),
    hiddenValue: hiddenValue.toString(),
  }
}

export const playProgressionGame = () => {
  const name = greetings()
  console.log('What number is missing in the progression?')

  const roundCount = 3
  let correctAnswers = 0

  while (correctAnswers < roundCount) {
    const { progression, hiddenValue } = generateProgression()
    console.log(`Question: ${progression}`)
    const userAnswer = askQuestion('Your answer: ')

    if (userAnswer === hiddenValue) {
      console.log('Correct!')
      correctAnswers += 1
    } 
    else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${hiddenValue}'.`)
      console.log(`Let's try again, ${name}!`)
      return
    }
  }
  console.log(`Congratulations, ${name}!`)
}
