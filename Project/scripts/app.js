const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');
const nav = document.querySelector('nav');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('open');
  nav.classList.toggle('open');
});


// Display current year
document.getElementById("currentyear").textContent = new Date().getFullYear();

//Display last modified date
document.getElementById("lastModified").textContent = "Last Updated: " + document.lastModified;
