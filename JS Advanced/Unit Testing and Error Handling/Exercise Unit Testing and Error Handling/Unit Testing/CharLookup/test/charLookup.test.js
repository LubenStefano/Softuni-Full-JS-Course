import { expect } from "chai";
import { lookupChar } from "../charLookup.js";

describe("Testing the functionality", () => {
  it("Should return undefined if string is not string", () => {
    expect(lookupChar(15, 5)).to.be.undefined;
    expect(lookupChar(5, 5)).to.be.undefined;
    expect(lookupChar(13, 5)).to.be.undefined;
    expect(lookupChar(113, 5)).to.be.undefined;
    expect(lookupChar(903, 5)).to.be.undefined;
  });
  it("Should return undefined if index is not number", () => {
    expect(lookupChar("51++", "q")).to.be.undefined;
    expect(lookupChar("51-", "11")).to.be.undefined;
    expect(lookupChar("510", "qee")).to.be.undefined;
    expect(lookupChar("5", "qeeee")).to.be.undefined;
    expect(lookupChar("511", "qees")).to.be.undefined;
  });
  it("Should return error if the index is wrong", () => {
    expect(lookupChar("dog", 4)).to.equal("Incorrect index");
    expect(lookupChar("dog", -4)).to.equal("Incorrect index");
    expect(lookupChar("dog", 45)).to.equal("Incorrect index");
    expect(lookupChar("dogs", -1)).to.equal("Incorrect index");
  });
  it("Should work", () => {
    expect(lookupChar("dog", 0)).to.equal("d");
    expect(lookupChar("dogy", 1)).to.equal("o");
    expect(lookupChar("dogie", 2)).to.equal("g");
    expect(lookupChar("dogies", 3)).to.equal("i");
    expect(lookupChar("dogster", 4)).to.equal("t");
  });
  it("Should work with floating point numbers", () => {
    expect(lookupChar("dog", 0.5)).to.be.undefined;
    expect(lookupChar("dog", 1.5)).to.be.undefined;
    expect(lookupChar("dog", 2.5)).to.be.undefined;
  });
});
