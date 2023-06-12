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
      
      console.log(data);
      generateWeatherBlock( data.current, 'div#current' );

      data.hourly.forEach((hour) => {
        generateWeatherBlock(hour, 'div#hourly');
      });
      data.daily.forEach((day) => {
          generateWeatherBlock(day, 'div#daily', true);
      });
      

    })
    .catch( (error) => {
      throw(error);
    }
  );
}

function generateWeatherBlock(weather, target, daily = false) {
  let time = weather.dt,
      desc = weather.weather[0].description,
      temp = (daily ? weather.temp.day : weather.temp),
      feel = (daily ? weather.feels_like.day : weather.feels_like),
      humid = weather.humidity,
      uvi = weather.uvi,
      rain = 0;

  if (typeof weather.rain !== 'undefined') {
    if (typeof weather.rain === 'number') rain = weather.rain;
    if (typeof weather.rain === 'object') rain = weather.rain['1h'];
  }

  let NewBlock = document.createElement('div');
    NewBlock.classList.add('weatherblock');

let innerHTML = '<div class="time">'+time+'</div>';
    innerHTML += '<div class="weather">'+desc+'</div>';
    innerHTML += '<div class="temp"><span>'+temp+'&deg;<sup>C</sup></span></div>';
    innerHTML += '<div class="feel">'+feel+'</div>';
    innerHTML += '<div class="humid">'+humid+'</div>';
    innerHTML += '<div class="uvi">'+uvi+'</div>';
    innerHTML += '<div class="rain">'+rain+'mm</div>';
    NewBlock.innerHTML = innerHTML;

    document.querySelector(target).appendChild(NewBlock);

}

window.onload = (function() { getWeather() });
