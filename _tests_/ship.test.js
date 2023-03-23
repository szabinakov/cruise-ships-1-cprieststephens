const {Ship, Port} = require('../src/ship.js');

describe("Ship", () => {
  it("instantiates Ship object", () => {
    expect(new Ship()).toBeInstanceOf(Object);
  });

  it("sets Port object as current port", () => {
    const london = new Port("London");
    const ship = new Ship(london);
    expect(ship.currentPort).toBe(london);
  });

});

describe("setSail", () => {
  it("allows Ship to set sail", () => {
    const london = new Port("London");
    const ship = new Ship(london);
    ship.setSail();
    expect(ship.currentPort).toBeFalsy();
  });
});

describe("dock", () => {
  it("allows Ship to dock at different port", () => {
    const london = new Port("London");
    const liverpool = new Port("Liverpool");
    const ship = new Ship(london);
    ship.dock(liverpool);
    expect(ship.currentPort).toBe(liverpool);
  });
});

