//variables assigned text locations on the html
var qText = document.getElementById("questiontext");
var aText = document.getElementById("answerA");
var bText = document.getElementById("answerB");
var cText = document.getElementById("answerC");
var dText = document.getElementById("answerD");
//variable to control growth of progress bar as questions are answered. Bar controlled by style: width
var progBar = document.getElementsByClassName("progress-bar");
//answer arrays to set output of click events
var aTrue = [a = true, b = false, c = false, d= false]
var bTrue = [a = false, b = true, c = false, d= false]
var cTrue = [a = false, b = false, c = true, d= false]
var dTrue = [a = false, b = false, c = false, d= true]
//variable to adjust bar growth
var barGrow = 0;
//number of questions variable
var questNum = 10;
//outputs to screen
qText.textContent;
aText.tectContent;
bText.tectContent;
cText.tectContent;
dText.tectContent;
//User name from prompt
var userName = prompt("What is your name?");
console.log(userName);
alert("There are 10 questions. Good luck " + userName + "!");













