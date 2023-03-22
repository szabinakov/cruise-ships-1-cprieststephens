const Ship = require('../src/ship.js');

describe("Ship", () => {
  it("returns an object", () => {
    expect(new Ship()).toBeInstanceOf(Object);
  });

  it("sets the starting port property", () => {
    const ship = new Ship("Portsmouth");
    expect(ship.startingPort).toEqual("Portsmouth");
  });
});

describe("setSail", () => {
  it("can set sail", () => {
    const ship = new Ship("Portsmouth");
    ship.setSail();
    expect(ship.startingPort).toBeFalsy();
  });
});