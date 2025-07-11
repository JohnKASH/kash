"use client"
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-full">
      <div className="relative w-full h-96 overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <Image
            fill
            src="/assets/kfestImages/Groupphoto.jpg"
            className="w-full h-full object-cover"
            alt="Mentorship Program Banner"
          />
          <div className="absolute inset-0 w-full h-full bg-black opacity-50" />
        </div>
        <h1 className="relative z-10 flex flex-col items-center justify-center w-full h-full text-center text-white text-3xl md:text-4xl lg:text-5xl font-bold px-10">
          Korean Festival 2025
        </h1>
      </div>

      <div className="px-10 sm:px-20 md:px-30 lg:w-full m-auto">
        <h1 className="mt-20 text-black text-2xl md:text-3xl lg:text-4xl font-bold text-center center justify-center mx-auto">EXPERIENCE KOREA IN THE HEART OF HOUSTON</h1>
        <p className="mt-4 text-lg">Established in 2009, the Korean Festival has become one of the largest free cultural events hosted at Discovery Green in Downtown Houston, drawing tens of thousands of visitors to its cultural presentation &amp; culinary experience.</p>
        <h1 className="mt-12 text-black text-2xl md:text-3xl lg:text-4xl font-bold text-center center justify-center mx-auto">THE HISTORY OF KOREAN FESTIVAL HOUSTON</h1>
        <p className="mt-4 text-lg ">Since the 1950s, Koreans have been an integral part of Houston&apos;s history. Throughout the decades the Korean community quietly preserved its heritage &amp; traditions through local events like small-scale festivals &amp; parades. Prior to 2009, there had not been a unifying event that all of Houston could partake in &amp; bring together the entire Korean-American community.
          The enterprising young professionals of the Korean-American Society of Houston (KASH) organized the very first Korean Festival Houston in the Houston Community College - Spring Branch parking lot with the support of local community &amp; business organizations. The success of that inaugural event was clear evidence of the significant demand for the Korean cultural experiences in Houston.
          Bolstered by the enthusiastic support from the community, KASH made a bold decision in the very next year to move the Korean Festival to its current home at Discovery Green.
          Following years of extraordinary growth, the Korean Festival Houston celebrates its fifteenth anniversary this October 2024. In one day we serve over 35,000 visitors, &amp; we&apos;re excited to now expand our festival to TWO days!  It&apos;s an honor to partner with dozens of both global &amp; local sponsors to bring a truly exhilarating &amp; spectacular experience to the heart of Houston.
        </p>
      </div>

      <div>
        <h1 className="mt-20 text-black text-2xl md:text-3xl lg:text-4xl font-bold text-center center justify-center mx-auto">Interested in volunteering?</h1>
        <a href="https://form.jotform.com/241558126341150" target="_blank">
          <button className="mt-4 center mx-auto justify-center flex bg-kashBlue-600 text-white rounded-lg py-2 px-4 hover:bg-gray-600">
            Apply here!
          </button>
        </a>
      </div>

      <div>
        <Image
          src="/assets/kfestImages/2025sponsors.png"
          className="w-3/4 center flex justify-center m-auto"
          alt="Mentorship Program Banner"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
}
