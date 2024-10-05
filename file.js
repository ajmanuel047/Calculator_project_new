
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