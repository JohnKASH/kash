"use client"

const faqs = [
  {
    category: "Eligibility & Application",
    items: [
      {
        q: "Can I apply for both the Academic Excellence Award and the Creative Voice Award?",
        a: "No. To ensure fairness and allow more students to benefit from the program, applicants may apply for only one award category. Please choose the award that best reflects your achievements and strengths."
      },
      {
        q: "Do I have to be of Korean descent to apply?",
        a: "No. The KASH Scholarship Program is open to all students regardless of ethnicity or cultural background."
      },
      {
        q: "Do I have to live in Houston or Texas to apply?",
        a: "We primarily serve the greater Houston community, but students outside of Houston or Texas are still eligible to apply. Please note that recipients are required to attend the Korean Festival Houston on October 11, 2026 to receive their award in person."
      },
      {
        q: "Can international students or non-U.S. citizens apply?",
        a: "Please email John@kashouston.org to discuss your specific situation before applying."
      },
      {
        q: "What grade levels are eligible?",
        a: "The program is open to current high school and college students. If you are unsure whether your grade level qualifies, please reach out to us."
      },
      {
        q: "Can I apply if my GPA is below the listed minimum?",
        a: "Yes. We use a holistic review process and your essay is the place to share what your transcript may not fully capture. Applicants who do not meet the GPA starting point are still encouraged to apply."
      },
      {
        q: "Can I submit more than one creative piece for the Creative Voice Award?",
        a: "No. Each applicant may submit one original creative work. Make sure it represents your best and most authentic self."
      },
    ]
  },
  {
    category: "The Application Process",
    items: [
      {
        q: "How will I know my application was received?",
        a: "You will receive a confirmation email after submitting through the JotForm application. If you do not receive one within 24 hours, please email John@kashouston.org."
      },
      {
        q: "Can I edit or update my application after submitting?",
        a: "No. Once submitted, applications cannot be edited. Please review everything carefully before submitting."
      },
      {
        q: "What should I do if I have technical issues with the form?",
        a: "Email John@kashouston.org as soon as possible and describe the issue. We will do our best to assist you before the deadline."
      },
      {
        q: "Is there a fee to apply?",
        a: "No. The KASH Scholarship Program is completely free to apply for."
      },
    ]
  },
  {
    category: "The Creative Submission",
    items: [
      {
        q: "Does my creative submission have to be about Korean culture specifically?",
        a: "Yes. All submissions should respond to the theme of Korean Culture. However, there is no single correct approach—participants are encouraged to interpret the theme creatively and through their own unique perspective, experiences, and artistic voice."
      },
      {
        q: "How long should the artist's statement be?",
        a: "Artist statements follow the same 600-word maximum as all other written prompts in the application."
      },
      {
        q: "How do I submit a video or large file?",
        a: "The JotForm application will guide you through the submission process. If you have trouble uploading a large file, email John@kashouston.org for assistance."
      },
      {
        q: "Can I submit work I created for a school assignment or competition?",
        a: "Yes, as long as the work is original, was created solely by you, and has not been published or submitted elsewhere in a way that would conflict with this application."
      },
      {
        q: "Can I collaborate with someone else, or does the work have to be solo?",
        a: "Submissions must be your own individual work. Collaborative pieces are not eligible."
      },
    ]
  },
  {
    category: "Selection & Notification",
    items: [
      {
        q: "When will recipients be notified?",
        a: "Recipients will be notified in advance of the Korean Festival Houston on October 11, 2026. We aim to notify all recipients with enough time to make travel and attendance arrangements."
      },
      {
        q: "Will I be notified if I don't win?",
        a: "We will make every effort to notify all applicants of the final outcome."
      },
      {
        q: "How are applications scored?",
        a: "Applications are reviewed holistically by a selection committee. Reviewers consider GPA (where applicable), essay strength, leadership, perseverance, community involvement, and overall authenticity and potential."
      },
    ]
  },
  {
    category: "Receiving the Award",
    items: [
      {
        q: "How is the scholarship money paid — directly to me or to my school?",
        a: "Please email John@kashouston.org for details on disbursement methods, as this may vary by recipient situation."
      },
      {
        q: "When is the money disbursed?",
        a: "Scholarship funds are disbursed following the award ceremony at Korean Festival Houston on October 10, 2026."
      },
      {
        q: "Do I have to attend the Korean Festival in person to receive the award?",
        a: "Yes. Attendance at Korean Festival Houston on October 10, 2026 at Discovery Green is required to receive the scholarship. Recipients should check in at the KASH information booth upon arrival. Specific check-in times will be communicated to recipients in advance."
      },
      {
        q: "What happens if I can't attend the festival due to illness, distance, or emergency?",
        a: "We understand that unexpected circumstances arise. If you have a conflict or emergency, please contact John@kashouston.org as soon as possible. We will work with recipients on a case-by-case basis for out-of-town winners or documented emergencies. However, the current requirement is for all recipients to attend the festival."
      },
      {
        q: "Are there any tax implications I should know about?",
        a: "Scholarship funds used for qualified educational expenses are generally not taxable, but tax situations vary. We recommend consulting a tax professional or trusted adult for guidance specific to your situation."
      },
    ]
  },
];

export default function ScholarshipPage() {
  return (
    <main className="bg-white text-gray-900 font-sans">

      {/* HERO */}
      <div className="relative w-full h-96 overflow-hidden">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: "url('/assets/kfestImages/Drummers.jpg')" }}
        />
        <div className="absolute inset-0 w-full h-full bg-black opacity-50" />
        <h1 className="relative z-10 flex flex-col items-center justify-center w-full h-full text-center text-white text-3xl md:text-4xl lg:text-5xl font-bold px-10">
          2026 KASH Scholarship Program
        </h1>
      </div>

      <div className="max-w-4xl mx-auto px-5 sm:px-10">

        {/* ABOUT */}
        <section className="py-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center">About the Program</h2>
          <div className="w-12 h-1 bg-blue-800 rounded mx-auto mt-3 mb-8" />

          {/* Why KASH created the scholarship */}
          <div className="bg-blue-50 border border-blue-100 rounded-2xl px-8 py-7 mb-8 max-w-2xl mx-auto">
            <p className="text-sm font-bold tracking-widest uppercase text-blue-800 mb-2 text-center">Why This Scholarship Exists</p>
            <p className="text-gray-600 text-base text-center leading-relaxed">
              Since 2008, KASH has worked to bridge the Korean-American community and the greater Houston
              public through culture, leadership, and service. The KASH Scholarship Program is an extension
              of that mission — a way to invest directly in the next generation of students who are making
              a difference, one story at a time.
            </p>
          </div>

          <p className="text-lg text-gray-500 text-center max-w-2xl mx-auto mb-4">
            The Korean American Society of Houston is proud to support students who are working hard,
            pursuing their goals, and making a positive impact in their communities. Through the 2026 KASH
            Scholarship Program, we hope to recognize students not only for academic achievement, but also
            for creativity, perseverance, leadership, and personal growth.
          </p>
          <p className="text-base text-gray-500 text-center max-w-2xl mx-auto mb-2">
            You do <span className="font-semibold text-gray-800">not</span> have to be Korean American to apply.
          </p>
          <p className="text-base text-gray-500 text-center max-w-2xl mx-auto">
            We encourage all students to apply — we value{" "}
            <span className="text-gray-900 font-semibold">authenticity, effort, and potential.</span>
          </p>
        </section>

        {/* AWARDS */}
        <section className="mb-20">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center">This Year&apos;s Awards</h2>
          <div className="w-12 h-1 bg-blue-800 rounded mx-auto mt-3 mb-3" />
          <p className="text-center text-gray-500 mb-4 max-w-2xl mx-auto">
            KASH will award multiple $1,000 scholarships through the following opportunities.
          </p>

          {/* Award count clarity notice */}
          <div className="bg-amber-50 border border-amber-200 border-l-4 border-l-amber-500 rounded-xl px-6 py-4 mb-10 max-w-2xl mx-auto">
            <p className="text-sm text-amber-900 leading-relaxed">
              <span className="font-bold">Award Counts:</span> A minimum of 3 Academic Excellence Awards and 3 Creative Voice Awards will be given.
              We anticipate awarding <span className="font-semibold">10–12 scholarships total</span> across both categories in 2026,
              with final counts confirmed in September based on sponsorship commitments.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            {/* Card 1 */}
            <div className="border border-gray-200 rounded-2xl p-8 relative overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-200">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-800 to-amber-500 rounded-t-2xl" />
              <div className="text-3xl mb-4">🏆</div>
              <p className="text-xs font-bold tracking-widest uppercase text-blue-800 mb-2">Award I</p>
              <h3 className="text-xl font-bold mb-3">KASH Academic Excellence Award</h3>
              <p className="text-gray-500 text-sm">
                Recognizing outstanding students who demonstrate commitment to their education, perseverance,
                leadership, and future potential.
              </p>
              <span className="inline-block mt-4 bg-blue-50 text-blue-800 font-bold text-sm px-4 py-1 rounded-full">
                $1,000 · Multiple Recipients
              </span>
            </div>

            {/* Card 2 */}
            <div className="border border-gray-200 rounded-2xl p-8 relative overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-200">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-800 to-amber-500 rounded-t-2xl" />
              <div className="text-3xl mb-4">🎨</div>
              <p className="text-xs font-bold tracking-widest uppercase text-blue-800 mb-2">Award II</p>
              <h3 className="text-xl font-bold mb-3">KASH Creative Voice Award</h3>
              <p className="text-gray-500 text-sm">
                Celebrating students who express themselves through creativity and use their unique voice
                to contribute meaningfully to their community.
              </p>
              <span className="inline-block mt-4 bg-blue-50 text-blue-800 font-bold text-sm px-4 py-1 rounded-full">
                $1,000 · Multiple Recipients
              </span>
            </div>
          </div>

          {/* Recognition Notice */}
          <div className="bg-blue-50 border border-blue-100 border-l-4 border-l-blue-800 rounded-xl p-6 flex gap-4 items-start">
            <span className="text-2xl mt-0.5 flex-shrink-0">📍</span>
            <div className="text-sm text-gray-800 leading-relaxed space-y-2">
              <p>
                Scholarship recipients will be notified in advance and{" "}
                <span className="font-bold text-blue-800">required to attend</span> Korean Festival Houston
                at Discovery Green on{" "}
                <span className="font-bold text-blue-800">October 10, 2026</span> to receive their award in person.
              </p>
              <p>
                Check-in details, including specific times and the KASH booth location, will be communicated
                directly to recipients in advance. Recipients who are out of town or face a documented emergency
                should contact <a href="mailto:John@kashouston.org" className="text-blue-800 font-semibold hover:underline">John@kashouston.org</a> as
                early as possible — we handle these situations on a case-by-case basis.
              </p>
            </div>
          </div>
        </section>

        {/* REQUIREMENTS */}
        <section className="mb-20">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center">Requirements</h2>
          <div className="w-12 h-1 bg-blue-800 rounded mx-auto mt-3 mb-3" />
          <p className="text-center text-gray-500 mb-10">Review the requirements for each award before applying</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

            {/* Academic Excellence */}
            <div className="border border-gray-200 rounded-2xl p-8 relative overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-200 flex flex-col">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-800 to-amber-500 rounded-t-2xl" />
              <div className="text-3xl mb-4">🏆</div>
              <p className="text-xs font-bold tracking-widest uppercase text-blue-800 mb-2">Award I</p>
              <h3 className="text-xl font-bold mb-3">KASH Academic Excellence Award</h3>
              <p className="text-gray-500 text-sm mb-4">
                Recognizes students who demonstrate commitment to their education, perseverance, leadership,
                and future potential — while contributing positively to their schools, families, and communities.
              </p>

              {/* GPA clarification */}
              <div className="bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 mb-5 text-sm text-gray-600 italic">
                We use a holistic review process. GPA is one factor among several — leadership, perseverance,
                community involvement, and essay strength all matter. We look for a{" "}
                <span className="font-semibold not-italic text-gray-800">3.0 GPA as a starting point</span>, but
                if your transcript doesn&apos;t tell your whole story, your essay is the place to share what it&apos;s missing.
              </div>

              <div className="mt-auto">
                <p className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-3">Requirements</p>
                <ul className="space-y-2 mb-5">
                  <li className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-800 flex-shrink-0" />
                    <span>
                      <span className="font-semibold text-gray-800">GPA Starting Point: 3.0</span>
                      <span className="block text-gray-500 mt-0.5">Holistic review — a lower GPA does not disqualify you. Explain your circumstances in your essay.</span>
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-800 flex-shrink-0" />
                    One-page resume required
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-800 flex-shrink-0" />
                    <span>
                      <span className="font-semibold text-gray-800">Two short essays required</span>
                      <span className="block text-gray-500 mt-0.5">600-word maximum per essay. Prompts are provided in the JotForm application.</span>
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Creative Voice */}
            <div className="border border-gray-200 rounded-2xl p-8 relative overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-200 flex flex-col">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-800 to-amber-500 rounded-t-2xl" />
              <div className="text-3xl mb-4">🎨</div>
              <p className="text-xs font-bold tracking-widest uppercase text-blue-800 mb-2">Award II</p>
              <h3 className="text-xl font-bold mb-3">KASH Creative Voice Award</h3>
              <p className="text-gray-500 text-sm mb-4">
                Celebrates creativity, storytelling, and self-expression. Designed for students who want to share
                their ideas, perspectives, and talents through creative work.
              </p>
              <p className="text-gray-400 text-xs italic mb-5">
                Submissions may explore Korean culture, identity, tradition, community, or personal interpretation
                — or any theme authentic to you.
              </p>

              <div className="mt-auto">
                <p className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-3">Requirements</p>
                <ul className="space-y-2 mb-5">
                  <li className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-800 flex-shrink-0" />
                    No GPA requirement — open to all eligible students
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-800 flex-shrink-0" />
                    One original creative submission required
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-800 flex-shrink-0" />
                    <span>
                      <span className="font-semibold text-gray-800">Artist&apos;s statement required</span>
                      <span className="block text-gray-500 mt-0.5">600-word maximum</span>
                    </span>
                  </li>
                </ul>

                <p className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-3">Accepted Formats</p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Video", "Photography", "Artwork or Drawing", "Digital Design",
                    "Music", "Dance", "Animation",
                    "Multimedia Projects", "Other Creative Formats",
                  ].map((format) => (
                    <span key={format} className="bg-blue-50 text-blue-800 text-xs font-medium px-3 py-1 rounded-full">
                      {format}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* HOW TO APPLY */}
        <section className="mb-20">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center">How to Apply</h2>
          <div className="w-12 h-1 bg-blue-800 rounded mx-auto mt-3 mb-3" />
          <p className="text-center text-gray-500 mb-10">Complete all steps before the deadline</p>

          <div className="border border-gray-200 rounded-2xl overflow-hidden divide-y divide-gray-200">
            {[
              {
                num: 1,
                title: "Open the JotForm Application",
                body: "The form will first ask which scholarship you are applying for. Based on your selection, it will guide you through the required fields and prompts specific to that award.",
              },
              {
                num: 2,
                title: "Complete All Required Fields",
                body: "Fill out every section in full. Incomplete applications are not eligible. For the Creative Voice Award, be prepared to upload your creative submission and artist's statement.",
              },
              {
                num: 3,
                title: "Submit Everything by the Deadline",
                custom: (
                  <p className="text-gray-500 text-sm">
                    Submit your completed application and all materials to{" "}
                    <a href="mailto:John@kashouston.org" className="text-blue-800 font-semibold hover:underline">
                      John@kashouston.org
                    </a>{" "}
                    by <span className="font-bold text-gray-900">September 11, 2026 at 11:59 PM</span>. No late applications will be accepted.
                  </p>
                ),
              },
            ].map((step) => (
              <div key={step.num} className="flex items-start gap-5 p-6 hover:bg-blue-50 transition-colors duration-150">
                <div className="w-9 h-9 rounded-full bg-blue-800 text-white flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5">
                  {step.num}
                </div>
                <div>
                  <h4 className="font-bold mb-1">{step.title}</h4>
                  {step.custom ?? <p className="text-gray-500 text-sm">{step.body}</p>}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* DISQUALIFICATIONS */}
        <section className="mb-20">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center">Disqualifications</h2>
          <div className="w-12 h-1 bg-red-600 rounded mx-auto mt-3 mb-3" />
          <p className="text-center text-gray-500 mb-10">Applications will be disqualified for any of the following</p>

          <ul className="border border-red-100 rounded-2xl overflow-hidden divide-y divide-red-100">
            {[
              "Submissions containing profanity, hate speech, or inappropriate content",
              "Plagiarized, copied, or AI-generated work submitted as original work",
              "False or misleading information within the application",
              "Incomplete applications or missing required materials",
              "Creative projects that do not follow the provided prompt or guidelines",
            ].map((item) => (
              <li key={item} className="flex items-start gap-4 px-6 py-4 text-sm text-gray-800">
                <span className="text-red-600 font-bold mt-0.5 flex-shrink-0">✕</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-br from-blue-800 to-blue-950 rounded-2xl px-8 py-16 text-center mb-20 relative overflow-hidden">
          <p className="text-9xl text-white/[0.03] absolute top-0 right-0 pointer-events-none select-none leading-none">✦</p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">Ready to Apply?</h2>
          <p className="text-white/70 max-w-md mx-auto mb-8">
            Take the first step — submit your application today. We look forward to learning about your story.
          </p>
          <a href="https://form.jotform.com/261508897875073" target="_blank" rel="noopener noreferrer">
            <button className="bg-white text-blue-800 font-bold text-base px-10 py-3.5 rounded-xl hover:opacity-90 hover:-translate-y-0.5 transition-all duration-200 shadow-lg">
              Apply Now →
            </button>
          </a>
          <p className="text-white/40 text-xs tracking-wide mt-5">
            Deadline: September 11, 2026 · 11:59 PM · Questions? Email John@kashouston.org
          </p>
        </section>

        {/* FAQ */}
        <section className="mb-24">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center">Frequently Asked Questions</h2>
          <div className="w-12 h-1 bg-blue-800 rounded mx-auto mt-3 mb-3" />
          <p className="text-center text-gray-500 mb-12">
            Don&apos;t see your question?{" "}
            <a href="mailto:John@kashouston.org" className="text-blue-800 font-semibold hover:underline">Email us</a>.
          </p>

          <div className="space-y-10">
            {faqs.map((group) => (
              <div key={group.category}>
                <p className="text-xs font-bold tracking-widest uppercase text-blue-800 mb-4">{group.category}</p>
                <div className="border border-gray-200 rounded-2xl overflow-hidden divide-y divide-gray-100">
                  {group.items.map((item) => (
                    <details key={item.q} className="group px-6 py-4 hover:bg-blue-50 transition-colors duration-150 cursor-pointer">
                      <summary className="flex items-start justify-between gap-4 font-semibold text-sm text-gray-800 list-none">
                        {item.q}
                        <span className="text-blue-800 text-lg leading-none flex-shrink-0 group-open:rotate-45 transition-transform duration-200">+</span>
                      </summary>
                      <p className="mt-3 text-sm text-gray-500 leading-relaxed">{item.a}</p>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <p className="text-center text-gray-500 text-sm pb-20">
          Questions, comments, or concerns? Please email{" "}
          <a href="mailto:John@kashouston.org" className="text-blue-800 font-semibold hover:underline">
            John@kashouston.org
          </a>
        </p>

      </div>
    </main>
  );
}