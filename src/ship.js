function Ship(currentPort) {
    this.currentPort = currentPort;
};

Ship.prototype.setSail = function() {
    this.currentPort = "";
};

function Port(name) {
    this.name = name;
};

module.exports = { Ship, Port }




