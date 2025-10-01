document.addEventListener("DOMContentLoaded", () => {
  // =========================
  // Hamburger toggle
  // =========================
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("nav-menu");

  if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
      navMenu.classList.toggle("show");
    });
  }

  // =========================
  // Set copyright year & last modified
  // =========================
  const yearEl = document.getElementById("currentyear");
  const lastModifiedEl = document.getElementById("lastModified");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
  if (lastModifiedEl) lastModifiedEl.textContent = `Last Modification: ${document.lastModified}`;

  // =========================
  // Grid/List toggle
  // =========================
  const gridBtn = document.getElementById("grid-view");
  const listBtn = document.getElementById("list-view");
  const container = document.getElementById("business-list");

  if (gridBtn && listBtn && container) {
    gridBtn.addEventListener("click", () => {
      container.classList.remove("business-list");
      container.classList.add("business-grid");
      gridBtn.classList.add("active");
      listBtn.classList.remove("active");
      gridBtn.setAttribute("aria-pressed", "true");
      listBtn.setAttribute("aria-pressed", "false");
    });

    listBtn.addEventListener("click", () => {
      container.classList.remove("business-grid");
      container.classList.add("business-list");
      listBtn.classList.add("active");
      gridBtn.classList.remove("active");
      listBtn.setAttribute("aria-pressed", "true");
      gridBtn.setAttribute("aria-pressed", "false");
    });
  }

  // =========================
  // Load Members
  // =========================
  async function loadMembers() {
    try {
      if (!container) return;

      container.innerHTML = "<p>Loading members...</p>";

      const response = await fetch("data/members.json");
      if (!response.ok) {
        throw new Error("Failed to fetch members.json");
      }

      const members = await response.json();
      container.innerHTML = ""; // clear loader

      members.forEach(member => {
        const card = document.createElement("div");
        card.className = "business-card";

        card.innerHTML = `
          <img src="images/${member.image}" alt="${member.name} logo">
          <h3>${member.name}</h3>
          <p class="tagline">${member.tagline || ""}</p>
          <p><strong>Address:</strong> ${member.address}</p>
          <p><strong>Phone:</strong> ${member.phone}</p>
          <p><a href="${member.website}" target="_blank" rel="noopener">Visit Website</a></p>
          <p class="membership">Membership: ${getMembershipLevel(member.membership)}</p>
          <p>${member.description}</p>
        `;

        container.appendChild(card);
      });
    } catch (err) {
      console.error("Error loading members:", err);
      if (container) container.innerHTML = "<p>Unable to load members.</p>";
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

  loadMembers();

  // =========================
  // Testimonials Carousel
  // =========================
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

  if (testimonials.length > 0) {
    showTestimonial(current);

    if (prev && next) {
      prev.addEventListener("click", () => {
        current = (current === 0) ? testimonials.length - 1 : current - 1;
        showTestimonial(current);
      });

      next.addEventListener("click", () => {
        current = (current === testimonials.length - 1) ? 0 : current + 1;
        showTestimonial(current);
      });
    }

    // Auto-slide every 6 seconds
    setInterval(() => {
      current = (current === testimonials.length - 1) ? 0 : current + 1;
      showTestimonial(current);
    }, 6000);
  }
});
