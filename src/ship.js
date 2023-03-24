function Ship(itinerary) {
    this.itinerary = itinerary;
    this.previousPort = null;
    this.currentPort = itinerary.ports[0];
};

Ship.prototype.setSail = function() {
    const itinerary = this.itinerary;
    const currentPortIndex = itinerary.ports.indexOf(this.currentPort);
    if (currentPortIndex === (itinerary.ports.length -1)) {
        throw new Error("End of itinerary reached");
    }
    this.previousPort = this.currentPort;
    this.currentPort = null;
};

function Port(name) {
    this.name = name;
};

Ship.prototype.dock = function() {
   const itinerary = this.itinerary;
   const previousPortIndex = itinerary.ports.indexOf(this.previousPort);
   this.currentPort = itinerary.ports[previousPortIndex + 1];
};

function Itinerary(ports) {
    this.ports = ports;
};

module.exports = { Ship, Port, Itinerary }




