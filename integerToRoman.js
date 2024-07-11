<<<<<<< HEAD
function intToRoman(input) {
    let result = "";

    if (input >= 1 && input <= 3999) {
        let romanNumerals = [
            { value: 1000, numeral: "M" },
            { value: 900, numeral: "CM" },
            { value: 500, numeral: "D" },
            { value: 400, numeral: "CD" },
            { value: 100, numeral: "C" },
            { value: 90, numeral: "XC" },
            { value: 50, numeral: "L" },
            { value: 40, numeral: "XL" },
            { value: 10, numeral: "X" },
            { value: 9, numeral: "IX" },
            { value: 5, numeral: "V" },
            { value: 4, numeral: "IV" },
            { value: 1, numeral: "I" },

        ];

        for (let i = 0; i < romanNumerals.length; i++) {
            let { value, numeral } = romanNumerals[i];


            while (input >= value) {
                input -= value;
                result += numeral;
            }
        }
    }
    return result;
}
=======
function intToRoman(input) {
    let result = "";

    if (input >= 1 && input <= 3999) {
        let romanNumerals = [
            { value: 1000, numeral: "M" },
            { value: 900, numeral: "CM" },
            { value: 500, numeral: "D" },
            { value: 400, numeral: "CD" },
            { value: 100, numeral: "C" },
            { value: 90, numeral: "XC" },
            { value: 50, numeral: "L" },
            { value: 40, numeral: "XL" },
            { value: 10, numeral: "X" },
            { value: 9, numeral: "IX" },
            { value: 5, numeral: "V" },
            { value: 4, numeral: "IV" },
            { value: 1, numeral: "I" },

        ];

        for (let i = 0; i < romanNumerals.length; i++) {
            let { value, numeral } = romanNumerals[i];


            while (input >= value) {
                input -= value;
                result += numeral;
            }
        }
    }
    return result;
}
>>>>>>> 9afaa00c6fa737b178bcf6ee15a242e901b23ea7
console.log(intToRoman(3749));