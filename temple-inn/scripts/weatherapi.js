const currentTemp = document.querySelector('#current-temp');
const humidity = document.querySelector('#humidity');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const forcastGrid = document.querySelector('#forcast-grid');
const alerts = document.querySelector('#alerts');

// const weatherData = "https://api.openweathermap.org/data/2.5/weather?q=Logan&units=imperial&appid=0853e46b883f14bf1943fbcc44cedd0d";

const weatherData = "https://api.openweathermap.org/data/2.5/onecall?lat=41.7355&lon=-111.8344&exclude=minutely,hourly&units=imperial&appid=f8f8a66457daa4bbfe0aaf80d0fd5530";
// const weatherData = "https://api.openweathermap.org/data/2.5/onecall?lat=32.8962&lon=-109.8276&exclude=minutely,hourly&units=imperial&appid=f8f8a66457daa4bbfe0aaf80d0fd5530";

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
    currentTemp.innerHTML = String(weatherData.current.temp.toFixed(0));
    humidity.innerHTML = String(weatherData.current.humidity.toFixed(0));
  
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.current.weather[0].icon}.png`;
    const desc = weatherData.current.weather[0].description;
  
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    weatherIcon.setAttribute('width', 70);
    captionDesc.textContent = desc;

    // 3-Day Forecast
    for (let i = 1; i < 4; i++) {
      let card = document.createElement('section');
      let h3 = document.createElement('h3');
      let temperature = document.createElement('p');
      let icon = document.createElement('img');
      let caption = document.createElement('figcaption');

      const src = `https://openweathermap.org/img/w/${weatherData.daily[i].weather[0].icon}.png`;
      const description = weatherData.daily[i].weather[0].description;
      icon.setAttribute('src', src);
      icon.setAttribute('alt', description);
      icon.setAttribute('width', 70);
      caption.textContent = description;

      if (i == 1) {
        h3.textContent = `In ${i} Day`;
      }
      else {
        h3.textContent = `In ${i} Days`;
      }
      temperature.textContent = `${String(weatherData.daily[i].temp.day.toFixed(0))}°F`;

      card.appendChild(h3);
      card.appendChild(temperature);
      card.appendChild(icon);
      card.appendChild(caption)
      forcastGrid.appendChild(card);
    }

    // Weather Alerts
    if (Object.keys(weatherData).length > 6) {
      alerts.style.display = "block";
      document.querySelector('header').style.opacity = "0.6";
      document.querySelector('main').style.opacity = "0.6";
      document.querySelector('footer').style.opacity = "0.6";

      for (let i = 0; i < weatherData.alerts.length; i++) {
        let banner = document.createElement('section');
        let close = document.createElement('button');
        let alert = document.createElement('p');
  
        alert.textContent = weatherData.alerts[i].description;
        close.textContent = "✕";
        close.setAttribute('onclick', "closeMe()")
        banner.appendChild(close);
        banner.appendChild(alert);
        alerts.appendChild(banner);
      }
    }
    

  }

function closeMe() {
    alerts.style.display = "none";
    document.querySelector('header').style.opacity = "1";
    document.querySelector('main').style.opacity = "1";
    document.querySelector('footer').style.opacity = "1";
  }

displayResults(weatherData)