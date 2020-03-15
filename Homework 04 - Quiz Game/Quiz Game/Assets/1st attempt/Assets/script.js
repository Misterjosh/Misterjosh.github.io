//variables assigned text locations on the html
var qText = document.getElementById("questiontext");
var aText = document.getElementById("answerA");
var bText = document.getElementById("answerB");
var cText = document.getElementById("answerC");
var dText = document.getElementById("answerD");

//points awarded
var pointNum = 0;

//Timer
var timeDisplay = document.getElementById('timerDis');
var remainingTime = 10;

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

//questions
var questArr = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        choice1: "<script>",
        choice2: "<javascript>",
        choice3: "<js>",
        choice4: "<scripting>",
        answer: 1
    },
    {
        question:"What is the correct syntax for referring to an external script called 'jlb.js'?",
        choice1: "<script href='jlb.js'>",
        choice2: "<script name='jlb.js'>",
        choice3: "<script src='jlb.js'>",
        choice4: "<script file='jlb.js'>",
        answer: 3
    },
    {
        question: "How do you write 'Hello World' in an alert box?",
        choice1: "msgBox('Hello World');",
        choice2: "alertBox('Hello World');",
        choice3: "msg('Hello World');",
        choice4: "alert('Hello World');",
        answer: 4
    },
    {
        question: "In the function 'var x = myFunction(4, 3);', what value will x be?",
        choice1: "12",
        choice2: "4, 3",
        choice3: "3, 4",
        choice4: "unknown",
        answer: 1
    },
    {
        question:"What is var an abreviation for?",
        choice1: "varcity",
        choice2: "voracity",
        choice3: "variable",
        choice4: "varnish",
        answer: 3
    },
    {
        question: "'seconds left' is an example of which type of value?",
        choice1: "Boolean",
        choice2: "Numeric",
        choice3: "JavaScript",
        choice4: "String",
        answer: 4
    },
    {
        question:"Which is not a binding?",
        choice1: "var",
        choice2: "o+!",
        choice3: "let",
        choice4: "const",
        answer: 2
    },
    {
        question: "What is null equal to?",
        choice1: "0",
        choice2: "Nothing",
        choice3: "Infinity",
        choice4: "-i",
        answer: 2
    },
];
qText.textContent = questArr[2].question;
aText.textContent = questArr[2].choice1;
bText.textContent = questArr[2].choice2;
cText.textContent = questArr[2].choice3;
dText.textContent = questArr[2].choice4;
//functioning buttons
$('#buttonA').on('click', function(){
    alert('A button is working');
    if (questArr[2].answer === 1){
        alert('Correct!');
        pointNum+=5;
    }
    else {
        alert("Incorrect!");
    }
})
$('#buttonB').on('click', function(){
    alert('B button is working');
    if (questArr[2].answer === 2){
        alert('Correct!');
        pointNum+=5;
    }
    else {
        alert("Incorrect!");
    }
})
$('#buttonC').on('click', function(){
    alert('C button is working');
    if (questArr[2].answer === 3){
        alert('Correct!');
        pointNum+=5;
    }
    else {
        alert("Incorrect!");
    }
})
$('#buttonD').on('click', function(){
    alert('D button is working');
    if (questArr[2].answer === 4){
        alert('Correct!');
        pointNum+=5;
    }
    else {
        alert("Incorrect!");
    }
})
timeShow();