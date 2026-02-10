'use client';

import { useEffect } from 'react';

export default function AboutClient() {
    useEffect(() => {
        const handleScroll = () => {
            // Scroll Progress Bar
            const scrollProgress = document.querySelector('.scroll-progress') as HTMLElement;
            if (scrollProgress) {
                const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
                const scrolled = (window.scrollY / windowHeight) * 100;
                scrollProgress.style.width = scrolled + '%';
            }

            // Navbar Scrolled Effect
            const navbar = document.getElementById('navbar');
            if (navbar) {
                if (window.scrollY > 100) {
                    navbar.classList.add('scrolled');
                } else {
                    navbar.classList.remove('scrolled');
                }
            }

            // Banner Parallax
            const bannerBackground = document.querySelector('.banner-background') as HTMLElement;
            if (bannerBackground) {
                const scrolled = window.scrollY;
                if (scrolled < 800) {
                    bannerBackground.style.transform = `translateY(${scrolled * 0.5}px) scale(1.1)`;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        // Initial check
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return null;
}
