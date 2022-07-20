
let form =  document.querySelector('form');

document.querySelector('form').addEventListener('submit', event => {
    event.preventDefault();
    
    let name = form.querySelector("#name").value;
    
    console.log(name);

    localStorage.setItem("name", name);

    location.href = form.action
});