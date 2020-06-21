const api = {
  key: '4b84c48893285fb922690f8ae9d5e5b5',
  baseurl: 'https://api.openweathermap.org/data/2.5/',
};

const searchBox = document.querySelector('.search-box');
searchBox.addEventListener('keypress', setQuery);

function setQuery(evt) {
  if (evt.keyCode == 13) {
    getResults(searchBox.value);
  }
}

function getResults(query) {
  fetch(`${api.baseurl}weather?q=${query}&units=metric&APPID=${api.key}`)
    .then((weather) => {
      return weather.json();
    })
    .then(displayResults);
}

function displayResults(weather) {
  console.log(weather);
  let city = document.querySelector('.location .city');
  city.innerText = `${weather.name}, ${weather.sys.country}
    `;

  let temp = document.querySelector('.current .temp');
  temp.innerHTML = `${Math.round(weather.main.temp)}<span>°C</span>`;

  let weatherIcon = document.querySelector('.current .weather-icon');
  weatherIcon.innerHTML = `<img src="icons/${weather.weather[0].icon}.png"/>`;

  let weatherEl = document.querySelector('.current .weather');
  weatherEl.innerText = weather.weather[0].main;
}
