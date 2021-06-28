// configuring server
const express = require('express');
const app = express();
const port = 5000; 
const bodyParser = require('body-parser'); //allows client to send object instead of string and puts object into req.body
app.use(bodyParser.urlencoded({ extended: true }));


app.use(express.static('./server/public')); //servs matching file to send back html
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(port, () => {
    console.log('listening on port', port);
  });

//send a new calculation to the server for us to solve

app.post('/calculations', (req, res) => {
    console.log('body', req.body);

    //Do some math

    solveEquation();

    res.sendStatus(201);
});

//send back a 201 that includes an answer

let answer = 0;

let package = {
    packageNum1: 0,
    packageNum2: 0,
    packageOperator: ''
};

let listItem = '';
let history = '';


//Calculator function
function solveEquation() {
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
            answer = res.status(400).send(`Invalid operator: ${req.body.operator}`);
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
