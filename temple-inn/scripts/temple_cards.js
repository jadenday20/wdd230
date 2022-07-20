const requestURL = 'json/temples.json';

function displayTemples(temple) {

    // Create elements to add to the document
    let card = document.createElement('section');
    let h3 = document.createElement('h3');
    let image = document.createElement('img');
    let address = document.createElement('p');
    let phone = document.createElement('p');
    
    h3.textContent = String(temple.name);
    address.textContent = String(temple.address);
    phone.textContent = String(temple.telephone);


    // Set image attributes
    image.setAttribute('src', `images/temples/${temple.image}`);
    image.setAttribute('alt', `image for ${temple.name}`);
    image.setAttribute('loading', 'lazy');  
    
    card.setAttribute('id', temple.id);
    card.appendChild(h3);
    card.appendChild(image);
    card.appendChild(address);
    card.appendChild(phone);
    
    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector(`#temples-grid`).appendChild(card);
  }


fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);  // temporary checking for valid response and data parsing
        const temples = jsonObject['temples'];
        temples.forEach(displayTemples);
    });