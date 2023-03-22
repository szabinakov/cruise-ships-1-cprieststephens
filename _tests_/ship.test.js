const {Ship, Port} = require('../src/ship.js');

describe("Ship", () => {
  it("instantiates Ship object", () => {
    expect(new Ship()).toBeInstanceOf(Object);
  });

  it("sets Port object as current port", () => {
    const port = new Port("London");
    const ship = new Ship(port);
    expect(ship.currentPort).toEqual(port);
  });

});

describe("setSail", () => {
  it("can set sail", () => {
    const port = new Port("London");
    const ship = new Ship(port);
    ship.setSail();
    expect(ship.currentPort).toBeFalsy();
  });
});

