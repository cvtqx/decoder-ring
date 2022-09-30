// Write your tests here!
const substitution = require("../src/substitution").substitution;
const expect = require("chai").expect;


describe("substitution", () =>{
    it("returns false when substitution alphabet is missing", () =>{
        const message = "hello";
        const alphabet = null;
        const actual = substitution("hello");

        expect(actual).to.be.false;
    });
    it("returns false when substitution alphabet is not 26 characters long", () =>{
        const message = "hello";
        const alphabet = "abc";
        const actual = substitution(message, alphabet);

        expect(actual).to.be.false;
    });
    it("returns false when substitution alphabet contains duplicate characters", () =>{
        const message = "hello";
        const alphabet = "mnmvcxzlkjhgfdsapoi*yt$ew@";
        const actual = substitution(message, alphabet);

        expect(actual).to.be.false;
    });
    it("works even with unique characters present in the subsitution alphabet", () =>{
        const message = "hello autumn";
        const alphabet = "%nbvcxzlkjhgfdsapoi*yt$ew@";
        const actual = substitution(message, alphabet);
        const expected = "lcggs %y*yfd";

        expect(actual).to.equal(expected);
    });
    it("keeps spaces as is", () =>{
        const message = "hello olga";
        const alphabet = "%nbvcxzlkjhgfdsapoi*yt$ew@";
        const actual = substitution(message, alphabet);
        const expected = "lcggs sgz%";

        expect(actual).to.equal(expected);
    });
    it("encodes a message based on the substitution alphabet given", () =>{
        const message = "hello olga";
        const alphabet = "%nbvcxzlkjhgfdsapoi*yt$ew@";
        const actual = substitution(message, alphabet);
        const expected = "lcggs sgz%";

        expect(actual).to.equal(expected);
    });
    it("decodes a message based on the substitution alphabet given when encode is false", () =>{
        const message = "lcggs sgz%";
        const alphabet = "%nbvcxzlkjhgfdsapoi*yt$ew@";
        const actual = substitution(message, alphabet, false);
        const expected = "hello olga";

        expect(actual).to.equal(expected);
    });
})








