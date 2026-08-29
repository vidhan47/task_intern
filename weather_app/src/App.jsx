import { useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import "./App.css";

function App() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (city) => {
    try {
      setLoading(true);
      setError("");

      const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );

      if (!response.ok) {
        throw new Error("City not found");
      }

      const data = await response.json();

      setWeather({
        city: data.name,
        country: data.sys.country,
        temperature: Math.round(data.main.temp),
        condition: data.weather[0].description,
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
        weatherType: data.weather[0].main,
        timeOfDay: data.weather[0].icon.endsWith("n")
          ? "night"
          : "day",
      });
    } catch (error) {
      setWeather(null);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const weatherClass = weather
    ? `${weather.weatherType.toLowerCase()} ${weather.timeOfDay}`
    : "default";

  return (
    <div className={`app ${weatherClass}`}>
      <h1>Weather App</h1>

      <SearchBar onSearch={handleSearch} />

      {loading && <p className="loading">Loading...</p>}

      {error && <p className="error">{error}</p>}

      <WeatherCard weather={weather} />
    </div>
  );
}

export default App;