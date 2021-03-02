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