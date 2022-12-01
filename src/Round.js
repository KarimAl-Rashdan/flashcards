const Turn = require("./Turn")

/* eslint-disable */
class Round {
  constructor(deck) {
  this.deck = deck.listOfCards,
  this.currentCards = deck.listOfCards[0],
  this.turns = 0,
  this.incorrectGuesses = []
  }
  returnCurrentCard() {
    return this.currentCards
  }
  takeTurn(userGuess) {
    this.turns += 1
    let newTurn = new Turn(userGuess, this.currentCards)
    return newTurn.giveFeedback()
  }
}

module.exports = Round

//instantiate turn in my takeTurn method