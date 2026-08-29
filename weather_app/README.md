# Weather App

A clean, responsive weather application built with **React** that provides real-time weather information for cities around the world using the **OpenWeather API**.

The interface dynamically adapts to the current weather condition and time of day, featuring animated rain, snow, clouds, fog, and other visual effects.

## Features

* Search weather by city
* Real-time weather information
* Temperature displayed in Celsius
* Current weather condition and description
* Humidity information
* Wind speed
* Dynamic weather icons
* Automatic day/night detection
* Dynamic backgrounds based on weather conditions
* Animated weather effects
* Responsive design for desktop and mobile devices
* Loading state while fetching weather data
* Error handling for invalid city searches

## Tech Stack

| Technology      | Purpose                                    |
| --------------- | ------------------------------------------ |
| React           | User interface and component architecture  |
| JavaScript      | Application logic and API integration      |
| CSS             | Styling, responsive layout, and animations |
| Vite            | Development server and build tool          |
| OpenWeather API | Real-time weather data                     |

## Project Structure

```text
weather_app/
│
├── public/
│
├── src/
│   ├── components/
│   │   ├── SearchBar.jsx
│   │   └── WeatherCard.jsx
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── .env.example
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
└── README.md
```

## Getting Started

### Prerequisites

Make sure you have the following installed:

* [Node.js](https://nodejs.org/)
* npm
* An OpenWeather API key

### 1. Clone the Repository

```bash
git clone https://github.com/vidhan47/task_intern.git
```

### 2. Navigate to the Weather App

```bash
cd task_intern/weather_app
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Get an OpenWeather API Key

Create an account on OpenWeather and generate an API key.

### 5. Configure Environment Variables

Create a `.env` file inside the `weather_app` directory:

```env
VITE_WEATHER_API_KEY=your_openweathermap_api_key
```

**Important:** Never commit your `.env` file or expose your API key publicly.

The repository includes `.env.example` as a template.

### 6. Start the Development Server

```bash
npm run dev
```

Vite will provide a local development URL in the terminal. Open that URL in your browser.

## Production Build

Create a production build with:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## How It Works

1. The user enters a city name in the search bar.
2. The application sends a request to the OpenWeather API.
3. The API returns the current weather information.
4. React stores the weather data using state.
5. The weather card displays the returned information.
6. The application determines the weather type and time of day.
7. The background and animated effects update dynamically according to the current conditions.

## Environment Variables

| Variable               | Description                                     |
| ---------------------- | ----------------------------------------------- |
| `VITE_WEATHER_API_KEY` | API key used to access OpenWeather weather data |

## Future Improvements

* Current-location weather using browser geolocation
* Multi-day weather forecasts
* Search history
* Celsius/Fahrenheit conversion
* More detailed weather statistics
* Sunrise and sunset information
* Improved weather animations
* Weather forecast charts


