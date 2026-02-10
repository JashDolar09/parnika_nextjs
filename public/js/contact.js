// ============================================
// REFACTORED CONTACT.JS FOR NEXT.JS
// ============================================

function initContact() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm && !contactForm.dataset.initialized) {
        contactForm.dataset.initialized = "true";
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const interest = document.getElementById('interest').value;
            const message = document.getElementById('message').value;
            const interestSelect = document.getElementById('interest');
            const interestText = interestSelect.options[interestSelect.selectedIndex].text;
            const phoneNumber = '917590048900';

            const whatsappMessage = `*New Contact Form Submission*%0A%0A` +
                `👤 *Name:* ${name}%0A` +
                `📧 *Email/Phone:* ${email}%0A` +
                `🎯 *Interest:* ${interestText}%0A` +
                `💬 *Message:*%0A${message}%0A%0A` +
                `_Sent from Parnika Website_`;

            const whatsappURL = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;
            window.open(whatsappURL, '_blank');
        });
    }

    // Observer logic removed to be handled by React
    if (contactForm && !contactForm.dataset.initialized) {
        // Form submission logic kept for now, but will be moved to React
    }

    // Staggered reveal replacement - simple safe reveal if JS runs
    setTimeout(() => {
        document.querySelectorAll('.contact-item, .form-group, .section-title, .map-wrapper, .business-hours, .social-section, .contact-form-wrapper, .contact-info').forEach(el => {
            el.classList.add('visible');
            el.style.opacity = '1';
            el.style.transform = 'none';
        });
    }, 100);
}

// Run initialization
if (document.readyState === 'loading') {
    window.addEventListener('DOMContentLoaded', initContact);
} else {
    initContact();
}

// Scroll effects
window.addEventListener('scroll', () => {
    const scrollProgress = document.querySelector('.scroll-progress');
    if (scrollProgress) {
        const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = (window.scrollY / windowHeight) * 100;
        scrollProgress.style.width = scrolled + '%';
    }
    
    const navbar = document.getElementById('navbar');
    if (navbar) {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
});