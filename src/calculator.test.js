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
    expect(() => add("1,\n")).toThrow("Invalid Input : 1,\n");
  });

  it("should not allow input with only ','", () => {
    expect(() => add(",")).toThrow("Invalid Input : ,");
  });

  it("should not allow only alphabets as inputs", () => {
    expect(() => add("a,b")).toThrow("Invalid Input : a,b");
  });

  it("should not allow numbers with alphabets as inputs", () => {
    expect(() => add("1,a,b,1")).toThrow("Invalid Input : 1,a,b,1");
  });

  it("should not allow negetive numbers as inputs", () => {
    expect(() => add("-1,1,-1")).toThrow("Negatives not allowed : -1,-1");
  });

  it("should support different delimiters provided as input as //[delimiter]\\n[numbers…] with 2 inputs", () => {
    expect(add("//;\n1;2")).toBe(3);
  });

  it("should support different delimiters provided as input as //[delimiter]\\n[numbers…] with 3 inputs", () => {
    expect(add("//*#*\n1*#*2*#*3")).toBe(6);
  });

  test("should throw error when delimiter is not provided at the beginning", () => {
    expect(() => add("1//;\n1;2")).toThrow("Invalid Input : 1//;\n1;2");
  });

  test("should throw error when input delimiter is not used as a separator", () => {
    expect(() => add("//;\n1,2")).toThrow("Invalid Input : 1,2");
  });

  test("should add when there is both user given delimiter and \\n", () => {
    expect(add("//;\n1;2\n3")).toBe(6);
  });

  test("should ignore numbers bigger than 1000, for 2 inputs", () => {
    expect(add("1001,2")).toBe(2);
  });

  test("should ignore numbers bigger than 1000, for 3 inputs", () => {
    expect(add("1001,2,1000")).toBe(1002);
  });
});
