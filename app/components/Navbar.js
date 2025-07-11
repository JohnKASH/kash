'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { useLanguage } from "../components/LanguageContext";

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const { language, toggleLanguage } = useLanguage();
  const t = translations[language];

  return (
    <div className='border-b-2'>
      <nav className="bg-white border-gray-200">
        <div className="flex flex-wrap items-center justify-between lg:mx-8 p-4">
          <a href="/">
            <Image src="/assets/logo.png" width={100} height={100} alt="Logo" />
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
            aria-controls="navbar-default"
            aria-expanded={isDropdownOpen}
            onClick={toggleDropdown}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
          <div className={`${isDropdownOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`} id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white">
              <li className={`${isDropdownOpen ? 'underline' : ''}`}>
                <a href="/" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-kashBlue-600 md:p-0">{t.home}</a>
              </li>
              <li className={`${isDropdownOpen ? 'underline' : ''}`}>
                <a href="/MentorshipProgram" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-kashBlue-600 md:p-0">{t.mentorshipProgram}</a>
              </li>
              <li className={`${isDropdownOpen ? 'underline' : ''}`}>
                <a href="/KoreanFestival" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-kashBlue-600 md:p-0">{t.koreanFestival}</a>
              </li>
              {/* <li className={`${isDropdownOpen ? 'underline' : ''}`}>
                <a href="/MeetOurTeam" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-kashBlue-600 md:p-0">{t.meetOurTeam}</a>
              </li> */}
              {/* <li className={`${isDropdownOpen ? 'underline' : ''}`}>
                <a href="/KASHHistory" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-kashBlue-600 md:p-0">{t.kashHistory}</a>
              </li> */}
              {/* <li className={`${isDropdownOpen ? 'underline' : ''}`}>
                <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-kashBlue-600 md:p-0">{t.upcomingEvents}</a>
              </li> */}
              {/* <li className={`${isDropdownOpen ? 'underline' : ''}`}>
                <a href="/Contact" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-kashBlue-600 md:p-0">{t.contactUs}</a>
              </li> */}
              <li className={`${isDropdownOpen ? 'underline' : ''}`}>
                <a href="https://app.joinit.com/o/kash" target="blank" className="block py-2 px-3 text-white bg-kashBlue-600 rounded md:bg-transparent md:text-kashBlue-600 md:p-0  md:dark:text-blue-500 hover:text-gray-700" aria-current="page">{t.becomeMember}</a>
              </li>
              <li className={`${isDropdownOpen ? 'underline mt-2' : 'flex items-center'}`}>
                <button
                  onClick={toggleLanguage}
                  className="text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border md:border-kashBlue-600 md:text-kashBlue-600 md:hover:bg-kashBlue-50 transition duration-200"
                >
                  <span className="px-3 py-1 hover:bg-slate-800 hover:text-gray-300 duration-200 rounded">
                    {t.toggle}
                  </span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

const translations = {
  en: {
    home: "Home",
    mentorshipProgram: "2025 Mentorship Program",
    meetOurTeam: "Meet Our Team",
    kashHistory: "KASH History",
    koreanFestival: "Korean Festival",
    upcomingEvents: "Upcoming Events",
    contactUs: "Contact Us",
    becomeMember: "Become a Member",
    toggle: "한국어로 보기", // View in Korean
  },
  ko: {
    home: "홈",
    mentorshipProgram: "2025 멘토십 프로그램",
    meetOurTeam: "팀 소개",
    kashHistory: "KASH 역사",
    koreanFestival: "한국 페스티벌",
    upcomingEvents: "예정된 행사",
    contactUs: "문의하기",
    becomeMember: "회원 가입",
    toggle: "View in English",
  },
};
