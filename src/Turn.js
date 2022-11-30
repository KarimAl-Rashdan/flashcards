/* eslint-disable no-console */
//get rid of at end of project-----☝🏽
class Turn {
  constructor(userGuess, cardDetails) {
    this.guess = userGuess,
    this.card = cardDetails
  }
  returnGuess() {
    // console.log(this.guess);
    return this.guess
  }
  returnCard() {
    return this.card
  }
  evaluateGuess() {
    // console.log(this.card['correctAnswer'])
    if (this.guess === this.card['correctAnswer']) {
      // console.log(true)
      return true
    } else {
      // console.log(false)
      return false
    }
  }
  giveFeedback() {
    if (this.guess === this.card['correctAnswer']) {
      return 'correct!'
    } else {
      return 'incorrect!'
    }
  }
}






module.exports = Turn;