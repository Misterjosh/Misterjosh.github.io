//variables assigned text locations on the html
var qText = document.getElementById("questiontext");
var aText = document.getElementById("answerA");
var bText = document.getElementById("answerB");
var cText = document.getElementById("answerC");
var dText = document.getElementById("answerD");
//variable to control growth of progress bar as questions are answered. Bar controlled by style= width: x%
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
aText.textContent;
bText.textContent;
cText.textContent;
dText.textContent;
//setting up object to make questions
function Question(question, answerA, answerB, answerC, answerD) {
    this.question = question;
    this.answerA = answerA;
    this.answerB = answerB;
    this.answerC = answerC;
    this.answerD = answerD;
}
var question01 = new Question("What is the square root of 4?", '7', '2', "This", '4');
var question02 = new Question("What is the atomic number of Gold?", "was", '5', '45', '197');
var question03 = new Question("What does var stand for?", 'variable', 'made', 'German for far', 'September');
var question04 = new Question("What is the airspeed velocity of an unladen European swallow?", 'by', '10 meters/second', 'The speed of sound', 'The Sound of Music');
var question05 = new Question("What wouldn't Meatloaf do for love?", 'anything', 'everything', 'that', 'the');
var question06 = new Question("Do you know what question we are on?", '6', 'one', 'too', 'tree fiddy');
var question07 = new Question("Who put the bomp In the bomp bah bomp bah bomp?", 'Chuck Berry', 'Barry Mann', 'and', 'Ron Swanson');
var question08 = new Question('Is it dangerous to go alone?', 'No', 'Yes', 'only', 'Scuba Steve');
var question09 = new Question('Who framed Rodger Rabbit?', 'Joshua', 'Jessica', 'Christopher Lloyd', 'Bob Haskins');
var question10 = new Question('What is Garth Brooks last name?', 'Garth', 'Brooks', 'Algar', 'Htrag');
//Array to hold question objects in
var questArr = [question01, question02, question03, question04, question05, question06, question07, question08, question09, question10];
// pulls values properly from array
qText.textContent = questArr[0].question;
aText.textContent = questArr[0].answerA;
bText.textContent = questArr[0].answerB;
cText.textContent = questArr[0].answerC;
dText.textContent = questArr[0].answerD;