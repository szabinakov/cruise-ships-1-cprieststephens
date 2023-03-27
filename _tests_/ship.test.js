const {Ship, Port, Itinerary} = require('../src/ship.js');

describe("Ship", () => {
  describe("with ports and itinerary", () => {
    let london;
    let liverpool;
    let itinerary;
    let ship;

    beforeEach(() => {
      london = new Port("London");
      liverpool = new Port("Liverpool");
      itinerary = new Itinerary([london, liverpool]);
      ship = new Ship(itinerary);
    });

    it("can be instantiated", () => {
      expect(ship).toBeInstanceOf(Object);
    });

    it("sets previous port as null", () => {
      expect(ship.previousPort).toEqual(null);
    });

    it("has a starting port", () => {
      expect(ship.currentPort).toBe(london);
    });

    it("gets added to port on instantiation", () => {
      expect(london.ships).toContain(ship);
    }); 

    it("can set sail", () => {
      ship.setSail();
      expect(ship.currentPort).toBeFalsy();
      expect(london.ships).not.toContain(ship);
    });

    it("can dock at different port", () => {
      ship.setSail();
      ship.dock();
      expect(ship.currentPort).toBe(liverpool);
      expect(liverpool.ships).toContain(ship);   
    });
  });
});

describe("setSail", () => {
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




