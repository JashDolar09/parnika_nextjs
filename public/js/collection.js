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
const collectionHero = document.getElementById('collectionHero');
const heroBackground = document.querySelector('.hero-background');

window.addEventListener('scroll', () => {
    if (collectionHero && heroBackground) {
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

// Observe fabric items
const fabricItems = document.querySelectorAll('.fabric-item');
fabricItems.forEach((item, index) => {
    item.style.animationDelay = `${index * 0.2}s`;
    observer.observe(item);
});

// Observe CTA elements
const ctaTitle = document.querySelector('.cta-title');
const ctaText = document.querySelector('.cta-text');
const ctaButtons = document.querySelector('.cta-buttons');

if (ctaTitle) observer.observe(ctaTitle);
if (ctaText) observer.observe(ctaText);
if (ctaButtons) observer.observe(ctaButtons);

// Observe section title
const sectionTitle = document.querySelector('.fabric-quality h2');
if (sectionTitle) observer.observe(sectionTitle);

// ============================================
// CATEGORY CARD HOVER EFFECTS
// ============================================
categoryCards.forEach(card => {
    const image = card.querySelector('.category-img');
    const title = card.querySelector('.category-title');
    const overlay = card.querySelector('.category-overlay');
    const whatsappBtn = card.querySelector('.btn-whatsapp-card');

    card.addEventListener('mouseenter', () => {
        if (image) {
            image.style.transform = 'scale(1.1)';
        }
        if (title) {
            title.style.transform = 'translateX(5px)';
            title.style.transition = 'transform 0.3s ease';
        }
        if (overlay) {
            overlay.style.opacity = '1';
            overlay.style.transform = 'translateY(0)';
        }
        if (whatsappBtn) {
            setTimeout(() => {
                whatsappBtn.style.transform = 'translateY(0)';
            }, 100);
        }
    });

    card.addEventListener('mouseleave', () => {
        if (image) {
            image.style.transform = 'scale(1)';
        }
        if (title) {
            title.style.transform = 'translateX(0)';
        }
        if (overlay) {
            overlay.style.opacity = '0';
            overlay.style.transform = 'translateY(20px)';
        }
        if (whatsappBtn) {
            whatsappBtn.style.transform = 'translateY(10px)';
        }
    });
});

// ============================================
// FABRIC ICONS BOUNCE ANIMATION
// ============================================
fabricItems.forEach(item => {
    const icon = item.querySelector('.fabric-icon');

    item.addEventListener('mouseenter', () => {
        if (icon) {
            icon.style.animation = 'bounceIn 0.6s ease';
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
const lazyImages = document.querySelectorAll('.category-img');
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
    const allAnimatedElements = document.querySelectorAll('.category-card, .fabric-item, .fade-in-up, .fade-up');
    allAnimatedElements.forEach(element => {
        observer.observe(element);
    });
});


// =======================
// Form Popup Open JS
// =======================

const popupWrapper = document.getElementById("popupFormWrapper");
const closePopup = document.querySelector(".popup-close");

// Open popup when clicking WhatsApp button
document.querySelectorAll(".btn-whatsapp-card").forEach(btn => {
    btn.addEventListener("click", (e) => {
        e.preventDefault(); // stop WhatsApp redirect
        popupWrapper.style.display = "flex"; // show popup
    });
});

// Close popup on close button click
closePopup.addEventListener("click", () => {
    popupWrapper.style.display = "none";
});

// Close popup if click outside the form content
popupWrapper.addEventListener("click", (e) => {
    if (e.target === popupWrapper) {
        popupWrapper.style.display = "none";
    }
});

// =======================
// WhatsApp Redirect from Popup Form
// =======================

const popupForm = document.getElementById('popupForm');

popupForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // Collect field values
    const name = document.getElementById('popupName').value;
    const email = document.getElementById('popupEmail').value;
    const interestSelect = document.getElementById('popupInterest');
    const interestText = interestSelect.options[interestSelect.selectedIndex].text;
    const message = document.getElementById('popupMessage').value;

    // WhatsApp phone number
    const phoneNumber = '917590048900';

    // Formatted message
    const whatsappMessage = `*New Contact Form Submission*%0A%0A` +
        `👤 *Name:* ${name}%0A` +
        `📧 *Email/Phone:* ${email}%0A` +
        `🎯 *Interest:* ${interestText}%0A` +
        `💬 *Message:*%0A${message}%0A%0A` +
        `_Sent from Parnika Website_`;

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;

    // Open WhatsApp
    window.open(whatsappURL, '_blank');

    // Close popup and reset form
    setTimeout(() => {
        popupForm.reset();
        popupWrapper.style.display = 'none';
        alert('Redirecting to WhatsApp. Click send when ready!');
    }, 500);
});