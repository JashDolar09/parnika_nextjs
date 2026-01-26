// ================================================
// Delay Animations Until Page Fully Loaded
// ================================================

function initPageLoaded() {
    document.body.classList.add("page-loaded");
}

if (document.readyState === "complete" || document.readyState === "interactive") {
    initPageLoaded();
} else {
    window.addEventListener("load", initPageLoaded);
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
// PARALLAX BANNER EFFECT
// ============================================
const aboutBanner = document.getElementById('aboutBanner');
const bannerBackground = document.querySelector('.banner-background');

window.addEventListener('scroll', () => {
    if (aboutBanner && bannerBackground) {
        const scrolled = window.pageYOffset;
        const parallaxSpeed = 0.5;

        if (scrolled < window.innerHeight) {
            bannerBackground.style.transform = `translateY(${scrolled * parallaxSpeed}px) scale(1.1)`;
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

// Observe all animated elements
const animatedElements = document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right, .story-p, .excellence-item, .value-card, .stat-item, .mission-card, .vision-card');
animatedElements.forEach((element, index) => {
    element.style.animationDelay = `${index * 0.1}s`;
    observer.observe(element);
});

// ============================================
// STAGGERED TEXT ANIMATION FOR STORY PARAGRAPHS
// ============================================
const storyParagraphs = document.querySelectorAll('.story-p');
storyParagraphs.forEach((para, index) => {
    const paraObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateX(0)';
                }, index * 200);
                paraObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    paraObserver.observe(para);
});

// ============================================
// EXCELLENCE ITEMS ANIMATION
// ============================================
const excellenceItems = document.querySelectorAll('.excellence-item');
excellenceItems.forEach((item, index) => {
    const itemObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateX(0)';
                }, index * 150);
                itemObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    itemObserver.observe(item);
});

// ============================================
// COUNTER ANIMATION FOR STATS
// ============================================
const statNumbers = document.querySelectorAll('.stat-number');

const animateCounter = (element) => {
    const target = parseInt(element.getAttribute('data-target'));
    const duration = 2000; // 2 seconds
    const increment = target / (duration / 16); // 60fps
    let current = 0;

    const updateCounter = () => {
        current += increment;
        if (current < target) {
            element.textContent = Math.floor(current);
            requestAnimationFrame(updateCounter);
        } else {
            const suffix = element.getAttribute('data-suffix') || "";
            element.textContent = target.toLocaleString() + suffix;
        }

    };

    updateCounter();
};

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumber = entry.target.querySelector('.stat-number');
            if (statNumber && !statNumber.classList.contains('counted')) {
                statNumber.classList.add('counted');
                animateCounter(statNumber);
            }
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

statNumbers.forEach(stat => {
    const statItem = stat.closest('.stat-item');
    if (statItem) {
        statsObserver.observe(statItem);
    }
});

// ============================================
// LOCATION DOTS PULSE ANIMATION
// ============================================
const locationDots = document.querySelectorAll('.dot');
locationDots.forEach((dot, index) => {
    dot.style.animationDelay = `${index * 0.4}s`;
});

// ============================================
// MISSION & VISION CARDS ANIMATION
// ============================================
const missionCards = document.querySelectorAll('.mission-card, .vision-card');
missionCards.forEach((card, index) => {
    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 200);
                cardObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    cardObserver.observe(card);
});

// ============================================
// VALUE CARDS STAGGERED ANIMATION
// ============================================
const valueCards = document.querySelectorAll('.value-card');
valueCards.forEach((card, index) => {
    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 150);
                cardObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    cardObserver.observe(card);
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
// ============================================
// PAGE TRANSITION FADE (REMOVED: can cause white screen)
// ============================================


// ============================================
// BANNER TITLE ANIMATION
// ============================================
const bannerTitle = document.querySelector('.banner-title');
const bannerSubtitle = document.querySelector('.banner-subtitle');

if (bannerTitle) {
    setTimeout(() => {
        bannerTitle.style.opacity = '1';
        bannerTitle.style.transform = 'translateY(0)';
    }, 300);
}

if (bannerSubtitle) {
    setTimeout(() => {
        bannerSubtitle.style.opacity = '1';
        bannerSubtitle.style.transform = 'translateY(0)';
    }, 600);
}

// ============================================
// HOVER EFFECTS FOR CARDS
// ============================================
const cards = document.querySelectorAll('.excellence-item, .value-card, .mission-card, .vision-card');
cards.forEach(card => {
    card.addEventListener('mouseenter', function () {
        this.style.transition = 'all 0.3s ease';
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



