'use client'
import React, { useState } from 'react';
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

  return (
    <div className="border-b-2 relative z-50">
      <nav className="bg-white border-gray-200 relative z-50">

        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between p-4">

          {/* Logo */}
          <a href="/">
            <Image src="/assets/logo.png" width={90} height={90} alt="Logo" />
          </a>

          {/* Mobile button */}
          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100"
            aria-expanded={isOpen}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="sr-only">Open menu</span>
            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>

          {/* Nav */}
          <div className={`${isOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`}>

            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:items-center md:space-x-8 md:mt-0 md:border-0 md:bg-white">

              {/* Primary links */}
              {primaryLinks.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-kashBlue-600 md:p-0"
                  >
                    {label}
                  </a>
                </li>
              ))}

              {/* About dropdown */}
              <li className="relative">
                <button
                  onClick={() => setAboutOpen(!aboutOpen)}
                  className="flex items-center gap-1 py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-kashBlue-600 md:p-0"
                >
                  About ▾
                </button>

                {aboutOpen && (
                  <ul className="absolute right-0 mt-2 w-56 bg-white border rounded-md shadow-lg z-50">

                    {aboutLinks.map(({ label, href }) => (
                      <li key={href}>
                        <a
                          href={href}
                          className="block px-4 py-2 hover:bg-gray-100"
                        >
                          {label}
                        </a>
                      </li>
                    ))}

                    {/* Divider */}
                    <div className="border-t my-1" />

                    {/* CTA inside dropdown */}
                    <li>
                      <a
                        href="https://app.joinit.com/o/kash"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-center mx-3 my-2 px-3 py-2 bg-kashBlue-600 text-white rounded hover:bg-kashBlue-700"
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