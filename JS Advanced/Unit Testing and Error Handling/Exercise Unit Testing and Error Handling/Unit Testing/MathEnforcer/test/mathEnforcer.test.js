import { expect } from "chai";
import {mathEnforcer} from "../mathEnforcer.js"

describe("Testing the functionality", ()=>{
    it("Should return undefined if the input is not num addfive", ()=>{
        const input = "5"

        expect(mathEnforcer.addFive(input)).to.be.undefined
    })
    it("Should return undefined if the input is not num subtract", ()=>{
        const input = "5"

        expect(mathEnforcer.subtractTen(input)).to.be.undefined
    })
    it("Should return undefined if the input is not num sum", ()=>{
        const input = "5"
        const input2 = "5"
        expect(mathEnforcer.sum(input, input2)).to.be.undefined
    })

    it("Should add 5", ()=>{
        expect(mathEnforcer.addFive(5)).to.equal(10)
        expect(mathEnforcer.addFive(-1)).to.equal(4)
        expect(mathEnforcer.addFive(5.5)).to.equal(10.5)
    })
    it("Should subtract 10", ()=>{
        expect(mathEnforcer.subtractTen(15)).to.equal(5)
        expect(mathEnforcer.subtractTen(15.5)).to.equal(5.5)
        expect(mathEnforcer.subtractTen(-15)).to.equal(-25)
    })
    it("Should sum 2 nums", ()=>{
        expect(mathEnforcer.sum(5, 5)).to.equal(10)
        expect(mathEnforcer.sum(-5, 5)).to.equal(0)
        expect(mathEnforcer.sum(5.5, 5)).to.equal(10.5)
    })
    it("Should return undefined if the input is not num sum", ()=>{
        const input = "5"
        const input2 = 5
        expect(mathEnforcer.sum(input, input2)).to.be.undefined
    })
})