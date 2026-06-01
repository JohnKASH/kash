'use client'
import React, { useState } from 'react';
import Image from 'next/image';

const navLinks = [
  { label: "Home", href: "/" },
  { label: "2026 Scholarship Program", href: "/Scholarship" },
  { label: "Korean Festival", href: "/KoreanFestival" },
  // { label: "2025 Mentorship Program", href: "/MentorshipProgram" },
  { label: "Meet Our Team", href: "/MeetOurTeam" },
  { label: "KASH History", href: "/KASHHistory" },
  // { label: "Upcoming Events", href: "#" },
  // { label: "Contact Us", href: "/Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b-2">
      <nav className="bg-white border-gray-200">
        <div className="flex flex-wrap items-center justify-between lg:mx-8 p-4">

          <a href="/">
            <Image src="/assets/logo.png" width={100} height={100} alt="Logo" />
          </a>

          {/* Mobile menu button */}
          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-default"
            aria-expanded={isOpen}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>

          {/* Nav links */}
          <div className={`${isOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`} id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
              {navLinks.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-kashBlue-600 md:p-0"
                  >
                    {label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="https://app.joinit.com/o/kash"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block py-2 px-3 text-white bg-kashBlue-600 rounded md:bg-transparent md:text-kashBlue-600 md:p-0 hover:text-gray-700"
                >
                  Become a Member
                </a>
              </li>
            </ul>
          </div>

        </div>
      </nav>
    </div>
  );
}