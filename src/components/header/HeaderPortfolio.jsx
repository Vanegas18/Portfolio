import { Code2Icon, Github, Instagram, Linkedin, Twitter } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import styles from "./HeaderPortfolio.module.css";

export const HeaderPortfolio = () => {
  const [scrollData, setScrollData] = useState({
    isScrolled: false,
    scrollProgress: 0,
  });

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = (totalScroll / windowHeight) * 100;

      setScrollData({
        isScrolled: totalScroll > 10,
        scrollProgress: scrolled,
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 w-full border-b transition-all duration-300 ${
        scrollData.isScrolled
          ? "border-gray-200 bg-white backdrop-blur shadow-md"
          : "border-gray-200/50 bg-white/95 backdrop-blur shadow-sm"
      }`}>
      <div
        className="absolute top-0 left-0 h-0.5 bg-blue-600 transition-all duration-150 opacity-80"
        style={{ width: `${scrollData.scrollProgress}%` }}
      />

      <div className="container mx-auto flex h-16 items-center justify-between px-4 lg:px-8">
        <div className="flex items-center gap-2">
          <Code2Icon className="hidden md:block text-lg font-bold text-gray-800" />
          <span className="hidden md:block font-bold text-gray-800">
            Juan Vanegas
          </span>
        </div>

        <nav className="hidden md:flex items-center justify-center">
          <div className="flex gap-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? `${styles.navLink} ${styles.activeNavLink}`
                  : styles.navLink
              }>
              Home
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive
                  ? `${styles.navLink} ${styles.activeNavLink}`
                  : styles.navLink
              }>
              Projects
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? `${styles.navLink} ${styles.activeNavLink}`
                  : styles.navLink
              }>
              About
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? `${styles.navLink} ${styles.activeNavLink}`
                  : styles.navLink
              }>
              Contact
            </NavLink>
          </div>
        </nav>

        <div className="flex items-center gap-4">
          <Link
            to="https://github.com"
            target="_blank"
            rel="noopener noreferrer">
            <Github className="h-5 w-5 text-muted-foreground hover:text-blue-600 transition-all duration-300" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link
            to="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer">
            <Linkedin className="h-5 w-5 text-muted-foreground hover:text-blue-600 transition-all duration-300" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link
            to="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer">
            <Twitter className="h-5 w-5 text-muted-foreground hover:text-blue-600 transition-all duration-300" />
            <span className="sr-only">Twitter</span>
          </Link>
          <Link
            to="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer">
            <Instagram className="h-5 w-5 text-muted-foreground hover:text-blue-600 transition-all duration-300" />
            <span className="sr-only">Instagram</span>
          </Link>
        </div>
      </div>
    </header>
  );
};
