/* eslint-disable */
const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

class Game {
  constructor() {
    this.currentRound = this.createRound()
    this.currentCard = this.createCards();
    this.currentDeck = this.createDeck();
  }
  start() {
    this.createCards()
    this.createDeck()
    this.createRound()
    this.printMessage(this.createDeck(), this.currentRound)
  }
  createCards() {
    let allCards = prototypeQuestions.map(card => {
      return new Card(card.id, card.question, card.answers, card.correctAnswer)
    })
    return allCards
  }
  createDeck() {
    let newDeck = new Deck(this.createCards())
    return newDeck
  }
  createRound() {
    let newDeck = this.createDeck()
    let newRound = new Round(newDeck)
    return newRound
  }
  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
    if(round.turns === deck.length) {
      round.endRound()
    } else if (round.turns !== deck.length) {
      this.printQuestion(round)
    }
  }
  printQuestion(round) {
      util.main(round);
  }
}

module.exports = Game;