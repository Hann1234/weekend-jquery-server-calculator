$(document).ready(onReady);
console.log('JS');

function onReady() {
  console.log('JQ');
  clearInputs();
  $('#additionButton').on('click', () => console.log('add'));
  $('#subtractButton').on('click', () => console.log('sub'));
  $('#multiplyButton').on('click', () => console.log('mult'));
  $('#divideButton').on('click', () => console.log('div'));
  $('#equalButton').on('click', () => console.log('equal'));
  $('#clearButton').on('click', () => clearInputs());
}

function clearInputs(){
  $('#firstNumber').val('');
  $('#secondNumber').val('');
}