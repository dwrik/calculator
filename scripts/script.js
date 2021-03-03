// useful variables

let operation = '';
let prevOperand = '';
let isFloat = false;
let isLastInputOperation = false;

// display node
const display = document.querySelector('#display');
display.innerHTML = '';

// event listeners
const operations = [ ...document.querySelectorAll('.operation') ];
operations.forEach(operation => operation.addEventListener('click', handleOperator));

const numbers = [ ...document.querySelectorAll('.number') ];
numbers.forEach(number => number.addEventListener('click', handleOperand));

const equal = document.querySelector('#key-eq');
equal.addEventListener('click', evaluate);

const clear = document.querySelector('#key-clr');
clear.addEventListener('click', deleteLast);

const allClear = document.querySelector('#key-acl');
allClear.addEventListener('click', deleteAll);

window.addEventListener('keypress', handleKey);


// handle keypresses
function handleKey(event) {
    const key = event.key;
    let keyID = '';

    switch(key) {
        case '+':     keyID = 'add'; break;
        case '-':     keyID = 'sub'; break;
        case '*':     keyID = 'mul'; break;
        case '/':     keyID = 'div'; break;
        case '.':     keyID = 'dot'; break;
        case 'c':     keyID = 'clr'; break;
        case 'a':     keyID = 'acl'; break;
        case '0':     keyID = 'zr';  break;
        case '=':
        case 'Enter': keyID = 'eq';  break;
        default:      keyID = key;
    }

    try {
        const keyElement = document.querySelector(`#key-${keyID}`);
        keyElement.click();
    } catch (error) {
        return;
    }
}

// clear all
function deleteAll(event) {
    operation = '';
    isFloat = false;
    prevOperand = '';
    isLastInputOperation = false;
    display.innerHTML = '';
    resetSelection();
}

// delete last char
function deleteLast(event) {
    if (isLastInputOperation) operation = '';

    let operand = display.innerHTML;
    if (operand.length === 1 || (operand.length == 2 && operand.charAt(0) == '-')) {
        deleteAll();
        return;
    }

    if (operand.slice(-1) === '.') {
        isFloat = false;
    }

    display.innerHTML = operand.slice(0, display.innerHTML.length - 1);
}

// resets operator selection colors
function resetSelection() {
    operations.forEach(operation => operation.classList.remove('selected'));
}


// sets operation and handles
// prev operation if it exists
function handleOperator(event) {
    if (prevOperand.length > 0) {
        evaluate(event);
    }

    resetSelection();
    event.target.classList.add('selected');
    operation = event.target.innerHTML;
    prevOperand = display.innerHTML;
    isLastInputOperation = true;
}

// handles number/dot input
// only single decimal point allowed
function handleOperand(event) {
    if (isLastInputOperation) {
        clearScreen();
    }

    if (display.innerHTML.length > 7) {
        return;
    }

    const operand = event.target.innerHTML;
    if (isFloat && operand === '.') return;
    if (operand == '.') isFloat = true;
    display.innerHTML += operand;
}

// evaluates the current
// and prev operands
function evaluate(event) {
    if (prevOperand.length == 0 || isLastInputOperation) return;

    const currOperand = display.innerHTML;
    const result = operate(operation,
        Number(prevOperand),
        Number(currOperand));

    isFloat = isInt(result)? false : true;
    display.innerHTML = `${result ?? ''}`;
    prevOperand = '';
    resetSelection();
}

// Decimal point checker
function isInt(num) {
    return (num % 1 === 0);
}

// clears screen but
// preserves operation/operands
function clearScreen() {
    isFloat = false;
    isLastInputOperation = false;
    display.innerHTML = '';
}


// rounds to 3 places
function round(num) {
    return Math.floor(num * 1000) / 1000;
}

// calculator functions

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
    if (b === 0) {
        alert('You can\'t divide by 0!');
        return;
    }
    return round(a / b);
}

// caller
function operate(operator, a, b) {
    switch(operator) {
        case '+': return add(a, b);
        case '-': return subtract(a, b);
        case '×': return multiply(a, b);
        case '÷': return divide(a, b);
    }
}