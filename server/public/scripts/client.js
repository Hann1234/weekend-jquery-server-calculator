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
    getAnswer();
    }
}

function packageSent() {
    $.ajax({ //This is a HTTP Request; HTTP is a convention for how we do network requests
        method: 'POST',
        url: '/calculations',
        //req.body is below
        data: package
    })
    .then(res => {
        console.log('POST res', res);
    })
    .catch(err => {
        console.log('POST failed', err);
    })
}

function getAnswer() { //gets answer as well as package items for DOM
    $.ajax({
        method: 'GET',
        url: '/calculations'
    })
        .then(res => {
            console.log('GET', res);
            $('#answer').text(res[res.length - 1].answer); //answer will be located in the last object pushed to the array

            $('#history').empty(); //clearn DOM history to add new complete array
            for (let object of res) { //append all array objects into DOM to show history
                $('#history').append(`
                    <li>
                        ${object.packageNum1} ${object.packageOperator} ${object.packageNum2} = ${object.answer}
                    </li>
                `)
            }

        })
        .catch(err => {
            console.log('GET error', err);
        })   
}

function onReady() { //runs when page loads and sets up listeners ready for some clickies
  console.log('JQ');
  clearInputs();
  $('#equalButton').on('click', equalClick);
  $('#clearButton').on('click', () => clearInputs());
  $('.operatorButton').on('click', handleOperatorClick);
}

