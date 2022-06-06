document.getElementById("wind-chill").innerHTML = "N/A"

function calculate_chill() {
    t = document.getElementById("temp").value;
    s = document.getElementById("speed").value;
    if (t <=50 && s > 3.0) {
        windchill = 35.74 + 0.6215 * t - 35.75 * s ** 0.16 + 0.4275 * t * s **0.16
        document.getElementById("wind-chill").innerHTML = `${Math.round(windchill*10)/10}°F`
        console.log("windchill")
    }
    
    else {
        document.getElementById("wind-chill").innerHTML = "N/A"
    }
}

document.getElementById("temp").addEventListener("keyup", calculate_chill);
document.getElementById("speed").addEventListener("keyup", calculate_chill);


document.getElementById("temp").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        document.getElementById("temp").blur()
        document.getElementById("speed").focus()
    }
});

document.getElementById("speed").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        document.getElementById("speed").blur()
    }
});