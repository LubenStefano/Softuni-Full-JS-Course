import { expect } from "chai";
import { createCalculator } from "../addOrSubtract.js";

describe("Testing the functionality of addOrSubtract()", () => {
  it("Should retun object", () => {
    let value = 0; // Add variable declaration and initialization

    const expectedResult = {
      add: function (num) {
        value += Number(num);
      },

      subtract: function (num) {
        value -= Number(num);
      },

      get: function () {
        return value;
      },
    };

    const result = createCalculator()

    expect(result).to.equal(expectedResult)
  });
});
