function Port(portName) {
  this.portName = portName;
  this.ships = [];
}

Port.prototype = {
  addShip: function addShip(ship) {
    this.ships.push(ship);
  },
  removeShip: function removeShip(ship) {
    this.ships.splice(ship);
    return this.ships;
  },
};

module.exports = { Port };
