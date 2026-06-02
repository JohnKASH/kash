'use client';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const primaryLinks = [
  { label: "Home", href: "/" },
  { label: "2026 Scholarship Program", href: "/Scholarship" },
  { label: "Upcoming Events", href: "/UpcomingEvents" },
];

const aboutLinks = [
  { label: "Meet Our Team", href: "/MeetOurTeam" },
  { label: "KASH History", href: "/KASHHistory" },
  { label: "Korean Festival", href: "/KoreanFestival" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
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

  return (
    <div className="border-b-2 relative z-50">
      <nav className="bg-white">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">

          {/* Logo */}
          <a href="/">
            <Image src="/assets/logo.png" width={90} height={90} alt="KASH Logo" />
          </a>

          {/* Mobile toggle */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center p-2 w-10 h-10 text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
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
          <div className={`${isOpen ? 'block' : 'hidden'} md:block absolute md:static top-full left-0 w-full md:w-auto bg-white md:bg-transparent border-b md:border-0 shadow-md md:shadow-none z-40`}>
            <ul className="flex flex-col md:flex-row md:items-center md:gap-8 font-medium px-4 py-3 md:p-0">

              {primaryLinks.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    onClick={() => setIsOpen(false)}
                    className="block py-2 text-gray-700 hover:text-kashBlue-600 transition-colors duration-150"
                  >
                    {label}
                  </a>
                </li>
              ))}

              {/* About dropdown */}
              <li ref={dropdownRef} className="relative">
                <button
                  onClick={() => setAboutOpen(!aboutOpen)}
                  className="flex items-center gap-1 py-2 text-gray-700 hover:text-kashBlue-600 transition-colors duration-150 w-full md:w-auto"
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
                  <ul className="hidden md:block absolute right-0 mt-1 w-52 bg-white border border-gray-100 rounded-xl shadow-lg overflow-hidden z-50">
                    {aboutLinks.map(({ label, href }) => (
                      <li key={href}>
                        <a
                          href={href}
                          onClick={() => setAboutOpen(false)}
                          className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-kashBlue-600 transition-colors duration-150"
                        >
                          {label}
                        </a>
                      </li>
                    ))}
                    <div className="border-t border-gray-100 mx-3" />
                    <li className="px-3 py-2">
                      <a
                        href="https://app.joinit.com/o/kash"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setAboutOpen(false)}
                        className="block text-center px-3 py-2 bg-kashBlue-600 text-white text-sm font-semibold rounded-lg hover:opacity-90 transition-opacity duration-150"
                      >
                        Become a Member
                      </a>
                    </li>
                  </ul>
                )}

                {/* Mobile: inline expand */}
                {aboutOpen && (
                  <ul className="md:hidden pl-4 mt-1 border-l-2 border-kashBlue-600/20 space-y-1">
                    {aboutLinks.map(({ label, href }) => (
                      <li key={href}>
                        <a
                          href={href}
                          onClick={() => { setAboutOpen(false); setIsOpen(false); }}
                          className="block py-2 text-sm text-gray-600 hover:text-kashBlue-600 transition-colors duration-150"
                        >
                          {label}
                        </a>
                      </li>
                    ))}
                    <li className="pb-2">
                      <a
                        href="https://app.joinit.com/o/kash"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => { setAboutOpen(false); setIsOpen(false); }}
                        className="inline-block mt-1 px-4 py-2 bg-kashBlue-600 text-white text-sm font-semibold rounded-lg hover:opacity-90 transition-opacity duration-150"
                      >
                        Become a Member
                      </a>
                    </li>
                  </ul>
                )}
              </li>

            </ul>
          </div>

        </div>
      </nav>
    </div>
  );
}