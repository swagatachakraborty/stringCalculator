const add = require("./calculator");

describe("Add", () => {
  it("should return 0 when with no argument", () => {
    expect(add()).toBe(0);
  });
});
