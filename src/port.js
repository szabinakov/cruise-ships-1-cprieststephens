function Port(name) {
    this.name = name;
    this.ships = [];
};

Port.prototype.addShip = function(ship) {
    return this.ships.push(ship);
};

Port.prototype.removeShip = function(shipToRemove) {
    const shipIndex = this.ships.indexOf(shipToRemove);
    return this.ships.splice(shipIndex, 1);
};

module.exports = Port;