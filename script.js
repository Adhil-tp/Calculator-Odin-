//Calculator state
let appendDisplay = null;
let firstNumber = null;
let secondNumber = null;
let clickedOperator = '';
let operatorAdded = false;
let numberAdded =  false;

//DOM Elements
const numbers = document.querySelectorAll('.number');
const display = document.getElementById('display');
const operators = document.querySelectorAll('.operator');
const clearButton = document.getElementById('clearbutton');
const equalButton = document.getElementById('Equals');
const dotButton = document.getElementById('dot-button');
const plusAndMinus = document.getElementById('plus-and-minus');

// Initialize display to '0' when the page loads
display.innerHTML = '0';

//Arithmetic Operations
const add = (num1, num2) => num1 + num2;
const subtract  = (num1, num2) => num1 - num2; 
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => (num1 !== 0 && num2 !== 0) ? num1 / num2 : 'Oops';

//Event Listeners for number Buttons
document.addEventListener('DOMContentLoaded', function(){
    numbers.forEach(number => {
        number.addEventListener('click', () => {
        if (display.textContent.length <= 9) {
            if(numberAdded == false){
                if( appendDisplay === null){
                    display.textContent = number.textContent;
                    firstNumber = display.textContent;
                    // console.log(firstNumber);
                    appendDisplay = 1;
                }
                else{
                    display.textContent += number.textContent;
                }
                operatorAdded = false;
                numberAdded = true;
            }else if(numberAdded == true) {
                if(appendDisplay === null){
                    display.textContent = number.textContent;
                    secondNumber = display.textContent;
                    console.log(secondNumber)
                    appendDisplay = 1;
                }
                else{
                    display.textContent += number.textContent;
                    secondNumber = display.textContent;
                    console.log(secondNumber);
                }
            }
        }
    });
});

//Event Listeners for operator buttons
operators.forEach(operator => {
    operator.addEventListener('click', () => {
        firstNumber = display.textContent;
        console.log(firstNumber)
        if (!operatorAdded) {
            operatorAdded = true;
        } else {
            // If another operator is clicked, replace the existing operator
            const currentDisplay = display.textContent;
        }
        appendDisplay = null; 
        clickedOperator = operator.textContent;
        console.log(clickedOperator);  
    });
});

//Event listener for clear button
clearButton.addEventListener('click', () => {
    // Reset the display to '0' when the clear button is clicked
    display.innerHTML = '0';
    appendDisplay = null;
    operatorAdded = false; // Reset the operatorAdded flag
});

let previousResult = null;
//Event listener for equal button
equalButton.addEventListener('click',()=>{
    if (clickedOperator == '+'){
        secondNumber = ( secondNumber == null ) ? firstNumber : secondNumber;
        previousResult = add(parseFloat(firstNumber), parseFloat(secondNumber));
        display.textContent = previousResult;
        firstNumber = previousResult
    }else if(clickedOperator == '-'){
        secondNumber = ( secondNumber == null ) ? firstNumber : secondNumber;
        previousResult = subtract(parseFloat(firstNumber), parseFloat(secondNumber));
        display.textContent = previousResult;
        firstNumber = previousResult
    }
    else if (clickedOperator == '*'){
        secondNumber = ( secondNumber == null ) ? firstNumber : secondNumber ;
        previousResult = multiply(parseFloat(firstNumber), parseFloat(secondNumber));
        display.textContent = previousResult
        firstNumber = previousResult;
    }
    else if(clickedOperator == '/'){
        secondNumber = ( secondNumber == null ) ? firstNumber : secondNumber;
        previousResult = divide(parseFloat(firstNumber), parseFloat(secondNumber));
        display.textContent = previousResult;
        firstNumber = previousResult;
    }
    console.log(previousResult)
})

dotButton.addEventListener('click', () => {
    if (!operatorAdded) {
        if(!(display.textContent).includes('.')){
            display.textContent += '.';
        }else if(display.textContent.includes('.')){
                dotButton.disabled =  true;
            }
        }
    else if(operatorAdded){
        if(!(display.textContent).includes('.')){
            display.textContent += '.';
        }else if(display.textContent.includes('.')){
                dotButton.disabled =  true;
            }
        }
});



plusAndMinus.addEventListener('click', () => {
    let currentDisplay = display.textContent;

    if (currentDisplay[0] === '-') {
        // If the first character is '-', remove it (make it positive)
        display.textContent = currentDisplay.slice(1);
        if (numberAdded) {
            secondNumber = display.textContent;
        } else {
            firstNumber = display.textContent;
        }
    } else {
        // If the first character is not '-', add '-' (make it negative)
        display.textContent = '-' + currentDisplay;
        if (numberAdded) {
            secondNumber = display.textContent;
        } else {
            firstNumber = display.textContent;
        }
    }

    console.log(firstNumber);
    console.log(secondNumber);
});



});//end of domContentLoaded function