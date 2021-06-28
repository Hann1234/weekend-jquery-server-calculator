$(document).ready(onReady);
console.log('JS');

let operator = '';
let package = {
    packageNum1: 0,
    packageNum2: 0,
    packageOperator: ''
};

function clearInputs(){ //clears inputs
    $('#firstNumber').val('');
    $('#secondNumber').val('');
  }

  function handleOperatorClick() { //defines what operator is being selected
    operator = $(this).text();
    console.log(operator);
}

function equalClick() { //alerts user if numbers are missing or an operator was not picked, otherwise defines and sends package to server
if ($('#firstNumber').val() === '' || $('#secondNumber').val() === '' || operator === '') {
    alert('Please enter two numbers and click an operator.');
    } else {
    package.packageNum1 = $('#firstNumber').val();
    package.packageNum2 = $('#secondNumber').val();
    package.packageOperator = operator;
    packageSent();
    //displayAnswer();
    }
}

function packageSent() {
    console.log(package);
}

function displayAnswer(answer) { //displays answer from server, still have to connect server
    $('#answer').empty.append(`${answer}`);
}

function displayHistory(history) {
    //run display history function from server within onReady?
}

function onReady() { //runs when page loads and sets up listeners ready for some clickies
  console.log('JQ');
  clearInputs();
  $('#equalButton').on('click', equalClick);
  $('#clearButton').on('click', () => clearInputs());
  $('.operatorButton').on('click', handleOperatorClick);
  // displayHistory();
}

