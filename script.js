// JavaScript for Add to Cart button
const addToCartButtons = document.querySelectorAll('.add-to-cart');

addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        alert('Product added to cart!');
    });
});

// Smooth Scroll to Section
const ctaButton = document.querySelector('.cta-button');
ctaButton.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('#products').scrollIntoView({
        behavior: 'smooth'
    });
});

// Contact Form Submission (Optional: for demonstration)
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    alert(`Message sent by ${name} (${email}): ${message}`);
    contactForm.reset();
});
