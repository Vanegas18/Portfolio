import { Github, Instagram, Linkedin, Twitter } from "lucide-react";
import React from "react";
import { Link } from "react-router";

export const HeaderPortfolio = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-gray-200/50 bg-white/95 backdrop-blur shadow-sm transition-all duration-300">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 lg:px-8">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img
              src="/logo.ico"
              alt="Portfolio logo"
              width={100}
              height={100}
              className="h-10 w-10 rounded-md"
            />
            <span className="ml-2 text-lg font-bold">My Portfolio</span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center justify-center">
          <div className="flex gap-6">
            <Link
              href="/"
              className="text-sm font-medium transition-colors hover:text-primary">
              Home
            </Link>
            <Link
              href="/projects"
              className="text-sm font-medium transition-colors hover:text-primary">
              Projects
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium transition-colors hover:text-primary">
              About
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium transition-colors hover:text-primary">
              Contact
            </Link>
          </div>
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer">
            <Github className="h-5 w-5 text-muted-foreground hover:text-primary" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer">
            <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer">
            <Twitter className="h-5 w-5 text-muted-foreground hover:text-primary" />
            <span className="sr-only">Twitter</span>
          </Link>
          <Link
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer">
            <Instagram className="h-5 w-5 text-muted-foreground hover:text-primary" />
            <span className="sr-only">Instagram</span>
          </Link>
        </div>
      </div>
    </header>
  );
};
