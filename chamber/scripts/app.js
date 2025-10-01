// Hamburger toggle
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});


// Set copyright year
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;


const gridBtn = document.getElementById("grid-view");
const listBtn = document.getElementById("list-view");
const container = document.getElementById("business-list");

// Toggle to grid view
gridBtn.addEventListener("click", () => {
  container.classList.remove("business-list");
  container.classList.add("business-grid");
  gridBtn.classList.add("active");
  listBtn.classList.remove("active");
});

// Toggle to list view
listBtn.addEventListener("click", () => {
  container.classList.remove("business-grid");
  container.classList.add("business-list");
  listBtn.classList.add("active");
  gridBtn.classList.remove("active");
});

async function loadMembers() {
  try {
    const response = await fetch("data/members.json"); // adjust path if needed
    if (!response.ok) {
      throw new Error("Failed to fetch members.json");
    }

    const members = await response.json(); // ✅ parse JSON
    const container = document.getElementById("business-list");

    container.innerHTML = ""; // clear old content

    members.forEach(member => {
      const card = document.createElement("div");
      card.className = "business-card";

      card.innerHTML = `
        <img src="images/${member.image}" alt="${member.name} logo">
        <h3>${member.name}</h3>
        <p class="tagline">${member.tagline || ""}</p>
        <p><strong>Address:</strong> ${member.address}</p>+
        <p><strong>Phone:</strong> ${member.phone}</p>
        <p><a href="${member.website}" target="_blank">Visit Website</a></p>
        <p class="membership">Membership: ${getMembershipLevel(member.membership)}</p>
        <p>${member.description}</p>
      `;

      container.appendChild(card);
    });
  } catch (err) {
    console.error("Error loading members:", err);
  }
}

function getMembershipLevel(level) {
  switch (level) {
    case 1: return "Member";
    case 2: return "Silver";
    case 3: return "Gold";
    default: return "Unknown";
  }
}

// Call function
loadMembers();

document.addEventListener("DOMContentLoaded", () => {
  const testimonials = document.querySelectorAll(".testimonial");
  const prev = document.querySelector(".prev");
  const next = document.querySelector(".next");
  let current = 0;

  function showTestimonial(index) {
    testimonials.forEach((t, i) => {
      t.classList.remove("active");
      if (i === index) t.classList.add("active");
    });
  }

  prev.addEventListener("click", () => {
    current = (current === 0) ? testimonials.length - 1 : current - 1;
    showTestimonial(current);
  });

  next.addEventListener("click", () => {
    current = (current === testimonials.length - 1) ? 0 : current + 1;
    showTestimonial(current);
  });

  // Auto-slide every 6 seconds
  setInterval(() => {
    current = (current === testimonials.length - 1) ? 0 : current + 1;
    showTestimonial(current);
  }, 6000);
});

//Select HTML elements in the document
const myTown = document.querySelector('#town');
const myDescription = document.querySelector('#description');
const myTemperature = document.querySelector('#temperature');
const myGraphic = document.querySelector('#graphic');

//Create variables for the url
const myKey = "2dbda7ee0023006f8c715d8422dbe049"
const myLat = "6.601835811228054"
const myLong = "3.351851134845131"

// Construct a full path using template literals
const myURL = `//api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&appid=${myKey}`

//Fetch current data
async function apiFetch() {
  try {
    const response = await fetch(myURL);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // testing only
      displayResults(data); // uncomment when ready
    } else {
        throw Error(await response.text());
    }
  } catch (error) {
      console.log(error);
  }
}
// Display the JSON data onto my webpage
function displayResults(data){
    console.log('Hello')
    myTown.innerHTML = data.name
    myDescription.innerHTML = data.weather[0].description
    myTemperature.innerHTML = `${data.main.temp}&deg;F`
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    myGraphic.setAttribute('SRC', iconsrc)
    myGraphic.setAttribute('alt', data.weather[0].description)

}


//Start the process
apiFetch();