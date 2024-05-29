// main.ts
var display = document.getElementById('display');
var buttons = Array.from(document.querySelectorAll('button'));
var currentInput = '';
var operator = '';
var previousInput = '';
buttons.forEach(function (button) {
    button.addEventListener('click', function () {
        var value = button.getAttribute('data-value');
        if (value) {
            handleInput(value);
        }
        else if (button.id === 'clear') {
            clearDisplay();
        }
        else if (button.id === 'equals') {
            calculateResult();
        }
    });
});
function handleInput(value) {
    if (['+', '-', '*', '/'].includes(value)) {
        if (currentInput === '')
            return;
        operator = value;
        previousInput = currentInput;
        currentInput = '';
    }
    else {
        currentInput += value;
    }
    updateDisplay();
}
function clearDisplay() {
    currentInput = '';
    operator = '';
    previousInput = '';
    updateDisplay();
}
function calculateResult() {
    if (previousInput === '' || currentInput === '' || operator === '')
        return;
    var prev = parseFloat(previousInput);
    var curr = parseFloat(currentInput);
    var result = 0;
    switch (operator) {
        case '+':
            result = prev + curr;
            break;
        case '-':
            result = prev - curr;
            break;
        case '*':
            result = prev * curr;
            break;
        case '/':
            result = prev / curr;
            break;
    }
    currentInput = result.toString();
    operator = '';
    previousInput = '';
    updateDisplay();
}
function updateDisplay() {
    display.value = currentInput || previousInput || '0';
}
