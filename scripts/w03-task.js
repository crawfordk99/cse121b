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

function multiplyNumbers(num1, num2) {
    num1 = Number(document.querySelector('#factor1').value);
    num2 = Number(document.querySelector('#factor2').value);
    document.querySelector('#product').value = multiply(num1, num2);
}
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
let dateTime = new Date();
let currentYear = 0;
currentYear= dateTime.getFullYear();
document.querySelector('#year').value = currentYear;

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
document.querySelector('#array').innerHTML = numbers;
/* Output Odds Only Array */
document.querySelector('#odds').innerHTML = numbers.filter(number => number % 2==1);
/* Output Evens Only Array */
document.querySelector('#evens').innerHTML = numbers.filter(number => number % 2 ==0);
/* Output Sum of Org. Array */
document.querySelector('#sumOfArray').innerHTML = numbers.reduce((total, number) => total + number);

/* Output Multiplied by 2 Array */
document.querySelector('#multiplied').innerHTML= numbers.map(number => number * 2);
/* Output Sum of Multiplied by 2 Array */
let multiArray= numbers.map(number => number * 2);
let multiSum = multiArray.reduce((total, number) => total + number);
document.querySelector('#sumOfMultiplied').innerHTML = multiSum;