# Calculator

A simple and responsive calculator built using **HTML, CSS, and JavaScript**. The calculator supports basic arithmetic operations, decimal calculations, keyboard input, error handling, and light/dark theme switching.

## Features

* Addition
* Subtraction
* Multiplication
* Division
* Decimal number support
* Backspace functionality
* Clear calculator functionality
* Division-by-zero error handling
* Keyboard input support
* Light and dark theme toggle
* Responsive design
* Clean and minimal user interface
* Operator display
* Automatic result formatting
* Button hover and click animations
* Accessible labels and keyboard focus states

## Tech Stack

* **HTML5** — Structure of the calculator
* **CSS3** — Styling, themes, responsive design, and animations
* **JavaScript** — Calculator logic and user interactions
* **DOM Manipulation** — Updating the calculator display and handling events

## Project Structure

```text
calculator/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/vidhan47/task_intern.git
```

### 2. Navigate to the calculator folder

```bash
cd task_intern/calculator
```

### 3. Run the calculator

This project uses plain HTML, CSS, and JavaScript, so no dependencies or installation are required.

Simply open:

```text
index.html
```

in your browser.

For development, you can also use the **Live Server** extension in VS Code.

## How to Use

### Calculator Buttons

Use the calculator buttons to:

* Enter numbers
* Enter decimal values
* Select an arithmetic operator
* Calculate the result
* Clear the calculator
* Delete the last entered digit
* Switch between light and dark themes

### Keyboard Support

The calculator also supports keyboard input.

| Key         | Action              |
| ----------- | ------------------- |
| `0 - 9`     | Enter numbers       |
| `.`         | Enter decimal point |
| `+`         | Addition            |
| `-`         | Subtraction         |
| `*`         | Multiplication      |
| `/`         | Division            |
| `Enter`     | Calculate result    |
| `=`         | Calculate result    |
| `Backspace` | Delete last digit   |
| `Escape`    | Clear calculator    |

## Supported Operations

### Addition

```text
25 + 15 = 40
```

### Subtraction

```text
100 - 35 = 65
```

### Multiplication

```text
12 × 5 = 60
```

### Division

```text
144 ÷ 12 = 12
```

### Decimal Calculations

```text
10.5 + 2.5 = 13
```

## Error Handling

The calculator handles division by zero.

For example:

```text
10 ÷ 0
```

will display:

```text
Error
```

The calculator can then be cleared and used normally again.

The JavaScript also checks for invalid or non-finite calculation results before displaying them.

## Theme Support

The calculator includes two themes:

* **Dark Theme**
* **Light Theme**

The theme can be switched using the button in the top-right corner of the calculator.

The interface uses CSS custom properties to manage the colors for each theme.

## Responsive Design

The calculator is designed to work across different screen sizes.

The layout uses:

* Flexible width
* CSS Grid for the keypad
* Responsive spacing
* Relative sizing
* Mobile-friendly controls

## How It Works

1. The user enters a number using the calculator buttons or keyboard.
2. JavaScript stores the number as the current operand.
3. When an operator is selected, the current number is stored as the previous operand.
4. The user enters the second number.
5. Pressing `=` or `Enter` performs the selected calculation.
6. The result is displayed on the screen.
7. Results are formatted to remove unnecessary decimal places.
8. Division by zero displays an `Error` message.
9. The calculator can be cleared and used again.

## JavaScript Functions

The calculator logic is separated into several functions:

* `updateDisplay()` — Updates the current and previous operands.
* `appendNumber()` — Adds numbers and decimal points to the display.
* `selectOperator()` — Stores the selected arithmetic operator.
* `calculate()` — Performs the selected calculation.
* `formatResult()` — Formats calculation results.
* `clearCalculator()` — Resets the calculator.
* `backspace()` — Removes the last entered digit.
* `toggleTheme()` — Switches between light and dark themes.

## Future Improvements

Possible future improvements include:

* Calculation history
* Percentage calculations
* Positive/negative toggle
* Square root operation
* Power operations
* Memory functions
* More advanced mathematical operations
* Improved accessibility
* Calculation animations

## License

This project is licensed under the **MIT License**.
