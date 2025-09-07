const searchInput = document.querySelector('#searchInput');
const searchButton = document.querySelector('#searchButton');
const resultContainer = document.querySelector('#result');

searchButton.addEventListener('click', () => {
  const city = searchInput.value.trim();
  if (city) {
    fetchWeather(city);
  }
});

async function fetchWeather(city) {
  const apiKey = "84b79da5e5d7c92085660485702f4ce8"; // Replace with your OpenWeather API key
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error('City not found ❌');
    const data = await response.json();

    // Weather icon
    const icon = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

    // Convert timezone to local time
    const localTime = new Date((data.dt + data.timezone) * 1000).toUTCString().slice(0, -4);

    resultContainer.innerHTML = `
      <div class="weather-card">
        <img src="${icon}" alt="Weather icon">
        <div class="city">${data.name}, ${data.sys.country}</div>
        <div class="temp">${data.main.temp.toFixed(1)}°C</div>
        <div class="condition">${data.weather[0].description}</div>
        <div class="details">
          🌡 Feels like: ${data.main.feels_like.toFixed(1)}°C <br>
          💧 Humidity: ${data.main.humidity}% <br>
          💨 Wind: ${data.wind.speed} m/s <br>
          🕒 Local Time: ${localTime}
        </div>
      </div>
    `;
  } catch (error) {
    resultContainer.innerHTML = `<p class="error">${error.message}</p>`;
  }
}
