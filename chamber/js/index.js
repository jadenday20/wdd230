const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const d = new Date();
let week_day = days[d.getDay()];
let date = d.getDate()

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let month = months[d.getMonth()];

let year = d.getFullYear();

document.getElementById("last_updated").textContent = `Last Updated: ${new Date(document.lastModified).toLocaleDateString()} at ${new Date().getHours(document.lastModified)}:${new Date().getMinutes(document.lastModified)}:${new Date().getSeconds(document.lastModified)}`;

document.getElementById("today").textContent = `${week_day}, ${date} ${month} ${year}`;

document.querySelector(".copyright_year").innerHTML = "&copy;" + new Date().getFullYear();

function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}

if (week_day == "Monday" || week_day == "Tuesday") {
    document.querySelector(".temp-banner").style.display = "block";
    document.querySelector(".temp-banner").innerHTML = "🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.";
}

