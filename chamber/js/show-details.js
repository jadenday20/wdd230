const button = document.querySelector("button");

button.addEventListener('click', function() { 
    if (document.getElementById("membership-info").style.display == "none"){
        document.getElementById("membership-info").style.display = "block";
    }

    else {
        document.getElementById("membership-info").style.display = "none";
    }
    
});