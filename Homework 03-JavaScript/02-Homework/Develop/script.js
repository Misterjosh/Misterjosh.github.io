//array for random numbers 0-9
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
//array for lowercase letters 0-25
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
//array for uppercase letters 0-25
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
//array for special characters 0-29
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
 

//Random Number Function
function numRand() {
  numArr[Math.floor(Math.random() * 10)]
}
//Random Lowercase Function
function lowRand() {
  lowArr[Math.floor(Math.random() * 26)]
}
//Random Uppercase Function
function upRand() {
  upperArr[Math.floor(Math.random() * 26)]
}
//Random Special Character Function
function specialRand() {
  specialArr[Math.floor(Math.random() * 30)]
}
console.log(numArr[Math.floor(Math.random() * 10)]);
console.log(lowArr[Math.floor(Math.random() * 26)]);
console.log(upperArr[Math.floor(Math.random() * 26)]);
console.log(specialArr[Math.floor(Math.random() * 30)]);