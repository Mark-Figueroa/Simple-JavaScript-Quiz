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

//Counters
let countCorrect = 0;
let countIncorrect = 0;


//Write HTML
let HTML = document.getElementById(`output`).innerHTML;
let correctHTML = `<h2>You got these questions right:</h2> <ol>`;
let incorrectHTML = `<h2>You got these questions wrong:</h2> <ol>`;

/*
===========
Functions
===========
*/

function print(message) {
    let outputDiv = document.getElementById(`output`);
    outputDiv.innerHTML = message;
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
        correctHTML += `<li>"${question}"</li>`
    } else {
        countIncorrect += 1;
        incorrectHTML += `<li>"${question}"</li>`;
    }
}

HTML = `
<p>You got ${countCorrect} question(s) right.</p>
${correctHTML}</ol>
${incorrectHTML}</ol>
`

print(HTML);

console.log(`${countCorrect} response(s) were correct.`);
console.log(`${countIncorrect} response(s) were incorrect.`);