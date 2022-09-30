// Write your tests here!
const {caesar} = require("../src/caesar"); 
const expect = require("chai").expect;


describe("caesar", () =>{
    it("returns false when shift is equal to 0", () =>{
        const message = 'hello';
        const shift = 0;
        const actual = caesar(message,shift);

        expect(actual).to.be.false;
    });
    it("returns false when shift does not exist", () =>{
        const message = 'hello';
        const shift = null;
        const actual = caesar(message);

        expect(actual).to.be.false;
    });
    it("returns false when is greater than 25", () =>{
        const message = 'hello';
        const shift = 26;
        const actual = caesar(message, shift);

        expect(actual).to.be.false;
    });
    it("returns false when is less than -25", () =>{
        const message = 'hello';
        const shift = -26;
        const actual = caesar(message, shift);

        expect(actual).to.be.false;
    });
    it("encodes message correctly", () =>{
        const message = "hello";
        const shift = 1;
        const actual = caesar(message, shift);
        const expected = "ifmmp"

        expect(actual).to.equal(expected);
    });
    it("decodes message correctly when encode is false", () =>{
        const message = "ifmmp";
        const shift = 1;
        const actual = caesar(message, shift, false);
        const expected = "hello"

        expect(actual).to.equal(expected);
    });
    it("keeps punctuation marks and spaces", () =>{
        const message = "hello, world";
        const shift = 1;
        const actual = caesar(message, shift);
        const expected = "ifmmp, xpsme";

        expect(actual).to.equal(expected);
    });
    it("ignores capital letters", () =>{
        const message = "Hello, World";
        const shift = 1;
        const actual = caesar(message, shift);
        const expected = "ifmmp, xpsme";

        expect(actual).to.equal(expected);
    });
    it("shifts to the left when shift value is negative", () =>{
        const message = "hello, world";
        const shift = -1;
        const actual = caesar(message, shift);
        const expected = "gdkkn, vnqkc";

        expect(actual).to.equal(expected);
    });
    it("loops around the alphabet when encoding letters at the end of the alphabet", () =>{
        const message = "zombie";
        const shift = 3;
        const actual = caesar(message, shift);
        const expected = "crpelh";

        expect(actual).to.equal(expected);
    });
})




