const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("ul");

button.addEventListener('click', function() { 
    if (input.value !== "") {
        var newItem = document.createElement('li');
        newItem.innerHTML = input.value;
        list.appendChild(newItem);
        var newButton = document.createElement('button');
        newButton.innerHTML = "❌";
        newItem.appendChild(newButton);
        newButton.addEventListener('click', function() { 
            list.removeChild(newItem);
        });
        input.value = "";
        input.focus();
    }
});

input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      document.querySelector("button").click();
    }
});