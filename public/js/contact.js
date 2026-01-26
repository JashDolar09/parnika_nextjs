// ============================================
// FORM SUBMISSION TO WHATSAPP
// ============================================
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const interest = document.getElementById('interest').value;
        const message = document.getElementById('message').value;

        // Get the selected interest text (not just value)
        const interestSelect = document.getElementById('interest');
        const interestText = interestSelect.options[interestSelect.selectedIndex].text;

        // Your company WhatsApp number (remove spaces and special characters)
        const phoneNumber = '917590048900'; // Format: country code + number (no + or spaces)

        // Create formatted WhatsApp message
        const whatsappMessage = `*New Contact Form Submission*%0A%0A` +
            `👤 *Name:* ${name}%0A` +
            `📧 *Email/Phone:* ${email}%0A` +
            `🎯 *Interest:* ${interestText}%0A` +
            `💬 *Message:*%0A${message}%0A%0A` +
            `_Sent from Parnika Website_`;

        // Create WhatsApp URL
        // For mobile devices, it will open WhatsApp app
        // For desktop, it will open WhatsApp Web
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;

        // Open WhatsApp in new tab
        window.open(whatsappURL, '_blank');

        // Optional: Reset form after submission
        setTimeout(() => {
            contactForm.reset();
            // Show success message (optional)
            showSuccessMessage();
        }, 500);
    });
}

// ============================================
// SUCCESS MESSAGE (OPTIONAL)
// ============================================
function showSuccessMessage() {
    // Create success message element
    const successMsg = document.createElement('div');
    successMsg.className = 'success-message';
    successMsg.innerHTML = `
        <i class="fas fa-check-circle"></i>
        <p>Redirecting to WhatsApp... Click Send when ready!</p>
    `;

    // Add styles
    successMsg.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: #25D366;
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        box-shadow: 0 5px 20px rgba(37, 211, 102, 0.3);
        display: flex;
        align-items: center;
        gap: 10px;
        z-index: 10000;
        animation: slideInRight 0.5s ease;
    `;

    document.body.appendChild(successMsg);

    // Remove message after 4 seconds
    setTimeout(() => {
        successMsg.style.animation = 'slideOutRight 0.5s ease';
        setTimeout(() => {
            document.body.removeChild(successMsg);
        }, 500);
    }, 4000);
}

// Add animations for success message
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
    
    .success-message i {
        font-size: 1.5rem;
    }
    
    .success-message p {
        margin: 0;
        font-weight: 600;
    }
`;
document.head.appendChild(style);

// ============================================
// SCROLL PROGRESS BAR
// ============================================
window.addEventListener('scroll', () => {
    const scrollProgress = document.querySelector('.scroll-progress');
    const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (window.scrollY / windowHeight) * 100;
    scrollProgress.style.width = scrolled + '%';
});

// ============================================
// NAVBAR SCROLL EFFECT
// ============================================
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
});

// ============================================
// PARALLAX HERO EFFECT
// ============================================
const contactHero = document.getElementById('contactHero');
const heroBackground = document.querySelector('.hero-background');

window.addEventListener('scroll', () => {
    if (contactHero && heroBackground) {
        const scrolled = window.pageYOffset;
        const parallaxSpeed = 0.5;

        if (scrolled < window.innerHeight) {
            heroBackground.style.transform = `translateY(${scrolled * parallaxSpeed}px) scale(1.1)`;
        }
    }
});

// ============================================
// INTERSECTION OBSERVER FOR SCROLL ANIMATIONS
// ============================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe contact items
const contactItems = document.querySelectorAll('.contact-item');
contactItems.forEach((item, index) => {
    item.style.animationDelay = `${index * 0.15}s`;
    observer.observe(item);
});

// Observe form groups with stagger
const formGroups = document.querySelectorAll('.form-group');
formGroups.forEach((group, index) => {
    group.style.transitionDelay = `${index * 0.1}s`;
    observer.observe(group);
});

// Observe section titles
const sectionTitles = document.querySelectorAll('.section-title');
sectionTitles.forEach(title => {
    observer.observe(title);
});

// Observe map wrapper
const mapWrapper = document.querySelector('.map-wrapper');
if (mapWrapper) {
    observer.observe(mapWrapper);
}

// Observe contact info sections
const contactInfoSections = document.querySelectorAll('.business-hours, .social-section');
contactInfoSections.forEach(section => {
    observer.observe(section);
});

// ============================================
// CONTACT ICONS POP UP ANIMATION
// ============================================
const contactIcons = document.querySelectorAll('.contact-icon');
contactIcons.forEach((icon, index) => {
    icon.addEventListener('mouseenter', () => {
        icon.style.animation = 'popIcon 0.5s ease';
    });
});

// Add pop icon animation
const popStyle = document.createElement('style');
popStyle.textContent = `
    @keyframes popIcon {
        0% {
            transform: scale(1) rotate(0deg);
        }
        50% {
            transform: scale(1.3) rotate(10deg);
        }
        100% {
            transform: scale(1.1) rotate(5deg);
        }
    }
`;
document.head.appendChild(popStyle);

// ============================================
// INPUT BORDER GLOW ON FOCUS
// ============================================
const formInputs = document.querySelectorAll('.form-group input, .form-group select, .form-group textarea');
formInputs.forEach(input => {
    input.addEventListener('focus', function () {
        this.style.borderColor = 'var(--primary-teal)';
        this.style.boxShadow = '0 0 0 3px rgba(47, 87, 85, 0.1)';
        this.style.transform = 'translateY(-2px)';
    });

    input.addEventListener('blur', function () {
        if (!this.value) {
            this.style.borderColor = 'var(--light-bg)';
            this.style.boxShadow = 'none';
            this.style.transform = 'translateY(0)';
        }
    });
});

// ============================================
// SUBMIT BUTTON MICRO-BOUNCE
// ============================================
const submitBtn = document.querySelector('.btn-submit');
if (submitBtn) {
    submitBtn.addEventListener('click', function (e) {
        // Add micro-bounce animation
        this.style.animation = 'microBounce 0.5s ease';

        // Reset animation after it completes
        setTimeout(() => {
            this.style.animation = '';
        }, 500);
    });
}

// ============================================
// MAP PIN DROP ANIMATION
// ============================================
const mapPin = document.querySelector('.map-pin');
if (mapPin) {
    const mapObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                mapPin.style.animation = 'pinDrop 1s ease-out';
                mapObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    const mapContainer = document.querySelector('.map-container');
    if (mapContainer) {
        mapObserver.observe(mapContainer);
    }
}

// ============================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ============================================
// PAGE TRANSITION FADE (REMOVED: can cause white screen in Next.js)
// ============================================
// The opacity logic that used to be here was causing issues because
// the load event might have already fired before this script executed.


// ============================================
// HERO TITLE ANIMATION
// ============================================
const heroTitle = document.querySelector('.hero-title');
const heroSubtitle = document.querySelector('.hero-subtitle');

if (heroTitle) {
    setTimeout(() => {
        heroTitle.style.opacity = '1';
        heroTitle.style.transform = 'translateY(0)';
    }, 300);
}

if (heroSubtitle) {
    setTimeout(() => {
        heroSubtitle.style.opacity = '1';
        heroSubtitle.style.transform = 'translateY(0)';
    }, 600);
}

// ============================================
// WHATSAPP BUTTON PULSE ANIMATION
// ============================================
const whatsappBtn = document.querySelector('.floating-whatsapp');
if (whatsappBtn) {
    setInterval(() => {
        whatsappBtn.style.animation = 'none';
        setTimeout(() => {
            whatsappBtn.style.animation = 'pulse 2s ease-in-out infinite';
        }, 10);
    }, 4000);
}

// ============================================
// PERFORMANCE OPTIMIZATION: THROTTLE SCROLL EVENTS
// ============================================
function throttle(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply throttle to scroll events
const throttledScroll = throttle(() => {
    // Scroll progress and parallax are already handled above
}, 10);

window.addEventListener('scroll', throttledScroll);

// ============================================
// PREVENT FLASH OF UNSTYLED CONTENT (REMOVED: can cause white screen)
// ============================================
// Relying on layout.tsx's failsafe and better CSS instead.


// ============================================
// INITIALIZE ANIMATIONS ON PAGE LOAD
// ============================================
window.addEventListener('DOMContentLoaded', () => {
    // Trigger initial animations
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        setTimeout(() => {
            heroContent.style.opacity = '1';
        }, 200);
    }

    // Initialize contact info animations
    const contactInfo = document.querySelector('.contact-info');
    if (contactInfo) {
        setTimeout(() => {
            contactInfo.style.opacity = '1';
            contactInfo.style.transform = 'translateX(0)';
        }, 400);
    }

    const contactFormWrapper = document.querySelector('.contact-form-wrapper');
    if (contactFormWrapper) {
        setTimeout(() => {
            contactFormWrapper.style.opacity = '1';
            contactFormWrapper.style.transform = 'translateX(0)';
        }, 600);
    }
});