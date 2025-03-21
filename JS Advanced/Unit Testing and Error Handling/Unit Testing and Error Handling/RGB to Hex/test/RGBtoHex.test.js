import { expect } from "chai";
import { rgbToHexColor } from "../RGBtoHex.js";

describe("Testing the functionality", () => {
    it("should return undefined for invalid red", () => {
        expect(rgbToHexColor(-1, 0, 0)).to.equal(undefined);
    });
    
    it("should return undefined for invalid green", () => {
        expect(rgbToHexColor(0, -1, 0)).to.equal(undefined);
    });
    
    it("should return undefined for invalid blue", () => {
        expect(rgbToHexColor(0, 0, -1)).to.equal(undefined);
    });
    
    it("should return undefined for invalid red", () => {
        expect(rgbToHexColor(256, 0, 0)).to.equal(undefined);
    });
    
    it("should return undefined for invalid green", () => {
        expect(rgbToHexColor(0, 256, 0)).to.equal(undefined);
    });
    
    it("should return undefined for invalid blue", () => {
        expect(rgbToHexColor(0, 0, 256)).to.equal(undefined);
    });
    
    it("should return #000000 for (0, 0, 0)", () => {
        expect(rgbToHexColor(0, 0, 0)).to.equal("#000000");
    });
    
    it("should return #FF9EAA for (255, 158, 170)", () => {
        expect(rgbToHexColor(255, 158, 170)).to.equal("#FF9EAA");
    });
    
    it("should return #0C0D0E for (12, 13, 14)", () => {
        expect(rgbToHexColor(12, 13, 14)).to.equal("#0C0D0E");
    });
});
