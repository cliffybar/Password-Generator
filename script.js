// Prompt declarations
var passLength, passLowercase, passUppercase, passNumbers, passSpecial

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

var numbersArray = [
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

// Password Generator function
var passwordGenerator = function() {

    // Prompt for password length
    passLength = parseInt(window.prompt("How long would you like your password? Password must be between 8 and 128 characters."));

    if (passLength < 7 || passLength > 128) {
        window.alert("Invalid length. Please try again.")
    }

    // If true, user answers below prompts
    else {
        passLowercase = confirm("Password to include lowercase letters? Click OK for 'Yes' and Cancel for 'No'.");
        console.log(passLowercase);

        passUppercase = confirm("Password to include uppercase letters? Click OK for 'Yes' and Cancel for 'No'.");
        console.log(passUppercase);

        passNumbers = confirm("Password to include numbers? Click OK for 'Yes' and Cancel for 'No'.");
        console.log(passNumbers);

        passSpecial = confirm("Password to include special letters? Click OK for 'Yes' and Cancel for 'No'.");
        console.log(passSpecial);
    };
};

passwordGenerator();


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
