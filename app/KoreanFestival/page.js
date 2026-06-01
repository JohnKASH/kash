"use client"
import Image from "next/image";

export default function KoreanFestival() {
  return (
    <main className="bg-white text-gray-900 font-sans">

      {/* HERO */}
      <div className="relative w-full h-96 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/assets/kfestImages/Crowd.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <h1 className="relative z-10 flex flex-col items-center justify-center w-full h-full text-center text-white text-3xl md:text-4xl lg:text-5xl font-bold px-10">
          Korean Festival 2025
        </h1>
      </div>

      {/* EXPERIENCE SECTION */}
      <div className="max-w-3xl mx-auto px-6 sm:px-10 pt-16">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center">
          Experience Korea in the Heart of Houston
        </h2>
        <div className="w-12 h-1 bg-kashBlue-600 rounded mx-auto mt-3 mb-6" />
        <p className="text-lg text-gray-600 text-center">
          Established in 2009, the Korean Festival has become one of the largest free cultural events
          hosted at Discovery Green in Downtown Houston, drawing tens of thousands of visitors to its
          cultural presentation &amp; culinary experience.
        </p>
      </div>

      {/* HISTORY SECTION */}
      <div className="max-w-3xl mx-auto px-6 sm:px-10 pt-14">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center">
          The History of Korean Festival Houston
        </h2>
        <div className="w-12 h-1 bg-kashBlue-600 rounded mx-auto mt-3 mb-6" />
        <div className="space-y-4 text-lg text-gray-600">
          <p>
            Since the 1950s, Koreans have been an integral part of Houston&apos;s history. Throughout
            the decades the Korean community quietly preserved its heritage &amp; traditions through
            local events like small-scale festivals &amp; parades. Prior to 2009, there had not been
            a unifying event that all of Houston could partake in &amp; bring together the entire
            Korean-American community.
          </p>
          <p>
            The enterprising young professionals of the Korean-American Society of Houston (KASH)
            organized the very first Korean Festival Houston in the Houston Community College –
            Spring Branch parking lot with the support of local community &amp; business
            organizations. The success of that inaugural event was clear evidence of the significant
            demand for Korean cultural experiences in Houston.
          </p>
          <p>
            Bolstered by the enthusiastic support from the community, KASH made a bold decision in
            the very next year to move the Korean Festival to its current home at Discovery Green.
          </p>
          <p>
            Following years of extraordinary growth, the Korean Festival Houston celebrates its
            fifteenth anniversary this October 2024. In one day we serve over 35,000 visitors, &amp;
            we&apos;re excited to now expand our festival to TWO days! It&apos;s an honor to partner
            with dozens of both global &amp; local sponsors to bring a truly exhilarating &amp;
            spectacular experience to the heart of Houston.
          </p>
        </div>
      </div>

      {/* VOLUNTEER CTA */}
      <div className="max-w-3xl mx-auto px-6 sm:px-10 mt-16">
        <div className="bg-kashBlue-600 rounded-2xl px-8 py-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Interested in Volunteering?
          </h2>
          <p className="text-white/75 mb-6">
            Join our team and help make Korean Festival Houston an unforgettable experience.
          </p>
          <a href="https://form.jotform.com/241558126341150" target="_blank" rel="noopener noreferrer">
            <button className="bg-white text-kashBlue-600 font-bold px-8 py-3 rounded-xl hover:opacity-90 hover:-translate-y-0.5 transition-all duration-200 shadow-md">
              Apply Here →
            </button>
          </a>
        </div>
      </div>

      {/* SPONSORS */}
      <div className="max-w-3xl mx-auto px-6 sm:px-10 mt-16 mb-24 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-1">Our Sponsors</h2>
        <div className="w-12 h-1 bg-kashBlue-600 rounded mx-auto mt-3 mb-8" />
        <Image
          src="/assets/kfestImages/2025sponsors.png"
          alt="2025 Korean Festival Sponsors"
          width={800}
          height={500}
          className="mx-auto w-full max-w-2xl"
        />
      </div>

    </main>
  );
}