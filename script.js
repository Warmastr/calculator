let result;
let numbers = [];
let currentOperator;
let previousOperator;
let secondNumber;
let prevNum;
let pressed = false;
const del = document.querySelector('.delete');
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
    plus.style.backgroundColor = 'rgb(247, 243, 243)';
    minus.style.backgroundColor = 'rgb(247, 243, 243)';
    times.style.backgroundColor = 'rgb(247, 243, 243)';
    divided.style.backgroundColor = 'rgb(247, 243, 243)';
    pressed = false;
});

document.addEventListener('keydown', event => {
    if (event.code === 'Digit1' || event.code === 'Numpad1') {
        display.textContent += '1';
    }

    if (event.code === 'Digit2' || event.code === 'Numpad2') {
        display.textContent += '2';
    }

    if (event.code === 'Digit3' || event.code === 'Numpad3') {
        display.textContent += '3';
    }

    if (event.code === 'Digit4' || event.code === 'Numpad4') {
        display.textContent += '4';
    }

    if (event.code === 'Digit5' || event.code === 'Numpad5') {
        display.textContent += '5';
    }

    if (event.code === 'Digit6' || event.code === 'Numpad6') {
        display.textContent += '6';
    }

    if (event.code === 'Digit7' || event.code === 'Numpad7') {
        display.textContent += '7';
    }

    if (event.code === 'Digit8' || event.code === 'Numpad8') {
        display.textContent += '8';
    }

    if (event.code === 'Digit9' || event.code === 'Numpad9') {
        display.textContent += '9';
    }

    if (event.code === 'Digit0' || event.code === 'Numpad0') {
        display.textContent += '0';
    }

    if (event.code === 'Minus' || event.code === 'NumpadSubtract') {
        display.textContent += '-';
    }
    if (event.code === 'Add' || event.code === 'NumpadAdd') {
        display.textContent += '+';
    }

    if (event.code === 'Multiply' || event.code === 'NumpadMultiply') {
        display.textContent += '*';
    }

    if (event.code === 'Divide' || event.code === 'NumpadDivide') {
        display.textContent += '/';
    }

    if (event.code === 'Escape') {
        display.textContent = '';
        display2.textContent = '';
        previousOperator = '';
        currentOperator = '';
        secondNumber = '';
        prevNum = '';
        numbers = [];
        result = 0;
    }

    if (event.code === 'Equal') {
        numbers.push(Number(display.textContent));
        secondNumber = numbers[1];
        previousOperator = currentOperator;
        operate();
        display2.textContent = roundAccurately(Number(prevNum), 5) + currentOperator;
        display2.textContent += roundAccurately(Number(secondNumber), 5) + '=';
        display2.textContent += roundAccurately(Number(result), 5);
    }

    if (event.code === 'Digit5' && ('ShiftLeft' || 'ShiftRight')) {
        display.textContent = '%';
    }

    if (event.code === 'Period') {
        display.textContent = '.';
    }

    if (event.code === 'Backspace') {
        let has = display.textContent;
        has = has.substring(0, has.length-1);
        display.textContent = has;
    }
});

function clickHandler(number) {
    return () => {
        if (pressed === true) {
            display.textContent = '';
            pressed = false;
        }
        display.textContent += number;
        plus.style.backgroundColor = 'rgb(247, 243, 243)';
        minus.style.backgroundColor = 'rgb(247, 243, 243)';
        times.style.backgroundColor = 'rgb(247, 243, 243)';
        divided.style.backgroundColor = 'rgb(247, 243, 243)';
    };
}

one.addEventListener('click', clickHandler('1'));
two.addEventListener('click', clickHandler('2'));
three.addEventListener('click', clickHandler('3'));
four.addEventListener('click', clickHandler('4'));
five.addEventListener('click', clickHandler('5'));
six.addEventListener('click', clickHandler('6'));
seven.addEventListener('click', clickHandler('7'));
eight.addEventListener('click', clickHandler('8'));
nine.addEventListener('click', clickHandler('9'));
zero.addEventListener('click', clickHandler('0'));

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

del.addEventListener('click', () => {
    let has = display.textContent;
    has = has.substring(0, has.length-1);
    display.textContent = has;
    plus.style.backgroundColor = 'rgb(247, 243, 243)';
    minus.style.backgroundColor = 'rgb(247, 243, 243)';
    times.style.backgroundColor = 'rgb(247, 243, 243)';
    divided.style.backgroundColor = 'rgb(247, 243, 243)';
});

plusMinus.addEventListener ('click', () => {
    let old = display.textContent;
    if (old.includes('-')) {
        display.textContent = old.replace('-', '');
    } else {
        display.textContent = '-' + old;
    }
    plus.style.backgroundColor = 'rgb(247, 243, 243)';
    minus.style.backgroundColor = 'rgb(247, 243, 243)';
    times.style.backgroundColor = 'rgb(247, 243, 243)';
    divided.style.backgroundColor = 'rgb(247, 243, 243)';
});

point.addEventListener ('click', (e) => {
    let has = display.textContent;
    if (has.includes('.')) {
        e.preventDefault();
    } else {
        display.textContent += '.';
    }
    plus.style.backgroundColor = 'rgb(247, 243, 243)';
    minus.style.backgroundColor = 'rgb(247, 243, 243)';
    times.style.backgroundColor = 'rgb(247, 243, 243)';
    divided.style.backgroundColor = 'rgb(247, 243, 243)';
    if (pressed === true) {
        display.textContent = '';
        pressed = false;
    }
});

const checkCalculation = function(e) {
    e.target.style.backgroundColor = 'orange'
    selectedOperator = e.target.textContent;
    numbers.push(Number(display.textContent));
    display.textContent = '';
    if (numbers[1] !== undefined) {
        previousOperator = currentOperator;
        currentOperator = selectedOperator;
        secondNumber = numbers[1];
        operate();
        display2.textContent = roundAccurately(Number(prevNum), 5) + previousOperator;
        numbers[0] = roundAccurately(Number(result), 5);
        display.textContent = numbers[0];
        display2.textContent += roundAccurately(Number(secondNumber), 5) + '=';
        display2.textContent += numbers[0];
        display.textContent = '';
    } else {
        currentOperator = selectedOperator;
        previousOperator = currentOperator;
        display2.textContent = numbers[0] + currentOperator;
    }
}

plus.addEventListener('click', checkCalculation);
minus.addEventListener('click', checkCalculation);
times.addEventListener('click', checkCalculation);
divided.addEventListener('click', checkCalculation);

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
    pressed = true;
    numbers.push(Number(display.textContent));
    secondNumber = numbers[1];
    previousOperator = currentOperator;
    operate();
    display2.textContent = roundAccurately(Number(prevNum), 5) + currentOperator;
    display2.textContent += roundAccurately(Number(secondNumber), 5) + '=';
    display2.textContent += roundAccurately(Number(result), 5);
    plus.style.backgroundColor = 'rgb(247, 243, 243)';
    minus.style.backgroundColor = 'rgb(247, 243, 243)';
    times.style.backgroundColor = 'rgb(247, 243, 243)';
    divided.style.backgroundColor = 'rgb(247, 243, 243)';
});