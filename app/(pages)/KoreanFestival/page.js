"use client"
import Image from "next/image";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";
import { ArrowRight, MapPin, Calendar, Users, Sparkles } from "@/components/icons";

const facts = [
  { Icon: Calendar, label: "Oct 10–11, 2026", sub: "Two full days" },
  { Icon: MapPin, label: "Discovery Green", sub: "Downtown Houston" },
  { Icon: Users, label: "35,000+ visitors", sub: "In a single day" },
  { Icon: Sparkles, label: "Free admission", sub: "Open to all" },
];

export default function KoreanFestival() {
  return (
    <main className="bg-white text-gray-900">

      <PageHero
        image="/assets/kfestImages/Crowd.jpg"
        size="tall"
        eyebrow="October 10–11, 2026 · Discovery Green"
        title="Korean Festival Houston"
        subtitle="One of the largest free Korean cultural festivals in the country — two days of food, music, performance, and community in the heart of Houston."
      >
        <Button href="https://www.kfesthouston.com/" target="_blank" rel="noopener noreferrer" variant="light" size="lg">
          Visit the Festival Site <ArrowRight className="w-4 h-4" />
        </Button>
      </PageHero>

      {/* QUICK FACTS */}
      <section className="border-b border-gray-100 bg-kashBlue-50/40">
        <div className="max-w-5xl mx-auto px-6 sm:px-10 py-10 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {facts.map(({ Icon, label, sub }) => (
            <div key={label} className="flex items-center gap-3">
              <span className="inline-flex w-11 h-11 items-center justify-center rounded-xl bg-white text-kashBlue-600 flex-shrink-0 shadow-sm">
                <Icon className="w-5 h-5" />
              </span>
              <div>
                <p className="font-bold text-kashBlue-950 leading-tight">{label}</p>
                <p className="text-xs text-gray-500">{sub}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-6 sm:px-10">

        {/* EXPERIENCE */}
        <section className="pt-20">
          <SectionHeading
            align="center"
            eyebrow="The Experience"
            title="Experience Korea in the Heart of Houston"
            subtitle="Established in 2009, the Korean Festival has become one of the largest free cultural events hosted at Discovery Green in Downtown Houston, drawing tens of thousands of visitors to its cultural presentations and culinary experiences."
          />
        </section>

        {/* HISTORY */}
        <section className="pt-16">
          <SectionHeading align="center" eyebrow="How It Started" title="The History of Korean Festival Houston" />
          <div className="space-y-4 text-lg text-gray-600 leading-relaxed mt-8">
            <p>
              Since the 1950s, Koreans have been an integral part of Houston&apos;s history. Throughout
              the decades the Korean community quietly preserved its heritage and traditions through
              local events like small-scale festivals and parades. Prior to 2009, there had not been
              a unifying event that all of Houston could partake in and that could bring together the
              entire Korean-American community.
            </p>
            <p>
              The enterprising young professionals of the Korean-American Society of Houston (KASH)
              organized the very first Korean Festival Houston in the Houston Community College –
              Spring Branch parking lot with the support of local community and business
              organizations. The success of that inaugural event was clear evidence of the significant
              demand for Korean cultural experiences in Houston.
            </p>
            <p>
              Bolstered by the enthusiastic support from the community, KASH made a bold decision in
              the very next year to move the Korean Festival to its current home at Discovery Green.
            </p>
            <p>
              In 2024, Korean Festival Houston celebrated its fifteenth anniversary and expanded to
              two days for the first time — welcoming over 35,000 visitors in a single day. It&apos;s
              an honor to partner with dozens of global and local sponsors to bring a truly
              exhilarating and spectacular experience to the heart of Houston.
            </p>
            <p>
              This <span className="font-semibold text-gray-900">October 10–11, 2026</span>, the festival
              returns to Discovery Green for another unforgettable celebration — and everyone is invited.
            </p>
          </div>
        </section>

        {/* VOLUNTEER CTA */}
        <section className="mt-16">
          <div className="bg-gradient-to-br from-kashBlue-600 to-kashBlue-800 rounded-3xl px-8 py-14 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
              Interested in Volunteering?
            </h2>
            <p className="text-white/75 mb-8 max-w-md mx-auto leading-relaxed">
              Join our team and help make Korean Festival Houston an unforgettable experience.
            </p>
            <Button href="https://form.jotform.com/241558126341150" target="_blank" rel="noopener noreferrer" variant="light" size="lg" className="mx-auto">
              Apply to Volunteer <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </section>

        {/* SPONSORS */}
        <section className="mt-20 mb-24 text-center">
          <SectionHeading align="center" eyebrow="With Thanks To" title="Our Sponsors" />
          <Image
            src="/assets/kfestImages/2025sponsors.png"
            alt="Korean Festival Houston Sponsors"
            width={800}
            height={500}
            className="mx-auto w-full max-w-2xl mt-10"
          />
        </section>

      </div>
    </main>
  );
}
