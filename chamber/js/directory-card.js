const requestURL = 'data/directory-cards.json';
const cards = document.querySelector('.cards');

function displayBusinesses(business) {
    // Create elements to add to the document
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let logo = document.createElement('img');
    let address = document.createElement('p');
    let phone = document.createElement('p');
    let url = document.createElement('a');
    let membership = document.createElement('p');
    
    h2.textContent = String(business.name);
    address.textContent = `Address: ${(business.address)}`;
    phone.textContent = `Phone: ${(business.phone)}`;
    url.textContent = `Web URL: ${(business.url)}`;
    membership.textContent = `Membership: ${(business.membership)}`;

    // Set image attributes
    logo.setAttribute('src', `images/logos/${business.image}`);
    logo.setAttribute('alt', `logo for ${business.name}`);
    logo.setAttribute('loading', 'lazy');  

    url.setAttribute('href', String(business.url))
    
    card.appendChild(h2);
    card.appendChild(address)
    card.appendChild(phone)
    card.appendChild(url)
    card.appendChild(membership)
    card.appendChild(logo);
    
    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('div.cards').appendChild(card);
  }


fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);  // temporary checking for valid response and data parsing
        const businesses = jsonObject['businesses'];
        businesses.forEach(displayBusinesses);
    });