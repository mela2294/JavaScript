// Assignment Code
var generateBtn = document.querySelector("#generate");
var characters = ["lowercase letters", "uppercase letters", "numbers", "special characters"]

// for (var i = 0; i < 5; i++) {
// confirm("Click OK to include " + characters + " otherwise click Cancel.");
// }

// Write password to the #password input
function generatePassword() {
    var passwordNow = prompt("Choose length of password between 8 and 128 characters.");
    var lowercase = confirm("lowercase?")
    console.log("lowercase", lowercase)
    var lowercase = confirm("uppercase?")
    console.log("uppercase", uppercase)
    var lowercase = confirm("numbers?")
    console.log("numbers", numbers)
    var lowercase = confirm("special characters")
    // console.log("special characters", special characters?")

console.log("passwordNow", passwordNow)
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
