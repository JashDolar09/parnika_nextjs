// function to initialize all scripts
function initFranchiseScripts() {
    // --- FAQ Accordion Logic ---
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        // Remove existing listener to prevent duplicates if function runs twice
        const newQuestion = question.cloneNode(true);
        question.parentNode.replaceChild(newQuestion, question);
        
        newQuestion.addEventListener('click', () => {
            // Close other open items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            // Toggle current item
            item.classList.toggle('active');
        });
    });

    // --- Modal Logic ---
    const modal = document.getElementById('franchiseModal');
    const closeBtn = document.querySelector('.close-btn');
    const modalImg = document.getElementById('modalImg');
    const modelButtons = document.querySelectorAll('.view-model-btn');

    // Event Listeners for Buttons
    modelButtons.forEach(btn => {
        // Simple clone to clear listeners
        const newBtn = btn.cloneNode(true);
        btn.parentNode.replaceChild(newBtn, btn);

        newBtn.addEventListener('click', () => {
            const model = newBtn.getAttribute('data-model');

            let imageSrc = '';
            // Converted paths from 'assets/images/...' to '/images/...' for Next.js public folder mapping
            if (model === 'bronze') imageSrc = '/images/product/frenchise/broze-model.jpg';
            else if (model === 'silver') imageSrc = '/images/product/frenchise/silve-model.jpg';
            else if (model === 'gold') imageSrc = '/images/product/frenchise/gold-model.jpg';
            else if (model === 'platinum') imageSrc = '/images/product/frenchise/platinum-model.jpg';
            else imageSrc = 'https://placehold.co/800x1200?text=Model+Details';

            if(modalImg && modal) {
                modalImg.src = imageSrc;
                modal.classList.add('modal-active');
                document.body.style.overflow = 'hidden';

                // Error handling for missing images
                modalImg.onerror = function () {
                    this.src = 'https://placehold.co/800x1200?text=Image+Not+Found';
                };
            }
        });
    });

    // Close Modal
    if (closeBtn && modal) {
        const newCloseBtn = closeBtn.cloneNode(true);
        closeBtn.parentNode.replaceChild(newCloseBtn, closeBtn);
        
        newCloseBtn.addEventListener('click', () => {
            modal.classList.remove('modal-active');
            document.body.style.overflow = 'auto';
        });
    }

    // Close on click outside
    if (modal) {
        // Window listener is fine to add multiple times? No, let's target window carefully or just leave as is. 
        // Actually for window, it's safer to just add it once or not worry about it as page reload clears it.
        window.onclick = (e) => {
            if (e.target === modal) {
                modal.classList.remove('modal-active');
                document.body.style.overflow = 'auto';
            }
        };
    }

    // --- On-Scroll Animations (Progressive Enhancement) ---
    const animatedSelectors = [
        '.banner-title',
        '.banner-subtitle',
        '.section-title',
        '.intro-text',
        '.model-card',
        '.why-list li',
        '.presence-item',
        '.faq-item'
    ];

    const elementsToAnimate = document.querySelectorAll(animatedSelectors.join(', '));

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Reveal element
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    elementsToAnimate.forEach(el => {
        // HIDE only if JS is running
        el.style.cssText = "opacity: 0 !important; transform: translateY(30px) !important; transition: opacity 0.8s ease-out, transform 0.8s ease-out;";
        observer.observe(el);
    });
}

// Run immediately if DOM is ready, otherwise wait
if (document.readyState === "complete" || document.readyState === "interactive") {
    initFranchiseScripts();
} else {
    document.addEventListener('DOMContentLoaded', initFranchiseScripts);
}
