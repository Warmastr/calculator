/* When using a calculator, the user inputs a number, then selects an operators, then another number and then presses the equals button to return a result. My job will be to capture the numbers the user entered and store the result as a variable. If an operators is pressed, whatever the user entered before that is the first number, then when the equals sign is pressed, whatever numbers the user entered prior to that is the second number*/

let result;
let numPlaceholder = '';
let numbers = [];
let operators = [];
let secondNumber;
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
    result = 0;
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

plus.addEventListener ('click', () => {
    numbers.push(display.textContent);
    if (operators[1] !== undefined) {
        operators[0] = operators[1];
    } else {
        operators.push('+');
    }
    display.textContent = '';
    display2.textContent = numbers[0] + operators[0];
    if (numbers[1] !== undefined) {
        secondNumber = numbers[1];
        operate();
        numbers[0] = result;
        display.textContent = numbers[0];
        display2.textContent += secondNumber + '=';
        display2.textContent += numbers[0];
        display.textContent = '';
    }
});

minus.addEventListener ('click', () => {
    numbers.push(display.textContent);
    if (operators[1] !== undefined) {
        operators[0] = operators[1];
    } else {
        operators.push('-');
    }
    display.textContent = '';
    display2.textContent = numbers[0] + operators[0];
    if (numbers[1] !== undefined) {
        secondNumber = numbers[1];
        operate();
        numbers[0] = result;
        display.textContent = numbers[0];
        display2.textContent += secondNumber + '=';
        display2.textContent += numbers[0];
        display.textContent = '';
    }
});

times.addEventListener ('click', () => {
    numbers.push(display.textContent);
    if (operators[1] !== undefined) {
        operators[0] = operators[1];
    } else {
        operators.push('*');
    }
    display.textContent = '';
    display2.textContent = numbers[0] + operators[0];
    if (numbers[1] !== undefined) {
        secondNumber = numbers[1];
        operate();
        numbers[0] = result;
        display.textContent = numbers[0];
        display2.textContent += secondNumber + '=';
        display2.textContent += numbers[0];
        display.textContent = '';
    }
});

divided.addEventListener ('click', () => {
    numbers.push(display.textContent);
    if (operators[1] !== undefined) {
        operators[0] = operators[1];
    } else {
        operators.push('/');
    }
    display.textContent = '';
    display2.textContent = numbers[0] + operators[0];
    if (numbers[1] !== undefined) {
        secondNumber = numbers[1];
        operate();
        numbers[0] = result;
        display.textContent = numbers[0];
        display2.textContent += secondNumber + '=';
        display2.textContent += numbers[0];
        display.textContent = '';
    }
});

const operate = function(operator, num1, num2) {
    num1 = Number(numbers[0]);
    console.log(num1);
    num2 = Number(numbers[1]);
    console.log(num2);
    operator = operators[0];
    operators[0] = operators[1];

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
    
    numbers.push(display.textContent);
    operate();
});
