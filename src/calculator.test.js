const {add, subOddFromEven} = require("./calculator");

describe("Calculator", () => {
  describe("add", () => {
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

    it("should not allow negative numbers as inputs", () => {
      expect(() => add("-1,1,-1")).toThrow("Negatives not allowed : -1,-1");
    });

    it("should support different delimiters provided as input as //[delimiter]\\n[numbers…] with 2 inputs", () => {
      expect(add("//;\n1;2")).toBe(3);
    });

    it("should support different delimiters provided as input as //[delimiter]\\n[numbers…] with 3 inputs", () => {
      expect(add("//*#*\n1*#*2*#*3")).toBe(6);
    });

    it("should throw error when delimiter is not provided at the beginning", () => {
      expect(() => add("1//;\n1;2")).toThrow("Invalid Input : 1//;\n1;2");
    });

    it("should throw error when input delimiter is not used as a separator", () => {
      expect(() => add("//;\n1,2")).toThrow("Invalid Input : 1,2");
    });

    it("should add when there is both user given delimiter and \\n", () => {
      expect(add("//;\n1;2\n3")).toBe(6);
    });

    it("should ignore numbers bigger than 1000, for 2 inputs", () => {
      expect(add("1001,2")).toBe(2);
    });

    it("should ignore numbers bigger than 1000, for 3 inputs", () => {
      expect(add("1001,2,1000")).toBe(1002);
    });

    it("should allow multiple delimiters as //[delim1][delim2]\\n", () => {
      expect(add("//[*][%]\n1*2%3")).toBe(6);
    });

    it("should allow multiple delimiters as //[delim1][delim2]\\n of different length", () => {
      expect(add("//[*$][%]\n1*$2%3")).toBe(6);
    });

    it("should throw error for negative numbers with multiple delimiters", () => {
      expect(() => add("//[*][%]\n1*2%3*-1")).toThrow("Negatives not allowed : -1");
    });

    it("should throw error for wrong input numbers with multiple delimiters", () => {
      expect(() => add("//[@][#]\n1@3#4\n")).toThrow("Invalid Input : 1@3#4\n");
    });

    it("should add when input separated by multiple delimiters and new line", () => {
      expect(add("//[*][%]\n1*3%4\n2")).toBe(10);
    });
  })

  describe("subOddFromEven", () => {
    it("should return 0 for no arg", () => {
      expect(subOddFromEven()).toBe(0);
    });

    it("should return 0 for empty string", () => {
      expect(subOddFromEven("")).toBe(0);
    });

    it("should subtract sum of odd positioned numbers from sum of even positioned for 2 args", () => {
      expect(subOddFromEven("3,1")).toBe(2);
    });

    it("should subtract sum of odd positioned numbers from sum of even positioned for multiple args", () => {
      expect(subOddFromEven("4,3,5,5")).toBe(1);
    });
  })
});
