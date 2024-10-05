
let num1;
let num2;
let operator;

function add(value1, value2){
    return value1 + value2
}

function subtract(value1, value2){
    return value1 - value2
}

function multiply(value1, value2){
    return value1 * value2
}

function divide(value1, value2){
    return value1 / value2
}

function operate(operator, num1, num2){
    return add(num1, num2)
  }
  operate(add, 3, 4)

const one = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three');
const four = document.querySelector('#four');
const five = document.querySelector('#five');
const six = document.querySelector('#six');
const seven = document.querySelector('#seven');
const eight = document.querySelector('#eight');
const nine = document.querySelector('#nine');
const clear = document.querySelector('#clear');
const plus_minus = document.querySelector('#plus_minus');
const percentage = document.querySelector('#percentage');
const division = document.querySelector('#division');
const multiplication = document.querySelector('#multiplication');
const subtraction = document.querySelector('#subtraction');
const addition = document.querySelector('#addition');
const equal = document.querySelector('#equal');
const back_space = document.querySelector('#back_space');