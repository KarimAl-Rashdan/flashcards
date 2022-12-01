class Deck {
  constructor(cards) {
    this.listOfCards = cards
  }
  countCards() {
    return this.listOfCards.length
  }
}

module.exports = Deck