const Turn = require("./Turn")

/* eslint-disable */
class Round {
  constructor(deck) {
  this.deck = deck.listOfCards,
  this.currentCard = deck.listOfCards[0],
  this.turns = 0,
  this.incorrectGuesses = []
  }
  returnCurrentCard() {
    return this.currentCard
  }
  takeTurn(userGuess) {
    let newTurn = new Turn(userGuess, this.currentCard)
    let feedback = newTurn.giveFeedback()
    if(feedback.valueOf() === 'incorrect!') {
      this.incorrectGuesses.push(newTurn.card.id)
    }
    this.turns += 1
    this.currentCard = this.deck[this.turns]
    return feedback
  }
}

module.exports = Round