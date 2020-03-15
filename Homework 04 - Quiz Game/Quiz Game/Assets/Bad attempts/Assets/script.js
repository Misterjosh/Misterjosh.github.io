//variables assigned text locations on the html
var qText = document.getElementById("questiontext");
var aText = document.getElementById("answerA");
var bText = document.getElementById("answerB");
var cText = document.getElementById("answerC");
var dText = document.getElementById("answerD");
//answer buttons
var ansButton = document.getElementsByClassName("ansButton");
//hides reset button until needed
$('#resetButton').animate({hidden: true});

//points awarded
var pointNum = 0;
//outputs to screen
qText.textContent;
aText.textContent;
bText.textContent;
cText.textContent;
dText.textContent;

//Timer
var timeDisplay = document.getElementById('timerDis');
var remainingTime = 5;

function timeShow() {
    var timerVal = setInterval(function(){
        remainingTime--;
        timeDisplay.textContent = "Time Remaining: " + remainingTime;
        if (remainingTime === 0) {
            clearInterval(timerVal);
            sendMessage();
            }
    }, 1000)
}
function sendMessage() {
    timeDisplay.textContent = " ";
}
//timeShow();

//setting up object to make questions
class Question {
    constructor(question, answerA, answerB, answerC, answerD, corAns) {
        this.question = question;
        this.answerA = answerA;
        this.answerB = answerB;
        this.answerC = answerC;
        this.answerD = answerD;
        this.corAns = corAns;
    }
}
var question01 = new Question("What is the square root of 4?", '7', '2', "This", '4', 'b');
var question02 = new Question("What is the atomic number of Gold?", "was", '5', '45', '197', 'd');
var question03 = new Question("What does var stand for?", 'variable', 'made', 'German for far', 'September', 'a');
var question04 = new Question("What is the airspeed velocity of an unladen European swallow?", 'by', '10 meters/second', 'The speed of sound', 'The Sound of Music', 'b');
var question05 = new Question("What wouldn't Meatloaf do for love?", 'anything', 'everything', 'that', 'the', 'a');
var question06 = new Question("Do you know what question we are on?", '6', 'one', 'too', 'tree fiddy', 'a');
var question07 = new Question("Who put the bomp In the bomp bah bomp bah bomp?", 'Chuck Berry', 'Barry Mann', 'and', 'Ron Swanson', 'b');
var question08 = new Question('Is it dangerous to go alone?', 'No', 'Yes', 'only', 'Scuba Steve', 'b');
var question09 = new Question('Who framed Rodger Rabbit?', 'Joshua', 'Jessica', 'Christopher Lloyd', 'Bob Haskins', 'c');
var question10 = new Question('What is Garth Brooks last name?', 'Garth', 'Brooks', 'Algar', 'Htrag', 'b');
//Array to hold question objects in
var questArr = [question01, question02, question03, question04, question05, question06, question07, question08, question09, question10];
// pulls values properly from array
qText.textContent = questArr[2].question;
aText.textContent = questArr[2].answerA;
bText.textContent = questArr[2].answerB;
cText.textContent = questArr[2].answerC;
dText.textContent = questArr[2].answerD;
//functioning buttons
$('#buttonA').on('click', function(){
    alert('A button is working');
    if (questArr[2].corAns === 'a'){
        alert('Correct!');
        pointNum+=5;
    }
    else {
        alert("Incorrect!");
    }
})
$('#buttonB').on('click', function(){
    alert('B button is working');
    if (questArr[2].corAns === 'b'){
        alert('Correct!');
        pointNum+=5;
    }
    else {
        alert("Incorrect!");
    }
})
$('#buttonC').on('click', function(){
    alert('C button is working');
    if (questArr[2].corAns === 'c'){
        alert('Correct!');
        pointNum+=5;
    }
    else {
        alert("Incorrect!");
    }
})
$('#buttonD').on('click', function(){
    alert('D button is working');
    if (questArr[2].corAns === 'd'){
        alert('Correct!');
        pointNum+=5;
    }
    else {
        alert("Incorrect!");
    }
})
$('.ansButton').on("click", function(){
    for(i=0; i<questArr.length; i++);
    
})
$("#startBtn").on("click", timeShow);



    

//$(document).ready(function(){
    
//});