// Only run if #results exists
const resultsContainer = document.getElementById("results");

if (resultsContainer) {
  const myInfo = new URLSearchParams(window.location.search);

  resultsContainer.innerHTML = `
    <p><strong>Name:</strong> ${myInfo.get(`first`)} ${myInfo.get(`last`)}</p>
    <p><strong>Title:</strong> ${myInfo.get(`orgTitle`)}</p>
    <p><strong>Email:</strong> ${myInfo.get(`email`)}</p>
    <p><strong>Phone:</strong> ${myInfo.get(`phone`)}</p>
    <p><strong>Organization:</strong> ${myInfo.get(`organization`)}</p>
    <p><strong>Membership Level:</strong> ${myInfo.get(`membership`)}</p>
    <p><strong>Submitted On:</strong> ${myInfo.get(`timestamp`)}</p>
  `;
}

