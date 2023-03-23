function Ship(port) {
    this.currentPort = port;
};

Ship.prototype.setSail = function() {
    this.currentPort = false;
};

function Port(name) {
    this.name = name;
};

Ship.prototype.dock = function(port) {
    this.currentPort = port;
};

function Itinerary(ports) {
    this.ports = ports;
};

module.exports = { Ship, Port, Itinerary }




