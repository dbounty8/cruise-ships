/* globals describe it expect */

const { Port } = require('../src/Port.js');
const { Itinerary } = require('../src/Itinerary.js');

describe('Port', () => {
  it('can be instantiated', () => {
    expect(new Port()).toBeInstanceOf(Object);
  });
});

it('port has name', () => {
  const port = new Port('Dover');
  expect(port.portName).toBe('Dover');
});

it('port has ships', () => {
  const port = new Port('Dover');
  expect(port.ships).toEqual([]);
});

it('port can add ships', () => {
  const port = new Port('Dover');
  const itinerary = new Itinerary([port]);
  const robShip = new Ship(itinerary);

  port.addShip(robShip);
  expect(port.ships).toContain(robShip);
});

it('port can remove ships', () => {
  const port = new Port('Dover');
  const itinerary = new Itinerary([port]);
  const robShip = new Ship(itinerary);
  port.addShip(robShip);
  port.removeShip(robShip);
  expect(port.ships).not.toContain(robShip);
});

it('is docked at a port', () => {
  const port = new Port('Dover');
  const itinerary = new Itinerary([port]);
  const ship = new Ship(itinerary);

  const calais = new Port('Calais');
  ship.dock(calais);
  expect(ship.currentPort).toBe(calais);
});

it('gets added to port on instantiation', () => {
  const port = new Port('Dover');
  const itinerary = new Itinerary([port]);
  const ship = new Ship(itinerary);

  expect(ship.currentPort.ships).toContain(ship);
});
