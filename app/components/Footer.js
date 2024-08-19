import React from 'react'
import logo from '@assets/logo.png'
import Image from 'next/image'

export default function Footer() {
  return (
    <div>
      <footer className="pb-2 px-3 bg-white border-t-2">
        <div className="mx-auto max-w-screen-xl text-center">
          <a href="#" className="flex justify-center items-center text-2xl font-semibold text-gray-900">
            <Image src={logo} height={250} width={250} alt='KASH logo' />
          </a>
          <p className="my-6 text-gray-500 ">Be part of something bigger in the Houston community! </p>
          <ul className="flex flex-wrap justify-center items-center mb-6 text-gray-900">
            <li><a href="/" className="mr-4 duration-200 hover:text-kashBlue-400 hover:underline md:mr-6 ">Home</a></li>
            <li><a href="/MeetOurTeam" className="mr-4 duration-200 hover:text-kashBlue-400 hover:underline md:mr-6 ">Meet Our Team</a></li>
            <li><a href="/" className="mr-4 duration-200 hover:text-kashBlue-400 hover:underline md:mr-6 ">KASH History</a></li>
            {/* <li><a href="/" className="mr-4 duration-200 hover:text-kashBlue-400 hover:underline md:mr-6">Upcoming Events</a></li> */}
            <li><a href="/Contact" className="mr-4 duration-200 hover:text-kashBlue-400 hover:underline md:mr-6">Contact Us</a></li>
            <li><a href="/" className="mr-4 duration-200 hover:text-kashBlue-400 hover:underline md:mr-6">FAQs</a></li>
            <li><a href="/https://app.joinit.com/o/kash" target="blank" className="mr-4 duration-200 text-kashBlue-600 hover:text-kashBlack-100 hover:underline md:mr-6" aria-current="page">Become a Member</a></li>
          </ul>
          <span className="text-sm text-gray-500 sm:text-center ">©2024 <a href="#" className="duration-200 hover:underline">KASH fhdsklaflsda</a>. All Rights Reserved.</span>
        </div>
      </footer>
    </div>
  )
}
