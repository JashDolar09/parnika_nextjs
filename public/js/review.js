// ============================================
// REFACTORED REVIEW.JS FOR NEXT.JS
// ============================================

function typewriterEffect(element) {
    if (element.classList.contains('typing-started')) return;
    element.classList.add('typing-started');
    
    const originalText = element.getAttribute('data-original-text') || element.textContent;
    if (!element.getAttribute('data-original-text')) {
        element.setAttribute('data-original-text', originalText);
    }
    
    element.textContent = '';
    element.style.opacity = '1';

    let index = 0;
    const speed = 15;

    function type() {
        if (index < originalText.length) {
            element.textContent += originalText.charAt(index);
            index++;
            setTimeout(type, speed);
        } else {
            element.classList.add('typed');
            element.classList.remove('typing-started');
        }
    }

    type();
}

// Global initialization
function initReviews() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe review cards and other elements
    document.querySelectorAll('.review-card, .feedback-card, .franchise-card, .section-title, .cta-title, .cta-text, .cta-buttons').forEach((el, index) => {
        el.style.transitionDelay = `${(index % 3) * 0.1}s`;
        revealObserver.observe(el);
    });

    // Typewriter observer
    const textObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                typewriterEffect(entry.target);
                textObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    document.querySelectorAll('.review-text, .feedback-text, .franchise-text').forEach(text => {
        textObserver.observe(text);
    });
    
    // Fallback: If elements are already visible or should be shown
    setTimeout(() => {
        document.querySelectorAll('.review-card, .feedback-card, .franchise-card').forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight) {
                el.classList.add('visible');
            }
        });
    }, 500);
}

// Run initialization
if (document.readyState === 'loading') {
    window.addEventListener('DOMContentLoaded', initReviews);
} else {
    initReviews();
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
