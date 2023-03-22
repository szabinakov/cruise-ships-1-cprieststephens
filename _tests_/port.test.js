const {Port} = require('../src/ship.js');

describe("Port", () => {
    it("instantiates Port object", () => {
      expect(new Port()).toBeInstanceOf(Object);
    });
  
    it("sets name property", () => {
      const port = new Port("London");
      expect(port.name).toEqual("London");
    });
  });