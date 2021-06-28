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