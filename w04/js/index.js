const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const d = new Date();
let day = days[d.getDay()];
let date = d.getDate()

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let month = months[d.getMonth()];

let year = d.getFullYear();

document.getElementById("last_updated").textContent = `Last Updated: ${new Date(document.lastModified).toLocaleDateString()} at ${new Date().getHours(document.lastModified)}:${new Date().getMinutes(document.lastModified)}:${new Date().getSeconds(document.lastModified)}`;

document.getElementById("today").textContent = `Current Date: ${day}, ${date} ${month} ${year}`;

document.querySelector(".copyright_year").innerHTML = "&copy;" + new Date().getFullYear();

function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}