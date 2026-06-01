"use client";

const milestones = [
  {
    year: "1950s",
    title: "Koreans Arrive in Houston",
    description:
      "Koreans begin settling in Houston, quietly building community through small-scale cultural events, church gatherings, and local parades. For decades, heritage and traditions are preserved through tight-knit networks across the city.",
    note: null,
  },
  {
    year: "2008",
    title: "KASH Is Founded",
    description:
      "A group of Korean-American young professionals comes together with a shared vision: to create a more unified, visible, and vibrant Korean-American community in Houston. The Korean-American Society of Houston (KASH) is officially established as a 501(c)(3) non-profit organization.",
    note: "KASH is built on a foundation of leadership, professional networking, and cultural celebration — open to all Houstonians, not just the Korean-American community.",
  },
  {
    year: "2009",
    title: "The First Korean Festival Houston",
    description:
      "KASH organizes the inaugural Korean Festival Houston in the Houston Community College – Spring Branch parking lot. Supported by local community and business organizations, the event is an immediate success — proving there is a deep and enthusiastic demand for Korean cultural experiences in Houston.",
    note: null,
  },
  {
    year: "2010",
    title: "Moving to Discovery Green",
    description:
      "Emboldened by the response to the inaugural festival, KASH makes a bold move: relocating Korean Festival Houston to Discovery Green in the heart of Downtown Houston. The new venue sets the stage for years of extraordinary growth.",
    note: null,
  },
  {
    year: "2010s",
    title: "Years of Growth",
    description:
      "Korean Festival Houston grows into one of the largest free cultural events in Houston, attracting tens of thousands of visitors annually. KASH expands its programming — adding Korean Village, a dedicated cultural activities space, and building partnerships with dozens of local and global sponsors.",
    note: null,
  },
  {
    year: "2024",
    title: "15th Anniversary and Two-Day Expansion",
    description:
      "Korean Festival Houston celebrates its fifteenth anniversary. In a landmark moment, the festival expands to TWO days for the first time, welcoming over 35,000 visitors in a single day. KASH reflects on how far the event has come — from a parking lot gathering to one of the most beloved cultural festivals in the country.",
    note: null,
  },
  {
    year: "2026",
    title: "Investing in the Next Generation",
    description:
      "KASH launches the 2026 Scholarship Program — awarding multiple $1,000 scholarships to students across Houston through the Academic Excellence Award and the Creative Voice Award. The program reflects KASH's ongoing commitment to developing the next generation of community leaders.",
    note: "Applications open. Visit the Scholarship page to learn more.",
    link: { label: "Learn more →", href: "/Scholarship" },
  },
];

const purposes = [
  {
    icon: "🌏",
    title: "Raise Cultural Awareness",
    description: "Sharing the joys and delights of Korean culture with fellow Houstonians.",
  },
  {
    icon: "🌱",
    title: "Promote Community Growth",
    description: "Encouraging community involvement and fostering leadership development for the next generation.",
  },
  {
    icon: "🤝",
    title: "Bridge Two Communities",
    description: "Collaborating with local businesses, organizations, and individuals that play an integral role in Houston.",
  },
];

export default function KASHHistory() {
  return (
    <main className="bg-white text-gray-900 font-sans">

      {/* HERO */}
      <div className="relative w-full h-96 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/assets/kfestImages/Giwonmu.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <h1 className="relative z-10 flex flex-col items-center justify-center w-full h-full text-center text-white text-3xl md:text-4xl lg:text-5xl font-bold px-10">
          KASH History
        </h1>
      </div>

      <div className="max-w-3xl mx-auto px-6 sm:px-10">

        {/* INTRO */}
        <section className="pt-16 pb-12 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-1">Our Story</h2>
          <div className="w-12 h-1 bg-kashBlue-600 rounded mx-auto mt-3 mb-6" />
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            What began as a dream among a small group of young Korean-American professionals
            has grown into one of Houston&apos;s most beloved cultural institutions. This is the story of KASH.
          </p>
        </section>

        {/* TIMELINE */}
        <section className="mb-20">
          <div className="relative border-l-2 border-kashBlue-600/20 ml-4 md:ml-8 space-y-0">
            {milestones.map((item, i) => (
              <div key={i} className="relative pl-10 pb-12">
                {/* dot */}
                <div className="absolute -left-[11px] top-1 w-5 h-5 rounded-full bg-kashBlue-600 ring-4 ring-white flex-shrink-0" />

                {/* year badge */}
                <span className="inline-block bg-kashBlue-600 text-white text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-3">
                  {item.year}
                </span>

                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-3">{item.description}</p>

                {item.note && (
                  <div className="bg-blue-50 border border-blue-100 rounded-lg px-4 py-3 text-sm text-gray-600 italic">
                    {item.note}{" "}
                    {item.link && (
                      <a href={item.link.href} className="not-italic font-semibold text-kashBlue-600 hover:underline">
                        {item.link.label}
                      </a>
                    )}
                  </div>
                )}
              </div>
            ))}

            {/* end cap */}
            <div className="relative pl-10">
              <div className="absolute -left-[11px] top-1 w-5 h-5 rounded-full bg-gray-200 ring-4 ring-white" />
              <p className="text-sm text-gray-400 italic">The story continues…</p>
            </div>
          </div>
        </section>

        {/* OUR PURPOSE */}
        <section className="mb-20">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-1">Our Purpose</h2>
          <div className="w-12 h-1 bg-kashBlue-600 rounded mx-auto mt-3 mb-10" />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {purposes.map((p) => (
              <div key={p.title} className="border border-gray-100 rounded-2xl p-6 text-center hover:shadow-md transition-shadow duration-200">
                <div className="text-3xl mb-4">{p.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{p.title}</h3>
                <p className="text-sm text-gray-500">{p.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-br from-blue-800 to-blue-950 rounded-2xl px-8 py-14 text-center mb-24">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Be Part of the Story</h2>
          <p className="text-white/70 max-w-md mx-auto mb-8">
            KASH is always growing. Whether you want to volunteer, become a member, or sponsor the festival — there&apos;s a place for you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://app.joinit.com/o/kash" target="_blank" rel="noopener noreferrer">
              <button className="bg-white text-blue-800 font-bold px-8 py-3 rounded-xl hover:opacity-90 hover:-translate-y-0.5 transition-all duration-200 shadow-md">
                Become a Member
              </button>
            </a>
            <a href="/KoreanFestival">
              <button className="bg-white/10 text-white font-bold px-8 py-3 rounded-xl border border-white/20 hover:bg-white/20 hover:-translate-y-0.5 transition-all duration-200">
                Learn About K-Fest
              </button>
            </a>
          </div>
        </section>

      </div>
    </main>
  );
}