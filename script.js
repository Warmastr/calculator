/* When using a calculator, the user inputs a number, then selects an operator, then another number and then presses the equals button to return a result. My job will be to capture the numbers the user entered and store the result as a variable. If an operator is pressed, whatever the user entered before that is the first number, then when the equals sign is pressed, whatever numbers the user entered prior to that is the second number*/

let result = 0;
const buttonContainer = document.querySelector('.buttonContainer');

const repeatString = function(string, num) {
    const err = 'ERROR';
    let result = '';
    if (num < 0) result = err;
    for (let i = 0; i < num; i++) {
        result += string;
        }
    return result
};

let col = repeatString('1fr ', 4);
let row = repeatString('1fr ', 5);
let oldName = 'button';
let newName = oldName + 1;
    // create columns
    for (let i = 1; i <= 4; i++) {
        // create rows
        for (let j = 1; j <=5; j++) {
            let buttons = document.createElement('div');
            buttonContainer.append(buttons);
            buttons.className = oldName;
            if (buttons.className === oldName) {
                buttons.className = newName;
            }
            buttonContainer.style.gridTemplateColumns = `${col}`;
            buttonContainer.style.gridTemplateRows = `${row}`;
        }
    }

const add = function(intA, intB) {
    result = intA + intB;
    return result;
};

const subtract = function(intA, intB) {
    result = intA - intB;
    return result;
};

const multiply = function(num1, num2) {
    result = num1 * num2;
    return result;
};

const divide = function(dividend, divisor) {
    result = dividend / divisor;
    if (divisor == 0) {
        alert("Let's say you have 10 cookies, what then is the number of cookies each person would receive if those 10 cookies were divided amongst 0 people? I'll wait...")
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

console.log(multiply(6,3));