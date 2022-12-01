const Turn = require("../src/Turn")
const Deck = require('../src/Deck')

/* eslint-disable */
class Round {
  constructor(deck) {
  this.deck = deck.listOfCards,
  this.currentCard = deck.listOfCards[0],
  this.turns = 0,
  this.incorrectGuesses = [],
  this.correctGuesses = []
  }
  returnCurrentCard() {
    return this.currentCard
  }
  takeTurn(userGuess) {
    let newTurn = new Turn(userGuess, this.currentCard)
    let feedback = newTurn.giveFeedback()
    if(feedback.valueOf() === 'incorrect!') {
      this.incorrectGuesses.push(newTurn.card.id)
    } else if(feedback.valueOf() === 'correct!') {
      this.correctGuesses.push(newTurn.card.id)
    }
    this.turns += 1
    this.currentCard = this.deck[this.turns]
    return feedback
  }
  calculatePercentCorrect() {
  let deck1 = new Deck(this.deck)
  let correctGuessLength = this.correctGuesses.length
  let deck1Length = deck1.countCards()
  let percentage = correctGuessLength / deck1Length * 100
  return `${percentage.toFixed(0)}%`
  }
}
// calculatePercentCorrect: method that calculates and returns the percentage of correct guesses

module.exports = Round