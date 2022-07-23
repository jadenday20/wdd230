const requestURL = 'json/temples.json';


function displayTemples(temple) {

    // Create elements to add to the document
    let card = document.createElement('section');
    let h3 = document.createElement('h3');
    let image = document.createElement('img');
    let address = document.createElement('p');
    let phone = document.createElement('p');
    let like = document.createElement('img');
    let like_tracker = document.createElement('p');
    
    h3.textContent = String(temple.name);
    address.textContent = String(temple.address);
    phone.textContent = String(temple.telephone);
    const likes = localStorage.getItem(`${temple.name} likes`);
    if (likes) {
        like_tracker.textContent = `Likes: ${window.localStorage.getItem(`${temple.name} likes`)}`;
    }
    // If 'likes' doesn't exist yet than add it to the local storage. 
    else {
        localStorage.setItem(`${temple.name} likes`, 0);
    }

    // Set image attributes
    image.setAttribute('src', `images/temples/${temple.image}`);
    image.setAttribute('alt', `image for ${temple.name}`);
    image.setAttribute('loading', 'lazy'); 
    image.setAttribute('class', 'temple');
    
    like.setAttribute('src', `images/like.png`);
    like.setAttribute('alt', ``);
    like.setAttribute('loading', 'lazy');
    like.setAttribute('width', 50)
    like.addEventListener('mouseover', function() { 
        // like.setAttribute('src', `images/like_highlighted.png`);
        like.style.opacity = .6;
        like.style.cursor = "pointer";
    })

    like.addEventListener('mouseout', function() { 
        // like.setAttribute('src', `images/like.png`);
        like.style.opacity = 1;
    })

    like.addEventListener('click', function() {
        localStorage.setItem(`${temple.name} likes`, Number(window.localStorage.getItem(`${temple.name} likes`)) + 1);
        like_tracker.textContent = `Likes: ${window.localStorage.getItem(`${temple.name} likes`)}`;
    })
    
    card.setAttribute('id', temple.id);
    card.appendChild(h3);
    card.appendChild(image);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(like);
    card.appendChild(like_tracker);
    
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