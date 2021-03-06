/* globals describe it expect */

const { Itinerary } = require('../src/Itinerary.js');

describe('Itinerary', () => {
  it('Creates an itinerary object', () => {
    const itinerary = new Itinerary();
    expect(itinerary).toBeInstanceOf(Object);
  });

  it('checks whether an itinerary has a ports property', () => {
    const dover = new Port('Dover');
    const calais = new Port('Calais');
    const itinerary = new Itinerary([dover, calais]);
    expect(itinerary.ports).toEqual([dover, calais]);
  });
});
