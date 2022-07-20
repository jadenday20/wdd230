const requestURL = 'json/amenities.json';

function displayAmenities(amenitiy) {

    // Create elements to add to the document
    let textSection = document.createElement('section');
    let ul = document.createElement('ul');
    let li = document.createElement('li');
    let a = document.createElement('a')
    let h3 = document.createElement('h3');
    let p = document.createElement('p');
    let image = document.createElement('img');
    
    h3.textContent = String(amenitiy.name);
    p.textContent = String(amenitiy.description);
    a.textContent = String(amenitiy.name);


    // Set image attributes
    image.setAttribute('src', `images/amenities/${amenitiy.image}`);
    image.setAttribute('alt', `image for ${amenitiy.name}`);
    image.setAttribute('loading', 'lazy');  
    image.setAttribute('width', 300)
    
    textSection.setAttribute('id', amenitiy.id);
    textSection.appendChild(h3);
    textSection.appendChild(p);
    ul.appendChild(li); 
    li.appendChild(a);
    a.setAttribute('href', `#${amenitiy.id}`)
    
    // Add/append the existing HTML div with the cards class with the section(card)
    if (is_col_odd == "True" || window.innerWidth < 1000){
        document.querySelector(`#amenities-grid`).appendChild(textSection);
        document.querySelector(`#amenities-grid`).appendChild(image);
        is_col_odd = "False";
    } else {
        document.querySelector(`#amenities-grid`).appendChild(image);
        document.querySelector(`#amenities-grid`).appendChild(textSection);
        is_col_odd = "True";
    }

    document.querySelector(`#amenities`).appendChild(ul)
  }

let is_col_odd = "True";

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);  // temporary checking for valid response and data parsing
        const amenities = jsonObject['amenities'];
        amenities.forEach(displayAmenities);
    });