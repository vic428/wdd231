document.addEventListener("DOMContentLoaded", () => {
  fetch('./data/faq.json') 
    .then(response => {
      if (!response.ok) {
        throw new Error("Failed to load FAQ data");
      }
      return response.json();
    })
    .then(data => {
      const container = document.getElementById("questions");
      container.innerHTML = ""; // clear previous content

      data.forEach(item => {
        // Create question wrapper
        const faqItem = document.createElement("div");
        faqItem.classList.add("faq-item");

        // Question text
        const question = document.createElement("h3");
        question.textContent = item.question;
        question.classList.add("faq-question");

        // Answer text
        const answer = document.createElement("p");
        answer.textContent = item.answer;
        answer.classList.add("faq-answer");

        // Add toggle on click
        question.addEventListener("click", () => {
          answer.classList.toggle("visible");
          question.classList.toggle("active");
        });

        // Append to wrapper
        faqItem.appendChild(question);
        faqItem.appendChild(answer);
        container.appendChild(faqItem);
      });
    })
    .catch(error => {
      console.error("Error loading FAQ data:", error);
    });
});