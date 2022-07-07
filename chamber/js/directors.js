const requestURL = 'data/directors.json';
const cards = document.querySelector('.cards');

function displayDirector(director) {
    // Create elements to add to the document
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let title = document.createElement('p')
    let profile = document.createElement('img');
    
    h2.textContent = String(director.name);
    title.textContent = String(director.title);

    // Set image attributes
    profile.setAttribute('src', `images/profiles/${director.image}`);
    profile.setAttribute('alt', `profile picture for ${director.name}`);
    profile.setAttribute('loading', 'lazy');  
    
    card.appendChild(h2);
    card.appendChild(title);
    card.appendChild(profile);
    
    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('div.cards').appendChild(card);
  }


fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);  // temporary checking for valid response and data parsing
        const directors = jsonObject['directors'];
        directors.forEach(displayDirector);
    });