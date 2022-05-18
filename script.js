/* When using a calculator, the user inputs a number, then selects an operator, then another number and then presses the equals button to return a result. My job will be to capture the numbers the user entered and store the result as a variable. If an operator is pressed, whatever the user entered before that is the first number, then when the equals sign is pressed, whatever numbers the user entered prior to that is the second number*/

let result = 0;
let nums = [];
let operator = [];
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
const square = document.querySelector('.square');
const percent = document.querySelector('.percent');
const divided = document.querySelector('.divide');
const times = document.querySelector('.multiply');
const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const fact = document.querySelector('.factorial');
const point = document.querySelector('.point');
const equals = document.querySelector('.equals');

plus.addEventListener('click', () => {
});

clear.addEventListener('click', () => {
    display.textContent = '';
});
one.addEventListener('click', () => {
    display.textContent += '1';
});

two.addEventListener('click', () => {
    display.textContent += '2';
});

three.addEventListener('click', () => {
    display.textContent += '3';
});

four.addEventListener('click', () => {
    display.textContent += '4';
});

five.addEventListener('click', () => {
    display.textContent += '5';
});

six.addEventListener('click', () => {
    display.textContent += '6';
});

seven.addEventListener('click', () => {
    display.textContent += '7';
});

eight.addEventListener('click', () => {
    display.textContent += '8';
});

nine.addEventListener('click', () => {
    display.textContent += '9';
});

zero.addEventListener('click', () => {
    display.textContent += '0';
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

const percentage = function(num1) {
    return num1 / 100;
}

plus.addEventListener ('click', () => {
    nums.push(parseInt(display.textContent));
    display.textContent += '+';
    nums.push('+');
    console.log(nums[0]);
    console.log(nums[1]);
    operator.push(add());
    console.log(operator[0]);
});

const operate = function(operator, num1, num2) {
    
}

equals.addEventListener('click', () => {
    
    display.textContent += nums[0,1];
});

/* user enters first number to add, user presses the "plus" sign, number is stored to 'num1', display is cleared and '+' sign is highlighted, and the user then enters the next number to add, then presses 'equals'. When the user presses equals, the number the user entered is stored to 'num2' and the add() function is called with num1 and num2 as parameters. */

