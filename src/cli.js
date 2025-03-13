import readlineSync from 'readline-sync';

export const greetings = () => {
  console.log("brain-games\nWelcome to the Brain Games!");
  var name = readlineSync.question('May I have your name? ');
  console.log('Hello, ' + name + '!');
};
