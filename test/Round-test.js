/* eslint-disable */
const chai = require('chai')
const expect = chai.expect

const data = require('../src/data-samples')
const prototypeSampleCards = data.prototypeSampleData
const Card = require('../src/Card')
const Deck = require('../src/Deck')
const Round = require('..src/Round')

describe('Round', () => {

  let card1;
  let card2;
  let card3;
  let card4;
  let allCards;
  let deck1;
  let deck2;

  beforeEach(() => {
    allCards = prototypeSampleCards.map(card => {
      return new Card(card.id, card.question, card.answers, card.correctAnswer)
    })
    console.log(allCards)
  })
})