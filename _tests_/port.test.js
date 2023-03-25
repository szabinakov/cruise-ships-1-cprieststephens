const {Ship, Port, Itinerary} = require('../src/ship.js');

describe("Port", () => {
  it("instantiates Port object", () => {
    expect(new Port()).toBeInstanceOf(Object);
  });
  
  it("sets the name property", () => {
    const port = new Port("London");
    expect(port.name).toEqual("London");
  });

  it("has a ships property", () => {
    const port = new Port("London");
    expect(port.ships).toEqual([]);
  })
});

describe("addShip", () => {
  it("adds ship to port's ship property", () => {
    const port = new Port("London");
    const ship = {};
    port.addShip(ship);
    expect(port.ships).toContain(ship);
  });
});

describe("removeShip", () => {
  it("removes a ship from a port's ship property", () => {
    const port = new Port("London");
    const MaryRose = {};
    const Britannia = {};
    port.addShip(MaryRose);
    port.addShip(Britannia);
    port.removeShip(MaryRose);
    expect(port.ships).toEqual([Britannia]);
  });
});

