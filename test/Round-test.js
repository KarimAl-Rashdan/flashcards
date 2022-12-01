/* eslint-disable */
const chai = require('chai')
const expect = chai.expect

const data = require('../src/data-samples')
const prototypeSampleCards = data.prototypeSampleData
const Card = require('../src/Card')
const Deck = require('../src/Deck')
const Round = require('../src/Round')
const Turn = require('../src/Turn')

describe('Round', () => {
  let allCards = prototypeSampleCards.map(card => {
    return new Card(card.id, card.question, card.answers, card.correctAnswer)
  })
  let round1;
  let deck1 = new Deck([allCards[0], allCards[1], allCards[2], allCards[3], allCards[4], allCards[5]])
  let deck2;


  beforeEach(() => {
    round1 = new Round(deck1)
  })

  it('should be a function', () => {
    expect(Round).to.be.a('function')
  })

  it('should store a deck', () => {
    // console.log('this is round1.deck', round1.deck.listOfCards)
    expect(round1.deck).to.equal(deck1.listOfCards)
  })

  it('should return current card', () => {
    // console.log('this is round1.currentCards', round1.currentCards)
    expect(round1.returnCurrentCard()).to.equal(allCards[0])
  })

  it('should start off with zero turns', () => {
    expect(round1.turns).to.equal(0)
  })

})