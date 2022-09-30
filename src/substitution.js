// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
// check if alphabet has 26 characters or is missing
if (!alphabet || alphabet.length !== 26) return false;

//check if alphabet contains duplicates
if (duplicatesPresent(alphabet)) return false;

//select between two paths - encode true vs encode false
if(encode) {
    return encodeMessage(input, alphabet);
}else{
     return decodeMessage(input, alphabet);
    }; 

function encodeMessage(input, alphabet){
//Change input to lowercase 
let newInput = input.toLowerCase();
let message = '';
for (let i=0; i < newInput.length; i++){
    //add space to message to maintain spaces as is
    if (newInput[i] === ' '){
        message += newInput[i];
    }else{
        //get ASCII value of input character
        let number = newInput.charCodeAt(i);
        //find numerical position of a letter in the alphabet
        let placeInAlphabet = number - 97;
        message += alphabet[placeInAlphabet];
    }
}
return message;
}

function decodeMessage(input, alphabet){
    //Convert alphabet into an array 
    let newArray = Array.from(alphabet);
    let message = '';
    //iterate through each letter of input
    for(let i = 0; i<input.length; i++){
        if (input[i] === ' '){
            message += input[i];
        }else{
    //find letter in alphabet array
    newArray.map((letter) =>{
        if (input[i] === letter){
            //find index of the current input letter in substitution alphabet
            let letterPosition = newArray.indexOf(letter);
            //get ASCII value of letterPosition
            let decodedLetterCode = letterPosition + 97;
            //convert ASCII value to letter and add to message 
            message += String.fromCharCode(decodedLetterCode);
        }
    })
    }
}
return message;
}


//helper function to check for duplicates
function duplicatesPresent(alphabet){
    for(let i=0; i< alphabet.length; i++){
        for(let j = i+1; j < alphabet.length; j++){
            if (alphabet[i] === alphabet[j]){
            return true;
        } 
       }
    }
    return false;
}

}

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
