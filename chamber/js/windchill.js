document.getElementById("wind-chill").innerHTML = "N/A"

function calculate_chill() {
    t = weatherData.main.temp;
    s = weatherData.wind[2]
    if (t <=50 && s > 3.0) {
        windchill = 35.74 + 0.6215 * t - 35.75 * s ** 0.16 + 0.4275 * t * s **0.16
        document.getElementById("wind-chill").innerHTML = `${Math.round(windchill*10)/10}°F`
        console.log("windchill")
    }
    
    else {
        document.getElementById("wind-chill").innerHTML = "N/A"
    }
}

calculate_chill()