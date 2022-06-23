const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const weatherData = "https://api.openweathermap.org/data/2.5/weather?q=Lindon&units=imperial&appid=0853e46b883f14bf1943fbcc44cedd0d";
// const weatherData = "https://api.openweathermap.org/data/2.5/weather?lat=40.3433&lon=-111.7208&&appid=0853e46b883f14bf1943fbcc44cedd0d"

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

// function displayResults(weatherData) {
//     currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
// }

function displayResults(weatherData) {
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
    // currentTemp.innerHTML = weatherData.main.temp;
  
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
  
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
  }

displayResults(weatherData)

// lat=40.3433&lon=-111.7208&