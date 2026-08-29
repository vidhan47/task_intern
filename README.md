# Internship Tasks

A collection of projects and tasks completed during my **Frontend Development Internship**. This repository contains web development projects built using HTML, CSS, JavaScript, and React.

## Projects

### 1. Calculator

A responsive calculator built using **HTML, CSS, and JavaScript**.

#### Features

* Addition, subtraction, multiplication, and division
* Decimal number support
* Clear and backspace functionality
* Keyboard input support
* Light and dark theme
* Division-by-zero error handling
* Responsive design
* Interactive button animations

**Technologies:** HTML5, CSS3, JavaScript

[View Calculator](./calculator)

---

### 2. Weather App

A responsive weather application built using **React** and the **OpenWeather API**. It allows users to search for a city and view its current weather information.

#### Features

* Search weather by city
* Real-time weather data
* Temperature in Celsius
* Weather condition and description
* Humidity information
* Wind speed
* Dynamic weather icons
* Day and night detection
* Dynamic backgrounds
* Animated weather effects
* Loading state
* Error handling
* Responsive design

**Technologies:** React, JavaScript, CSS, Vite, OpenWeather API

[View Weather App](./weather_app)

---

## Repository Structure

```text
task_intern/
│
├── calculator/
│   ├── index.html
│   ├── script.js
│   ├── style.css
│   └── README.md
│
├── weather_app/
│   ├── src/
│   │   ├── components/
│   │   │   ├── SearchBar.jsx
│   │   │   └── WeatherCard.jsx
│   │   │
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── index.css
│   │   └── main.jsx
│   │
│   ├── .env.example
│   ├── .gitignore
│   ├── index.html
│   ├── package.json
│   ├── package-lock.json
│   └── README.md
│
└── README.md
```

## Technologies Used

* HTML5
* CSS3
* JavaScript
* React
* Vite
* OpenWeather API
* Git & GitHub

## Getting Started

Clone the repository:

```bash
git clone https://github.com/vidhan47/task_intern.git
```

Navigate into the repository:

```bash
cd task_intern
```

### Calculator

The calculator does not require any dependencies.

Open:

```text
calculator/index.html
```

in a browser, or use VS Code Live Server.

### Weather App

Navigate to the Weather App:

```bash
cd weather_app
```

Install dependencies:

```bash
npm install
```

Create a `.env` file inside the `weather_app` directory:

```env
VITE_WEATHER_API_KEY=your_openweathermap_api_key
```

Start the development server:

```bash
npm run dev
```

The terminal will provide the local URL where the application can be accessed.

## Purpose

This repository is used to document and organize projects completed during my frontend development internship while building practical experience with modern web development technologies.

## Author

**Vidhan Balyan**

GitHub: [vidhan47](https://github.com/vidhan47)
