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
})