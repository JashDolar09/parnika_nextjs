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
});
