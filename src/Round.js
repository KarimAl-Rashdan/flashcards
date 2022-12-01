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
    console.log('value', feedback.valueOf())
    this.turns += 1
    this.currentCard = this.deck[this.turns]
    return feedback
    // console.log('feedback is:', feedback)
    // console.log('does this read properly', this.currentCard)
    // //use method on deck to take out first element so when cards are done it ends game
    // newTurn.giveFeedback()
  }
  /*takeTurn: method that updates turns count, evaluates guesses, gives feedback, and stores ids of incorrect guesses

When a guess is made, a new Turn instance is created.
The turns count is updated, regardless of whether the guess is correct or incorrect
The next card becomes current card
Guess is evaluated/recorded. Incorrect guesses will be stored (via the id) in an array of incorrectGuesses
Feedback is returned regarding whether the guess is incorrect or correct*/
}

module.exports = Round

//instantiate turn in my takeTurn method