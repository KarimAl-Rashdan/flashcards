/* eslint-disable */
const chai = require('chai')
const expect = chai.expect
const data = require('../src/data');
const prototypeQuestions = data.prototypeData;
// const dataSample = require('../src/data-samples')
// const prototypeSampleCards = dataSample.prototypeSampleData
const Card = require('../src/Card')
const Deck = require('../src/Deck')
const Round = require('../src/Round')
const Turn = require('../src/Turn')
const Game = require('../src/Game')

describe('Game', () => { 
  let game1;
  let deck1;
  let sampleCards = prototypeQuestions.map(card => {
    return new Card(card.id, card.question, card.answers, card.correctAnswer)
  })
  
  let round1;
 
    it('should be a function', () => {
      expect(Game).to.be.a('function')
    })
    
    it('should keep track of currentRound', () => {
      console.log("samplecards", sampleCards)
    deck1 = new Deck ([sampleCards]);
    game1 = new Game()
    round1 = new Round(deck1)
    console.log(game1.currentRound)
    expect(game1.currentRound).to.be.an.instanceof(Round)
  })
    
  it('should instantiate a new card', () => {
    deck1 = new Deck ([sampleCards]);
    game1 = new Game()
    round1 = new Round(deck1)
  
    expect(game1.currentCard[0]).to.be.instanceof(Card)
      // createCards()).to.equal(sampleCards)
    // not sure what this test should look like, ask later
    // game1.createCards()
    
    // console.log(game1)
  })

  it('should instantiate a new deck', () => {
    deck1 = new Deck ([sampleCards]);
    game1 = new Game()
    round1 = new Round(deck1)
  
    expect(game1.currentDeck).to.be.instanceof(Deck)
      // createCards()).to.equal(sampleCards)
    // not sure what this test should look like, ask later
    // game1.createCards()
    
    // console.log(game1)
  })

  // it('should put cards in deck', () => {
  //   // expect(game1.createDeck()).to.equal(deck1)
  //   //testing isnt working because im noot working with full data array
  // })

  // it('should create new round using the deck', () => {
  // //   expect(game1.createRound(deck1)).to.equal(round1)
  // // })
  // })
})







/*Your Game class should meet these other requirements:
~~~~~~~~~~~~~~~~~~Should keep track of the currentRound
start: method that starts everything
~~~~~~~~~~~~~~~~~~~~~~~~~~~~Creates Cards
~~~~~~~~~~~~~~~~~~~~`Puts Cards in a Deck
~~~~~~~~~~~Creates a new Round using the Deck
~~~~~`invokes printMessage to display the message in the CLI
invokes printQuestion to kick off our helper functions that allow interaction via the CLI
Implementation Note: The helper functions are all fleshed out and fit to work with classes/methods that meet the requirements in the past iterations.

Testing Tip: You’ll notice it difficult to test game.start. If you invoke it in your test file, it hangs the test suite by starting the game while running the tests. Sometimes as front end developers, we run into pieces of code that aren’t possible, or worth it, to test. In this case, instead of testing game.start, consider trying to extract what you can out of game.start and into a separate function, and test those functions on their own. */