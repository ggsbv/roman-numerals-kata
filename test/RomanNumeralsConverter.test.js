describe("Roman Numerals Converter", () => {

    it("should convert the roman numeral 'I' to the number 1", () => {
        let romanNumerals = new RomanNumerals();

        assert.equal(romanNumerals.convert("I"), 1);
    })

})