/* eslint-disable */
const chai = require('chai');
const expect = chai.expect;

const data = require('../src/data-samples')
const prototypeSampleCards = data.prototypeSampleData
const Card = require('../src/Card')
const Deck = require('../src/Deck')

describe('Deck', () => {

  let deck1;
  let deck2;
  let allCards = prototypeSampleCards.map(card => {
  return new Card(card.id, card.question, card.answers, card.correctAnswer)
})

beforeEach(() => {
  // const card1 = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object")
  // const card2 = new Card(5, "What type of prototype method loops through the existing array and applies a callback function that may mutate each element and return a new value?", ["mutator method", "accessor method", "iteration method"], "iteration method")
  // const card3 = new Card(10, "Which iteration method returns the first array element where the callback function returns true", ["find()", "filter()", "forEach()"], "find()")
  
  
  deck1 = new Deck([allCards[0], allCards[1], allCards[2]])
  deck2 = new Deck([allCards[2]])
  // console.log('datatype of deck', typeof(allCards), allCards)
})
//[allCards[0], allCards[1], allCards[2], allCards[3], allCards[4]]

 it('should be a function', () => {
  expect(Deck).to.be.a('function')
 })

 it('should store an array of cards', () => {
  expect(deck1.listOfCards).to.eql([allCards[0], allCards[1], allCards[2]])
  expect(deck2.listOfCards).to.eql([allCards[2]])
  expect(deck1.listOfCards).to.be.an('array')
 })
 it('should know how many cards are in deck', () => {
  expect(deck1.countCards()).to.equal(3)
  expect(deck2.countCards()).to.equal(1)
 })
})
/*Your Deck class should be initialized with an array of Card objects and should have an accompanying test file. It should know how many Cards are in the Deck. */