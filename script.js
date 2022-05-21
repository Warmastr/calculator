let result;
let numbers = [];
let currentOperator;
let previousOperator;
let secondNumber;
let prevNum;
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
    previousOperator = '';
    currentOperator = '';
    secondNumber = '';
    prevNum = '';
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
    return roundAccurately(Number(result), 5);
};

const subtract = function(num1, num2) {
    result = num1 - num2;
    return roundAccurately(Number(result), 5);
};

const multiply = function(num1, num2) {
    result = num1 * num2;
    return roundAccurately(Number(result), 5);
};

const divide = function(numerator, denominator) {
    result = numerator / denominator;
    if (denominator == 0) {
        alert("Let's say you have 10 cookies, what then, is the number of cookies each person would receive if those 10 cookies were divided amongst 0 people? I'll wait...")
    }
    return roundAccurately(Number(result), 5);
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
    return roundAccurately(Number(result), 5);
};

const roundAccurately = (number, decimalPlaces) => Number(Math.round(number + "e" + decimalPlaces) + "e-" + decimalPlaces)

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
    numbers.push(Number(display.textContent));    
    display.textContent = '';
    if (numbers[1] !== undefined) {
        previousOperator = currentOperator;
        currentOperator = '+';
        secondNumber = numbers[1];
        operate();
        display2.textContent = roundAccurately(Number(prevNum), 5) + previousOperator;
        numbers[0] = roundAccurately(Number(result), 5);
        display.textContent = numbers[0];
        display2.textContent += roundAccurately(Number(secondNumber), 5) + '=';
        display2.textContent += numbers[0];
        display.textContent = '';
    } else {
        currentOperator = '+';
        previousOperator = currentOperator;
        display2.textContent = numbers[0] + currentOperator;
    }
});

minus.addEventListener ('click', () => {
    numbers.push(Number(display.textContent));    
    display.textContent = '';
    if (numbers[1] !== undefined) {
        previousOperator = currentOperator;
        currentOperator = '-';
        secondNumber = numbers[1];
        operate();
        display2.textContent = roundAccurately(Number(prevNum), 5) + previousOperator;
        numbers[0] = roundAccurately(Number(result), 5);
        display.textContent = numbers[0];
        display2.textContent += roundAccurately(Number(secondNumber), 5) + '=';
        display2.textContent += numbers[0];
        display.textContent = '';
    } else {
        currentOperator = '-';
        previousOperator = currentOperator;
        display2.textContent = numbers[0] + currentOperator;
    }
});

times.addEventListener ('click', () => {
    numbers.push(Number(display.textContent));    
    display.textContent = '';
    if (numbers[1] !== undefined) {
        previousOperator = currentOperator;
        currentOperator = '*';
        secondNumber = numbers[1];
        operate();
        display2.textContent = roundAccurately(Number(prevNum), 5) + previousOperator;
        numbers[0] = roundAccurately(Number(result), 5);
        display.textContent = numbers[0];
        display2.textContent += roundAccurately(Number(secondNumber), 5) + '=';
        display2.textContent += numbers[0];
        display.textContent = '';
    } else {
        currentOperator = '*';
        previousOperator = currentOperator;
        display2.textContent = numbers[0] + currentOperator;
    }
});

divided.addEventListener ('click', () => {
    numbers.push(Number(display.textContent));    
    display.textContent = '';
    if (numbers[1] !== undefined) {
        previousOperator = currentOperator;
        currentOperator = '/';
        secondNumber = numbers[1];
        operate();
        display2.textContent = roundAccurately(Number(prevNum), 5) + previousOperator;
        numbers[0] = roundAccurately(Number(result), 5);
        display.textContent = numbers[0];
        display2.textContent += roundAccurately(Number(secondNumber), 5) + '=';
        display2.textContent += numbers[0];
        display.textContent = '';
    } else {
        currentOperator = '/';
        previousOperator = currentOperator;
        display2.textContent = numbers[0] + currentOperator;
    }
});

const operate = function(operator, num1, num2) {
    num1 = Number(numbers[0]);
    num2 = Number(numbers[1]);
    operator = previousOperator;

    if (operator === '+') {
        add(num1, num2);
        prevNum = numbers[0];
        numbers = [];
        display.textContent = roundAccurately(Number(result), 5);
    }

    if (operator === '-') {
        subtract(num1, num2);
        prevNum = numbers[0];
        numbers = [];
        display.textContent = roundAccurately(Number(result), 5);
    }

    if (operator === '*') {
        multiply(num1, num2);
        prevNum = numbers[0];
        numbers = [];
        display.textContent = roundAccurately(Number(result), 5);
    }
    
    if (operator === '/') {
        divide(num1, num2);
        prevNum = numbers[0];
        numbers = [];
        display.textContent = roundAccurately(Number(result), 5);
    }
    return roundAccurately(Number(result), 5);
}

equals.addEventListener('click', () => {
    numbers.push(Number(display.textContent));
    secondNumber = numbers[1];
    previousOperator = currentOperator;
    operate();
    display2.textContent = roundAccurately(Number(prevNum), 5) + currentOperator;
    display2.textContent += roundAccurately(Number(secondNumber), 5) + '=';
    display2.textContent += roundAccurately(Number(result), 5);
});
