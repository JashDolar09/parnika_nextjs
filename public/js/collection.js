// ============================================
// REFACTORED COLLECTION.JS FOR NEXT.JS
// ============================================

function initCollection() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Force visibility
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'none';
                revealObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe everything
    const selectors = [
        '.hero-title', '.hero-subtitle', '.category-card', 
        '.section-title', '.cta-title', '.cta-text', 
        '.cta-buttons', '.fabric-item'
    ];
    
    document.querySelectorAll(selectors.join(', ')).forEach((el, index) => {
        el.style.transitionDelay = `${(index % 3) * 0.1}s`;
        revealObserver.observe(el);
    });

    // Staggered reveal for initial load visibility
    setTimeout(() => {
        document.querySelectorAll('.hero-title, .hero-subtitle').forEach(el => {
            el.classList.add('visible');
        });
    }, 200);
}

// Run initialization
if (document.readyState === 'loading') {
    window.addEventListener('DOMContentLoaded', initCollection);
} else {
    initCollection();
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