'use client';

import { useEffect } from 'react';

export function GlobalAnimations() {
    useEffect(() => {
        // Comprehensive list of selectors from all pages
        const selectors = [
            '.fade-in-up', '.fade-up', '.fade-in-left', '.fade-in-right',
            '.pop-up', '.category-card', '.feature-item', '.testimonial-card',
            '.section-title', '.cta-title', '.cta-text', '.cta-buttons',
            '.stat-item', '.zoom-in', '.bounce-in', '.slide-from-bottom',
            '.last-image', '.hero-title', '.hero-subtitle', '.hero-content',
            '.banner-title', '.banner-subtitle', '.contact-item', '.form-group',
            '.contact-form-wrapper', '.contact-info', '.map-wrapper', '.business-hours', '.social-section'
        ];

        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    (entry.target as HTMLElement).style.opacity = '1';
                    (entry.target as HTMLElement).style.transform = 'none';
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Initial check and observe
        const observeElements = () => {
            selectors.forEach(selector => {
                document.querySelectorAll(selector).forEach((el, index) => {
                    // Skip if already observed/visible to avoid redundant processing
                    if (el.classList.contains('visible')) return;

                    // Stagger logic (simplified)
                    if (getComputedStyle(el).transitionDelay === '0s') {
                        (el as HTMLElement).style.transitionDelay = `${(index % 5) * 0.1}s`;
                    }

                    observer.observe(el);
                });
            });
        };

        // observe immediately
        observeElements();

        // Use MutationObserver directly inside the effect to catch route changes/dynamic content
        const mutationObserver = new MutationObserver((mutations) => {
            let shouldScan = false;
            mutations.forEach(m => {
                if (m.addedNodes.length > 0) shouldScan = true;
            });
            if (shouldScan) observeElements();
        });

        mutationObserver.observe(document.body, { childList: true, subtree: true });

        // Safety fallback: Force reveal after 1s
        const failsafeTimeout = setTimeout(() => {
            document.querySelectorAll(selectors.join(', ')).forEach(el => {
                if (!el.classList.contains('visible')) {
                    el.classList.add('visible');
                    (el as HTMLElement).style.opacity = '1';
                    (el as HTMLElement).style.transform = 'none';
                }
            });
        }, 1000);

        return () => {
            observer.disconnect();
            mutationObserver.disconnect();
            clearTimeout(failsafeTimeout);
        };
    }, []); // Run once on mount (and persists because it observes body mutations)

    return null;
}

export function ContactFormLogic() {
    useEffect(() => {
        const contactForm = document.getElementById('contactForm');

        const handleSubmit = (e: Event) => {
            e.preventDefault();
            const name = (document.getElementById('name') as HTMLInputElement)?.value;
            const email = (document.getElementById('email') as HTMLInputElement)?.value;
            const interestSelect = document.getElementById('interest') as HTMLSelectElement;
            const message = (document.getElementById('message') as HTMLTextAreaElement)?.value;

            const interestText = interestSelect?.options[interestSelect.selectedIndex]?.text || '';
            const phoneNumber = '917590048900';

            const whatsappMessage = `*New Contact Form Submission*%0A%0A` +
                `👤 *Name:* ${name}%0A` +
                `📧 *Email/Phone:* ${email}%0A` +
                `🎯 *Interest:* ${interestText}%0A` +
                `💬 *Message:*%0A${message}%0A%0A` +
                `_Sent from Parnika Website_`;

            const whatsappURL = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;
            window.open(whatsappURL, '_blank');
        };

        if (contactForm) {
            contactForm.addEventListener('submit', handleSubmit);
        }

        return () => {
            if (contactForm) {
                contactForm.removeEventListener('submit', handleSubmit);
            }
        };
    }, []);

    return null;
}
