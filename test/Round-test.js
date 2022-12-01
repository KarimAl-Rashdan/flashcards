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
  let turn1 = new Turn('array', allCards[0]) //incorrect
  let turn2 = new Turn('object', allCards[0]) 
  let turn3 = new Turn('iteration method', allCards[1]) //correct
  let turn4 = new Turn('forEach()', allCards[2]) //incorrect
  let turn5 = new Turn('true', allCards[3]) 
  let turn6 = new Turn('mutator method', allCards[4]) 
  let turn7 = new Turn('prototype method', allCards[5]) 

  beforeEach(() => {
    round1 = new Round(deck1)
  })

  it('should be a function', () => {
    expect(Round).to.be.a('function')
  })

  it('should store a deck', () => {
    expect(round1.deck).to.equal(deck1.listOfCards)
  })

  it('should return current card', () => {
    expect(round1.returnCurrentCard()).to.equal(allCards[0])
    round1.takeTurn(turn1.guess)
    round1.takeTurn(turn3.guess)
    round1.takeTurn(turn4.guess)
    expect(round1.returnCurrentCard()).to.equal(allCards[3])
  })

  it('should start off with zero turns', () => {
    expect(round1.turns).to.equal(0)
  })

  it('should store incorrect guesses in an array', () => {
    expect(round1.incorrectGuesses).to.eql([])
  })
  it('should increase turns when user takes turn', () => {
    round1.takeTurn(turn1.guess)
    round1.takeTurn(turn2.guess)
    expect(round1.turns).to.equal(2)
  })

  it('should change current card to the next card in the deck', () => {
    round1.takeTurn(turn1.guess)
    expect(round1.currentCard).to.equal(allCards[1])
    round1.takeTurn(turn3.guess)
    expect(round1.currentCard).to.equal(allCards[2])
  })

  it('should give feedback to user guess', () => {
    let firstTurn = round1.takeTurn(turn1.guess)
    expect(firstTurn).to.equal('incorrect!')
    expect(round1.takeTurn(turn3.guess)).to.equal('correct!')
  })
  
  it('should store the current card id for the incorrect guesses', () => {
    round1.takeTurn(turn1.guess)
    expect(round1.incorrectGuesses).to.eql([turn1.card.id])
    round1.takeTurn(turn3.guess)
    expect(round1.incorrectGuesses).to.eql([turn1.card.id])
    round1.takeTurn(turn4.guess)
    expect(round1.incorrectGuesses).to.eql([turn1.card.id, turn4.card.id])
  })

  it('should calculate the percentage of correct guesses', () => {
    round1.takeTurn(turn1.guess)
    round1.takeTurn(turn3.guess)
    round1.takeTurn(turn4.guess)
    round1.takeTurn(turn5.guess)
    round1.takeTurn(turn6.guess)
    round1.takeTurn(turn7.guess)
    expect(round1.calculatePercentCorrect()).to.equal('67%')
  })
  it('should tell user when round is over', () => {
    round1.takeTurn(turn1.guess)
    round1.takeTurn(turn3.guess)
    round1.takeTurn(turn4.guess)
    round1.takeTurn(turn5.guess)
    round1.takeTurn(turn6.guess)
    round1.takeTurn(turn7.guess)
    round1.calculatePercentCorrect()
    expect(round1.endRound()).to.equal('** Round over! ** You answered 67% of the questions correctly!')
  })
})