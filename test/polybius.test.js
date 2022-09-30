// Write your tests here!
const {polybius} = require("../src/polybius"); 
const expect = require("chai").expect;

describe("polybius", () =>{
    it("returns false when input is missing", () =>{
        const input = null;
        const actual = polybius();

        expect(actual).to.be.false;
    });
    it("returns false when number of characters in the input is not even while decoding", () =>{
        const input = "4231211";
        const actual = polybius(input, false);

        expect(actual).to.be.false;
    });
    it("keeps spaces as is in output", () =>{
        const input = "hello olga";
        const actual = polybius(input);
        const expected = "3251131343 43132211";

        expect(actual).to.equal(expected);
    });
    it("encodes a message by converting letters to 2-digit numbers when encode is true", () =>{
        const input = "welcome";
        const actual = polybius(input);
        const expected = "25511331432351";

        expect(actual).to.equal(expected);
    });
    it("decodes a message by converting pairs of numbers into corresponding letter when encode is false", () =>{
        const input = "22434341 23432433423322";
        const actual = polybius(input, false);
        const expected = "good morn(i/j)ng";

        expect(actual).to.equal(expected);
    });
    it("converts both 'i' and 'j' to 42", () =>{
        const input = "little big lies";
        const actual = polybius(input);
        const expected = "134244441351 214222 13425134";

        expect(actual).to.equal(expected);
    });
    it("converts 42 to 'i/j'", () =>{
        const input = "134244441351 214222 13425134";
        const actual = polybius(input, false);
        const expected = "l(i/j)ttle b(i/j)g l(i/j)es";

        expect(actual).to.equal(expected);
    });


})





 
