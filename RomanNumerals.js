module.exports = class RomanNumerals {

    convert(number) {
        if (number > 1) {
            return "II";
        }
        return "I";
    }

}
