'use client';
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";
import { ArrowRight, Sparkles, Calendar, Users, Check } from "@/components/icons";

const stats = [
  { value: "2008", label: "Established" },
  { value: "35,000+", label: "Festival visitors" },
  { value: "15+", label: "Years serving Houston" },
  { value: "501(c)(3)", label: "Nonprofit" },
];

const mission = [
  "Promote Korean culture across Houston",
  "Develop the next generation of community leaders",
  "Bridge the Korean-American community and the greater Houston public",
];

const explore = [
  {
    Icon: Sparkles,
    label: "Korean Festival",
    sub: "Oct 10–11, 2026 · Discovery Green",
    href: "/KoreanFestival",
  },
  {
    Icon: Calendar,
    label: "Upcoming Events",
    sub: "Book club, language nights & more",
    href: "/UpcomingEvents",
  },
  {
    Icon: Users,
    label: "Meet the Team",
    sub: "The people behind KASH and K-Fest",
    href: "/MeetOurTeam",
  },
];

export default function Home() {
  return (
    <div className="bg-white">

      {/* ── HERO ── */}
      <PageHero
        image="/assets/LandingPageImages/LandingPhoto.jpg"
        size="tall"
        eyebrow="Korean American Society of Houston"
        title={<>Celebrating Korean culture<br className="hidden sm:block" /> in the heart of Houston.</>}
        subtitle="A 501(c)(3) nonprofit bringing the Korean-American community and the greater Houston public together through culture, leadership, and service — since 2008."
      >
        <Button href="https://app.joinit.com/o/kash" target="_blank" rel="noopener noreferrer" variant="light" size="lg">
          Become a Member <ArrowRight className="w-4 h-4" />
        </Button>
        <Button href="/KASHHistory" variant="ghostOnDark" size="lg">
          Our Story
        </Button>
      </PageHero>

      {/* ── STATS ── */}
      <section className="border-b border-gray-100 bg-kashBlue-50/40">
        <div className="max-w-5xl mx-auto px-6 sm:px-10 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-3xl md:text-4xl font-bold tracking-tight text-kashBlue-700">{s.value}</p>
              <p className="mt-1 text-sm text-gray-500">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 sm:px-10">

        {/* ── SCHOLARSHIP SPOTLIGHT ── */}
        <section className="mt-20">
          <div className="bg-gradient-to-br from-kashBlue-800 to-kashBlue-950 rounded-3xl px-8 sm:px-12 py-12 relative overflow-hidden">
            <p className="text-[9rem] font-bold text-white/[0.04] absolute -top-6 right-4 pointer-events-none select-none leading-none">
              장학금
            </p>
            <div className="relative">
              <span className="inline-block bg-kashGold-500 text-white text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-5">
                Now Open — 2026
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4 max-w-xl">
                KASH Scholarship Program
              </h2>
              <p className="text-white/75 text-lg mb-8 max-w-xl leading-relaxed">
                We&apos;re awarding multiple $1,000 scholarships to students across Houston through the
                Academic Excellence Award and the Creative Voice Award. You don&apos;t have to be
                Korean-American to apply.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button href="/Scholarship" variant="light" size="lg">
                  Learn More <ArrowRight className="w-4 h-4" />
                </Button>
                <Button href="https://form.jotform.com/261508897875073" target="_blank" rel="noopener noreferrer" variant="ghostOnDark" size="lg">
                  Apply Now
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* ── OUR SOCIETY ── */}
        <section className="pt-20">
          <SectionHeading
            eyebrow="About KASH"
            title="Our Society"
          />
          <div className="mt-6 grid md:grid-cols-2 gap-8 text-lg text-gray-600 leading-relaxed">
            <p>
              The Korean-American Society of Houston (KASH) is a 501(c)(3) non-profit organization
              dedicated to promoting Korean culture and encouraging deeper interactions between the
              Korean-American community and the greater Houston public. KASH was established by a
              group of Korean-Americans and like-minded young professionals in 2008.
            </p>
            <p>
              We are a diverse group representing a broad range of ages, races, and ethnicities,
              united by a common desire for new and exciting cultural experiences. Our efforts
              culminate in our annual banner event — the Korean Festival Houston — one of the
              largest events hosted by a Korean-American non-profit in the country.
            </p>
          </div>
        </section>

        {/* ── OUR MISSION ── */}
        <section className="pt-16">
          <SectionHeading eyebrow="What drives us" title="Our Mission" />
          <ul className="mt-8 grid gap-4 sm:grid-cols-3">
            {mission.map((item) => (
              <li
                key={item}
                className="flex flex-col gap-3 rounded-2xl border border-gray-200 p-6 hover:border-kashBlue-200 hover:shadow-sm transition-all duration-200"
              >
                <span className="inline-flex w-10 h-10 items-center justify-center rounded-full bg-kashBlue-50 text-kashBlue-600 flex-shrink-0">
                  <Check className="w-5 h-5" />
                </span>
                <span className="text-base text-gray-600 leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* ── QUICK LINKS ── */}
        <section className="pt-16">
          <SectionHeading eyebrow="Get to know us" title="Explore KASH" />
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-5">
            {explore.map(({ Icon, label, sub, href }) => (
              <a
                key={href}
                href={href}
                className="group rounded-2xl border border-gray-200 p-6 hover:border-kashBlue-200 hover:shadow-md hover:-translate-y-1 transition-all duration-200"
              >
                <span className="inline-flex w-12 h-12 items-center justify-center rounded-xl bg-kashBlue-50 text-kashBlue-600 group-hover:bg-kashBlue-600 group-hover:text-white transition-colors duration-200">
                  <Icon className="w-6 h-6" />
                </span>
                <p className="mt-5 font-semibold text-kashBlue-950 group-hover:text-kashBlue-600 transition-colors duration-150">{label}</p>
                <p className="mt-1 text-sm text-gray-400">{sub}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-kashBlue-600 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200">
                  Learn more <ArrowRight className="w-4 h-4" />
                </span>
              </a>
            ))}
          </div>
        </section>
      </div>

      {/* ── MEMBERSHIP CTA ── */}
      <section className="mt-20 mb-24">
        <div className="max-w-5xl mx-auto px-6 sm:px-10">
          <div className="bg-gradient-to-br from-kashBlue-600 to-kashBlue-800 rounded-3xl px-8 sm:px-12 py-14 text-center relative overflow-hidden">
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
                Become a Member
              </h2>
              <p className="text-white/80 text-lg mb-8 max-w-md mx-auto leading-relaxed">
                Join a welcoming community, get access to members-only events, and be part of
                something bigger in Houston.
              </p>
              <Button href="https://app.joinit.com/o/kash" target="_blank" rel="noopener noreferrer" variant="light" size="lg" className="mx-auto">
                Become a Member <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
