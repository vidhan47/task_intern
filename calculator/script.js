const currentOperand = document.getElementById("current-operand");
const previousOperand = document.getElementById("previous-operand");

const numberButtons = document.querySelectorAll("[data-number]");
const operatorButtons = document.querySelectorAll("[data-operator]");

const clearButton = document.getElementById("clear");
const backspaceButton = document.getElementById("backspace");
const equalsButton = document.getElementById("equals");

const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.querySelector(".theme-icon");

let currentNumber = "0";
let previousNumber = null;
let operator = null;
let resetDisplay = false;

function updateDisplay() {
currentOperand.textContent = currentNumber;

if (previousNumber !== null && operator !== null) {
    previousOperand.textContent = `${previousNumber} ${operator}`;
} else {
    previousOperand.textContent = "";
}

}

function appendNumber(number) {
if (currentNumber === "Error") {
clearCalculator();
}

if (resetDisplay) {
    currentNumber = "0";
    resetDisplay = false;
}

if (number === "." && currentNumber.includes(".")) {
    return;
}

if (currentNumber === "0" && number !== ".") {
    currentNumber = number;
} else {
    currentNumber += number;
}

updateDisplay();

}

function selectOperator(selectedOperator) {
if (currentNumber === "Error") {
return;
}

if (operator !== null && !resetDisplay) {
    calculate();
}

previousNumber = parseFloat(currentNumber);
operator = selectedOperator;
resetDisplay = true;

updateDisplay();

}

function calculate() {
if (operator === null || previousNumber === null) {
return;
}

const secondNumber = parseFloat(currentNumber);
let result;

switch (operator) {
    case "+":
        result = previousNumber + secondNumber;
        break;

    case "-":
        result = previousNumber - secondNumber;
        break;

    case "×":
        result = previousNumber * secondNumber;
        break;

    case "÷":
        if (secondNumber === 0) {
            currentNumber = "Error";
            previousNumber = null;
            operator = null;
            resetDisplay = true;
            updateDisplay();
            return;
        }

        result = previousNumber / secondNumber;
        break;

    default:
        return;
}

currentNumber = formatResult(result);
previousNumber = null;
operator = null;
resetDisplay = true;

updateDisplay();

}

function formatResult(number) {
if (!Number.isFinite(number)) {
return "Error";
}

return Number(number.toFixed(10)).toString();

}

function clearCalculator() {
currentNumber = "0";
previousNumber = null;
operator = null;
resetDisplay = false;

updateDisplay();

}

function backspace() {
if (resetDisplay || currentNumber === "Error") {
return;
}

if (currentNumber.length === 1) {
    currentNumber = "0";
} else {
    currentNumber = currentNumber.slice(0, -1);
}

updateDisplay();

}

function toggleTheme() {
const html = document.documentElement;

html.classList.toggle("dark-theme");
html.classList.toggle("light-theme");

if (html.classList.contains("dark-theme")) {
    themeIcon.textContent = "🌙";
} else {
    themeIcon.textContent = "☀️";
}

}

numberButtons.forEach(button => {
button.addEventListener("click", () => {
appendNumber(button.dataset.number);
});
});

operatorButtons.forEach(button => {
button.addEventListener("click", () => {
selectOperator(button.dataset.operator);
});
});

equalsButton.addEventListener("click", calculate);

clearButton.addEventListener("click", clearCalculator);

backspaceButton.addEventListener("click", backspace);

themeToggle.addEventListener("click", toggleTheme);

document.addEventListener("keydown", event => {
if (event.key >= "0" && event.key <= "9") {
appendNumber(event.key);
}

if (event.key === ".") {
    appendNumber(".");
}

if (event.key === "+") {
    selectOperator("+");
}

if (event.key === "-") {
    selectOperator("-");
}

if (event.key === "*") {
    selectOperator("×");
}

if (event.key === "/") {
    event.preventDefault();
    selectOperator("÷");
}

if (event.key === "Enter" || event.key === "=") {
    calculate();
}

if (event.key === "Backspace") {
    backspace();
}

if (event.key === "Escape") {
    clearCalculator();
}

});

updateDisplay();