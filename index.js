
/* eslint-disable */
// This is where your project starts.

console.log('Your project is running...'); 

const Game = require('./src/Game');
function startGame() {
  let newGame = new Game();
  return newGame.start();
}

startGame();