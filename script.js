let possibleCharacters = []

// Assignment Code
// Global variables
function generatePassword() {
  var generateBtn = document.querySelector("#generate");
  var characters = ["lowercase letters", "uppercase letters", "numbers", "special characters"]
  var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  var numbeers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
  var characters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"]

// get input and validate
  let numberOfCharacters = prompt("How many characters do you want in your password? Choose between 8-128 characters.");
    if (numberOfCharacters < 8 || numberOfCharacters > 128) {
      return "Please choose a valid number of characters.";
    } 
    else if (isNaN(numberOfCharacters)) {
      numberOfCharacters = prompt("Please enter a valid number.");
    }
    else {
      alert("Your password will be " + numberOfCharacters + " characters long.");
  
    }

  let selectedLowercase = confirm("Do you want lowercase characters?");
    if (selectedLowercase) {
      alert("Your password will have lowercase characters.");
    }
    else {
      alert("Your password will NOT have lowercase characters.");
      return null
    }

  let selectedUppercase = confirm("Do you want uppercase characters?");
    if (selectedUppercase) {
      alert("Your password will have uppercase characters.");
    }
    else {
      alert("Your password will NOT have uppercase characters.");
      return null
    }

  let selectedNumbers = confirm("Do you want to use numbers?");
    if (selectedNumbers) {
      alert("Your password will have numbers.");
    }
    else {
      alert("Your password will NOT have numbers.");
      return null
    }

  let selectedSpecialCharacters = confirm("Do you want special characters?");
    if (selectedSpecialCharacters) {
      alert("Your password will have special characters.");

    }
    else {
      alert("Your password will NOT have special characters.");
      return null
    }

  if (selectedLowercase === false && selectedUppercase === false && selectedNumbers === false && selectedSpecialCharacters === false) {
    return "Please select at least one character type.";
  };

// group selected characters
  if (selectedLowercase) {
    possibleCharacters = possibleCharacters.concat(lowercase);
  }
  if (selectedUppercase) {
    possibleCharacters = possibleCharacters.concat(uppercase);
  }
  if (selectedNumbers) {
    possibleCharacters = possibleCharacters.concat(numbeers);
  }
  if (selectedSpecialCharacters) {
    possibleCharacters = possibleCharacters.concat(characters);
  }

// pick random cards out of new pool for length of password
let finalPassword = ""
  for (let i = 0; i < numberOfCharacters; i++) {
    let rng =[Math.floor(Math.random() * possibleCharacters.length)];
  // or finalPassword += possibleCharacters[rng];
    finalPassword = finalPassword + possibleCharacters[rng];
}
  return finalPassword;
};

// Generate element
var generateBtn = document.querySelector("#generate");

// Password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);