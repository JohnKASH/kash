import React from 'react';
import Image from 'next/image';
import { ArrowRight } from './icons';

const exploreLinks = [
  { label: "Home", href: "/" },
  { label: "2026 Scholarship", href: "/Scholarship" },
  { label: "Upcoming Events", href: "/UpcomingEvents" },
];

const aboutLinks = [
  { label: "Meet Our Team", href: "/MeetOurTeam" },
  { label: "KASH History", href: "/KASHHistory" },
  { label: "Korean Festival", href: "/KoreanFestival" },
  { label: "Contact Us", href: "/Contact" },
];

const socials = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/KASHouston/",
    path: "M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12z",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/kashouston/",
    path: "M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16zm0 1.62c-3.15 0-3.51.01-4.75.07-1.15.05-1.77.24-2.18.4-.55.22-.94.47-1.35.88-.41.41-.66.8-.88 1.35-.16.41-.35 1.03-.4 2.18-.06 1.24-.07 1.6-.07 4.75s.01 3.51.07 4.75c.05 1.15.24 1.77.4 2.18.22.55.47.94.88 1.35.41.41.8.66 1.35.88.41.16 1.03.35 2.18.4 1.24.06 1.6.07 4.75.07s3.51-.01 4.75-.07c1.15-.05 1.77-.24 2.18-.4.55-.22.94-.47 1.35-.88.41-.41.66-.8.88-1.35.16-.41.35-1.03.4-2.18.06-1.24.07-1.6.07-4.75s-.01-3.51-.07-4.75c-.05-1.15-.24-1.77-.4-2.18a3.6 3.6 0 0 0-.88-1.35 3.6 3.6 0 0 0-1.35-.88c-.41-.16-1.03-.35-2.18-.4-1.24-.06-1.6-.07-4.75-.07zm0 2.76a5.3 5.3 0 1 0 0 10.6 5.3 5.3 0 0 0 0-10.6zm0 8.74a3.44 3.44 0 1 1 0-6.88 3.44 3.44 0 0 1 0 6.88zm6.74-8.94a1.24 1.24 0 1 1-2.48 0 1.24 1.24 0 0 1 2.48 0z",
  },
  {
    label: "X",
    href: "https://twitter.com/kashouston",
    path: "M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.66l-5.21-6.82-5.97 6.82H1.66l7.73-8.84L1.25 2.25h6.83l4.71 6.23 5.45-6.23zm-1.16 17.52h1.83L7.01 4.13H5.05l12.03 15.64z",
  },
];

export default function Footer() {
  return (
    <footer className="bg-kashBlue-950 text-white">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">

          {/* Brand */}
          <div className="md:col-span-5">
            <a href="/" className="inline-flex items-center bg-white rounded-2xl p-3">
              <Image src="/assets/logo.png" height={120} width={120} alt="KASH logo" />
            </a>
            <p className="mt-5 text-white/65 leading-relaxed max-w-sm">
              The Korean American Society of Houston — a 501(c)(3) nonprofit promoting Korean
              culture and building community across Houston since 2008.
            </p>
            <div className="flex items-center gap-3 mt-6">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-150"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div className="md:col-span-2">
            <p className="text-xs font-semibold tracking-[0.18em] uppercase text-kashGold-300 mb-4">Explore</p>
            <ul className="space-y-3 text-sm">
              {exploreLinks.map(({ label, href }) => (
                <li key={href}>
                  <a href={href} className="text-white/70 hover:text-white transition-colors duration-150">{label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div className="md:col-span-2">
            <p className="text-xs font-semibold tracking-[0.18em] uppercase text-kashGold-300 mb-4">About</p>
            <ul className="space-y-3 text-sm">
              {aboutLinks.map(({ label, href }) => (
                <li key={href}>
                  <a href={href} className="text-white/70 hover:text-white transition-colors duration-150">{label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="md:col-span-3">
            <p className="text-xs font-semibold tracking-[0.18em] uppercase text-kashGold-300 mb-4">Get Involved</p>
            <p className="text-sm text-white/70 mb-4 leading-relaxed">
              Be part of something bigger in the Houston community.
            </p>
            <a
              href="https://app.joinit.com/o/kash"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 bg-white text-kashBlue-700 text-sm font-semibold px-5 py-2.5 rounded-xl hover:bg-kashBlue-50 transition-colors duration-150"
            >
              Become a Member
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-white/50">
          <span>© {new Date().getFullYear()} The Korean American Society of Houston. All rights reserved.</span>
          <a href="mailto:John@kashouston.org" className="hover:text-white/80 transition-colors duration-150">
            John@kashouston.org
          </a>
        </div>
      </div>
    </footer>
  );
}
