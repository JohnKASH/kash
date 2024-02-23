import React from 'react'
import logo from '@assets/logo.png'
import Image from 'next/image'

export default function Footer() {
  return (
    <div>
      <footer class="p-4 bg-white md:p-8 lg:p-10 dark:bg-gray-800">
        <div class="mx-auto max-w-screen-xl text-center">
          <a href="#" class="flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white">
            <Image src={logo} />
          </a>
          <p class="my-6 text-gray-500 dark:text-gray-400">Be part of something bigger in the Houston community! </p>
          <ul class="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white">
            <li>
              <a href="#" class="mr-4 hover:underline md:mr-6 ">About</a>
            </li>
            <li>
              <a href="#" class="mr-4 hover:underline md:mr-6">Premium</a>
            </li>
            <li>
              <a href="#" class="mr-4 hover:underline md:mr-6 ">Campaigns</a>
            </li>
            <li>
              <a href="#" class="mr-4 hover:underline md:mr-6">Blog</a>
            </li>
            <li>
              <a href="#" class="mr-4 hover:underline md:mr-6">Affiliate Program</a>
            </li>
            <li>
              <a href="#" class="mr-4 hover:underline md:mr-6">FAQs</a>
            </li>
            <li>
              <a href="#" class="mr-4 hover:underline md:mr-6">Contact</a>
            </li>
          </ul>
          <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="#" class="hover:underline">KASH fhdsklaflsda</a>. All Rights Reserved.</span>
        </div>
      </footer>
    </div>
  )
}
