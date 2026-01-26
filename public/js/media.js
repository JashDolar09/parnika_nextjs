// Function to initialize media page scripts
function initMediaScripts() {
    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Fade in elements
    const fadeElements = document.querySelectorAll('.fade-in, .fade-in-up, .banner-title, .banner-subtitle');
    
    fadeElements.forEach(el => {
        // Hide elements for animation via inline styles to override CSS !important visibility
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
        observer.observe(el);
    });

    // Special handling for banner elements to appear quickly
    // Removed specific timeout logic as the observer will catch them instantly if visible
    // but we can force a check or just let observer handle it.
    // Let's rely on observer for simplicity and consistence.

    // Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    // Remove previous listener potentially? It's fine to have multiple for scroll usually, but cleaner to manage.
    if (navbar) {
        window.onscroll = () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        };
    }
}

// Run immediately if DOM is ready, otherwise wait
if (document.readyState === "complete" || document.readyState === "interactive") {
    initMediaScripts();
} else {
    document.addEventListener('DOMContentLoaded', initMediaScripts);
}