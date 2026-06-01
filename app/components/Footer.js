import React from 'react';
import Image from 'next/image';

const navLinks = [
  { label: "Home", href: "/" },
  { label: "2026 Scholarship Program", href: "/Scholarship" },
  { label: "Korean Festival", href: "/KoreanFestival" },
  { label: "Meet Our Team", href: "/MeetOurTeam" },
  // { label: "2025 Mentorship Program", href: "/MentorshipProgram" },
  { label: "KASH History", href: "/KASHHistory" },
  { label: "Upcoming Events", href: "/UpcomingEvents" },
  // { label: "Contact Us", href: "/Contact" },
];

export default function Footer() {
  return (
    <footer className="pb-4 px-3 bg-white border-t-2">
      <div className="mx-auto max-w-3xl text-center">
        <a href="/" className="flex justify-center items-center">
          <Image src="/assets/logo.png" height={250} width={250} alt="KASH logo" />
        </a>
        <p className="my-4 text-gray-500">Be part of something bigger in the Houston community!</p>
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-x-2 gap-y-2 mb-6 text-gray-900 text-center">
          {navLinks.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className="duration-200 hover:text-kashBlue-400 hover:underline"
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
              className="duration-200 text-kashBlue-600 hover:underline"
            >
              Become a Member
            </a>
          </li>
        </ul>        <span className="text-sm text-gray-500">
          © 2025{" "}
          <a href="/" className="duration-200 hover:underline">
            The Korean American Society of Houston
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}