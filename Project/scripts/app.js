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


document.addEventListener("DOMContentLoaded", () => {
  const firstVisit = localStorage.getItem("visited");

  if (!firstVisit) {
    alert("Welcome to Access Point Foundation!");
    localStorage.setItem("visited", "true");
  } else {
    console.log("Welcome back!");
  }
});