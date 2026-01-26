document.addEventListener("DOMContentLoaded", function () {
    // Button auto-effect observer
    const buttons = document.querySelectorAll(".btn-secondary");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const btn = entry.target;
                btn.classList.add("auto-effect");
                setTimeout(() => {
                    btn.classList.remove("auto-effect");
                }, 1500);
                observer.unobserve(btn);
            }
        });
    }, {
        threshold: 0.5
    });

    buttons.forEach(btn => observer.observe(btn));

    // ============================================
    // HAMBURGER MENU TOGGLE
    // ============================================
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function(e) {
            e.stopPropagation();
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // ============================================
    // MOBILE DROPDOWN TOGGLE
    // ============================================
    const dropdowns = document.querySelectorAll(".dropdown");

    dropdowns.forEach(dropdown => {
        const link = dropdown.querySelector(".explore-link");

        if (link) {
            link.addEventListener("click", function(e) {
                if (window.innerWidth <= 768) {
                    e.preventDefault();
                    e.stopPropagation();
                    dropdown.classList.toggle("active");
                }
            });
        }
    });

    // ============================================
    // CLOSE MENU ON NAV LINK CLICK
    // ============================================
    const navLinks = document.querySelectorAll('.nav-menu a:not(.explore-link)');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (hamburger && navMenu) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    });

    // ============================================
    // CLOSE MENU WHEN CLICKING OUTSIDE
    // ============================================
    document.addEventListener('click', function(e) {
        if (window.innerWidth <= 768 && navMenu && hamburger) {
            const isClickInsideNav = navMenu.contains(e.target);
            const isClickOnHamburger = hamburger.contains(e.target);
            
            if (!isClickInsideNav && !isClickOnHamburger && navMenu.classList.contains('active')) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                
                dropdowns.forEach(dropdown => {
                    dropdown.classList.remove('active');
                });
            }
        }
    });
});
