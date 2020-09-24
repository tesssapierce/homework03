// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numerical = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var special = ["!", "@", "#", "$", "%", "^", "&", "*"];

// When use clicks on button, create random assignment
// When user clicks, prompt for how long password should be
//   -- What if the character count is outside of 8-128 : Alert
// When user clicks, confirm if user wants LC, UC, NO, SP
//   -- What happens if they don't select anything : Alert
// Store responses as variables and put into an object
// Create function that will randomize the arrays
// Write the password
//   -- Create two arrays - one that is all possible characters, one that is the specific characters
//   -- Put password on screen


// Functions

function getPasswordOptions(){
  var length = parseInt(prompt("How many characters would you like?"))
  if (length < 8) {
    alert("Please enter a number between 8-128")
    return
  } if (length > 128) {
    alert("Please enter a number between 8-128")
    return
  } // TODO: Validate if it is a number

  // Confirm what characters user wants
  var lcConfirm = confirm("Do you want lowercase letters?")
  var ucConfirm = confirm("Do you want uppercase letters?")
  var nConfirm = confirm("Do you want numbers?")
  var sConfirm = confirm("Do you want special characters?")

  // TODO: Might have to switch this to lcConfirm === false && etc
  if (!lcConfirm && !ucConfirm && !nConfirm && !sConfirm) {
    alert("Hey man please pick something")
    return
  }

  // Object of true/false
  var passwordOptions = {
    length: length,
    lcConfirm: lcConfirm,
    ucConfirm: ucConfirm,
    nConfirm: nConfirm,
    sConfirm: sConfirm,
  }
  console.log("Password Options: " + passwordOptions);
  return passwordOptions;
}

// Random assignment
function randomizer(arr){
  var randomIndex = Math.floor(Math.random()*arr.length);
  var randomElement = arr[randomIndex];
  console.log("Random Element: " + randomElement);
  return randomElement
}

//options contains the object above
function generatePassword(){
  var options = getPasswordOptions();
  var result = []
  var possibleChar = []
  var guaranteedChar = []

  if (options.lcConfirm) {
    possibleChar = possibleChar.concat(lowercase);
    guaranteedChar.push(randomizer(lowercase));
  } if (options.ucConfirm) {
    possibleChar = possibleChar.concat(uppercase);
    guaranteedChar.push(randomizer(uppercase));
  } // TODO: finish this

  console.log(result);
  return result;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
