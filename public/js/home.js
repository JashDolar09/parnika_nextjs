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
// MOBILE MENU - REMOVED (handled in common.js)
// ============================================
// All hamburger menu logic is now in common.js

// ============================================
// PARALLAX HERO EFFECT
// ============================================
const hero = document.getElementById('hero');
const heroBackground = document.querySelector('.hero-background');

window.addEventListener('scroll', () => {
    if (hero && heroBackground) {
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

// Observe category cards
const categoryCards = document.querySelectorAll('.category-card');
categoryCards.forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.1}s`;
    observer.observe(card);
});

// Observe feature items
const featureItems = document.querySelectorAll('.feature-item');
featureItems.forEach((item, index) => {
    item.style.animationDelay = `${index * 0.2}s`;
    observer.observe(item);
});

// Observe testimonial cards
const testimonialCards = document.querySelectorAll('.testimonial-card');
testimonialCards.forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.2}s`;
    observer.observe(card);
});

// Observe CTA elements
const ctaTitle = document.querySelector('.cta-title');
const ctaButtons = document.querySelector('.cta-buttons');
const exploreBtn = document.querySelector('.explore-btn');

if (ctaTitle) observer.observe(ctaTitle);
if (ctaButtons) observer.observe(ctaButtons);
if (exploreBtn) observer.observe(exploreBtn);

// ============================================
// LINE REVEAL ANIMATION FOR ABOUT TEXT
// ============================================
const aboutText = document.querySelector('.about-text');
if (aboutText) {
    const lineObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const text = entry.target;
                const words = text.textContent.split(' ');
                text.innerHTML = '';

                words.forEach((word, index) => {
                    const span = document.createElement('span');
                    span.textContent = word + ' ';
                    span.style.opacity = '0';
                    span.style.transition = `opacity 0.8s ease`;
                    text.appendChild(span);

                    setTimeout(() => {
                        span.style.opacity = '1';
                    }, index * 10);
                });

                lineObserver.unobserve(text);
            }
        });
    }, { threshold: 0.3 });

    lineObserver.observe(aboutText);
}

// ============================================
// TESTIMONIAL CARD ANIMATIONS
// ============================================
testimonialCards.forEach((card, index) => {
    card.addEventListener('mouseenter', () => {
        if (index % 2 === 0) {
            card.style.transform = 'translateX(10px) translateY(-10px)';
        } else {
            card.style.transform = 'translateX(-10px) translateY(-10px)';
        }
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(-10px)';
    });
});

// ============================================
// STAR SPARKLE EFFECT ON HOVER
// ============================================
const starElements = document.querySelectorAll('.testimonial-stars');
starElements.forEach(stars => {
    stars.addEventListener('mouseenter', () => {
        stars.style.animation = 'sparkle 0.5s ease';
    });
});

// Add sparkle animation
const style = document.createElement('style');
style.textContent = `
    @keyframes sparkle {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.2) rotate(5deg); }
    }
`;
document.head.appendChild(style);

// ============================================
// CATEGORY CARD HOVER EFFECTS
// ============================================
categoryCards.forEach(card => {
    const image = card.querySelector('.category-image');
    const title = card.querySelector('.category-title');

    card.addEventListener('mouseenter', () => {
        if (image) {
            image.style.transform = 'scale(1.05)';
        }
        if (title) {
            title.style.transform = 'translateX(10px)';
            title.style.transition = 'transform 0.3s ease';
        }
    });

    card.addEventListener('mouseleave', () => {
        if (image) {
            image.style.transform = 'scale(1)';
        }
        if (title) {
            title.style.transform = 'translateX(0)';
        }
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
// LAZY LOADING IMAGES
// ============================================
const lazyImages = document.querySelectorAll('img');
const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            if (img.dataset.src) {
                img.src = img.dataset.src;
            }
            img.classList.add('loaded');
            imageObserver.unobserve(img);
        }
    });
});

lazyImages.forEach(img => {
    if (!img.classList.contains('loaded')) {
        imageObserver.observe(img);
    }
});

// ============================================
// PAGE TRANSITION FADE
// ============================================
// ============================================
// PAGE TRANSITION FADE (REMOVED: can cause white screen)
// ============================================


// ============================================
// CURSOR HOVER GLOW EFFECT
// ============================================
const clickableElements = document.querySelectorAll('a, button, .category-card, .testimonial-card, .feature-item');
clickableElements.forEach(element => {
    element.addEventListener('mouseenter', function () {
        this.style.transition = 'all 0.3s ease';
    });
});

// ============================================
// BUTTON RIPPLE EFFECT
// ============================================
const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
    button.addEventListener('click', function (e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');

        this.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Add ripple styles
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    .btn {
        position: relative;
        overflow: hidden;
    }
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
    }
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleStyle);

// ============================================
// FADE IN ANIMATIONS ON SCROLL
// ============================================
const fadeElements = document.querySelectorAll('.fade-in-up, .fade-from-left, .fade-from-right');
fadeElements.forEach(element => {
    observer.observe(element);

    element.addEventListener('animationend', () => {
        element.style.opacity = '1';
    });
});

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
    const allAnimatedElements = document.querySelectorAll('.category-card, .feature-item, .testimonial-card, .fade-in-up, .fade-from-left, .fade-from-right');
    allAnimatedElements.forEach(element => {
        observer.observe(element);
    });
});

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
// PREVENT FLASH OF UNSTYLED CONTENT (REMOVED)
// ============================================
window.addEventListener('load', () => {
    // Ensure proper layout calculation
    document.body.style.width = '100%';
    document.body.style.maxWidth = '100vw';
    document.body.style.overflowX = 'hidden';
    
    // Force layout recalculation
    setTimeout(() => {
        window.dispatchEvent(new Event('resize'));
    }, 100);
});

// ============================================
// WINDOW RESIZE HANDLER - PREVENT OVERFLOW
// ============================================
function handleResize() {
    // Ensure body doesn't overflow
    document.body.style.width = '100%';
    document.body.style.maxWidth = '100vw';
    document.body.style.overflowX = 'hidden';
    
    // Ensure all containers stay within bounds
    const containers = document.querySelectorAll('.container, .hero-container, .nav-container');
    containers.forEach(container => {
        container.style.maxWidth = '100%';
        container.style.boxSizing = 'border-box';
    });
}

// Call on resize
window.addEventListener('resize', throttle(handleResize, 250));

// Call immediately
handleResize();