// Run only if timestamp input exists
const timestampField = document.getElementById("timestamp");
if (timestampField) {
  timestampField.value = new Date().toISOString();
}

// Modal functions
function openModal(id) {
  document.getElementById(id).style.display = "block";
}

function closeModal(id) {
  document.getElementById(id).style.display = "none";
}

// Close modal if clicking outside
window.onclick = function(event) {
  const modals = document.querySelectorAll(".modal");
  modals.forEach(modal => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
};
