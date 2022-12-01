/* eslint-disable */
const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Card = require('../src/Card')

class Game {
  constructor(round) {
    this.currentRound = round
  }
  createCards() {
    let allCards = prototypeQuestions.map(card => {
      return new Card(card.id, card.question, card.answers, card.correctAnswer)
    })
    return allCards
  }

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }
  printQuestion(round) {
      util.main(round);
  }
}

module.exports = Game;