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

const package = [];

//send a new calculation to the server for us to solve
//send back a 201 that includes an answer
//send back array that inlcudes package as well as answer and history of calculations

app.post('/calculations', (req, res) => { //receives user input into server
    console.log('body', req.body);

    //Do some math

    let answer;

    switch (req.body.packageOperator) {
        case '+':
            answer = Number(req.body.packageNum1) + Number(req.body.packageNum2); 
            break;
        case '-':
            answer = Number(req.body.packageNum1) - Number(req.body.packageNum2); 
            break;
        case '*':
            answer = Number(req.body.packageNum1) * Number(req.body.packageNum2); 
            break;
        case '/':
            answer = Number(req.body.packageNum1) / Number(req.body.packageNum2); 
            break;
        default:
            answer = res.status(400).send(`Invalid operator: ${req.body.packageOperator}`);
            break;
    }
    console.log('answer', answer);
    package.push({
        packageNum1: Number(req.body.packageNum1),
        packageNum2: Number(req.body.packageNum2),
        packageOperator: req.body.packageOperator,
        answer: answer
    });

    res.sendStatus(201);
});

app.get('/calculations', (req, res) => { //sends the array package back to the client
    res.send(package);
})




//have to store previous appends on the server side: make an array and push previous values into it and send back array to client side along with answer
// function historyServer(package, answer) { //adds one list item without removing the previous item even on page refresh right?
//     listItem = $('#listItem').append(` 
//     <li>${package.packageNum1} ${package.packageOperator} ${package.packageNum2} = ${answer}</li>
//     `);
//     history = $('#history').append(`
//     <div>
//         <span id="listItem"></span>
//     </div>
//     `) This is a chicken and the egg situation, not sure how to get the logic to work to create the list, add list items, and store the list on the server...need to test (not sure how to right now)
// } wait or can I just do:
// listItem = $('#history').append(` 
//<li>${package.packageNum1} ${package.packageOperator} ${package.packageNum2} = ${answer}</li>
//`);
// pretty sure directly above would work but get deleted on page refresh...
