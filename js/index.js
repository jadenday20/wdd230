document.getElementById("last_updated").textContent = `Last Updated: ${new Date(document.lastModified).toLocaleDateString()} at ${new Date().getHours(document.lastModified)}:${new Date().getMinutes(document.lastModified)}:${new Date().getSeconds(document.lastModified)}`;

document.querySelector(".copyright_year").innerHTML = "&copy;" + new Date().getFullYear();