const searchInput = document.querySelector('#searchInput');
const searchButton = document.querySelector('#searchButton');
const resultContainer = document.querySelector('#result')


searchButton.addEventListener('click',() => {
   const city = searchInput.value.trim();
   if(city) {
    fetchWeather(city);
   }
})

async function fetchWeather(city) {
    const apiKey = '84b79da5e5d7c92085660485702f4ce8';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('City not found');
        const data = await response.json();
        
        // resultContainer.innerHTML = `
        //      <h2>${data.name}, ${data.sys.country}</h2>
        //     <p>Temperature: ${data.main.temp}°C</p>
        //      <p>Condition: ${data.weather[0].description}</p>
        // `;
         resultContainer.innerHTML = `
            <div class="weather-card">
                <div class="city">${data.name}, ${data.sys.country}</div>
                <div class="temp">${data.main.temp.toFixed(1)}°C</div>
                <div class="condition">${data.weather[0].description}</div>
            </div>
        `;



    } catch (error) {
        resultContainer.innerHTML = `<p>${error.message}</p>`;
    }
}