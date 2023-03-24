const {Ship, Port, Itinerary} = require('../src/ship.js');

describe("Ship", () => {
  it("can be instantiated", () => {
    const port = new Port("London");
    const itinerary = new Itinerary([port]);
    const ship = new Ship(itinerary);
    expect(ship).toBeInstanceOf(Object);
  });

  it("sets previous port as null", () => {
    const port = new Port("London");
    const itinerary = new Itinerary([port]);
    const ship = new Ship(itinerary);
    expect(ship.previousPort).toEqual(null);
  });

  it("has a starting port", () => {
    const port = new Port("London");
    const itinerary = new Itinerary([port]);
    const ship = new Ship(itinerary);
    expect(ship.currentPort).toBe(port);
  });
});

describe("setSail", () => {
  it("can set sail", () => {
    const london = new Port("London");
    const liverpool = new Port("Liverpool");
    const dover = new Port("Dover");
    const itinerary = new Itinerary([london, liverpool, dover]);
    const ship = new Ship(itinerary);
    ship.setSail();
    expect(ship.previousPort).toEqual(london);
    expect(ship.currentPort).toBeFalsy();
  });

  it("can't sail further than its itinerary", () => {
    const london = new Port("London");
    const liverpool = new Port("Liverpool");
    const itinerary = new Itinerary([london, liverpool]);
    const ship = new Ship(itinerary);
    ship.setSail();
    ship.dock();
    expect(() => ship.setSail()).toThrowError("End of itinerary reached");
  });
});

describe("dock", () => {
  it("can dock at different port", () => {
    const london = new Port("London");
    const liverpool = new Port("Liverpool");
    const itinerary = new Itinerary([london, liverpool]);
    const ship = new Ship(itinerary);
    ship.setSail();
    ship.dock();
    expect(ship.currentPort).toEqual(liverpool);
  });
});

