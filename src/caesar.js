// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

function caesar(input, shift, encode = true) {
    //check if shift is a valid value
    if (!shift || shift === 0 || shift > 25 || shift < -25){
        return false;
    };
    
    //declare a var to store the result
let result = '';

    //change input to lower case
let text = input.toLowerCase();
    //iterate through the text array
for(let i = 0; i < text.length; i++){
    //get each character
    let character = text[i];
    //check if it's a letter
    if (character.match(/[a-z]/i)){
    //get character's ASCII value
    let code = text.charCodeAt(i);
     //covert neg shift to positive
    if(shift < 0) { shift = 26 + (shift % 26)};
    //if encode is true
    if (encode){
    //turn the character into ciphertext
    character = String.fromCharCode(((code - 97 + shift)%26) + 97);
    }else{
    //if encode is false 
    character = String.fromCharCode(((code - 97 + (26 - shift)) % 26) + 97);   
    }
    //add the character to the result
    result += character;
    }else{
    result += text[i];
    } 
  }
  return result;
}

 return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };



