
// Variable Assignments

var generateBtn = document.querySelector("#generate");
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numerical = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var special = ["!", "@", "#", "$", "%", "^", "&", "*"];

// Function to get the password options: Length and Character Types

function getPasswordOptions(){

  //Length prompt
  var confirmLength = parseInt(prompt("How many characters would you like?"))
  if (confirmLength < 8) {
    alert("Please enter a number between 8-128")
    return
  } if (confirmLength > 128) {
    alert("Please enter a number between 8-128")
    return
  } if (Number.isInteger(confirmLength) === false) {
    alert("Please enter a number between 8-128")
    return
  }

  //Console result
  console.log(confirmLength)

  // Confirm what characters user wants
  var lcConfirm = confirm("Do you want lowercase letters?")
  var ucConfirm = confirm("Do you want uppercase letters?")
  var nConfirm = confirm("Do you want numbers?")
  var sConfirm = confirm("Do you want special characters?")

  // If doesn't confirm any, end
  if (!lcConfirm && !ucConfirm && !nConfirm && !sConfirm) {
    alert("Hey man please pick something")
    return
  }

  var passwordOptions = {
    confirmLength: confirmLength,
    lcConfirm: lcConfirm,
    ucConfirm: ucConfirm,
    nConfirm: nConfirm,
    sConfirm: sConfirm,
  }

  console.log("Password Options" + passwordOptions);
  return passwordOptions;
}

// Random assignment
function randomizer(arr){
  var randomIndex = Math.floor(Math.random()*arr.length);
  var randomElement = arr[randomIndex];
  console.log("Random Element: " + randomElement);
  return randomElement
}

// Creates the password
function generatePassword(){
  var options = getPasswordOptions();
  var result = [];
  var possibleChar = [];
  var guaranteedChar = [];

    if (options.lcConfirm) {
      possibleChar = possibleChar.concat(lowercase);
      guaranteedChar.push(randomizer(lowercase));
    } if (options.ucConfirm) {
      possibleChar = possibleChar.concat(uppercase);
      guaranteedChar.push(randomizer(uppercase));
    } if (options.nConfirm) {
      possibleChar = possibleChar.concat(numerical);
      guaranteedChar.push(randomizer(numerical));
    } if (options.ucConfirm) {
      possibleChar = possibleChar.concat(special);
      guaranteedChar.push(randomizer(special));
    }

  //Loop to make the password with all possible characters at the given length
  for (var i=0; i < options.confirmLength; i++){
    result.push(randomizer(possibleChar));
  }

  //Loop to replace the first 0-4 indexes with the guaranteed characters to make sure the first four characters represent the guaranteed ones
  for (var i=0; i < guaranteedChar.length; i++){
    result[i] = guaranteedChar[i]
  }

  console.log(guaranteedChar);
  console.log(possibleChar);
  console.log(result)

  //Makes the array into a string
  return result.join("");
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
