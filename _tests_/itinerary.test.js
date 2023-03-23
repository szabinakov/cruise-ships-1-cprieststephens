const {Port, Itinerary} = require('../src/ship.js');

describe("Itinerary", () => {
  it("instantiates Itinerary object", () => {
    expect(new Itinerary()).toBeInstanceOf(Object);
  });

  it("can have ports", () => {
    const london = new Port("London");
    const liverpool = new Port("Liverpool");
    const itinerary = new Itinerary([london, liverpool]);
    expect(itinerary.ports).toEqual([london, liverpool]);
  });
});