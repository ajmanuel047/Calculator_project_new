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
const decimal = document.querySelector('#decimal')
const error_message = document.querySelector('#error_message');

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

let equalToClicked = 'no';
let percentClicked = 'no'
let array = []

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
 
  let buttonNumbers = document.querySelectorAll('.number')
  buttonNumbers.forEach(button => {
    console.log(button.textContent)
    window.addEventListener('keydown', (e) => {
    document.body.style.backgroundColor = 'orange'
    if(e.key == button.textContent){
      if(display.textContent == '-0'){
    display.textContent = `-`
    num1 = `-${e.key}`
    arr.push(`-${e.key}`)
    console.log(arr)
  }
    if(arr[0] == '-'){
   arr = [Number(`-${e.key}`)]
     num1 = Number(`-${e.key}`)
     display.textContent =  Number(`-${e.key}`)
   console.log('test')
      console.log(arr)  
 }
  else if(arr.length == 0 || equalToClicked == 'yes' || percentClicked == 'yes'){
      console.log(equalToClicked)
       display.textContent = e.key;
       num1 = e.key  
       arr = [num1]
       equalToClicked = 'no'
       console.log(percentClicked)
       console.log(arr)
  } 
  else if(arr.length == 1){
    display.textContent += e.key
    num1 = display.textContent  
    arr = [num1]      
    console.log(arr)
  }  else if(arr.length == 2 && num2 !== ''){
    num1 = display.textContent
    console.log('e work')
  }
  
  if(arr.length == 2){
    display.textContent = e.key;
    num2 = e.key 
    arr.push(num2)    
    console.log(arr)
 
  }else if(arr[1] == '+' || arr[1] == '-' || arr[1] == 'x' || arr[1] == '/'){
    display.textContent += e.key;
    num2 += e.key 
    arr.splice(2, 1)  
    arr.push(num2)
     console.log(`num2 is ${num2}`)
     console.log(arr)
  }
    }
     console.log(e.key)
  })
})

 


function displayNumbers(e){  
  console.log(typeof display)
  console.log(num1)
  if(array.length < 9){
    if(display.textContent == '-0'){
      display.textContent = `-`
      num1 = display.textContent
      arr.push(`-${e.target.textContent}`)
      array.push(`-${e.target.textContent}`)
      console.log(arr)
      console.log(array)
      console.log(array.length)
    }
      if(arr[0] == '-'){
     arr = [Number(`-${e.target.textContent}`)]
     array = [Number(`-${e.target.textContent}`)]
       num1 = Number(`-${e.target.textContent}`)
       display.textContent =  Number(`-${e.target.textContent}`)
     console.log('test')
        console.log(arr)
        console.log(array)
        console.log(array.length)
   }
    else if(arr.length == 0 || equalToClicked == 'yes' || percentClicked == 'yes'){
        console.log(equalToClicked)
         display.textContent = e.target.textContent;
         num1 = e.target.textContent  
         arr = [num1]
         array = [num1]
         equalToClicked = 'no'
         console.log(percentClicked)
         console.log(arr)
         console.log(array)
         console.log(array.length)
    } 
    else if(arr.length == 1){
      console.log(`${typeof num1}`)
       console.log(`${num1}`)
      if(num1.includes('.')){
      display.textContent += e.target.textContent
      num1 = display.textContent   
      arr = [num1]  
      array = [num1]  
            console.log(`This?  ${arr}`)
            console.log(`This?  ${array}`)
            console.log(arr)
            console.log(array)
            console.log(array.length)
      } else {
        display.textContent += e.target.textContent
        num1 = display.textContent  
        arr = [num1]  
        array.push(num1)  
        console.log(`Or this? ${num1}`)
        console.log(arr)
        console.log(array)
        console.log(array.length)
      } 
  
    }  else if(arr.length == 2 && num2 !== ''){
      num1 = display.textContent
      console.log('e work')
    }
    
    if(arr.length == 2){
      display.textContent = e.target.textContent;
      num2 = e.target.textContent  
      arr.push(num2)    
      console.log(arr)
      array = []
      array.push(num2)
    }else if(arr[1] == '+' || arr[1] == '-' || arr[1] == 'x' || arr[1] == '/'){
      display.textContent += e.target.textContent;
      num2 += e.target.textContent
      arr.splice(2, 1)  
      arr.push(num2)
      
      array.push(num2)
       console.log(`num2 is ${num2}`)
       console.log(arr)
       console.log(array)
       console.log(array.length)
    }
  }
 else {
    setTimeout(()=> {
      error_message.textContent = 'Can Display 9 Characters'
      error_message.style.color = 'red'
    }, 10)
    setTimeout(()=> {
      error_message.textContent = ''
    }, 2000)
 }
   }  
  
function clearAllValues(){
  display.textContent = 0;
  arr = [];
  num1 = ''
  num2 = ''
  console.clear()
  equalToClicked = 'no'
  operator = ''
  array = []
  console.log(num1)
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
    percentClicked = 'no'
    array = []
})

subtraction.addEventListener('click', (e) => { 
  if(arr.length == 1){
    operator = '-'
    arr.push('-')
    console.log(arr)
  } else if(arr.length == 0){
    arr.push('-')
    console.log(arr)
  } 
  if(arr[0] == '0'){
    arr.push('-')
  }
   operate(operator, num1, num2)   
   equalToClicked = 'no'
   operator = '-'
   percentClicked = 'no'
   array = []
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
  percentClicked = 'no'
  array = []
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
  percentClicked = 'no'
  array = []
})

percentage.addEventListener('click', () => { 
  display.textContent = display.textContent / 100;
  num1 = display.textContent
  arr = [num1]
  percentClicked = 'yes'
  console.log(arr)
  console.log(percentClicked)
})

plus_minus.addEventListener('click', () => {
  document.body.style.backgroundColor = 'green';
  if(display.textContent == '0'){
    display.textContent = '-0'
    // arr.push(display.textContent)
    console.log(arr)
  } else if(display.textContent == '-0'){
    display.textContent = '0'
    console.log(arr)
  }
  if(display.textContent > 0 && arr.length < 3){
    display.textContent = `-${display.textContent}`
    num1 =  display.textContent
    console.log(num1)
    arr.splice(0, 1, num1)    
    console.log(arr)
  }else if(display.textContent < 0 && arr.length < 3){
    display.textContent = Math.abs(`${display.textContent}`)
    num1 =  display.textContent
    arr.splice(0, 1, num1)
    console.log(arr)
  }    
    if(num2 > 0 && arr.length == 3){
    display.textContent = `-${num2}`
    num2 = `-${num2}`
    arr.splice(2, 1, num2)
    console.log(arr)
  }else if(num2 < 0  && arr.length == 3){
    display.textContent = Math.abs(num2)
    num2 = display.textContent
    arr.splice(2, 1, num2)
    console.log(arr)
  }
})

decimal.addEventListener('click', () => {
  document.body.style.backgroundColor = 'green'
 if(!display.textContent.includes('.')){
  if(arr.length < 2){
        display.textContent += '.'
    
  arr = [display.textContent]
    num1 = display.textContent
  console.log(arr)
  }else if(arr.length > 2){
            display.textContent += '.'
    
    arr.splice(2, 1)
    arr.push(display.textContent)
    num2 = display.textContent
  console.log(arr)
  }
 }
})
//ss
equal.addEventListener('click', () => {
  operate(operator, num1, num2) 
  arr.splice(1,1)
  equalToClicked = 'yes'
  // num1 = ''
  // num2 = ''
  console.log(equalToClicked)
  console.log(arr)
  array = []
})

// make values in screen not exceed 9
// round up the values
// display a message if it intends to do that
// try and loop through the array.from