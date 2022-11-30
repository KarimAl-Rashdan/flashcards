const chai = require('chai');
const expect = chai.expect;

const data = require('../src/data-samples')
const protoTypeSampleCards = data.prototypeSampleData
const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Turn', function() {
  let turn1;
  let turn2;
  let allCards = protoTypeSampleCards.map(card => { 
    return new Card(card.id, card.question, card.answers, card.correctAnswer)
  })

  beforeEach(() => {
    turn1 = new Turn('array', allCards[0]);
    turn2 = new Turn('iteration method', allCards[1])
  })

  it('should be a function', () => {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', () => {
    expect(turn1).to.be.an.instanceof(Turn)
  });

  it('should store user/s guess', () => {
    expect(turn1.guess).to.equal("array")
  });

  it('should store current Card in play', () => {
    expect(turn1.card).to.equal(allCards[0])
  })

  it('should return user/s guess', () => {
    expect(turn1.returnGuess()).to.equal("array")
    expect(turn2.returnGuess()).to.equal('iteration method')
  })

  it('should return Card in play', () => {
    expect(turn1.returnCard()).to.equal(allCards[0])
  })

  it('should check if user/s guess matches correct answer', () => {
    expect(turn1.evaluateGuess()).to.equal(false)
    expect(turn2.evaluateGuess()).to.equal(true)
  })

  it('should give the user feedback', () => {
    expect(turn1.giveFeedback()).to.equal('incorrect!')
    expect(turn2.giveFeedback()).to.equal('correct!')
  })
})
