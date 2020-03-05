//array for random numbers
var numArr = [
  0, 
  1, 
  2, 
  3, 
  4, 
  5, 
  6, 
  7, 
  8, 
  9
]
//array for lowercase letters
var lowArr = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
]
//array for uppercase letters
var upperArr = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
]
//array for special characters
var specialArr = [
  ' ',
  '!',
  '#',
  '$',
  '%',
  '^',
  '&',
  '*',
  '(',
  ')',
  '-',
  '`',
  '~',
  '=',
  '_',
  '[',
  ']',
  '{',
  '}',
  '|',
  ';',
  ':',
  '"',
  "'",
  ',',
  '.',
  '/',
  '<',
  '>',
  '?'
]

//Random selection of the "more specific" random arrays.
var randChar = {
  number: numRand,
  lower: lowRand,
  upper: upRand,
  special: specialRand
};

//Length Variable and trying to force a numeric input
var pwLength = prompt("Choose the length of your password. Choose from 8 to 128 characters.");
console.log(pwLength);
if (pwLength >=8 || pwLength <=128 && pwLength != '') {
  alert("Your password will be " + pwLength +  " characters long.");
}
else {
  alert("You chose a wrong value. Defaulting to 8 characters for length.");
  pwLength = 8;
}

//Guidelines alert
alert("You may choose 1 to 4 of the following options for your password.");

//Numbers prompt
var hasNum = confirm("Do you want numbers?");
console.log(hasNum);

//Lowercase prompt
var hasLow = confirm("Do you want lowercase letters?");
console.log(hasLow);

//Uppercase prompt
var hasUp = confirm("Do you want uppercase letters?");
console.log(hasUp);

//Special Character prompt
var hasSpec = confirm("Do you want special characters?");
console.log(hasSpec);

//If all are declined alert that all are seclected
if (hasNum === false && hasLow === false && hasUp === false && hasSpec === false) {
  alert("By declining any of the selections, you will now recieve all of them.");
  hasNum = true;
  hasLow = true;
  hasUp = true;
  hasSpec = true;
}

console.log(pwLength);
console.log(hasNum);
console.log(hasLow);
console.log(hasUp);
console.log(hasSpec);

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
 

//Random Number
function numRand() {
  return numArr[Math.floor(Math.random() * numArr.length)]
}
//Random Lowercase
function lowRand() {
  return lowArr[Math.floor(Math.random() * lowArr.length)]
}
//Random Uppercase
function upRand() {
  return upperArr[Math.floor(Math.random() * upperArr.length)]
}
//Random Special Character
function specialRand() {
  return specialArr[Math.floor(Math.random() * specialArr.length)]
}