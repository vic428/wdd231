// Only run if #results exists
const resultsContainer = document.getElementById("results");

if (resultsContainer) {
  const myInfo = new URLSearchParams(window.location.search);

  resultsContainer.innerHTML = `
    <p><strong>Name:</strong> ${myInfo.get(`fullname`)}</p>
    <p><strong>Email:</strong> ${myInfo.get(`email`)}</p>
    <p>We received your application and our team would be in touch. </p>
  `;
}

3