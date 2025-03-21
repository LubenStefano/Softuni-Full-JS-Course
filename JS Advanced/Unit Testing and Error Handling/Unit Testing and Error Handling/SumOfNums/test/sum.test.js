import { expect } from "chai";
import {sum} from "../sum.js"

describe("Testing sum", ()=>{
    it("Should qual the sum", ()=>{
        const arr = [1, 4]
        const expectedResult = 5

        const result = sum(arr)

        expect(expectedResult).to.equal(result)
    })
    it(
});
