// Função para exibir os dados do clima na página
function displayWeather(data) {
    document.getElementById('city-name').textContent = `${data.name}, ${data.sys.country}`;
    document.getElementById('temperature').textContent = `${Math.round(data.main.temp)}°C`;
    document.getElementById('description').textContent = data.weather[0].description;
    document.getElementById('humidity').textContent = `${data.main.humidity}%`;
    document.getElementById('wind').textContent = `${data.wind.speed} km/h`;
    document.getElementById('pressure').textContent = `${data.main.pressure} hPa`;
    document.getElementById('temp-max-min').textContent = `${Math.round(data.main.temp_max)}°C / ${Math.round(data.main.temp_min)}°C`;
}

// Supondo que os dados da API são passados via localStorage, como no exemplo anterior:
const weatherData = {
    name: localStorage.getItem('city'),
    main: {
        temp: localStorage.getItem('temperature'),
        humidity: localStorage.getItem('humidity'),
        pressure: localStorage.getItem('pressure'),
        temp_max: localStorage.getItem('temp_max'),
        temp_min: localStorage.getItem('temp_min'),
    },
    weather: [
        {
            description: localStorage.getItem('description')
        }
    ],
    wind: {
        speed: localStorage.getItem('wind')
    },
    sys: {
        country: localStorage.getItem('country')
    }
};

// Chama a função para exibir os dados
displayWeather(weatherData);
