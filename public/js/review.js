// ====================================================
// Prevent layout shifting for all animated elements
// ====================================================

document.querySelectorAll('.review-card, .feedback-card, .franchise-card, .section-title, .cta-title, .cta-text, .cta-buttons')
    .forEach(el => el.classList.add('anti-shift'));

// ===============================================
// FIX TYPEWRITER TEXT JUMP

// ✔ No more text shaking
// ✔ No layout jump
// ✔ Smooth typing

// ===============================================

function typewriterEffect(element) {
    const originalText = element.textContent;
    const originalHeight = element.offsetHeight + "px";

    element.style.minHeight = originalHeight;   // Prevent height changing
    element.textContent = '';
    element.style.opacity = '1';

    let index = 0;
    const speed = 15;

    function type() {
        if (index < originalText.length) {
            element.textContent += originalText.charAt(index);
            index++;
            setTimeout(type, speed);
        }
    }

    type();
}



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
const testimonialsHero = document.getElementById('testimonialsHero');
const heroBackground = document.querySelector('.hero-background');

window.addEventListener('scroll', () => {
    if (testimonialsHero && heroBackground) {
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

// Observe review cards
const reviewCards = document.querySelectorAll('.review-card, .feedback-card, .franchise-card');
reviewCards.forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.1}s`;
    observer.observe(card);
});

// Observe section titles
const sectionTitles = document.querySelectorAll('.section-title');
sectionTitles.forEach(title => {
    observer.observe(title);
});

// Observe CTA elements
const ctaTitle = document.querySelector('.cta-title');
const ctaText = document.querySelector('.cta-text');
const ctaButtons = document.querySelector('.cta-buttons');

if (ctaTitle) observer.observe(ctaTitle);
if (ctaText) observer.observe(ctaText);
if (ctaButtons) observer.observe(ctaButtons);

// ============================================
// CIRCULAR PHOTOS POP ANIMATION
// ============================================
const reviewPhotos = document.querySelectorAll('.review-photo');
reviewPhotos.forEach(photo => {
    photo.addEventListener('mouseenter', () => {
        photo.style.animation = 'popPhoto 0.5s ease';
    });
});

// Add pop animation
const style = document.createElement('style');
style.textContent = `
    @keyframes popPhoto {
        0% {
            transform: scale(1) rotate(0deg);
        }
        50% {
            transform: scale(1.2) rotate(10deg);
        }
        100% {
            transform: scale(1.15) rotate(5deg);
        }
    }
`;
document.head.appendChild(style);

// ============================================
// TYPEWRITER EFFECT FOR REVIEW TEXT
// ============================================
const reviewTexts = document.querySelectorAll('.review-text, .feedback-text, .franchise-text');

reviewTexts.forEach(text => {
    const textObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('typed')) {
                entry.target.classList.add('typed');
                typewriterEffect(entry.target);
                textObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    textObserver.observe(text);
});

function typewriterEffect(element) {
    const originalText = element.textContent;
    element.textContent = '';
    element.style.opacity = '1';

    let index = 0;
    const speed = 15; // milliseconds per character

    function type() {
        if (index < originalText.length) {
            element.textContent += originalText.charAt(index);
            index++;
            setTimeout(type, speed);
        }
    }

    type();
}

// ============================================
// STARS GLITTER EFFECT (Enhanced)
// ============================================
const starElements = document.querySelectorAll('.review-stars i, .feedback-stars i, .franchise-stars i');
starElements.forEach((star, index) => {
    star.addEventListener('mouseenter', () => {
        star.style.animation = 'glitter 0.5s ease';
    });
});

// ============================================
// CARD HOVER EFFECTS
// ============================================
reviewCards.forEach(card => {
    card.addEventListener('mouseenter', function () {
        this.style.transition = 'all 0.4s ease';
    });
});

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
// PAGE TRANSITION FADE
// ============================================
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.4s ease';

    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

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
// PREVENT FLASH OF UNSTYLED CONTENT - REMOVED FOR NEXT.JS COMPATIBILITY
// ============================================
// document.documentElement.style.opacity = '0';
window.addEventListener('load', () => {
    document.documentElement.style.transition = 'opacity 0.3s';
    document.documentElement.style.opacity = '1';
});

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

    // Initialize all observers
    const allAnimatedElements = document.querySelectorAll('.review-card, .feedback-card, .franchise-card, .fade-in-up, .fade-up');
    allAnimatedElements.forEach(element => {
        observer.observe(element);
    });
});


