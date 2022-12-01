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
  let turn2 = new Turn('object', allCards[0]) //correct
  let turn3 = new Turn('iteration method', allCards[1]) //correct
  let turn4 = new Turn('forEach()', allCards[2]) //incorrect


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

  it('should store incorrect guesses in an array', () => {
    expect(round1.incorrectGuesses).to.eql([])
  })
  it('should increase turns when user takes turn', () => {
    round1.takeTurn(turn1.guess)
    round1.takeTurn(turn2.guess)
    expect(round1.turns).to.equal(2)
    // console.log(round1.turns)
  })

  it('should change current card to the next card in the deck', () => {
    /*{
  "id": 1,
  "question": "What allows you to define a set of related information using key-value pairs?",
  "answers": ["object", "array", "function"],
  "correctAnswer": "object"
}, {
  "id": 5,
  "question": "What type of prototype method loops through the existing array and applies a callback function that may mutate each element and return a new value?",
  "answers": ["mutator method", "accessor method", "iteration method"],
  "correctAnswer": "iteration method"
} */
    // console.log(round1.currentCard)
    round1.takeTurn(turn1.guess)
    // console.log('current card is:', round1.currentCard)
    // console.log('turns is:', round1.turns)
    expect(round1.currentCard).to.equal(allCards[1])
    round1.takeTurn(turn3.guess)
    // console.log('current card is:', round1.currentCard)
    // console.log('turns is:', round1.turns)
    expect(round1.currentCard).to.equal(allCards[2])
  })
  
  it('should give feedback to user guess', () => {
    let firstTurn = round1.takeTurn(turn1.guess)
    expect(firstTurn).to.equal('incorrect!')
    expect(round1.takeTurn(turn3.guess)).to.equal('correct!')
  })

  it('should store the current card id for the incorrect guesses', () => {
    round1.takeTurn(turn1.guess)
    expect(round1.incorrectGuesses).to.eql(turn1.card.id)
    round1.takeTurn(turn3.guess)
    expect(round1.incorrectGuesses).to.eql(turn1.card.id)
    round1.takeTurn(turn4.guess)
    expect(round1.incorrectGuesses).to.eql([turn1.card.id, turn4.card.id])
  })
  

  // it('should instantiate a new Turn', () => {
  //   let turn = round1.takeTurn(turn1.guess)
  //   expect(turn).to.be.an.instanceof(Turn)
  // }) I don't know how to check this so I'll research and get back to it later

  // it('should give feedback for user guesses', () => {
  //   expect(round1.takeTurn(turn1.guess)).to.equal(turn1.giveFeedback())
  //   expect(round1.takeTurn(turn2.guess)).to.equal(turn2.giveFeedback())
  //   console.log(turn1.giveFeedback(), turn2.giveFeedback())
  // })

  
})
/*round.takeTurn('sea otter'); // => 'correct!'

round.takeTurn('spleen');   // => 'incorrect!' */