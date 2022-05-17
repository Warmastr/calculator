/* When using a calculator, the user inputs a number, then selects an operator, then another number and then presses the equals button to return a result. My job will be to capture the numbers the user entered and store the result as a variable. If an operator is pressed, whatever the user entered before that is the first number, then when the equals sign is pressed, whatever numbers the user entered prior to that is the second number*/

let result = 0;
let operator;
const display = document.querySelector('.display');
const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const four = document.querySelector('.four');
const five = document.querySelector('.five');
const six = document.querySelector('.six');
const seven = document.querySelector('.seven');
const eight = document.querySelector('.eight');
const nine = document.querySelector('.nine');
const zero = document.querySelector('.zero');
const clear = document.querySelector('.clear');

clear.addEventListener('click', () => {
    display.textContent = '';
});
one.addEventListener('click', () => {
    display.textContent = display.textContent + '1';
});

two.addEventListener('click', () => {
    display.textContent = display.textContent + '2';
});

three.addEventListener('click', () => {
    display.textContent = display.textContent + '3';
});

four.addEventListener('click', () => {
    display.textContent = display.textContent + '4';
});

five.addEventListener('click', () => {
    display.textContent = display.textContent + '5';
});

six.addEventListener('click', () => {
    display.textContent = display.textContent + '6';
});

seven.addEventListener('click', () => {
    display.textContent = display.textContent + '7';
});

eight.addEventListener('click', () => {
    display.textContent = display.textContent + '8';
});

nine.addEventListener('click', () => {
    display.textContent = display.textContent + '9';
});

zero.addEventListener('click', () => {
    display.textContent = display.textContent + '0';
});

const add = function(num1, num2) {
    result = num1 + num2;
    return result;
};

const subtract = function(num1, num2) {
    result = num1 - num2;
    return result;
};

const multiply = function(num1, num2) {
    result = num1 * num2;
    return result;
};

const divide = function(numerator, denominator) {
    result = numerator / denominator;
    if (denominator == 0) {
        alert("Let's say you have 10 cookies, what then, is the number of cookies each person would receive if those 10 cookies were divided amongst 0 people? I'll wait...")
    }
    return result;
};

const power = function(num, pwr) {
    result = 1;
	// num needs to be multiplied by itself pwr times
    for (let i = 0; i < pwr; i++) {
      result = result * num;
    }
    return result;
};

const factorial = function(n) {
	result = n;
    if (n === 0 || n === 1) {
        result = 1;
    } else if (n > 1) {
        while (n > 1) {
            let prod = n - 1;
            console.log(result);
            result = result * prod;
            n--;
        }
    }
    return result;
};

const operate = function(operator, num1, num2) {
    
}



