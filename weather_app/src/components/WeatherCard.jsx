function WeatherEffect({ type }) {
  if (type === "Rain" || type === "Drizzle") {
    return (
      <div className="weather-effect rain-effect">
        {Array.from({ length: 35 }).map((_, index) => (
          <span key={index}></span>
        ))}
      </div>
    );
  }

  if (type === "Snow") {
    return (
      <div className="weather-effect snow-effect">
        {Array.from({ length: 30 }).map((_, index) => (
          <span key={index}></span>
        ))}
      </div>
    );
  }

  if (type === "Thunderstorm") {
    return <div className="weather-effect thunder-effect"></div>;
  }

  if (type === "Clouds") {
    return (
      <div className="weather-effect cloud-effect">
        <span></span>
        <span></span>
        <span></span>
      </div>
    );
  }

  if (type === "Clear") {
    return <div className="weather-effect clear-effect"></div>;
  }

  if (
    type === "Mist" ||
    type === "Fog" ||
    type === "Haze" ||
    type === "Smoke"
  ) {
    return <div className="weather-effect fog-effect"></div>;
  }

  return null;
}

function WeatherCard({ weather }) {
  if (!weather) {
    return null;
  }

  return (
    <div className="weather-card">
      <WeatherEffect type={weather.weatherType} />

      <div className="weather-content">
        <div className="weather-label">CURRENT WEATHER</div>

        <div className="weather-header">
          <div>
            <h2>
              {weather.city}, {weather.country}
            </h2>

            <p className="condition">{weather.condition}</p>
          </div>

          <img
            src={weather.icon}
            alt={weather.condition}
            className="weather-icon"
          />
        </div>

        <div className="temperature">
          {weather.temperature}°C
        </div>

        <div className="weather-details">
          <div className="detail">
            <span aria-hidden="true">💧</span>
            <p>Humidity</p>
            <strong>{weather.humidity}%</strong>
          </div>

          <div className="detail">
            <span aria-hidden="true">💨</span>
            <p>Wind</p>
            <strong>{weather.windSpeed} m/s</strong>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;