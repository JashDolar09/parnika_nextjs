'use client';

import { useState, useEffect, useRef } from 'react';

const stats = [
    { id: 'years', label: 'Years of Excellence', target: 42, suffix: '+' },
    { id: 'customers', label: 'Customers Trust', target: 150000, suffix: '+' },
    { id: 'countries', label: 'Export To Countries', target: 68, suffix: '+' },
    { id: 'pincodes', label: 'Pincodes Served', target: 10000, suffix: '+' }
];

export default function StatsSection() {
    const [counts, setCounts] = useState(stats.map(() => 0));
    const [hasAnimated, setHasAnimated] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        // 1. Check if animation already ran in this session
        const alreadyRan = typeof window !== 'undefined' && sessionStorage.getItem('statsAnimated');

        if (alreadyRan) {
            // If yes, set final values immediately
            setCounts(stats.map(s => s.target));
            setHasAnimated(true);
            return;
        }

        // 2. If not, set up IntersectionObserver
        const observer = new IntersectionObserver((entries) => {
            const [entry] = entries;
            if (entry.isIntersecting) {
                // Trigger animation
                animateCounts();
                sessionStorage.setItem('statsAnimated', 'true');
                setHasAnimated(true);
                observer.disconnect(); // Run only once
            }
        }, { threshold: 0.3 }); // Trigger when 30% visible

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        // Cleanup
        return () => observer.disconnect();
    }, []);

    const animateCounts = () => {
        const duration = 2000; // 2 seconds
        const frameDuration = 1000 / 60; // 60fps
        const totalFrames = Math.round(duration / frameDuration);
        let frame = 0;

        const timer = setInterval(() => {
            frame++;
            const progress = frame / totalFrames;
            // Ease out expo
            const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

            const newCounts = stats.map(s => Math.round(s.target * ease));
            setCounts(newCounts);

            if (frame >= totalFrames) {
                clearInterval(timer);
                setCounts(stats.map(s => s.target)); // Ensure final exact values
            }
        }, frameDuration);
    };

    return (
        <section className="stats-section" id="statsSection" ref={sectionRef}>
            <div className="container">
                <div className="stats-grid">
                    {stats.map((stat, index) => (
                        <div key={stat.id} className={`stat-item fade-in-up ${hasAnimated ? 'visible' : ''}`}>
                            <div className="stat-number">
                                {counts[index].toLocaleString()}{stat.suffix}
                            </div>
                            <div className="stat-label">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
