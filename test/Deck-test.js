/* eslint-disable */
const chai = require('chai');
const expect = chai.expect;

const data = require('../src/data-samples')
const prototypeSampleCards = data.prototypeSampleData
const Card = require('../src/Card')
const Deck = require('../src/Deck')

describe('Deck', () => {

  let deck1;
  let allCards = prototypeSampleCards.map(card => {
  return new Card(card.id, card.question, card.answers, card.correctAnswer)
})

beforeEach(() => {
  deck1 = new Deck()
})

 it('should be a function', () => {
  expect(Deck).to.be.a('function')
 })
 it('should store an array of cards', () => {
  expect(deck1.listOfCards).to.be.a('array')
 })
})
/*Your Deck class should be initialized with an array of Card objects and should have an accompanying test file. It should know how many Cards are in the Deck. */