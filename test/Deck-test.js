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
  deck1 = new Deck([allCards[0], allCards[1], allCards[2]])
  deck2 = new Deck([allCards[2]])
})

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