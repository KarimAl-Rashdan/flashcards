class Turn {
  constructor(userGuess, cardDetails) {
    this.guess = userGuess,
    this.card = cardDetails
  }
  returnGuess() {
    return this.guess
  }
  returnCard() {
    return this.card
  }
  evaluateGuess() {
    if (this.guess === this.card['correctAnswer']) {
      return true
    } else {
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