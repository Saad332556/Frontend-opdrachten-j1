'use strict';

function getWeather() {
    const lat = "52.1490474";
    const lon = "5.1325878";
    const appId = "d6a912a14479c1685c3927ef37e36697";

    const urlBase = 'https://api.openweathermap.org/data/2.5/';
    const endPoint = 'onecall';
    const params = '?lat='+lat+'&lon='+lon+'&units=metric&appid='+appId;

    fetch(urlBase + endPoint + params)
        .then(( response ) => { return response.json() })
        .then(( data ) => {
            // shows time when weather was updated.
            document.querySelector('div#update').innerHTML = timestampToDate(data.current.dt, 'update');

            // fires showCurrent function: displays current weather.
            showCurrent(data.current);

            // Fires formatWeather function twice: will "translate" api into to chart.js format
            // 'hourly' and 'daily' are types that will be used in subsequent functions.
            formatWeather('hourly', data.hourly);
            formatWeather('daily', data.daily);
        })
        .catch( (error) => {
            throw(error);
        }
    );
}

function showCurrent(weather) {
    document.querySelector('div#current-icon').innerHTML = '<img src="https://openweathermap.org/img/wn/'+weather.weather[0].icon+'@2x.png" alt="icon">';
    document.querySelector('div#current-description').innerHTML = weather.weather[0].description;
    document.querySelector('div#current-temp').innerHTML = weather.temp;
    document.querySelector('div#current-feel').innerHTML = weather.feels_like;
    document.querySelector('div#current-humid').innerHTML = weather.humidity;
    document.querySelector('div#current-winddeg').innerHTML = weather.wind_deg;
    document.querySelector('div#current-windspeed').innerHTML = weather.wind_speed;

    console.log(weather);
}

function formatWeather(type, weather) {
    let labels = [],
        temps = [],
        rains = [];

    weather.forEach((forecast) => {
        labels.push(timestampToDate(forecast.dt, type));

        if (typeof forecast.temp === 'number') temps.push(forecast.temp);
        if (typeof forecast.temp === 'object') temps.push(forecast.temp.day);

        let rain = 0;

        if (typeof forecast.rain !== 'undefined') {
            if (typeof forecast.rain === 'number') rain = forecast.rain;
            if (typeof forecast.rain === 'object') rain = forecast.rain['1h'];
        }

        rains.push(rain);
    });

    updateChart(labels, temps, rains, type);
}