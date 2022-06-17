const form = document.querySelector("form");

const newdate = new Date();
var hours = newdate.getHours()

//convert military time to standard hours
if (hours > 12) {
    hours -= 12;
}

//convert the number of minutes to the standard for we would use on a clock
const minutes = newdate.getMinutes()
if (minutes < 10) {
    minute_str = `0${minutes}`
}
else {
    minute_stry = `${minutes}`
}

let cur_day = newdate.toDateString();

//assemble the complete time that the user loaded the form
let cur_time = `${hours}:${minute_str}, ${cur_day}`

//assign the current time to the date-time hidden field
document.getElementById("date-time").value = cur_time;
console.log(document.getElementById("date-time").value); 