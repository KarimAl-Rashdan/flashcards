/* eslint-disable */
const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Card = require('../src/Card');
const Deck = require('./Deck');

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
  createDeck() {
    let newDeck = new Deck(this.createCards())
    console.log(newDeck)
    return newDeck
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