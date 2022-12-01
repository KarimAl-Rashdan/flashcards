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
}

module.exports = Round

//instantiate turn in my takeTurn method