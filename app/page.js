'use client';
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-full bg-white">

      {/* ── HERO ── */}
      <div className="relative w-full h-96 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/assets/LandingPageImages/LandingPhoto.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full text-center px-10 gap-4">
          <h1 className="text-white text-2xl md:text-4xl lg:text-5xl font-bold leading-snug">
            Welcome to the<br />
            Korean American Society of Houston
          </h1>
          <a href="https://app.joinit.com/o/kash" target="_blank" rel="noopener noreferrer">
            <button className="mt-2 bg-white text-kashBlue-600 font-bold px-6 py-2.5 rounded-xl hover:opacity-90 hover:-translate-y-0.5 transition-all duration-200 shadow-md text-sm">
              Become a Member →
            </button>
          </a>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 sm:px-10 pb-24">

        {/* ── SCHOLARSHIP SPOTLIGHT ── */}
        <section className="mt-14">
          <div className="bg-gradient-to-br from-blue-800 to-blue-950 rounded-2xl px-8 py-10 relative overflow-hidden">
            <p className="text-8xl font-bold text-white/[0.04] absolute top-0 right-2 pointer-events-none select-none leading-none">
              장학금
            </p>
            <span className="inline-block bg-amber-500 text-white text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-4">
              Now Open — 2026
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              KASH Scholarship Program
            </h2>
            <p className="text-white/75 text-base mb-6 max-w-lg">
              KASH is awarding multiple $1,000 scholarships to students across Houston through the
              Academic Excellence Award and the Creative Voice Award. You don&apos;t have to be Korean-American to apply.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="/Scholarship">
                <button className="bg-white text-blue-800 font-bold px-6 py-2.5 rounded-xl hover:opacity-90 hover:-translate-y-0.5 transition-all duration-200 shadow-md text-sm">
                  Learn More →
                </button>
              </a>
              <a href="https://forms.gle/NLWdKfPS8oK5VyW89" target="_blank" rel="noopener noreferrer">
                <button className="bg-white/10 border border-white/20 text-white font-bold px-6 py-2.5 rounded-xl hover:bg-white/20 hover:-translate-y-0.5 transition-all duration-200 text-sm">
                  Apply Now
                </button>
              </a>
            </div>
          </div>
        </section>

        {/* ── OUR SOCIETY ── */}
        <section className="pt-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-1">
            Our Society
          </h2>
          <div className="w-12 h-1 bg-kashBlue-600 rounded mb-6" />
          <p className="text-lg text-gray-600 mb-4">
            The Korean-American Society of Houston (KASH) is a 501(c)(3) non-profit organization
            dedicated to promoting Korean culture and encouraging deeper interactions between the
            Korean-American Community and the greater Houston public. KASH was established by a
            group of Korean-Americans and like-minded young professionals in 2008.
          </p>
          <p className="text-lg text-gray-600">
            We are a diverse group that represents a broad range of age, race, and ethnicities,
            united by a common desire for new and exciting cultural experiences. Our efforts
            culminate in our annual banner event — the Korean Festival Houston — which is one of
            the largest events hosted by a Korean-American non-profit organization in the country.
          </p>
        </section>

        {/* ── OUR MISSION ── */}
        <section className="pt-14">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-1">
            Our Mission
          </h2>
          <div className="w-12 h-1 bg-kashBlue-600 rounded mb-6" />
          <p className="text-lg text-gray-600 mb-5">Our mission is to:</p>
          <ul className="space-y-3">
            {[
              "Promote Korean culture",
              "Develop the next generation of community leaders",
              "Bridge the Korean-American community and the Houston community at large",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-lg text-gray-600">
                <span className="mt-2 w-2 h-2 rounded-full bg-kashBlue-600 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* ── QUICK LINKS ── */}
        <section className="pt-14">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-1">
            Explore KASH
          </h2>
          <div className="w-12 h-1 bg-kashBlue-600 rounded mb-8" />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { icon: "🎉", label: "Korean Festival", sub: "Oct 10–11, 2026 · Discovery Green", href: "/KoreanFestival" },
              { icon: "📅", label: "Upcoming Events", sub: "Book club, language nights & more", href: "/UpcomingEvents" },
              { icon: "👥", label: "Meet the Team", sub: "The people behind KASH and K-Fest", href: "/MeetOurTeam" },
            ].map(({ icon, label, sub, href }) => (
              <a
                key={href}
                href={href}
                className="border border-gray-200 rounded-2xl p-5 hover:shadow-md hover:-translate-y-1 transition-all duration-200 group"
              >
                <div className="text-2xl mb-3">{icon}</div>
                <p className="font-bold text-gray-900 group-hover:text-kashBlue-600 transition-colors duration-150 mb-1">{label}</p>
                <p className="text-xs text-gray-400">{sub}</p>
              </a>
            ))}
          </div>
        </section>

        {/* ── MEMBERSHIP CTA ── */}
        <section className="mt-14 bg-kashBlue-600 rounded-2xl px-8 py-10 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Membership
          </h2>
          <p className="text-white/80 text-lg mb-6">
            Be part of something bigger in the Houston community!
          </p>
          <a href="https://app.joinit.com/o/kash" target="_blank" rel="noopener noreferrer">
            <button className="bg-white text-kashBlue-600 font-bold px-8 py-3 rounded-xl hover:opacity-90 hover:-translate-y-0.5 transition-all duration-200 shadow-md">
              Become a Member!
            </button>
          </a>
        </section>

      </div>
    </div>
  );
}