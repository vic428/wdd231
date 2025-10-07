import { places } from "../data/places.mjs";
console.log(places)

const showHere = document.querySelector("#allplaces")

//------------ loop through the array of json items 
function displayItems(places) {
  places.forEach(x => {
    const thecard = document.createElement('div');
    thecard.classList.add('place'); // This is the grid container

    const thephoto = document.createElement('img');
    thephoto.src = `images/${x.photo_url}`;
    thephoto.alt = x.name;
    thecard.appendChild(thephoto);

    const thetitle = document.createElement('div');
    thetitle.classList.add('name');
    thetitle.innerText = x.name;
    thecard.appendChild(thetitle);

    const theaddress = document.createElement('div');
    theaddress.classList.add('description');
    theaddress.innerText = x.address;
    thecard.appendChild(theaddress);

    const thedesc = document.createElement('div');
    thedesc.classList.add('location');
    thedesc.innerText = x.description;
    thecard.appendChild(thedesc);

    showHere.appendChild(thecard);
  });
}

displayItems(places)

// Get reference to message container
    const messageDiv = document.getElementById('visit-message');

    // Get the current date in milliseconds
    const now = Date.now();

    // Retrieve the last visit from localStorage
    const lastVisit = localStorage.getItem('lastVisit');

    if (!lastVisit) {
      // First visit
      messageDiv.textContent = "Welcome! Let us know if you have any questions.";
    } else {
      // Calculate time difference in days
      const diffMs = now - parseInt(lastVisit, 10);
      const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

      if (diffDays < 1) {
        messageDiv.textContent = "Back so soon! Awesome!";
      } else if (diffDays === 1) {
        messageDiv.textContent = "You last visited 1 day ago.";
      } else {
        messageDiv.textContent = `You last visited ${diffDays} days ago.`;
      }
    }

    // Store the current date for the next visit
    localStorage.setItem('lastVisit', now.toString());