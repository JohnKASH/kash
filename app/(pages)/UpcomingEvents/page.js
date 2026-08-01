"use client";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";
import { ArrowRight, Clock, Instagram, Mail, MapPin, Sparkles } from "@/components/icons";

// Colors for event tags. To add a new tag, just set `tag: "Your Text"` on an
// event below — known tags get their color from here, anything else falls back
// to DEFAULT_TAG_STYLE.
const tagStyles = {
  Cultural: "bg-kashGold-100 text-kashGold-700",
  Social: "bg-purple-100 text-purple-700",
  Community: "bg-green-100 text-green-700",
  "Members Only": "bg-kashBlue-100 text-kashBlue-700",
  "Book Club": "bg-rose-100 text-rose-700",
  "★ Main Event": "bg-white text-kashBlue-700",
};
const DEFAULT_TAG_STYLE = "bg-gray-100 text-gray-700";

const events = [
  {
    id: 1,
    date: { month: "JUN", day: "13", year: "2026" },
    title: "KASH Volunteer Day",
    subtitle: "Houston Food Bank",
    description: "Give back to the community alongside fellow KASH members at the Houston Food Bank. A great way to make an impact and meet new people.",
    time: "TBD",
    location: "Houston Food Bank",
    tag: "Community",
    highlight: false,
    past: true,
  },
  {
    id: 2,
    date: { month: "JUN", day: "27", year: "2026" },
    title: "KASH Book Club",
    subtitle: "First Meeting — Recurring Series",
    description: "The inaugural meeting of the KASH Book Club! Come ready to discuss, connect, and share. This is a recurring event — see below for upcoming reads and dates.",
    time: "10:00 AM",
    location: "TBD",
    tag: "Book Club",
    highlight: false,
    past: true,
  },
  {
    id: 3,
    date: { month: "JUL", day: "18", year: "2026" },
    title: "Members Movie Night",
    subtitle: "KASH Members Only",
    description: "Grab your popcorn! Join fellow KASH members for a fun movie night. Details on the film and venue coming soon.",
    time: "TBD",
    location: "TBD",
    tag: "Members Only",
    highlight: false,
    past: true,
  },
  {
    id: 4,
    date: { month: "AUG", day: "8", year: "2026" },
    title: "Korean Language Night",
    subtitle: "한국어만 사용하세요! (Tentative)",
    description: "Think you can survive a whole evening speaking only Korean? Come find out! Korean speakers will be on hand to facilitate. Beginners welcome — it&apos;s all in good fun.",
    time: "TBD",
    location: "TBD",
    tag: "Cultural",
    highlight: false,
    tentative: true,
  },
  {
    id: 10,
    date: { month: "AUG", day: "22", year: "2026" },
    title: "KASH Book Club",
    subtitle: "August Read — Oxford Soju Club by Jinwoo Park",
    description: "Our August pick is <em>Oxford Soju Club</em> by Jinwoo Park. Grab a copy, get reading, and join us for coffee and conversation.",
    time: "10:00 – 11:30 AM",
    location: "Coffee & Trein",
    tag: "Book Club",
    highlight: false,
  },
  {
    id: 5,
    date: { month: "AUG", day: "23", year: "2026" },
    title: "Korean Crafts Night",
    subtitle: "Get Creative",
    description: "Explore Korean arts and crafts in a relaxed, creative setting. No experience needed — just bring your curiosity and a good attitude.",
    time: "TBD",
    location: "TBD",
    tag: "Cultural",
    highlight: false,
  },
  {
    id: 6,
    date: { month: "SEP", day: "TBD", year: "2026" },
    title: "KASH Hangout & Dinner",
    subtitle: "Good Food, Good Company",
    description: "A casual KASH hangout and dinner with the crew. More details coming soon — keep an eye out!",
    time: "TBD",
    location: "TBD",
    tag: "Social",
    highlight: false,
    tentative: true,
  },
  {
    id: 7,
    date: { month: "OCT", day: "10–11", year: "2026" },
    title: "Korean Festival Houston",
    subtitle: "Discovery Green — Downtown Houston",
    description: "The biggest event of the year is back — and bigger than ever. Two full days of Korean culture, food, music, performances, and community in the heart of Houston. Free and open to all.",
    time: "All Day",
    location: "Discovery Green, Houston",
    tag: "★ Main Event", 
    highlight: true,
    links: [
      { label: "More Info", href: "https://www.kfesthouston.com/", variant: "light" },
      { label: "Volunteer for KFest", href: "https://form.jotform.com/241558126341150", variant: "gold" },
    ],
  },
  {
    id: 11,
    date: { month: "OCT", day: "24", year: "2026" },
    title: "KASH Book Club",
    subtitle: "October Read — Your Letter by Hyeon A. Cho",
    description: "October's pick is <em>Your Letter</em> by Hyeon A. Cho. Location to be announced — check back soon!",
    time: "10:00 – 11:30 AM",
    location: "TBD",
    tag: "Book Club",
    highlight: false,
  },
  {
    id: 8,
    date: { month: "NOV", day: "11", year: "2026" },
    title: "KASH Friendsgiving Potluck",
    subtitle: "Bring a Dish, Bring a Friend",
    description: "Celebrate the season with your KASH family! Bring a dish to share and come ready to eat, laugh, and be grateful together.",
    time: "TBD",
    location: "TBD",
    tag: "Social",
    highlight: false,
  },
  {
    id: 12,
    date: { month: "DEC", day: "12", year: "2026" },
    title: "KASH Book Club",
    subtitle: "December Read — The Rainfall Market by You Yeong-Gwang",
    description: "Close out the year with <em>The Rainfall Market</em> by You Yeong-Gwang. Location to be announced — check back soon!",
    time: "10:00 – 11:30 AM",
    location: "TBD",
    tag: "Book Club",
    highlight: false,
  },
  {
    id: 9,
    date: { month: "DEC", day: "20", year: "2026" },
    title: "End of Year Casino Night",
    subtitle: "Go Out in Style",
    description: "Cap off the year with a glamorous casino night! Dress up, try your luck, and celebrate everything KASH accomplished in 2026.",
    time: "TBD",
    location: "TBD",
    tag: "Social",
    highlight: false,
  },
];

export default function UpcomingEvents() {
  return (
    <main className="bg-white text-gray-900">

      <PageHero
        image="/assets/kfestImages/DrummersJumping.jpg"
        eyebrow="2026 Calendar"
        title="Upcoming Events"
        subtitle="From casual hangouts to the biggest Korean cultural festival in Houston — there's always something happening with KASH."
      />

      <div className="max-w-3xl mx-auto px-6 sm:px-10">

        {/* INTRO */}
        <section className="pt-20 pb-10">
          <SectionHeading eyebrow="What's coming up" title="Mark Your Calendar" />
        </section>

        {/* EVENT LIST */}
        <section className="mb-20 space-y-5">
          {events.map((event) => (
            <div
              key={event.id}
              className={`relative rounded-2xl border overflow-hidden transition-shadow duration-200 hover:shadow-lg ${event.highlight
                ? "border-kashBlue-700 bg-gradient-to-br from-kashBlue-700 to-kashBlue-950 text-white"
                : "border-gray-200 bg-white"
                } ${event.past ? "opacity-50 grayscale" : ""}`}
            >
              {/* top accent bar for non-highlighted */}
              {!event.highlight && (
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-kashBlue-600 to-kashGold-500" />
              )}

              <div className="flex flex-col sm:flex-row gap-0">

                {/* DATE BLOCK */}
                <div className={`flex-shrink-0 flex flex-col items-center justify-center px-6 py-5 sm:py-0 sm:w-28 text-center ${event.highlight ? "bg-white/10" : "bg-gray-50 border-b sm:border-b-0 sm:border-r border-gray-100"
                  }`}>
                  <span className={`text-xs font-bold tracking-widest uppercase ${event.highlight ? "text-kashGold-300" : "text-kashBlue-600"}`}>
                    {event.date.month}
                  </span>
                  <span className={`text-3xl font-bold leading-none my-1 ${event.past ? "line-through decoration-2" : ""} ${event.highlight ? "text-white" : "text-kashBlue-950"}`}>
                    {event.date.day}
                  </span>
                  <span className={`text-xs ${event.highlight ? "text-white/50" : "text-gray-400"}`}>
                    {event.date.year}
                  </span>
                </div>

                {/* CONTENT */}
                <div className="flex-1 px-6 py-5">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h3 className={`font-bold text-lg leading-tight ${event.past ? "line-through decoration-2" : ""} ${event.highlight ? "text-white" : "text-kashBlue-950"}`}>
                          {event.title}
                        </h3>
                        <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${tagStyles[event.tag] ?? DEFAULT_TAG_STYLE}`}>
                          {event.tag}
                        </span>
                        {event.past && (
                          <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-gray-200 text-gray-600">
                            Past Event
                          </span>
                        )}
                        {event.tentative && (
                          <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-yellow-100 text-yellow-700">
                            Tentative
                          </span>
                        )}
                      </div>
                      <p className={`text-sm ${event.highlight ? "text-white/70" : "text-gray-400"}`}>
                        {event.subtitle}
                      </p>
                    </div>
                  </div>

                  <p className={`text-sm leading-relaxed mb-3 ${event.highlight ? "text-white/80" : "text-gray-500"}`}
                    dangerouslySetInnerHTML={{ __html: event.description }}
                  />

                  <div className={`flex flex-wrap gap-4 text-xs ${event.highlight ? "text-white/60" : "text-gray-400"}`}>
                    {event.time !== "TBD" && (
                      <span className="inline-flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {event.time}</span>
                    )}
                    {event.location !== "TBD" && (
                      <span className="inline-flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" /> {event.location}</span>
                    )}
                    {event.time === "TBD" && event.location === "TBD" && (
                      <span className="italic">Details coming soon</span>
                    )}
                  </div>

                  {event.links && (
                    <div className="mt-4 flex flex-wrap gap-3">
                      {event.links.map((link) => (
                        <Button key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" variant={link.variant ?? "light"} size="sm">
                          {link.label} <ArrowRight className="w-4 h-4" />
                        </Button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* JOIN CTA */}
        <section className="mb-12">
          <div className="bg-gradient-to-br from-kashBlue-600 to-kashBlue-800 rounded-3xl px-8 py-12 text-center relative overflow-hidden">
            <p className="text-[6rem] text-white/[0.05] absolute -top-2 right-3 pointer-events-none select-none leading-none font-bold">
              KASH
            </p>
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">Want to Join KASH?</h2>
              <p className="text-white/75 max-w-sm mx-auto mb-8 leading-relaxed">
                Become a member and get access to members-only events, networking opportunities, and be part of something bigger in Houston.
              </p>
              <Button href="https://app.joinit.com/o/kash" target="_blank" rel="noopener noreferrer" variant="light" size="lg" className="mx-auto">
                Become a Member <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* KFEST CTA */}
        <section className="mb-12">
          <div className="border border-gray-200 rounded-2xl px-8 py-10 text-center hover:shadow-md transition-shadow duration-200">
            <span className="inline-flex w-14 h-14 items-center justify-center rounded-2xl bg-kashBlue-50 text-kashBlue-600 mb-5">
              <Sparkles className="w-7 h-7" />
            </span>
            <h2 className="text-xl font-bold text-kashBlue-950 mb-2">More on Korean Festival Houston</h2>
            <p className="text-gray-500 text-sm max-w-sm mx-auto mb-6 leading-relaxed">
              Want the full scoop on K-Fest 2026? Performances, food, vendors, sponsors and more — it&apos;s all on the official festival site.
            </p>
            <Button href="https://www.kfesthouston.com/" target="_blank" rel="noopener noreferrer" variant="primary" size="lg" className="mx-auto">
              Visit KFestHouston.com <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </section>

        {/* QUESTIONS */}
        <section className="mb-24 text-center">
          <h2 className="text-xl font-bold text-kashBlue-950 mb-2">Questions About an Event?</h2>
          <p className="text-gray-500 text-sm max-w-sm mx-auto mb-6 leading-relaxed">
            Reach out any time — we&apos;re happy to help with details, RSVPs, or anything else.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://www.instagram.com/kashouston/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-5 py-2.5 text-sm font-semibold text-kashBlue-950 hover:border-kashBlue-600 hover:text-kashBlue-700 transition-colors duration-200"
            >
              <Instagram className="w-4 h-4" /> @kashouston
            </a>
            <a
              href="mailto:info@kashouston.org"
              className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-5 py-2.5 text-sm font-semibold text-kashBlue-950 hover:border-kashBlue-600 hover:text-kashBlue-700 transition-colors duration-200"
            >
              <Mail className="w-4 h-4" /> info@kashouston.org
            </a>
          </div>
        </section>

      </div>
    </main>
  );
}
