// main.ts
const display = document.getElementById('display') as HTMLInputElement;
const buttons = Array.from(document.querySelectorAll('button'));
let currentInput = '';
let operator = '';
let previousInput = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.getAttribute('data-value');

        if (value) {
            handleInput(value);
        } else if (button.id === 'clear') {
            clearDisplay();
        } else if (button.id === 'equals') {
            calculateResult();
        }
    });
});

function handleInput(value: string) {
    if (['+', '-', '*', '/'].includes(value)) {
        if (currentInput === '') return;

        operator = value;
        previousInput = currentInput;
        currentInput = '';
    } else {
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
    if (previousInput === '' || currentInput === '' || operator === '') return;

    const prev = parseFloat(previousInput);
    const curr = parseFloat(currentInput);
    let result = 0;

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
