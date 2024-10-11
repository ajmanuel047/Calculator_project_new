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

let equalToClicked = 'no'

function operate(operator, num1, num2){
  console.log(`num1 is ${num1}`)
  console.log(`num2 is ${num2}`)
  console.log(`operator is ${operator}`)
  if(operator !== '' && arr.length == 3){
    
    if(operator == '+'){
      display.textContent = add(Number(num1), Number(num2))
      num1 = Number(display.textContent)
      console.log(`new num1 ${num1}`)
      arr = []
      arr.push(num1)      
      arr.push('+')
      operator = '+'
      console.log(`operator is ${operator}`)
      console.log(`new arr ${arr}`)
      
      console.log(arr)
    }  if(operator == '-'){
      display.textContent = subtract(Number(num1), Number(num2))
      num1 = Number(display.textContent)
      console.log(`new num1 ${num1}`)
      arr = []
      arr.push(num1)
      arr.push('-')
      operator = '-'
      console.log(`operator is ${operator}`)
      console.log(`new arr ${arr}`)
      
      console.log(arr)
    }
    if(operator == 'x'){
      display.textContent = multiply(Number(num1), Number(num2))
      num1 = Number(display.textContent)
      console.log(`new num1 ${num1}`)
      arr = []
      arr.push(num1)
      arr.push('x')
      operator = 'x'
      console.log(`operator is ${operator}`)
      console.log(`new arr ${arr}`)      
      console.log(arr)
    }
    if(operator == '/'){
      display.textContent = divide(Number(num1), Number(num2))
      num1 = Number(display.textContent)
      console.log(`new num1 ${num1}`)
      arr = []
      arr.push(num1)
      arr.push('/')
      operator = '/'
      console.log(`operator is ${operator}`)
      console.log(`new arr ${arr}`)      
      console.log(arr)
    }
  }
  }
 
function displayNumbers(e){  
    
    if(arr.length == 0 || equalToClicked == 'yes'){
      console.log(equalToClicked)
       display.textContent = e.target.textContent;
       num1 = e.target.textContent  
       arr = [num1]
       equalToClicked = 'no'
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
    console.log(arr)
 
  }else if(arr[1] == '+' || arr[1] == '-' || arr[1] == 'x' || arr[1] == '/'){
    display.textContent += e.target.textContent;
    num2 += e.target.textContent
    arr.splice(2, 1)  
    arr.push(num2)
     console.log(`num2 is ${num2}`)
     console.log(arr)
  }
 
  
   }  
  

function clearAllValues(){
  display.textContent = 0;
  arr = [];
  num1 = 'did num update'
  num2 = ''
  console.clear()
  equalToClicked = 'no'
  operator = ''
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
addition.addEventListener('click', (e) => {
   if(arr.length == 1){
    operator = '+'
    arr.push('+')
    console.log(arr)
  } 
    operate(operator, num1, num2)
    equalToClicked = 'no'
    operator = '+'
})
subtraction.addEventListener('click', (e) => { 
  if(arr.length == 1){
    operator = '-'
    arr.push('-')
    // console.log(arr)
  } 
   operate(operator, num1, num2)   
   equalToClicked = 'no'
   operator = '-'
  //  if(arr.length == 0){
  //   arr.push('-')
  //   console.log(arr)
  //  }
})
multiplication.addEventListener('click', (e) => {
  if(arr.length == 1){
    operator = 'x'
    arr.push('x')
    console.log(arr)
  } 
    operate(operator, num1, num2)
    equalToClicked = 'no'
    operator = 'x'
})
division.addEventListener('click', (e) => {
  document.body.style.backgroundColor = 'green'
  if(arr.length == 1){
    operator = '/'
    arr.push('/')
    console.log(arr)
  } 
    operate(operator, num1, num2)
    equalToClicked = 'no'
    operator = '/'
})
percentage.addEventListener('click', () => {
  document.body.style.backgroundColor = 'green';
  display.textContent = num1 / 100;
  num1 = display.textContent
  arr = [num1]
  console.log(arr)
})

equal.addEventListener('click', () => {
  operate(operator, num1, num2) 
  arr.splice(1,1)
  equalToClicked = 'yes'
  console.log(equalToClicked)
  console.log(arr)
})



// (solved)bugs 0 - a number not working right
// (solved)40 - 80 - // tried changing it to plus did not work
// (solved)clicking a sign more than once repeats it
// fix the bug - then a number. if i comment  //  if(arr.length == 0){
  //   arr.push('-')
  //   console.log(arr)
  //  }, the bug 0 - a number returns. I think it still works though 
  // weda i comment or uncomment it