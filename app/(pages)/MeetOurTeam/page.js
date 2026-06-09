"use client"
import Image from "next/image";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";

const team = [
  {
    name: "Yang Nam",
    title: "KASH Board Member, Festival Founding Member & Executive Director",
    image: "https://images.squarespace-cdn.com/content/v1/59305f4df7e0ab8a82c43c7a/40b8ee12-90b8-494f-9663-ef5e776e238e/1687990781330.jpg",
    bio: [
      "Yang has been part of KASH since its earliest days, when the Korean Festival was still just a dream on paper. As a longtime board member and festival director, he's stayed committed to empowering young leaders—helping them grow both professionally and personally.",
      "With over 18 years in HR and recruiting, Yang is the Founder and Managing Partner of WeHire Group, a Houston-based boutique firm that partners with HR teams across energy, healthcare, manufacturing, and corporate sectors to make hiring more human and effective.",
      "His passion for community runs deep. In 2009, Yang joined forces with fellow young professionals to launch the Korean Festival Houston, now one of the city's most beloved cultural events. Whether he's building teams or building community, Yang is driven by connection and purpose.",
    ],
    funFacts: [
      "👖 He loves jiu jitsu, but isn't great at it. Also, Yang once dreamt of starting a streetwear brand called 'Seoul Side.' He has since moved on to a new dream…",
      "🍜 Free-time joys: Eating, plotting his next move, spending time with his favorite people aka his wife, Tina, and kiddos Adam and Alex.",
      "💬 Seeing how much the festival has grown and the how beloved the K - Fest has become in the community!",
    ],
  },
  {
    name: "Janet Hong",
    title: "KASH President & Festival Director",
    image: "https://images.squarespace-cdn.com/content/v1/59305f4df7e0ab8a82c43c7a/a75680e2-55c7-4490-ad61-e3c105c7ffb6/IMG_9351.jpeg",
    bio: [
      "With over 19 years in nonprofit leadership and eight years of service with KASH, Janet Hong is the heart behind Korean Festival Houston's growing impact. As President, she supports team leads and helps oversee operations with the same energy she's poured into youth programs across Texas—from academic support to university partnerships.",
      "A proud Houston native and Korean-American, Janet believes in sharing heritage and modern culture in one of the country's most diverse cities. Her leadership is rooted in community-building, mentorship, and a love for people—both on and off the stage.",
    ],
    funFacts: [
      "🥋 Fun fact: Janet's a first-degree black belt in taekwondo",
      "🎶🍜 Free-time joys: Traveling, cooking, concerts, and exploring new eats",
      "💬 There's still so much room to get creative—and we welcome anyone who wants to be a part of it!",
    ],
  },
  {
    name: "Crystal Ching",
    title: "Stage Director",
    image: "https://images.squarespace-cdn.com/content/v1/59305f4df7e0ab8a82c43c7a/3c6d15b1-6632-491a-89b9-87add1e97d07/2262034225725279460.jpg",
    bio: [
      "Since joining KASH in 2021, Crystal Ching has poured her passion for theatre and community into Korean Festival Houston. As Stage Committee Lead, she helps craft engaging programming that highlights local talent and celebrates Korean culture.",
      "A mother, caretaker, and part-time trading card business worker, Crystal's adaptability and creative energy shine through—whether she's producing stage events or hosting K-Pop fan projects. Her favorite part? Empowering volunteers to grow and take bold steps outside their comfort zones.",
    ],
    funFacts: [
      "📚🎮 Fun fact: Crystal has uncanny luck picking blind boxes—for her friends, not herself!",
      "💬 Please do it! I've met lots of my friends through volunteering for KASH.",
    ],
  },
  {
    name: "Heather Gaskins",
    title: "Korean Village & Cultural Activities Director",
    image: "https://images.squarespace-cdn.com/content/v1/59305f4df7e0ab8a82c43c7a/028214cd-e4c7-4048-afde-3b03a75fabba/image.png",
    bio: [
      "Heather joined KASH in 2018 after her little sister invited her to a casual K-BBQ picnic—and from that moment on, she knew she'd found her community. As the daughter of a retired U.S. Air Force Master Sergeant, Heather grew up experiencing life across the globe, from living in Turkey and Germany to her early college days in Hawaii. Those adventures sparked a lifelong love for exploring cultures and a deep passion for building community wherever she goes.",
      "Today, she brings that same energy to Korean Village, Korean Festival's interactive learning space designed for curious minds from ages 8 to 80.",
    ],
    funFacts: [
      "👩‍🍳 Fun fact: Heather holds a degree in culinary arts.",
      "⭐ Free-time fun: Cooking, hanging out with her dog Mr. Darcy, and going on shopping trips with her mom and sisters",
      "💙 Find the sweetness in life.There's always something good to be found—even on the worst day!",
    ],
  },
  {
    name: "Kimmy Nunley",
    title: "Marketing Director",
    image: "https://images.squarespace-cdn.com/content/v1/59305f4df7e0ab8a82c43c7a/85cf0a70-7b50-455c-bf53-963e7ccc9d2c/Screenshot+2025-07-30+140640.png",
    bio: [
      "Since 2018, Kimmy Nunley (formerly Gaskins) has been the creative voice behind Korean Festival Houston's expanding reach. Raised in a globe-trotting Air Force family, Kimmy brings her vibrant spirit and deep cultural appreciation to every marketing campaign and conversation.",
      "With a background in administrative support and a knack for connecting with people, she's helped KASH grow while building community across all walks of life. Her artistry and writing infuse the festival's messaging with authenticity and warmth, inviting everyone to experience Korean culture.",
    ],
    funFacts: [
      "🍦 Fun fact: Kimmy mastered the perfect soft-serve swirl at Chick-fil-A!",
      "📚🎬 In her downtime: Curling up with a book, gaming, watching K-Dramas, and quality time with her cats, Penny and Moon, and her husband",
      "💬 It only takes one small 'yes' to change your future and pursue something new.Our goal is to change our community, and guess what, YOU'RE INVITED! ☺️",
    ],
  },
  {
    name: "Patricia Han",
    title: "Vendors Director",
    image: "https://images.squarespace-cdn.com/content/v1/59305f4df7e0ab8a82c43c7a/60d85f17-f5e2-4aeb-b124-fe8d67183bf0/1517573951057.jpg",
    bio: [
      "Patricia Han joined KASH in 2018 and quickly became a familiar face—and heart—within the community. Since 2021, she's been a key part of the Vendors team, bringing her signature mix of organization, kindness, and can-do spirit to every festival.",
      "By day, Patricia is a Physical Therapist at CHI St. Luke's Health – Baylor St. Luke's Medical Center, where she puts her Doctor of Physical Therapy degree to work helping people heal and thrive. Her passion for care doesn't stop at the clinic—she also travels to underserved areas through medical missions, partnering with Villa de las Niñas in Chalco, Mexico to bring healing where it's needed most.",
      "Whether she's coordinating vendors or lending a hand abroad, Patricia is all about building community, one meaningful connection at a time.",
    ],
    funFacts: [
      "👟 Fun fact: Patricia can tie her shoes with one hand. Don't ask her to show you, she can't share her trade secrets.",
      "🎤 Favorite pastime: Trying new restaurants, karaoke, and spending time with friends",
      "🩶 Don't give up! There's something good coming around the bend!",
    ],
  },
  {
    name: "Jeong-min Park",
    title: "VIP Hospitality Director",
    image: "https://images.squarespace-cdn.com/content/v1/59305f4df7e0ab8a82c43c7a/d1a575c0-4a02-4d09-affc-40416e5103de/headshot_JPark.JPG",
    bio: [
      "Jeong-Min moved to Houston from Korea six years ago and has been serving with KASH for the past two. As a researcher at the Texas Medical Center and cultural ambassador at heart, she's passionate about sharing her heritage with the Houston community.",
      "Whether she's organizing VIP experiences or leading outreach during Lunar New Year, her attention to detail and love for Korean culture shine through. She's excited about the festival's future growth and committed to passing on her experience to future leaders.",
    ],
    funFacts: [
      "👩‍🔬 Fun fact: All the famous Koreans named Jeong-Min are men—except her!",
      "📺🎧 Fave free-time activities: Watching shows, reading webtoons, and working out",
      "💬 We warmly welcome everyone who wants to be part of KASH.Just take the first step!",
    ],
  },
  {
    name: "John Nam",
    title: "Volunteer Director",
    image: "https://images.squarespace-cdn.com/content/v1/59305f4df7e0ab8a82c43c7a/97f36cc1-1676-4204-98a2-2fb63cf72871/IMG_6760.jpg",
    bio: [
      "John has been involved in KASH activites after being forced to participate by his brother but finally became an officer in 2023, bringing tech-savvy skills, teaching experience, and a whole lot of enthusiasm to the Korean Festival Houston. Whether he's recruiting volunteers, building websites, or translating for performers, John's all in—driven by a love for Korean culture and a legacy started by his brother, one of the festival's original organizers.",
      "With a background in electrical engineering and a job supporting schools through edtech, John is all about growth and community. He's proud of helping KASH spread joy year-round through events and wants to see more young members and networking opportunities in the future.",
    ],
    funFacts: [
      "🃏 Fun fact: John's a jack of all trades and recently dove into trading cards",
      "🕹 Free-time faves: Watching shows, gaming with friends, and learning something new",
      "💬 Join! You won't regret it! If you enjoy Korean dramas, foods, music, or just want to hang out with friends, this is a great organization to do just that. You will find people with similar interests and build great relationships within the org.",
    ],
  },
];

export default function MeetOurTeam() {
  return (
    <main className="bg-white text-gray-900">

      <PageHero
        image="/assets/kfestImages/GroupPhoto.jpg"
        eyebrow="Our People"
        title="Meet the Team"
        subtitle="Korean Festival Houston is made possible by a dedicated group of volunteers and leaders who give their time, talent, and heart to celebrate Korean culture with all of Houston."
      />

      {/* INTRO */}
      <div className="max-w-3xl mx-auto px-6 sm:px-10 pt-20 pb-4 text-center">
        <SectionHeading align="center" eyebrow="Volunteers & Leaders" title="The People Behind K-Fest" />
      </div>

      {/* TEAM MEMBERS */}
      <div className="max-w-4xl mx-auto px-6 sm:px-10 py-12 space-y-8 pb-24">
        {team.map((member, i) => (
          <div
            key={member.name}
            className={`flex flex-col ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8 items-start border border-gray-200 rounded-2xl p-6 md:p-8 hover:border-kashBlue-200 hover:shadow-md transition-all duration-200`}
          >
            {/* Photo */}
            <div className="w-full md:w-48 flex-shrink-0">
              <div className="relative w-full md:w-48 h-52 md:h-56 rounded-xl overflow-hidden ring-1 ring-gray-100">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-top"
                  unoptimized
                />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-kashBlue-950">{member.name}</h3>
                <p className="text-xs font-semibold tracking-[0.16em] uppercase text-kashBlue-600 mt-1.5">{member.title}</p>
              </div>

              <div className="space-y-3 mb-5">
                {member.bio.map((para, j) => (
                  <p key={j} className="text-gray-500 text-sm leading-relaxed">{para}</p>
                ))}
              </div>

              <div className="bg-kashBlue-50/60 border border-kashBlue-100 rounded-xl px-5 py-4 space-y-2">
                {member.funFacts.map((fact, j) => (
                  <p key={j} className="text-sm text-gray-600 leading-relaxed">{fact}</p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

    </main>
  );
}