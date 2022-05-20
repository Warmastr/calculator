/* When using a calculator, the user inputs a number, then selects an operator, then another number and then presses the equals button to return a result. My job will be to capture the numbers the user entered and store the result as a variable. If an operator is pressed, whatever the user entered before that is the first number, then when the equals sign is pressed, whatever numbers the user entered prior to that is the second number*/

let result = 0;
let numPlaceholder = '';
let numbers = [];
let operators;
const index = 0;
const display2 = document.querySelector('.display2');
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
const plusMinus = document.querySelector('.plusMinus');
const percent = document.querySelector('.percent');
const divided = document.querySelector('.divided');
const times = document.querySelector('.times');
const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const fact = document.querySelector('.factorial');
const point = document.querySelector('.point');
const equals = document.querySelector('.equals');

clear.addEventListener('click', () => {
    display.textContent = '';
    display2.textContent = '';
    operators = [];
    numbers = [];
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

/* 
when the user clicks an operator, if an operation has already been performed, the result of that operation needs to be displayed and the addition operator sign needs to be concatenated to the result of previous operation. If an operation has not been performed (numSplit.length === 0), then this is the first operation to be calculated and the display needs to store the first index
If there are two numbers (numSplit[0] and numSplit[1]), then add(numSplit[0], numSplit[1]) and display the result to display2, and then replace numSplit[0] with the result.
*/

plusMinus.addEventListener ('click', () => {
    let old = display.textContent;
    if (old.includes('-')) {
        display.textContent = old.replace('-', '');
    } else {
        display.textContent = '-' + old;
    }
});

point.addEventListener ('click', () => {
    display.textContent += '.';
});
// if the numbers array has more than one element, then an operation has already been performed so, do the math for that operation (operate()) then send the result to the display, clear the array and put the result in the first index.
plus.addEventListener ('click', () => {
    // update the operator logic with current operation:
    operators = '+';
    numbers.push(display.textContent);
    if (numbers[1] === undefined) {
        display.textContent = '';
    } else {
        operate();
        display.text = parseInt(result);
        numbers = [];
        numbers.push(result);
    }
});

minus.addEventListener ('click', () => {
    operators = '-';
    numbers.push(display.textContent);
    if (numbers[1] === undefined) {
        display.textContent = '';
    } else {
        operate();
        display.text = parseInt(result);
        numbers = [];
        numbers.push(result);
    }
});

times.addEventListener ('click', () => {
    operators = '*';
    numbers.push(display.textContent);
    if (numbers[1] === undefined) {
        display.textContent = '';
    } else {
        operate();
        display.text = parseInt(result);
        numbers = [];
        numbers.push(result);
    }
});

divided.addEventListener ('click', () => {
    operators = '/';
    numbers.push(display.textContent);
    if (numbers[1] === undefined) {
        display.textContent = '';
    } else {
        operate();
        display.text = parseInt(result);
        numbers = [];
        numbers.push(result);
    }
});

const operate = function(operator, num1, num2) {
    num1 = Number(numbers[0]);
    console.log(num1);
    num2 = Number(numbers[1]);
    console.log(num2);
    operator = operators;

    if (operator === '+') {
        add(num1, num2);
        numbers = [];
        display.textContent = result;
    }

    if (operator === '-') {
        subtract(num1, num2);
        numbers = [];
        display.textContent = result;
    }

    if (operator === '*') {
        multiply(num1, num2);
        numbers = [];
        display.textContent = result;
    }
    
    if (operator === '/') {
        divide(num1, num2);
        numbers = [];
        display.textContent = result;
    }
    return result;
}

equals.addEventListener('click', () => {
    // pushes what is on the display to index 1 of the numbers array.
    numbers.push(display.textContent);
    /* display2.textContent += numbers[1]; */
    operate();
});
