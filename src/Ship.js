function Ship(itinerary) {
  const startPort = itinerary.ports[0];
  this.startingPort = startPort;
  const thisPort = itinerary.ports[0];
  this.currentPort = thisPort;
  this.itinerary = itinerary;
  this.currentPort.addShip(this);
}

function Port(portName) {
  this.portName = portName;
  this.ships = [];
}

function Itinerary(ports) {
  this.ports = ports;
}

Ship.prototype = {
  setSail: function setSail() {
    this.startingPort = false;
    this.currentPort.removeShip(this);
  },
  dock: function dock(currentPort) {
    this.currentPort = currentPort;
  },
};

Port.prototype = {
  addShip: function addShip(ship) {
    this.ships.push(ship);
  },
  removeShip: function removeShip(ship) {
    this.ships.splice(ship);
  },
};

module.exports = { Ship, Port, Itinerary };
