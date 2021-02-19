// Prompt variables
var passLength, passLowercase, passUppercase, passNumeric, passSpecial

// Character arrays for prompts
var lowercaseArray = [
    'a', 'b',
    'c', 'd',
    'e', 'f', 
    'g', 'h',
    'i', 'j',
    'k', 'l',
    'm', 'n', 
    'o', 'p',
    'q', 'r',
    's', 't',
    'u', 'v',
    'w', 'x',
    'y', 'z'
];

var uppercaseArray = [
    'A', 'B', 
    'C', 'D', 
    'E', 'F', 
    'G', 'H', 
    'I', 'J', 
    'K', 'L', 
    'M', 'N',
    'O', 'P', 
    'Q', 'R', 
    'S', 'T', 
    'U', 'V', 
    'W', 'X', 
    'Y', 'Z'
];

var numericArray = [
    '0', '1',
    '2', '3', 
    '4', '5',
    '6', '7',
    '8', '9'
];

var specialArray = [
    '!', '"',
    '#', '$',
    '%', '&',
    '(', ')',
    '*', '+',
    '-', '/',
    ':', ';',
    '<', '=',
    '>', '?',
    '@', '[',
    ']', '^',
    '_', '`',
    '{', '}',
    '|', '~'
];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Password function


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
