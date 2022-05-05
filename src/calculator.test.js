const add = require("./calculator");

describe("Add", () => {
  it("should return 0 when with no argument", () => {
    expect(add()).toBe(0);
  });

  it("should return 0 when called with empty string", () => {
    expect(add("")).toBe(0);
  });

  it("should return N when called with single number 'N'", () => {
    expect(add("1")).toBe(1);
  });
});
