# Weather App

A clean and responsive weather application built with React that provides real-time weather information for any city using the OpenWeather API.

The interface dynamically adapts to the current weather conditions and time of day, including animated rain, snow, clouds, and other weather effects.

## Features

* Search weather by city
* Real-time weather data
* Temperature in Celsius
* Weather condition and description
* Humidity information
* Wind speed
* Dynamic weather icons
* Day and night detection
* Dynamic backgrounds based on weather and time
* Animated weather effects
* Responsive design for desktop and mobile
* Error handling for invalid cities
* Loading state while fetching data

## Tech Stack

* React
* JavaScript
* CSS
* Vite
* OpenWeather API

## Project Structure

```text
weather-app/
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
├── .env
├── .env.example
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
└── README.md
```

## Getting Started

### 1. Clone the repository

```bash
git clone YOUR_REPOSITORY_URL
```

### 2. Navigate to the project

```bash
cd weather-app
```

### 3. Install dependencies

```bash
npm install
```

### 4. Get an OpenWeather API key

Create an account on OpenWeather and generate an API key.

### 5. Configure environment variables

Create a `.env` file in the project root:

```env
VITE_WEATHER_API_KEY=your_openweathermap_api_key
```

Do not share or commit your API key.

### 6. Start the development server

```bash
npm run dev
```

Open the local URL shown in your terminal.

## Production Build

To create a production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## How It Works

1. The user enters a city in the search bar.
2. React sends a request to the OpenWeather API.
3. The API returns the city's current weather information.
4. The application stores the response using React state.
5. Weather information is displayed dynamically.
6. The background and weather animations change according to the weather condition and time of day.

## Environment Variables

| Variable               | Description         |
| ---------------------- | ------------------- |
| `VITE_WEATHER_API_KEY` | OpenWeather API key |

## Future Improvements

* Current location weather using geolocation
* Weather forecast for upcoming days
* Search history
* Temperature unit conversion
* More detailed weather statistics
* Improved weather animations

## License

This project is licensed under the MIT License.
