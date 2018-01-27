/*
I = 1
II = 2
III = 3
IV = 4
V = 5
VI = 6
VII = 7
VIII = 8
IX = 9
X = 10
XI = 11
*/

let assert = require("assert");
const RomanNumerals = require("../RomanNumerals");

describe("Roman Numerals Converter", () => {

    it("should convert the number 1 to the Roman Numeral 'I'", () => {
        let romanNumerals = new RomanNumerals();

        assert.equal(romanNumerals.convert(1), "I");
    })

    it("should convert the number 2 to the Roman Numeral 'II'", () => {
        let romanNumerals = new RomanNumerals();

        assert.equal(romanNumerals.convert(2), "II");
    })

    it("should convert the number 3 to the Roman Numeral 'III'", () => {
        let romanNumerals = new RomanNumerals();

        assert.equal(romanNumerals.convert(3), "III");
    })

    it("should convert the number 5 to the Roman Numeral 'V'", () => {
        let romanNumerals = new RomanNumerals();

        assert.equal(romanNumerals.convert(5), "V");
    })
})