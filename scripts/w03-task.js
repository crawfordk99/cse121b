/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(num1, num2) {
   return num1 + num2;
}

function addNumbers(num1, num2) {
    num1 = Number(document.querySelector('#add1').value);
    num2 = Number(document.querySelector('#add2').value);
    document.querySelector('#sum').value= add(num1, num2);
}
document.querySelector('#addNumbers').addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */
function subtract(num1, num2) {
    return num1 - num2;
}

function subtractNumbers(num1, num2) {
    num1 = Number(document.querySelector('#subtract1').value);
    num2 = Number(document.querySelector('#subtract2').value);
    document.querySelector('#difference').value= subtract(num1, num2);
}

document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers); 

/* Arrow Function - Multiply Numbers */
const multiply = (factor1, factor2) => factor1 * factor2;

const multiplyNumbers = (num1= document.querySelector('#factor1').value, 
num2= document.querySelector('#factor2').value) =>
document.querySelector('#product').value= multiply(num1, num2);

document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);
/* Open Function Use - Divide Numbers */
const divide = (dividend, divisor) => dividend/divisor;
function divideNumbers(num1, num2) {
    num1 = Number(document.querySelector('#dividend').value);
    num2 = Number(document.querySelector('#divisor').value);
    document.querySelector('#quotient').value= divide(num1, num2);
}

document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);

/* Decision Structure */


/* ARRAY METHODS - Functional Programming */
/* Output Source Array */

/* Output Odds Only Array */

/* Output Evens Only Array */

/* Output Sum of Org. Array */

/* Output Multiplied by 2 Array */

/* Output Sum of Multiplied by 2 Array */
