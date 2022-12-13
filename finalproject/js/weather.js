function getWeather(){
    fetch("http://api.openweathermap.org/data/2.5/forecast?appid=5667ea90f2268bd0fdd1ad1109fd12db&lat=33.1581&lon=-117.3506",
    {
      "method": "GET",
      "headers": {}
    })
    .then((res) => res.text())
    .then(console.log.bind(console))
    .catch(console.error.bind(console));

}

const currentTemp = document.querySelector('#temprature');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const windSpeed = document.getElementById('wind-speed-value');
const windChillTag = document.getElementById('wind-chill-value');

function  displayResults(weatherData) {
    currentTemp.innerHTML = weatherData.main.temp.toFixed(0);
  
    const iconsrc = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;
    const desc = weatherData.weather[0].description;
  
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
    windSpeed.innerHTML = weatherData.wind.speed.toFixed(0);

    let windChill = calculateWindChill(weatherData.main.temp, weatherData.wind.speed);
    windChillTag.innerHTML = windChill.toFixed(0);
}

const url = "https://api.openweathermap.org/data/2.5/weather?appid=5667ea90f2268bd0fdd1ad1109fd12db&lat=33.1581&lon=-117.3506&units=imperial";

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // this is for testing the call
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
  apiFetch();