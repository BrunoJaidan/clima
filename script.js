document.getElementById('weather-form').addEventListener('submit', function (event) {
    event.preventDefault();
    
    const city = document.getElementById('city-input').value;
    const apiKey = '0666c67271ad98a750e8faba64f3671b';  
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                // Armazena os dados no localStorage
                localStorage.setItem('city', data.name);
                localStorage.setItem('temperature', data.main.temp);
                localStorage.setItem('description', data.weather[0].description);
                localStorage.setItem('humidity', data.main.humidity);
                localStorage.setItem('wind', data.wind.speed);
                localStorage.setItem('pressure', data.main.pressure);
                localStorage.setItem('temp_max', data.main.temp_max);
                localStorage.setItem('temp_min', data.main.temp_min);
                localStorage.setItem('country', data.sys.country);

                // Redireciona para a página de resultados
                window.location.href = 'result.html';
            } else {
                document.getElementById('weather-info').innerHTML = 'Cidade não encontrada.';
            }
        })
        .catch(error => {
            console.error('Erro ao buscar os dados:', error);
            document.getElementById('weather-info').innerHTML = 'Erro ao buscar a previsão do tempo.';
        });
});
