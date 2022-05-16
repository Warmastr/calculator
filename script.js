const add = function(intA, intB) {
	let result = 0;
    result = intA + intB;
    return result;
};

const subtract = function(intA, intB) {
	let result = 0;
    result = intA - intB;
    return result;
};

const multiply = function(arr) {
    let result = 1;
    for (let i=0; i < arr.length; i++)
      result = result *= arr[i];
    return result;
};

const divide = function(dividend, divisor) {
    let result = 0;
    result = dividend / divisor;
    if (divisor == 0) {
        alert("Let's say you have 10 cookies, what then is the number of cookies each person would receive if those 10 cookies were divided amongst 0 people? I'll wait...")
    }
    return result;
};

const power = function(num, pwr) {
    let result = 1;
	// num needs to be multiplied by itself pwr times
    for (let i = 0; i < pwr; i++) {
      result = result * num;
    }
    return result;
};

const factorial = function(n) {
	let result = n;
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

console.log(divide());