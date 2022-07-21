const currentTemp = document.querySelector('#current-temp');
const humidity = document.querySelector('#humidity');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const forcastGrid = document.querySelector('#forcast-grid');

const weatherData = "https://api.openweathermap.org/data/2.5/weather?q=Logan&units=imperial&appid=0853e46b883f14bf1943fbcc44cedd0d";
// "https://api.openweathermap.org/data/3.0/onecall?q=Logan&units=imperial&appid=0853e46b883f14bf1943fbcc44cedd0d"

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
    humidity.innerHTML = String(weatherData.main.humidity.toFixed(0));
  
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
  
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    weatherIcon.setAttribute('width', 70);
    captionDesc.textContent = desc;

    for (let i = 1; i < 4; i++) {
      let card = document.createElement('section');
      let h3 = document.createElement('h3');
      let forcast = document.createElement('p');
      let image = document.createElement('img');
      h3.textContent = `Day ${i}`;
      forcast.textContent = 

      card.appendChild(h3);
      card.appendChild(forcast);
      card.appendChild(image);
      forcastGrid.appendChild(card);
    }

  }

displayResults(weatherData)