import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-full">
      {/* Header Image Section */}
      <div className="relative w-full h-96 overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <Image fill src="/assets/LandingPageImages/LandingPhoto.jpg" className="w-full h-full object-cover" alt="Mentorship Program Banner" />
          <div className="absolute inset-0 w-full h-full bg-black opacity-50" />
        </div>
        <h1 className="relative z-10 flex flex-col items-center justify-center w-full h-full text-center text-white text-3xl md:text-4xl lg:text-5xl font-bold px-10">
          2025 KASH Mentorship Program
        </h1>
      </div>

      {/* Content Section */}
      <div className="px-10 sm:px-20 md:px-30 lg:w-2/3 m-auto">
        <Section title="Purpose">
          <p>
            Interested in giving back or gaining guidance through mentorship? The KASH Mentorship Program is an
            opportunity for members of the Korean American Society of Houston to connect, learn, and grow together.
            Whether you&apos;re looking to mentor or be mentored, this program offers a welcoming space to share experiences,
            build meaningful relationships, and support one another within our community.
          </p>
          <p className="mt-4">
            This initiative pairs college and early post-college individuals with mentors based on shared interests such as
            business, entrepreneurship, engineering, coding, teaching, and more.
          </p>
        </Section>

        <Section title="Requirements">
          <ul className="list-disc ml-5 space-y-2">
            <li>
              Be a current KASH Member (
              <a className="text-kashBlue-600 underline" href="https://app.joinit.com/o/kash" target="_blank">
                Join here
              </a>
              ). <span className="text-sm text-gray-600">We offer student discounts!</span>
            </li>
            <li>Mentees: College or early post-college individuals seeking guidance</li>
            <li>Mentors: Industry professionals willing to share knowledge</li>
            <li>Commitment to scheduled meetings and program activities</li>
            <li>A positive attitude!</li>
          </ul>
        </Section>

        <Section title="Timeline">
          <ul className="list-disc ml-5 space-y-2">
            <li>Application Period: June 02 – June 30</li>
            <li>Matching Process: July 01 - July 09</li>
            <li>Program Duration: July 11 - October 11</li>
            <li>Survey & Feedback: ~1 week after program end</li>
          </ul>
        </Section>

        <Section title="Program Structure & Planning">
          <ul className="list-disc ml-5 space-y-2">
            <li>Matches based on interests, career goals, and experience</li>
            <li>3-month duration with phases: onboarding, active mentoring, wrap-up</li>
            <li>Re-matching option if needed</li>
          </ul>
        </Section>

        <Section title="Application & Selection">
          <ul className="list-disc ml-5 space-y-2">
            <li>Must be a current KASH Member</li>
            <li>Clear motivation and willingness to engage</li>
            <li>Alignment with KASH values: positivity, community-mindedness, respect</li>
          </ul>
        </Section>

        <Section title="Mentorship Expectations">
          <ul className="list-disc ml-5 space-y-2">
            <li>Attend the Kickoff Mixer: July 11, 2025</li>
            <li>Minimum 2 meetings/month with each other (at least one in-person)</li>
            <li>Participate in the post-program feedback survey</li>
            <li>Maintain professionalism and communication</li>
            <li>Both mentors and mentees are expected to show initiative - come prepared to each meeting with updates, questions, or discussion topics.</li>
            <li>Check-ins and support will be provided throughout the duration of the program</li>
          </ul>
        </Section>

        <Section title="Apply Today!">
          <p>Not sure if you want to be a mentor or mentee? Apply for both! We&apos;ll match you based on experience and preferences. We&apos;re excited to review your application!</p>
          <div className="mt-4 space-x-4 ">
            <a href="https://forms.gle/jxVCMJzuobKNQ1e6A" target="_blank">
              <button className="bg-kashBlue-600 text-white rounded-lg py-2 px-4 hover:bg-gray-600">Apply as Mentee</button>
            </a>
            <a href="https://forms.gle/MHA8igM9kw5FmyX38" target="_blank">
              <button className="bg-kashBlue-600 text-white rounded-lg py-2 px-4 hover:bg-gray-600">Apply as Mentor</button>
            </a>
          </div>
        </Section>

        <Section title="Have questions?">
          <p>Email us! - John@kashouston.org</p>
        </Section>

      </div>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <section className="pt-10 pb-4">
      <h2 className="text-black text-2xl md:text-3xl lg:text-4xl font-bold">{title}</h2>
      <div className="text-lg mt-2">{children}</div>
    </section>
  );
}
