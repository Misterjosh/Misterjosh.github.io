//array for random numbers
var numArr = [
  '0', 
  '1', 
  '2', 
  '3', 
  '4', 
  '5', 
  '6', 
  '7', 
  '8', 
  '9'
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

var pwArr = []

//Length Variable and trying to force a numeric input
var pwLength = prompt("Choose the length of your password. Choose from 8 to 128 characters.");
//console.log(pwLength);
if (pwLength >=8 && pwLength <=128 && pwLength != '') {
  alert("Your password will be " + pwLength +  " characters long.");
}
else {
  alert("You chose a wrong value. Defaulting to 8 characters for length.");
  pwLength = 8;
}

//Guidelines alert
alert("Passwords will all contain lowercase letters.")
alert("Choose 1 to 3 of the following options for your password.");

//Numbers prompt
var hasNum = confirm("Do you want numbers?");

//Uppercase prompt
var hasUp = confirm("Do you want uppercase letters?");

//Special Character prompt
var hasSpec = confirm("Do you want special characters?");

//If all are declined alert that all are seclected
if (hasNum === false && hasUp === false && hasSpec === false) {
  alert("By declining every option, you will now recieve all of them.");
  hasNum = true;
  hasUp = true;
  hasSpec = true;
}

console.log(pwLength);
console.log(hasNum);
console.log(hasUp);
console.log(hasSpec);

//If statement to push number array with lower array if user only accepts numbers from prompt
if(hasNum === true && hasUp === false && hasSpec === false){
  var selArr = lowArr.concat(numArr);
}

//If statement to push uppercase array with lower array if user only accepted uppercase letters from prompt
if(hasNum === false && hasUp === true && hasSpec === false){
  var selArr = lowArr.concat(upperArr);
}

//If statement to push random special characters function to selArr array if user accepted special characters from prompt
if(hasNum === false && hasUp === false && hasSpec === true){
  var selArr = lowArr.concat(specialArr);
}

//If statement to push number and uppercase arrays with lowercase array
if(hasNum === true && hasUp === true && hasSpec === false){
  var selArr = lowArr.concat(numArr, upperArr);
}

//If statement to push uppercase and special character arrays with lowercase array
if(hasNum === false && hasUp === true && hasSpec === true){
  var selArr = lowArr.concat(upperArr, specialArr);
}

//If statement to push number and special character arrays together with lowercase array
if(hasNum === true && hasUp === false && hasSpec === true){
  var selArr = lowArr.concat(numArr, specialArr);
}

//If statement to push all arrays together
if(hasNum === true && hasUp === true && hasSpec === true){
  var selArr = lowArr.concat(numArr, upperArr, specialArr);
}

console.log(selArr);

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

//Generate Password function needs to do something
function generatePassword() {
  for(i=0; i<pwLength; i++) {
    //selArr[Math.floor(Math.random() * selArr.length)];
    pwArr.push(selArr[Math.floor(Math.random() * selArr.length)]);
    var pwVar = pwArr.join('');
  }
  return pwVar
}