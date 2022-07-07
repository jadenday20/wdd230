const requestURL = 'data/directory-cards.json';

function displayBusinesses(business, spotlightNum) {
    // Create elements to add to the document
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let logo = document.createElement('img');
    let address = document.createElement('p');
    let phone = document.createElement('p');
    let link = document.createElement('a');
    
    h2.textContent = String(business.name);
    address.textContent = `Address: ${(business.address)}`;
    phone.textContent = `Phone: ${(business.phone)}`;

    // Set image attributes
    logo.setAttribute('src', `images/logos/${business.image}`);
    logo.setAttribute('alt', `logo for ${business.name}`);
    logo.setAttribute('loading', 'lazy');  

    link.setAttribute('href', String(business.url))
    
    card.appendChild(h2);
    card.appendChild(address);
    card.appendChild(phone);
    link.appendChild(logo);
    card.appendChild(link);
    
    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector(`#spotlight-${spotlightNum}`).appendChild(card);
  }

// fetch(requestURL)
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (jsonObject) {
//         console.table(jsonObject);  // temporary checking for valid response and data parsing
//         const businesses = jsonObject['businesses'];
//         const businessNum = Object.keys(businesses).length;
//         const spotlights = [];
//         possibleSpotlights = Array.from(Array(businessNum).keys()) // Creates an array with numbers from 0 to businessNum. From Audwin Oyong on stackoverflow 
//         spotlights[0] = Math.floor(Math.random() * businessNum);
//         spotlights[1] = Math.floor(Math.random() * businessNum);
//         while (spotlights[1] == spotlights[0]){
//             spotlights[1] = Math.floor(Math.random() * businessNum);
//         }
//         spotlights[2] = Math.floor(Math.random() * businessNum);
//         while (spotlights[2] == spotlights[0] || spotlights[2] == spotlights[1]){
//             spotlights[2] = Math.floor(Math.random() * businessNum);
//         }

//         displayBusinesses(businesses[spotlights[0]], 1)
//         displayBusinesses(businesses[spotlights[1]], 2)
//         displayBusinesses(businesses[spotlights[2]], 3)
//     });


fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);  // temporary checking for valid response and data parsing
        const businesses = jsonObject['businesses'];
        const businessNum = Object.keys(businesses).length;
        const spotlights = [];
        const possibleSpotlights = {}
        // possibleSpotlights = Array.from(Array(businessNum).keys()) // Creates an array with numbers from 0 to businessNum. From Audwin Oyong on stackoverflow 

        let x = 0;
        for (let i = 0; i < businessNum; i++) {
            if (businesses[i].membership == "gold" || businesses[i].membership == "silver") {
                possibleSpotlights[x] = i;
                x++
            }
        }

        console.log(possibleSpotlights)
        
        spotlights[0] = Math.floor(Math.random() * Object.keys(possibleSpotlights).length);
        spotlights[1] = Math.floor(Math.random() * Object.keys(possibleSpotlights).length);
        

        while (spotlights[1] == spotlights[0]){
            spotlights[1] = Math.floor(Math.random() * Object.keys(possibleSpotlights).length);
        }
        spotlights[2] = Math.floor(Math.random() * Object.keys(possibleSpotlights).length);
        while (spotlights[2] == spotlights[0] || spotlights[2] == spotlights[1]){
            spotlights[2] = Math.floor(Math.random() * Object.keys(possibleSpotlights).length);
        }

        console.log(spotlights)

        displayBusinesses(businesses[possibleSpotlights[spotlights[0]]], 1)
        displayBusinesses(businesses[possibleSpotlights[spotlights[1]]], 2)
        displayBusinesses(businesses[possibleSpotlights[spotlights[2]]], 3)
    });