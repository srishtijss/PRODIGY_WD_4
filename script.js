// Add event listener to navigation menu
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach((link) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = e.target.getAttribute('href');
            document.querySelector(target).scrollIntoView({ behavior: 'mooth' });
        });
    });
});

// Add event listener to contact form
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.querySelector('#contact form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(contactForm);
        // Send form data to server or perform other actions
        console.log(formData);
    });
});