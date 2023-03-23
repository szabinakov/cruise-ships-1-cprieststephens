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

module.exports = { Ship, Port }




