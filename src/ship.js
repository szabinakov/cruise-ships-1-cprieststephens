function Ship(itinerary) {
    this.itinerary = itinerary;
    this.previousPort = null;
    this.currentPort = itinerary.ports[0];
    this.currentPort.addShip(this);
};

Ship.prototype.setSail = function() {
    const itinerary = this.itinerary;
    const currentPortIndex = itinerary.ports.indexOf(this.currentPort);
    if (currentPortIndex === (itinerary.ports.length -1)) {
        throw new Error("End of itinerary reached");
    }
    this.currentPort.ships.splice(currentPortIndex,1);
    this.previousPort = this.currentPort;
    this.currentPort = null;
};

Ship.prototype.dock = function() {
   const itinerary = this.itinerary;
   const previousPortIndex = itinerary.ports.indexOf(this.previousPort);
   this.currentPort = itinerary.ports[previousPortIndex + 1];
   this.currentPort.ships.push(this);
};

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

function Itinerary(ports) {
    this.ports = ports;
};

module.exports = { Ship, Port, Itinerary }




