/* eslint-disable max-len */
const chai = require('chai');
const expect = chai.expect;

const data = require('../src/data-samples')
const protoTypeSampleQuestions = data.prototypeSampleData
const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Turn', function() {
  
  let turn1;

  console.log('this is datatype', typeof(protoTypeSampleQuestions))
  let allCards = protoTypeSampleQuestions.map(card => { 
    return new Card(card.id, card.question, card.answers, card.correctAnswer)
    
  })
  /* beforeEach wipes the slate clean between each test and consolidate code, use for clearing score
  let card1 = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
  let card2 = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
  let card3 = new Card(16, "What does the callback function for reduce() return?", ["the accumulator", "the current element", "the initializer"], "the accumulator");
  let card4 = new Card(30, "What type of methods are functions that allow you to manipulate the value of a particular data type or class?", ["prototype method", "object", "callback function"], "prototype method"); */
  beforeEach(() => {
    turn1 = new Turn('array', allCards[0]);
    console.log("this is turn1", turn1)
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
})
