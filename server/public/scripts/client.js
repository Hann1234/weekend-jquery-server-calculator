$(document).ready(onReady);
console.log('JS');

let operator = '';

function clearInputs(){
    $('#firstNumber').val('');
    $('#secondNumber').val('');
  }

function onReady() {
  console.log('JQ');
  clearInputs();
//   $('body').on('click', "button.operatorButton", () => console.log($(this).text()));
  $('#equalButton').on('click', () => console.log('equal'));
  $('#clearButton').on('click', () => clearInputs());
  $('.operatorButton').on('click', handleOperatorClick);
}

function handleOperatorClick() {
    operator = $(this).text();
    console.log(operator);
}
