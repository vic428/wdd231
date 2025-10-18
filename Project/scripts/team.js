
const cards = document.querySelectorAll('.team-card');
const modals = document.querySelectorAll('.modal');
const closes = document.querySelectorAll('.close');

cards.forEach(card => {
    card.addEventListener('click', () => {
      const target = card.getAttribute('data-member');
      document.getElementById(target).style.display = 'block';
    });
});

closes.forEach(btn => {
    btn.addEventListener('click', () => {
      btn.closest('.modal').style.display = 'none';
    });
});

window.addEventListener('click', (e) => {
    modals.forEach(modal => {
      if (e.target === modal) {
        modal.style.display = 'none';
      }
    });
});