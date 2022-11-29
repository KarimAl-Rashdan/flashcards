class Turn {
  constructor(userGuess, cardDetails) {
    this.guess = userGuess,
    this.card = cardDetails
  }
  returnGuess() {
    return this.guess
  }
}






module.exports = Turn;