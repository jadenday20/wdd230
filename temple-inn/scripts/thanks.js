const user = window.localStorage.getItem("name");

document.querySelector('h2').textContent = `Thank You for Your Feedback ${user}!`;