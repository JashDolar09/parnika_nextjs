(() => {
    // ============================================
    // SCROLL (single rAF handler for smoothness)
    // ============================================
    const scrollProgress = document.querySelector('.scroll-progress');
    const navbar = document.getElementById('navbar');
    const collectionHero = document.getElementById('collectionHero');
    const heroBackground = document.querySelector('.hero-background');

    function updateScrollProgress() {
        if (!scrollProgress) return;
        const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = windowHeight > 0 ? (window.scrollY / windowHeight) * 100 : 0;
        scrollProgress.style.width = scrolled + '%';
    }

    function updateNavbar() {
        if (!navbar) return;
        if (window.pageYOffset > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }

    function updateParallax() {
        if (!collectionHero || !heroBackground) return;
        const scrolled = window.pageYOffset;
        const parallaxSpeed = 0.5;
        if (scrolled < window.innerHeight) {
            heroBackground.style.transform = `translateY(${scrolled * parallaxSpeed}px) scale(1.1)`;
        }
    }

    let ticking = false;
    function onScrollOrResize() {
        if (ticking) return;
        ticking = true;
        window.requestAnimationFrame(() => {
            updateScrollProgress();
            updateNavbar();
            updateParallax();
            ticking = false;
        });
    }

    window.addEventListener('scroll', onScrollOrResize, { passive: true });
    window.addEventListener('resize', onScrollOrResize, { passive: true });
    onScrollOrResize();

    // ============================================
    // INTERSECTION OBSERVER FOR REVEAL ANIMATIONS
    // ============================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const revealObserver = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                obs.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const categoryCards = document.querySelectorAll('.category-card');
    categoryCards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.1}s`;
        revealObserver.observe(card);
    });

    const fabricItems = document.querySelectorAll('.fabric-item');
    fabricItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.2}s`;
        revealObserver.observe(item);
    });

    const ctaTitle = document.querySelector('.cta-title');
    const ctaText = document.querySelector('.cta-text');
    const ctaButtons = document.querySelector('.cta-buttons');
    const sectionTitle = document.querySelector('.fabric-quality h2');

    if (ctaTitle) revealObserver.observe(ctaTitle);
    if (ctaText) revealObserver.observe(ctaText);
    if (ctaButtons) revealObserver.observe(ctaButtons);
    if (sectionTitle) revealObserver.observe(sectionTitle);

    // ============================================
    // HERO TITLE ANIMATION (runs even on lazy load)
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
    // SMOOTH SCROLL FOR ANCHOR LINKS
    // ============================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (!href) return;
            const target = document.querySelector(href);
            if (!target) return;
            e.preventDefault();
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({ top: offsetTop, behavior: 'smooth' });
        });
    });

    // ============================================
    // FORM POPUP OPEN/CLOSE
    // ============================================
    const popupWrapper = document.getElementById("popupFormWrapper");
    const closePopup = document.querySelector(".popup-close");
    const popupForm = document.getElementById('popupForm');

    if (popupWrapper) {
        document.querySelectorAll(".btn-whatsapp-card").forEach(btn => {
            btn.addEventListener("click", (e) => {
                e.preventDefault(); // stop WhatsApp redirect
                popupWrapper.style.display = "flex"; // show popup
            });
        });

        if (closePopup) {
            closePopup.addEventListener("click", () => {
                popupWrapper.style.display = "none";
            });
        }

        popupWrapper.addEventListener("click", (e) => {
            if (e.target === popupWrapper) {
                popupWrapper.style.display = "none";
            }
        });
    }

    // ============================================
    // WHATSAPP REDIRECT FROM POPUP FORM
    // ============================================
    if (popupForm && popupWrapper) {
        popupForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const nameEl = document.getElementById('popupName');
            const emailEl = document.getElementById('popupEmail');
            const interestSelect = document.getElementById('popupInterest');
            const messageEl = document.getElementById('popupMessage');

            if (!nameEl || !emailEl || !interestSelect || !messageEl) return;

            const name = nameEl.value;
            const email = emailEl.value;
            const interestText = interestSelect.options[interestSelect.selectedIndex]?.text || '';
            const message = messageEl.value;

            const phoneNumber = '917590048900';
            const whatsappMessage =
                `*New Contact Form Submission*%0A%0A` +
                `👤 *Name:* ${name}%0A` +
                `📧 *Email/Phone:* ${email}%0A` +
                `🎯 *Interest:* ${interestText}%0A` +
                `💬 *Message:*%0A${message}%0A%0A` +
                `_Sent from Parnika Website_`;

            const whatsappURL = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;
            window.open(whatsappURL, '_blank');

            setTimeout(() => {
                popupForm.reset();
                popupWrapper.style.display = 'none';
                alert('Redirecting to WhatsApp. Click send when ready!');
            }, 500);
        });
    }
})();