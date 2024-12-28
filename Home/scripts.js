document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault(); // منع الإرسال الافتراضي

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert(`Thank you, ${name}! Your message has been sent successfully.`);
    } else {
        alert('Please fill in all fields before submitting.');
    }
});
