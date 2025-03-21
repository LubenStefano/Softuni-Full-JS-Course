import { expect } from "chai";
import { isOddOrEven } from "../isOddOrEven.js";

describe("Testing the functionality of isOddOrEven", () => {
  it("Should return undefined if the input is num", () => {
    const input = 14;

    const result = isOddOrEven(input);

    expect(result).to.be.undefined;
  });
  it("Should return undefined if the input is arr", () => {
    const input = [14, 12];

    const result = isOddOrEven(input);

    expect(result).to.be.undefined;
  });
  it("Should return even", () => {
    const expectedResult = "even";

    const result = isOddOrEven("nput");

    expect(result).to.equal(expectedResult);
    expect(result).to.equal("even");
  });
  it("Should return odd", () => {
    const expectedResult = "odd";

    const result = isOddOrEven("input");

    expect(result).to.equal(expectedResult);
    expect(result).to.equal("odd");
  });
});
