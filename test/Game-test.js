/* eslint-disable */
const chai = require('chai');
const expect = chai.expect;
const data = require('../src/data');
const prototypeQuestions = data.prototypeData;
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const Turn = require('../src/Turn');
const Game = require('../src/Game');

describe('Game', () => { 
  let game1;
  let deck1;
  let round1;
  let sampleCards = prototypeQuestions.map(card => {
    return new Card(card.id, card.question, card.answers, card.correctAnswer);
  });
  
  it('should be a function', () => {
    expect(Game).to.be.a('function');
  });
    
  it('should instantiate a new round', () => {
    deck1 = new Deck ([sampleCards]);
    game1 = new Game();
    round1 = new Round(deck1);
    expect(game1.currentRound).to.be.an.instanceof(Round);
  });
    
  it('should instantiate a new card', () => {
    deck1 = new Deck ([sampleCards]);
    game1 = new Game();
    round1 = new Round(deck1);
    expect(game1.currentCard[0]).to.be.instanceof(Card);
  });

  it('should instantiate a new deck', () => {
    deck1 = new Deck ([sampleCards]);
    game1 = new Game();
    round1 = new Round(deck1);
    expect(game1.currentDeck).to.be.instanceof(Deck);
  });
});