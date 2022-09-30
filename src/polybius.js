// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
//introduce the object of keys
const keys ={
        a: 11,
        b: 21, 
        c: 31,
        d: 41,
        e: 51,
        f: 12,
        g: 22,
        h: 32,
        i: 42,
        j: 42,
        k: 52,
        l: 13,
        m: 23,
        n: 33,
        o: 43,
        p: 53,
        q: 14,
        r: 24,
        s: 34,
        t: 44,
        u: 54,
        v: 15,
        w: 25,
        x: 35,
        y: 45,
        z: 55
    }

    const keyNumbers = Object.values(keys);
    const keyLetters = Object.keys(keys);

function polybius(input, encode = true) {
    //check if input exists and choose between two paths: encode true or encode false
    if (!input){
        return false;
    }else if(encode){
         return encodeMessage(input);
    }else{
         return decodeMessage(input);
    }
};
    

    //encode = true
    function encodeMessage(input) {
    //convert input to lowercase
    let text = input.toLowerCase();
    //var to store the result
    let result = '';
    //iterate through the input
    for (let i = 0; i < text.length; i++){
    //iterate through keys object
    if(text[i] in keys){
        result += keys[text[i]];
        } else if (text[i] === ' '){
            result += text[i];
        } 
    }
    return result;
}

    //if encode = false
    function decodeMessage(input){
        let result = '';
        //return false if input without spaces has odd number of characters
        if ((input.split(" ").join("").length) % 2 !== 0){
            return false;
        };
        //add extra space to input to keep even number of characters and create new array of 2 characters in each element
        let newArray = input.split(" ").join("  ").match(/../g);
        //iterate through newArray
        for(let i = 0; i < newArray.length; i++){
        //check if i is equal to double space, add single space
        if (newArray[i] === "  "){
            result += " "
        }else if(newArray[i] === '42'){
            result += '(i/j)';
        }else{
            //iterate through keyNumbers array to find a matching number
            keyNumbers.forEach((value,index) => {
                if (newArray[i] == value){
                result += keyLetters[index];
                }
            })
            }
        }
        return result;

    }
    
  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
