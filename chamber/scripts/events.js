const events = [
  { title: "Community Meetup", date: "2025-10-05" },
  { title: "Music Festival", date: "2025-10-12" },
  { title: "Marketing Summit", date: "2025-11-12" }
];

const eventsContainer = document.getElementById("events");

// Populate events
events.forEach(event => {
  const p = document.createElement("p");
  p.innerHTML = `<strong>${event.title}</strong> - ${event.date}`;
  eventsContainer.appendChild(p);
});

async function loadSpotlights() {
  try {
    const response = await fetch("data/members.json");
    const data = await response.json();

    // Map numbers to labels
    const membershipMap = {
      1: "Bronze",
      2: "Silver",
      3: "Gold"
    };

    // Only Gold and Silver
    const spotlightMembers = data.filter(member =>
      [2, 3].includes(member.membership)
    );

    // Shuffle randomly
    const shuffled = spotlightMembers.sort(() => 0.5 - Math.random());

    // Pick 2 or 3 random members
    const selected = shuffled.slice(0, Math.floor(Math.random() * 2) + 2);

    const container = document.getElementById("spotlight-cards");
    container.innerHTML = "";

    // Render cards
    selected.forEach(member => {
      const level = membershipMap[member.membership]; // Convert number → text

      const card = document.createElement("div");
      card.classList.add("card");

      card.innerHTML = `
        <img src="images/${member.image}" alt="${member.name} Logo">
        <h3>${member.name}</h3>
        <p><strong>Phone:</strong> ${member.phone}</p>
        <p><strong>Address:</strong> ${member.address}</p>
        <p><a href="${member.website}" target="_blank">Visit Website</a></p>
        <span class="badge ${level.toLowerCase()}">${level} Member</span>
      `;

      container.appendChild(card);
    });
  } catch (error) {
    console.error("Error loading members:", error);
  }
}

document.addEventListener("DOMContentLoaded", loadSpotlights);
