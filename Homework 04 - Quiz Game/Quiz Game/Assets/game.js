const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const progressText = document.getElementById('progressText');
const scoreText = document.getElementById('score');
const progressBarFull = document.getElementById('progressBarFull');
let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
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

//constants
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = questions.length;

startGame = () => { //creates function startgame and returns the values in the {}
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions]; //spread operator - take items from questions array and place them in this one
    getNewQuestion();
};

getNewQuestion = () => {
    if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score);

        return window.location.assign('end.html');
    }
    questionCounter++;
    progressText.innerText = `Question ${questionCounter}/${MAX_QUESTIONS}`;

    progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;
    
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach(choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });

    availableQuestions.splice(questionIndex, 1);
    acceptingAnswers = true;
};

choices.forEach(choice => {
    choice.addEventListener("click", e => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];

        const classToApply =
            selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';

            if(classToApply === 'correct') {
                incrementScore(CORRECT_BONUS);
            }

        selectedChoice.parentElement.classList.add(classToApply);

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();
        }, 1000);
    });
});


incrementScore = num => {
    score +=num;
    scoreText.innerText = score;
}

startGame();