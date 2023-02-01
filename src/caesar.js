

const caesarModule = (function () {
  

function caesar(input, shift, encode = true) {
    //check if shift is a valid value
    if (!shift || shift === 0 || shift > 25 || shift < -25){
        return false;
    };
    
    
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



