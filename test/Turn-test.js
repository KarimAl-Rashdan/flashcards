/* eslint-disable max-len */
/* eslint-disable no-console */
/* beforeEach wipes the slate clean between each test and consolidate code, use for clearing score
 */
const chai = require('chai');
const expect = chai.expect;

const data = require('../src/data-samples')
const protoTypeSampleQuestions = data.prototypeSampleData
const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Turn', function() {
  
  let turn1;
  let turn2;
  let allCards = protoTypeSampleQuestions.map(card => { 
    return new Card(card.id, card.question, card.answers, card.correctAnswer)
    
  })
  beforeEach(() => {
    turn1 = new Turn('array', allCards[0]);
    // console.log("this is turn1", turn1)
  })

  it('should be a function', () => {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', () => {
    expect(turn1).to.be.an.instanceof(Turn)
  });

  it('should store user/s guess', () => {
    // console.log(turn1)
    expect(turn1.guess).to.equal("array")
  });

  it('should store current Card in play', () => {
    expect(turn1.card).to.equal(allCards[0])
  })

  it('should return user/s guess', () => {
    // turn1.returnGuess();
    // console.log('this is card', cards)
    expect(turn1.returnGuess()).to.equal("array")
  })

  it('should return Card in play', () => {
    expect(turn1.returnCard()).to.equal(allCards[0])
  })

  it('should check if user/s guess matches correct answer', () => {
    expect(turn1.evaluateGuess()).to.equal(false)
    turn2 = new Turn('iteration method', allCards[1])

    expect(turn2.evaluateGuess()).to.equal(true)
  })
  /*evaluateGuess: method that returns a boolean indicating if the user’s guess matches the correct answer on the card */
})
