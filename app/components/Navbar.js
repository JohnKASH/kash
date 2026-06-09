'use client';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { ArrowRight } from './icons';

const primaryLinks = [
  { label: "Home", href: "/" },
  { label: "Scholarship", href: "/Scholarship" },
  { label: "Upcoming Events", href: "/UpcomingEvents" },
];

const aboutLinks = [
  { label: "Meet Our Team", href: "/MeetOurTeam" },
  { label: "KASH History", href: "/KASHHistory" },
  { label: "Korean Festival", href: "/KoreanFestival" },
  { label: "Contact Us", href: "/Contact" },
];

const MEMBER_URL = "https://app.joinit.com/o/kash";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef(null);

  // Close About dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setAboutOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Subtle shadow once the page is scrolled
  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-white/90 backdrop-blur-md transition-shadow duration-300 ${scrolled ? "shadow-sm border-b border-gray-100" : "border-b border-gray-100/80"
        }`}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3">

        {/* Logo */}
        <a href="/" className="flex-shrink-0">
          <Image src="/assets/logo.png" width={78} height={78} alt="KASH Logo" priority />
        </a>

        {/* Mobile toggle */}
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center p-2 w-10 h-10 text-gray-600 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-kashBlue-200"
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="sr-only">Open menu</span>
          {isOpen ? (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          )}
        </button>

        {/* Desktop + mobile nav */}
        <div className={`${isOpen ? 'block' : 'hidden'} md:block absolute md:static top-full left-0 w-full md:w-auto bg-white md:bg-transparent border-b md:border-0 border-gray-100 shadow-md md:shadow-none z-40`}>
          <ul className="flex flex-col md:flex-row md:items-center md:gap-1 text-sm font-medium px-4 py-3 md:p-0">

            {primaryLinks.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className="block md:px-3.5 py-2.5 md:py-2 text-gray-600 hover:text-kashBlue-600 md:rounded-lg md:hover:bg-kashBlue-50 transition-colors duration-150"
                >
                  {label}
                </a>
              </li>
            ))}

            {/* About dropdown */}
            <li ref={dropdownRef} className="relative">
              <button
                onClick={() => setAboutOpen(!aboutOpen)}
                className="flex items-center gap-1 md:px-3.5 py-2.5 md:py-2 text-gray-600 hover:text-kashBlue-600 md:rounded-lg md:hover:bg-kashBlue-50 transition-colors duration-150 w-full md:w-auto"
              >
                About
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${aboutOpen ? 'rotate-180' : ''}`}
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Desktop dropdown */}
              {aboutOpen && (
                <ul className="hidden md:block absolute right-0 mt-2 w-56 bg-white border border-gray-100 rounded-2xl shadow-xl shadow-kashBlue-950/5 overflow-hidden z-50 p-1.5">
                  {aboutLinks.map(({ label, href }) => (
                    <li key={href}>
                      <a
                        href={href}
                        onClick={() => setAboutOpen(false)}
                        className="block px-3.5 py-2.5 text-sm text-gray-600 rounded-xl hover:bg-kashBlue-50 hover:text-kashBlue-700 transition-colors duration-150"
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}

              {/* Mobile: inline expand */}
              {aboutOpen && (
                <ul className="md:hidden pl-4 mt-1 border-l-2 border-kashBlue-100 space-y-1">
                  {aboutLinks.map(({ label, href }) => (
                    <li key={href}>
                      <a
                        href={href}
                        onClick={() => { setAboutOpen(false); setIsOpen(false); }}
                        className="block py-2 text-sm text-gray-500 hover:text-kashBlue-600 transition-colors duration-150"
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {/* Member CTA */}
            <li className="md:ml-3 mt-2 md:mt-0">
              <a
                href={MEMBER_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => { setAboutOpen(false); setIsOpen(false); }}
                className="group inline-flex items-center gap-1.5 bg-kashBlue-600 text-white text-sm font-semibold px-4 py-2 rounded-xl hover:bg-kashBlue-700 transition-colors duration-150"
              >
                Become a Member
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </a>
            </li>

          </ul>
        </div>

      </nav>
    </header>
  );
}
