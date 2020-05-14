/*
============
Variables
============
*/

//Quiz 2d array and variables
let quiz = [
    [prompt(`What color is the sky?`), `blue`, `What color is the sky?`, `The sky is blue.`],
    [prompt(`What color is a cloud?`), `white`, `What color is a cloud?`, `A cloud is white.`],
    [prompt(`What color is the sun?`), `red`, `What color is the sun?`, `The sun is red.`]
];

let guess;
let answer;
let question;
let statement;

let correctResponseList = [];
let incorrectResponseList = [];

//Counters
let countCorrect = 0;
let countIncorrect = 0;


//Write HTML
let HTML = document.getElementById(`output`).innerHTML;
let correctHTML = `<h2>You got these questions right:</h2>`;
let incorrectHTML = `<h2>You got these questions wrong:</h2>`;

/*
===========
Functions
===========
*/

function print(message) {
    let outputDiv = document.getElementById(`output`);
    outputDiv.innerHTML = message;
}

function buildList(array) {
    let listHTML = `<ol>`;
    for (let i = 0; i < array.length; i += 1) {
        listHTML += `<li>${array[i]}</li>`;
    }
    listHTML += `</ol>`;
    return listHTML;
}

/*
===========
Program
===========
*/

for (let i = 0; i < quiz.length; i += 1) {

    guess = quiz[i][0];
    answer = quiz[i][1];
    question = quiz[i][2];
    statement = quiz[i][3];

    guess = guess.toLowerCase();

    if (guess === answer) {
        countCorrect += 1;
        correctResponseList.push(question);
    } else {
        countIncorrect += 1;
        incorrectResponseList.push(question);
    }
}

HTML = `
<p>You got ${countCorrect} question(s) right.</p>
${correctHTML} ${buildList(correctResponseList)}
${incorrectHTML} ${buildList(incorrectResponseList)}
`

print(HTML);

console.log(`${countCorrect} response(s) were correct.`);
console.log(`${countIncorrect} response(s) were incorrect.`);