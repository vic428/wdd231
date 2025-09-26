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
        <p><strong>Address:</strong> ${member.address}</p>
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
