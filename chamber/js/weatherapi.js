const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const windSpeed = document.querySelector('#speed');
const windChill = document.querySelector('#wind-chill');

const weatherData = "https://api.openweathermap.org/data/2.5/weather?q=Lindon&units=imperial&appid=0853e46b883f14bf1943fbcc44cedd0d";

async function apiFetch() {
    try {
      const response = await fetch(weatherData);
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        displayResults(data)
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
}
  
apiFetch();

function displayResults(weatherData) {
    currentTemp.innerHTML = String(weatherData.main.temp.toFixed(0));
    // currentTemp.innerHTML = weatherData.main.temp;
  
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
  
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    weatherIcon.setAttribute('width', 100);
    captionDesc.textContent = desc;

    windSpeed.innerHTML = String(weatherData.wind.speed);
    calculate_chill();

    function calculate_chill() {
      t = weatherData.main.temp.toFixed(0);
      s = weatherData.wind.speed;
      if (t <=50 && s > 3.0) {
          windchill = 35.74 + 0.6215 * t - 35.75 * s ** 0.16 + 0.4275 * t * s **0.16
          windChill.innerHTML = `${Math.round(windchill*10)/10}°F`;
      }
      
      else {
          windChill.innerHTML = "N/A";
      }
    }
  }

displayResults(weatherData)