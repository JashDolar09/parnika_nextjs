// Function to initialize factory page scripts
function initFactoryScripts() {
    
    const observerOptions = {
        threshold: 0.15,
        rootMargin: "0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    // Select elements to animate
    const animatedElements = document.querySelectorAll(
        '.banner-title, .banner-subtitle, .section-title, .factory-heading, .intro-text, .gallery-content, .gallery-image-wrapper, .map-wrapper'
    );

    animatedElements.forEach(el => {
        // Explicitly hide elements for animation only when JS runs
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        
        observer.observe(el);
    });
}

// Run immediately if DOM is ready, otherwise wait
if (document.readyState === "complete" || document.readyState === "interactive") {
    initFactoryScripts();
} else {
    document.addEventListener('DOMContentLoaded', initFactoryScripts);
}
