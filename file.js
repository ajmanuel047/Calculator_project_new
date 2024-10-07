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

let num1 = ''
let num2 = ''
let operator = ''
let arr= []

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
  
  if(arr.length == 1){
    arr.push('+')
    console.log(arr)
  }
  console.log(`num1 is ${num1}`)
  console.log(`num2 is ${num2}`)
  if(arr.length == 3){
    display.textContent = add(Number(num1), Number(num2))
    // num1 = ''
    num1 = Number(display.textContent)
    console.log(`new num1 ${num1}`)
    arr = []
    arr.push(num1)
    arr.push('+')
    console.log(`new arr ${arr}`)
    
    console.log(arr)
    return display.textContent
  }
  }


 
function displayNumbers(e){  
    // let num1 = '';  
    if(display.textContent == 0 || arr.length == 0){
       display.textContent = e.target.textContent;
       num1 = e.target.textContent  
       arr = [num1]
       console.log(arr)
  } 
  else if(arr.length < 2){
    display.textContent += e.target.textContent
    num1 += e.target.textContent   
    arr = [num1]      
    console.log(arr)
  }  else if(arr.length == 2 && num2 !== ''){
    num1 = display.textContent
    console.log('e work')
  }
  
  if(arr.length == 2){
    display.textContent = e.target.textContent;
    num2 = e.target.textContent  
    arr.push(num2)    
    // console.log(num2)
    console.log(arr)
     // if(num2 != ''){
     //   num2 += e.target.textContent
     // }
  }else if(arr[1] == '+'){
    display.textContent += e.target.textContent;
    num2 += e.target.textContent
    arr.splice(2, 1)  
    arr.push(num2)
     console.log(`num2 is ${num2}`)
     console.log(arr)
  }
 
  // console.log(num1)
   }  
  

function clearAllValues(){
  display.textContent = 0;
  arr = [];
  num1 = 'did num update'
  num2 = ''
  console.clear()
  // console.log(arr)
  // console.log(num1)
  // console.log(num2)
  }

one.addEventListener('click', displayNumbers)
two.addEventListener('click', displayNumbers)
three.addEventListener('click', displayNumbers)
four.addEventListener('click', displayNumbers)
five.addEventListener('click', displayNumbers)
six.addEventListener('click', displayNumbers)
seven.addEventListener('click', displayNumbers)
eight.addEventListener('click', displayNumbers)
nine.addEventListener('click', displayNumbers)
zero.addEventListener('click', displayNumbers)
clear.addEventListener('click', clearAllValues)
addition.addEventListener('click', () => {
  operate(operator, num1, num2) 
})
equal.addEventListener('click', () => {
  operate(operator, num1, num2) 
  num1 = '';
  num2 = '';
  arr = [];
  console.log(arr)
})