const button = document.querySelector("button");
console.log(window.innerWidth)

if (window.innerWidth < 1344) {
    document.getElementById("membership-info").style.display = "none";
}

button.addEventListener('click', function() { 
    if (document.getElementById("membership-info").style.display == "none"){
        document.getElementById("membership-info").style.display = "block";
    }

    else {
        document.getElementById("membership-info").style.display = "none";
    }
    
});