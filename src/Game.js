/* eslint-disable */
const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Card = require('../src/Card');
const Deck = require('./Deck');
const Round = require('./Round');

class Game {
  constructor(round) {
    this.currentRound = round
  }
  start() {
    this.createCards
    this.createDeck()
    this.createRound()
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
  createRound() {
    let newDeck = this.createDeck()
    let newRound = new Round(newDeck)
    this.printMessage(newDeck, newRound)
    this.printQuestion(newRound)
    return newRound
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