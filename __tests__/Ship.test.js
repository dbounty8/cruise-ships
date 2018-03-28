/* globals describe it expect */

const { Ship } = require('../src/Ship.js');

describe('Ship', () => {
  it('can be instantiated', () => {
    const port = new Port('Dover');
    const itinerary = new Itinerary([port]);
    const ship = new Ship(itinerary);
    expect(ship).toBeInstanceOf(Object);
  });
});

it('has a starting port', () => {
  const port = new Port('Dover');
  const itinerary = new Itinerary([port]);
  const ship = new Ship(itinerary);
  expect(ship.currentPort).toBe(port);
});

it('has set sail', () => {
  const port = new Port('Dover');
  const itinerary = new Itinerary([port]);
  const ship = new Ship(itinerary);
  ship.setSail();
//  expect(ship.startingPort).toBeFalsy();
  expect(port.ships).not.toContain(ship);
});
