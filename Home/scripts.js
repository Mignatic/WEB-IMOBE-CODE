// Search Function
function search() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        const cardText = card.textContent.toLowerCase();
        card.style.display = cardText.includes(input) ? 'block' : 'none';
    });
}

// Form Validation
document.getElementById('contactform').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name && email && message) {
        alert(`Thank you, ${name}! Your message has been sent.`);
        this.reset();
    } else {
        alert('Please fill in all fields.');
    }
});
