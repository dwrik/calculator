let isFloat = false;

const display = document.querySelector('#display');

const numbers = [ ...document.querySelectorAll('.number') ];
numbers.forEach(number => number.addEventListener('click', handleOperand));

const clear = document.querySelector('#clr');
clear.addEventListener('click', deleteLast);

const allClear = document.querySelector('#acl');
allClear.addEventListener('click', deleteAll);


function deleteLast(event) {
    display.innerHTML = display.innerHTML.slice(0, display.innerHTML.length - 1);
}

function deleteAll(event) {
    display.innerHTML = '';
}

function handleOperand(event) {
    let num = event.target.innerHTML;
    if (isFloat && num === '.') return;
    if (num == '.') {
        isFloat = true;
    }
    display.innerHTML += num;
}

// rounds to 3 places
function round(num) {
    return Math.floor(num * 1000) / 1000;
}

function add(a, b) {
    return round(a + b);
}

function subtract(a, b) {
    return round(a - b);
}

function multiply(a, b) {
    return round(a * b);
}

function divide(a, b) {
    return round(a / b);
}

function mod(a, b) {
    return round(a % b);
}

function operate(operator, a, b) {
    switch(operator) {
        case '+':
            add(a, b);
            break;

        case '-':
            subtract(a, b);
            break;

        case '×':
            multiply(a, b);
            break;

        case '÷':
            divide(a, b);
            break;

        case '%':
            mod(a, b);
            break;
    }
}