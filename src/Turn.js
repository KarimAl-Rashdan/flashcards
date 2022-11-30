class Turn {
  constructor(userGuess, cardDetails) {
    this.guess = userGuess,
    this.card = cardDetails
  }
  returnGuess() {
    console.log(this.guess);
    return this.guess
  }
}






module.exports = Turn;