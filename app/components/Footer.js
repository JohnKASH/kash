import React from 'react'
import logo from '@assets/logo.png'
import Image from 'next/image'

export default function Footer() {
  return (
    <div>
      <footer className="p-4 bg-white md:p-8 lg:p-10 dark:bg-gray-800">
        <div className="mx-auto max-w-screen-xl text-center">
          <a href="#" className="flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white">
            <Image src={logo} height={300} width={300}/>
          </a>
          <p className="my-6 text-gray-500 dark:text-gray-400">Be part of something bigger in the Houston community! </p>
          <ul className="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white">
            <li>
              <a href="/MeetOurTeam" className="mr-4 hover:underline md:mr-6 ">Meet Our Team</a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 ">KASH History</a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">Upcoming Events</a>
            </li>
            <li>
              <a href="/Contact" className="mr-4 hover:underline md:mr-6">Contact Us</a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">FAQs</a>
            </li>
            <li>
              <a href="/https://app.joinit.com/o/kash" target="blank" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500 mr-4 hover:underline md:mr-6" aria-current="page">Become a Member</a>
            </li>
          </ul>
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="#" className="hover:underline">KASH fhdsklaflsda</a>. All Rights Reserved.</span>
        </div>
      </footer>
    </div>
  )
}
