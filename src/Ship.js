function Ship(itinerary) {
//  const startPort = itinerary.ports[0];
//  this.startingPort = startPort;
  const thisPort = itinerary.ports[0];
  this.currentPort = thisPort;
  this.itinerary = itinerary;
  this.currentPort.addShip(this);
}

Ship.prototype = {
  setSail: function setSail() {
    this.currentPort = false;
    this.currentPort.removeShip(this);
  },
  dock: function dock(currentPort) {
    this.currentPort = currentPort;
  },
};

module.exports = { Ship };
