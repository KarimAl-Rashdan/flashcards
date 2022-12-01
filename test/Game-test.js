/* eslint-disable */
const chai = require('chai')
const expect = chai.expect

const data = require('../src/data-samples')
const prototypeSampleCards = data.prototypeSampleData
// const realData = require('../src/data');
// const prototypeQuestions = realData.prototypeData;
const Card = require('../src/Card')
const Deck = require('../src/Deck')
const Round = require('../src/Round')
const Turn = require('../src/Turn')
const Game = require('../src/Game')

describe('Game', () => {
  let allCards = prototypeSampleCards.map(card => {
    return new Card(card.id, card.question, card.answers, card.correctAnswer)
  })
  // let allCards = prototypeQuestions.map(card => {
  //   return new Card(card.id, card.question, card.answers, card.correctAnswer)
  // })
  let game1;
  let deck1 = new Deck ([allCards[0], allCards[1], allCards[2], allCards[3], allCards[4],allCards[5]]);
  let round1;
  // let turn1;
  // let turn2;
  // let turn3;
  // let turn4;
  // let turn5;
  // let turn6;
  beforeEach(() => {
    round1 = new Round(deck1)
    // console.log(round1)
    game1 = new Game(round1)
  })

  it('should be a function', () => {
    expect(Game).to.be.a('function')
  })

  it('should keep track of currentRound', () => {
    // console.log(round1)
    expect(game1.currentRound).to.equal(round1)
  })

  it('should instantiate a new card', () => {
    // let allCards = prototypeSampleCards.map(card => {
    //   return new Card(card.id, card.question, card.answers, card.correctAnswer)
    // })
    // expect(game1.createCards()).to.have.all.keys('id', 'question', 'answers', 'correctAnswer')
    // expect(game1.createCards()).to.eql()
    // not sure what this test should look like, ask later
  })

  it()
})







/*Your Game class should meet these other requirements:
~~~~~~~~~~~~~~~~~~Should keep track of the currentRound
start: method that starts everything
~~~~~~~~~~~~~~~~~~~~~~~~~~~~Creates Cards
Puts Cards in a Deck
Creates a new Round using the Deck
invokes printMessage to display the message in the CLI
invokes printQuestion to kick off our helper functions that allow interaction via the CLI
Implementation Note: The helper functions are all fleshed out and fit to work with classes/methods that meet the requirements in the past iterations.

Testing Tip: You’ll notice it difficult to test game.start. If you invoke it in your test file, it hangs the test suite by starting the game while running the tests. Sometimes as front end developers, we run into pieces of code that aren’t possible, or worth it, to test. In this case, instead of testing game.start, consider trying to extract what you can out of game.start and into a separate function, and test those functions on their own. */