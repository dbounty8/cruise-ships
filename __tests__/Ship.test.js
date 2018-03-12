/* globals describe it expect */

const { Ship, Port, Itinerary } = require('../src/Ship.js');

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
  expect(ship.startingPort).toBeFalsy();
  expect(port.ships).not.toContain(ship);
});

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
