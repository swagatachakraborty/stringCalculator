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

  it("should add 2 numbers provided string of 2 numbers comma separated", () => {
    expect(add("1,3")).toBe(4);
    expect(add("0,2")).toBe(2);
  });

  it("should add n numbers provided string of n numbers comma separated", () => {
    expect(add("1,3,4,5,6")).toBe(19);
  });

  it("should add numbers separated by new line", () => {
    expect(add("1\n2,3")).toBe(6);
  });

  it("should not allow input with only '\\n'", () => {
    try {
      add("1,\n");
    } catch (err) {
      expect(err).toBe("Invalid Input : 1,\n");
    }
  });

  it("should not allow input with only ','", () => {
    try {
      add(",");
    } catch (err) {
      expect(err).toBe("Invalid Input : ,");
    }
  });

  it("should not allow only alphabets as inputs", () => {
    try {
      add("a,b");
    } catch (err) {
      expect(err).toBe("Invalid Input : a,b");
    }
  });

  it("should not allow numbers with alphabets as inputs", () => {
    try {
      add("1,a,b,1");
    } catch (err) {
      expect(err).toBe("Invalid Input : 1,a,b,1");
    }
  });

  it("should not allow negetive numbers as inputs", () => {
    try {
      add("-1,1,-1");
    } catch (err) {
      expect(err).toBe("Negatives not allowed : -1,-1");
    }
  });
});
