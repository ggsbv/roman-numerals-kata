let assert = require("assert");
const RomanNumerals = require("../RomanNumerals");

describe("Roman Numerals Converter", () => {

    it("should convert the roman numeral 'I' to the number 1", () => {
        let romanNumerals = new RomanNumerals();

        assert.equal(romanNumerals.convert(1), "I");
    })

    it("should convert the roman numeral 'II' to the number 2", () => {
        let romanNumerals = new RomanNumerals();

        assert.equal(romanNumerals.convert(2), "II");
    })

})