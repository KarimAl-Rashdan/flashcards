const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Turn', function() {
  
  let turn1;;
  let card1 = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
  let card2 = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
  let card3 = new Card(16, "What does the callback function for reduce() return?", ["the accumulator", "the current element", "the initializer"], "the accumulator");
  let card4 = new Card(30, "What type of methods are functions that allow you to manipulate the value of a particular data type or class?", ["prototype method", "object", "callback function"], "prototype method");
  beforeEach(() => {
    turn1 = new Turn();
  })

  it('should be a function', () => {
    expect(Turn).to.be.a('function');
  });
  it('should be an instance of Turn', () => {
    expect(turn1).to.be.an.instanceof(Turn)
  })
})