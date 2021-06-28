// configuring server
const express = require('express');
const app = express();
const port = 5000; 

app.use(express.static('server/public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(port, () => {
    console.log('listening on port', port);
  });

let answer = 0;

let package = {
    packageNum1: 0,
    packageNum2: 0,
    packageOperator: ''
};

let listItem = '';
let history = '';


//Calculator function
function solveEquation(package) {
    switch (package.packageOperator) {
        case '+':
            answer = Number(package.packageNum1) + Number(package.packageNum2); 
            break;
        case '-':
            answer = Number(package.packageNum1) - Number(package.packageNum2); 
            break;
        case '*':
            answer = Number(package.packageNum1) * Number(package.packageNum2); 
            break;
        case '/':
            answer = Number(package.packageNum1) / Number(package.packageNum2); 
            break;
        default:
            break;
    }
}

//have to store previous appends on the server side
function historyServer(package, answer) { //adds one list item without removing the previous item even on page refresh right?
    listItem = $('#listItem').append(` 
    <li>${package.packageNum1} ${package.packageOperator} ${package.packageNum2} = ${answer}</li>
    `);
    history = $('#history').append(`
    <div>
        <span id="listItem"></span>
    </div>
    `) //This is a chicken and the egg situation, not sure how to get the logic to work to create the list, add list items, and store the list on the server...need to test (not sure how to right now)
} //wait or can I just do:
//listItem = $('#history').append(` 
//<li>${package.packageNum1} ${package.packageOperator} ${package.packageNum2} = ${answer}</li>
//`);
// pretty sure directly above would work but get deleted on page refresh...
