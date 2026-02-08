"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    // Function to determine if a link is active
    const isActive = (path: string) => {
        if (path === "/" && pathname === "/") return true;
        if (path !== "/" && (pathname === path || pathname.startsWith(path + "/"))) return true;
        return false;
    };

    // Special check for Explore dropdown parent
    const isExploreActive = ["/our-factory", "/media", "/parnika-franchises"].some(
        (p) => pathname === p || pathname.startsWith(p + "/")
    );

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        if (isDropdownOpen) setIsDropdownOpen(false);
    };

    const handleExploreClick = (e: React.MouseEvent) => {
        if (window.innerWidth <= 768) {
            e.preventDefault();
            setIsDropdownOpen(!isDropdownOpen);
        }
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
        setIsDropdownOpen(false);
    };

    return (
        <nav id="navbar">
            <div className="nav-container">
                <div className="logo-container">
                    <Link href="/" onClick={closeMenu}>
                        <img
                            src="/images/company_logo.jpg"
                            alt="Logo"
                            width={150}
                            height={60}
                            className="logo-img"
                        />
                    </Link>
                </div>
                <ul className={`nav-menu ${isMenuOpen ? "active" : ""}`} id="navMenu">
                    <li>
                        <Link
                            href="/"
                            className={isActive("/") ? "active" : ""}
                            onClick={closeMenu}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/about"
                            className={isActive("/about") ? "active" : ""}
                            onClick={closeMenu}
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/collection"
                            className={isActive("/collection") ? "active" : ""}
                            onClick={closeMenu}
                        >
                            Collection
                        </Link>
                    </li>
                    <li className={`dropdown ${isDropdownOpen ? "active" : ""} ${isExploreActive ? "active" : ""}`}>
                        <a
                            href="#"
                            className={`explore-link ${isExploreActive ? "active" : ""}`}
                            onClick={handleExploreClick}
                        >
                            Explore <i className="fas fa-chevron-down mobile-dropdown-icon"></i>
                        </a>
                        <ul className="dropdown-menu">
                            <li>
                                <Link
                                    href="/our-factory"
                                    className={pathname === "/our-factory" ? "active" : ""}
                                    onClick={closeMenu}
                                >
                                    Our Factory
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/media"
                                    className={pathname === "/media" ? "active" : ""}
                                    onClick={closeMenu}
                                >
                                    Media
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/parnika-franchises"
                                    className={pathname === "/parnika-franchises" ? "active" : ""}
                                    onClick={closeMenu}
                                >
                                    Parnika Franchises
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link
                            href="/testimonials"
                            className={isActive("/testimonials") ? "active" : ""}
                            onClick={closeMenu}
                        >
                            Testimonials
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/contact"
                            className={isActive("/contact") ? "active" : ""}
                            onClick={closeMenu}
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
                <div
                    className={`hamburger ${isMenuOpen ? "active" : ""}`}
                    id="hamburger"
                    onClick={toggleMenu}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </nav>
    );
}
