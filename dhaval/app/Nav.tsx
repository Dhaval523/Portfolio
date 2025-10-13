"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathName = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { name: "Home", href: "/", icon: "ri-home-4-line" },
    { name: "Services", href: "/Services", icon: "ri-service-line" },
    { name: "Resume", href: "/Resume", icon: "ri-file-list-3-line" },
    { name: "Work", href: "/Work", icon: "ri-briefcase-4-line" },
    { name: "Contact", href: "/Contact", icon: "ri-contacts-line" }
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathName]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <nav className={`w-full fixed top-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? "bg-[#0f0f13]/95 backdrop-blur-md py-2 shadow-lg" 
        : "bg-transparent py-3"
    }`}>
      <div className="flex justify-between items-center px-4 sm:px-6 lg:px-[10%] py-2">
        {/* Logo */}
        <Link 
          href="/" 
          className="text-xl sm:text-2xl lg:text-3xl font-bold font-unbounded transition-all duration-300 hover:scale-105"
        >
          Dha
          <span className="text-[var(--primary-color)]">val</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          <div className="flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className={`text-base font-semibold transition-all duration-300 relative px-2 py-2 rounded-lg group ${
                  pathName === link.href 
                    ? 'text-[var(--primary-color)]' 
                    : 'text-white hover:text-[var(--primary-color)]'
                }`}
              >
                {link.name}
                <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--primary-color)] transition-all duration-300 group-hover:w-full ${
                  pathName === link.href ? 'w-full' : ''
                }`}></span>
              </Link>
            ))}
          </div>
          
          <Link 
            href='/Contact'
            className="bg-[var(--primary-color)] px-6 py-3 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[var(--primary-color)]/30"
          >
            Hire Us
          </Link>
        </div>

        {/* Mobile Hire Us Button */}
        <Link 
          href='/Contact'
          className="lg:hidden bg-[var(--primary-color)] px-4 py-2 text-sm text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg mr-3"
        >
          Hire Us
        </Link>

        {/* Modern Hamburger Button */}
        <button 
          className="lg:hidden relative w-8 h-8 flex flex-col justify-center items-center z-50 group"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${
            isMenuOpen ? 'rotate-45 translate-y-1.5' : 'mb-1.5'
          }`}></span>
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${
            isMenuOpen ? 'opacity-0 -translate-x-4' : 'mb-1.5'
          }`}></span>
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${
            isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
          }`}></span>
        </button>
      </div>

      {/* Modern Sidebar Mobile Menu */}
      <div className={`
        lg:hidden fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-[#0f0f13] border-l border-gray-800/50
        transform transition-transform duration-500 ease-out z-40 shadow-2xl
        ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
      `}>
        
        {/* Header Section */}
        <div className="p-6 border-b border-gray-800/50">
          <div className="flex items-center justify-between mb-6">
            <Link 
              href="/" 
              className="text-2xl font-bold font-unbounded"
              onClick={() => setIsMenuOpen(false)}
            >
              Dha<span className="text-[var(--primary-color)]">val</span>
            </Link>
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="w-10 h-10 flex items-center justify-center text-2xl text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300"
            >
              ×
            </button>
          </div>
          
          <p className="text-gray-400 text-sm">
            Full Stack Developer & UI/UX Designer
          </p>
        </div>

        {/* Navigation Links */}
        <div className="p-6 space-y-2">
          {navLinks.map((link, index) => (
            <Link
              key={link.name}
              href={link.href}
              className={`
                flex items-center gap-4 p-4 rounded-xl transition-all duration-300 group
                ${pathName === link.href 
                  ? 'bg-[var(--primary-color)]/20 text-[var(--primary-color)] border border-[var(--primary-color)]/30' 
                  : 'text-gray-300 hover:bg-white/5 hover:text-white'
                }
                ${isMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}
              `}
              style={{ transitionDelay: `${index * 100}ms` }}
              onClick={() => setIsMenuOpen(false)}
            >
              <i className={`${link.icon} text-lg`}></i>
              <span className="font-semibold">{link.name}</span>
              <i className={`ri-arrow-right-s-line ml-auto text-lg transition-transform duration-300 group-hover:translate-x-1 ${
                pathName === link.href ? 'text-[var(--primary-color)]' : 'text-gray-400'
              }`}></i>
            </Link>
          ))}
        </div>

        {/* Contact Section */}
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-800/50 bg-gradient-to-t from-[#0f0f13] to-transparent">
          <div className="space-y-4">
            {/* Social Links */}
            <div className="flex justify-center space-x-4">
              {[
                { icon: 'ri-github-fill', url: 'https://github.com/Dhaval523' },
                { icon: 'ri-linkedin-fill', url: 'www.linkedin.com/in/dhaval-rathod-0406282b3' }
              ].map((social, index) => (
                <a 
                  key={index}
                  href={social.url}
                  className="w-10 h-10 flex items-center justify-center text-lg text-gray-400 bg-white/5 rounded-lg hover:bg-[var(--primary-color)] hover:text-white transition-all duration-300 hover:scale-110"
                >
                  <i className={social.icon}></i>
                </a>
              ))}
            </div>
            
            {/* Email */}
            <div className="text-center">
              <a 
                href="dr9373407@gmail.com"
                className="text-[var(--primary-color)] text-sm font-medium hover:underline"
              >
                dr9373407@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Backdrop Overlay */}
      <div 
        className={`
          lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-500 z-30
          ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}
        `}
        onClick={() => setIsMenuOpen(false)}
      />
    </nav>
  );
}