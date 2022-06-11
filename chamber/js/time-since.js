// initialize display elements
const daysSinceVisited = document.querySelector("#days-since-visited");

// get the stored value in localStorage
let return_visitor = Boolean(window.localStorage.getItem("visited"));

const minute = 1000 * 60;
const hour = minute * 60;
const day = hour * 24;

// determine if this is the first visit or not.
if (return_visitor !== false) {
    let visit = new Date().getTime();
    let current_day = Math.round(visit / day);
    let last_visit_day = Math.round(window.localStorage.getItem("last-visit") / day)
    const days_since = current_day - last_visit_day
	daysSinceVisited.textContent = `Days since last visit: ${days_since}`;  
} 
else {
    localStorage.setItem("visited", true);
	daysSinceVisited.textContent = `This is your first visit!`;
}

let visit = new Date().getTime();
localStorage.setItem("last-visit", visit)