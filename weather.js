function getData() {
    const date = new Date();
    let currentDate = `${date}`;

    const getContainer = document.getElementById('container');

    fetch(
        'https://api.openweathermap.org/data/2.5/weather?q=Delhi&APPID=27b495cc732b8b61fb08a16e4fc27efb'
    )
    .then((response) => response.json())
    .then((data) => {
        const result = data;

        document.querySelector('.searchbox').setAttribute('placeholder', result.name);
        document.querySelector('.city').innerText = result.name + ', ' + result.sys.country;
        document.querySelector('.date').innerText = currentDate.slice(0, 15);

        document.querySelector('.temp').innerText = result.main.temp + '°C';
        document.querySelector('.weather').innerText = result.weather[0].main;
        document.querySelector('.highlow').innerText =
            result.main.temp_max + '°C' + ' / ' + result.main.temp_min + '°C';

        getContainer.style.display = 'block';
    })
    .catch((error) => {
        console.error('Error fetching weather data:', error);
    });
}

// this is for the DOM to be fully loaded before calling getData
document.addEventListener('DOMContentLoaded', getData);