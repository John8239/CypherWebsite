///*****************************************************************************************************************///
/// these two functions accept a string or a string with a num and then iterates over the string and adds the chars ///
///         to a vector, to which the functions then return the new vector (and num if applicable                   ///
///*****************************************************************************************************************///

function stringToArrayInv(words){

    let wordsVector = [];
    for (let i = 0; i < words.length; i++) {
        wordsVector.push(words[i]);
    }
    console.log("stringToArray function works 1...");
    inverseEncrypter(wordsVector);
    console.log("stringToArray function works 2...");
}

function stringToArrayOff(words, num){

    let wordsVec = [];
    for (let j = 0; j < words.length; j++) {
        wordsVec.push(words[j]);
    }
    console.log("stringToArrayOff function works 1...");
    offsetEncrypter(wordsVec, num);
    console.log("stringToArrayOff function works 2...");
}



///*****************************************************************************************************************///
///      These functions takes a vector of chars (created from a string sent to the stringToArray functions) and    ///
///      converts the individual chars into their ASCII ints and then calculates their inverse/offset and prints    ///
///                                                     them                                                        ///
///*****************************************************************************************************************///
function inverseEncrypter(elements){
    // ASCII letters: 'A' = 65 & 'Z' = 90 && 'a' = 97 & 'z' = 122 //
    // ASCII numbers: '0' = 48 & '9' = 57 //
    let character;

    for(let i = 0; i < elements.length; i++) {
            switch(true){
                case elements[i] === ' ':
                    elements[i] = ' ';
                    break;
                case elements[i] >= "A" && elements[i] <= "Z":
                    character = String.fromCharCode(91 - (elements[i].charCodeAt(elements[i]) - 64));
                    elements[i] = character;
                    // console.log(character);
                    break;
                case elements[i] >= "a" && elements[i] <= "z":
                    character = String.fromCharCode(123 - (elements[i].charCodeAt(elements[i]) - 96));
                    elements[i] = character;
                    // console.log(character);
                    break;
                case elements[i] >= 0 && elements[i] <= 9:
                    character = String.fromCharCode(58 - (elements[i].charCodeAt(0) - 47));
                    elements[i] = character;
                    // console.log(character);
                    break;
                default:
                    break;
            }
    }
    console.log("inverseEncrypter function works 1...");
    displayWords(elements);
    console.log("inverseEncrypter function works 2...");
}


function offsetEncrypter(elements, num){
    /// ASCII letters: 'A' = 65 & 'Z' = 90 && 'a' = 97 & 'z' = 122 ///
    /// ASCII numbers: '0' = 48 & '9' = 57 ///
    let character;
    num = parseInt(num);

    for(let i = 0; i < elements.length; i++) {
        if(elements[i] === ' ')
        {
            elements[i] = ' ';
        }
        else if (elements[i] >= "A" && elements[i] <= "Z") {
            if ((((elements[i].charCodeAt(elements[i]) - 64) + num) % 26) === 0)
            {
                character = String.fromCharCode((((elements[i].charCodeAt(elements[i]) - 64) + num)
                    % 26) + 90);
                elements[i] = character;
            }
            else
            {
                character = String.fromCharCode((((elements[i].charCodeAt(elements[i]) - 65) + num)
                    % 26) + 65);
                elements[i] = character;
            }
            // console.log(character);
        }
        else if(elements[i] >= "a" && elements[i] <= "z")
        {
            if (((elements[i].charCodeAt(elements[i]) - 96 + num) % 26) === 0) {
                character = String.fromCharCode(((elements[i].charCodeAt(elements[i]) - 96
                    + num) % 26) + 122);
                elements[i] = character;
            }
            else
            {
                character = String.fromCharCode(((elements[i].charCodeAt(elements[i]) - 96
                    + num) % 26) + 96);
                elements[i] = character;
            }
        // console.log(character);
        }
        else if(elements[i] >= 0 && elements[i] <= 9)
        {
            if ((((elements[i].charCodeAt(0) - 47) + num) % 10) === 0) {
                character = String.fromCharCode((((elements[i].charCodeAt(0) - 47) + num) % 10) + 57);
                elements[i] = character;
            }
            else
            {
                character = String.fromCharCode((((elements[i].charCodeAt(0) - 47) + num) % 10) + 47);
                elements[i] = character;
            }
            // console.log(character);
        }
    }
    console.log("offsetEncrypter function works 1...");
    displayWords(elements);
    console.log("offsetEncrypter function works 2...");
}


//*******************************************************************************************************************//
//*                                      Resets the display textarea                                                *//
//*******************************************************************************************************************//
function reset(){
    document.getElementById('convertedWords').innerHTML = '';
}


//*******************************************************************************************************************//
//*              This is the display function, it displays the final vector of chars as a word                      *//
//*******************************************************************************************************************//
function displayWords(elements){
    let finalString = elements.join("");
    console.log(finalString);
    document.getElementById('convertedWords').innerHTML = finalString;
    let element = document.getElementById("convertedWords");
    element.style.color = "darkcyan";
}
