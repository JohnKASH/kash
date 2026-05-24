"use client"

export default function ScholarshipPage() {
  return (
    <main className="bg-white text-gray-900 font-sans">

      {/* HERO */}
      <div className="relative w-full h-96 overflow-hidden">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: "url('/assets/kfestImages/Drummers.jpg')",
          }}
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
          <p className="text-lg text-gray-500 text-center max-w-2xl mx-auto mb-4">
            The Korean American Society of Houston is proud to support students who are working hard,
            to pursue their goals, and make a positive impact in their communities.
            Through the 2026 KASH Scholarship Program, we hope to recognize students
            for their creativity, perseverance, leadership, and personal growth academically or artistically.
          </p>
          <p className="text-base text-gray-500 text-center max-w-2xl mx-auto">
            Please note that you do NOT have to be Korean American to apply.
          </p>
          <p className="text-base text-gray-500 text-center max-w-2xl mx-auto">
            We encourage all students to apply — we value{" "}
            <span className="text-gray-900 font-semibold">authenticity, effort, and potential.</span>{" "}
          </p>
        </section>

        {/* AWARDS */}
        <section className="mb-20">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center">This Year&apos;s Awards</h2>
          <div className="w-12 h-1 bg-blue-800 rounded mx-auto mt-3 mb-3" />
          <p className="text-center text-gray-500 mb-10">
            KASH will award multiple $1,000 scholarships through the following opportunities
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            {/* Card 1 */}
            <div className="border border-gray-200 rounded-2xl p-8 relative overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-200">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-800 to-amber-500 rounded-t-2xl" />
              <div className="text-3xl mb-4">🏆</div>
              <p className="text-xs font-bold tracking-widest uppercase text-blue-800 mb-2">Award I</p>
              <h3 className="text-xl font-bold mb-3">KASH Academic Excellence Award</h3>
              <p className="text-gray-500 text-sm">
                Recognizing outstanding students who have demonstrated exceptional dedication to their academic pursuits and scholastic achievement.
              </p>
              <span className="inline-block mt-4 bg-blue-50 text-blue-800 font-bold text-sm px-4 py-1 rounded-full">
                $1,000 Scholarship
              </span>
            </div>

            {/* Card 2 */}
            <div className="border border-gray-200 rounded-2xl p-8 relative overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-200">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-800 to-amber-500 rounded-t-2xl" />
              <div className="text-3xl mb-4">🎨</div>
              <p className="text-xs font-bold tracking-widest uppercase text-blue-800 mb-2">Award II</p>
              <h3 className="text-xl font-bold mb-3">KASH Creative Voice Award</h3>
              <p className="text-gray-500 text-sm">
                Celebrating students who express themselves through creativity and use their unique voice to contribute meaningfully to their community.
              </p>
              <span className="inline-block mt-4 bg-blue-50 text-blue-800 font-bold text-sm px-4 py-1 rounded-full">
                $1,000 Scholarship
              </span>
            </div>
          </div>

          {/* Recognition Notice */}
          <div className="bg-blue-50 border border-blue-100 border-l-4 border-l-blue-800 rounded-xl p-6 flex gap-4 items-start">
            <span className="text-2xl mt-0.5 flex-shrink-0">📍</span>
            <p className="text-gray-800 text-sm leading-relaxed">
              Scholarship recipients will be notified in advance and{" "}
              <span className="font-bold text-blue-800">required to attend</span> Korean Festival Houston at Discovery Green on{" "}
              <span className="font-bold text-blue-800">October 10, 2026</span>, where they will be publicly recognized and celebrated.
            </p>
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
              <p className="text-gray-500 text-sm mb-5">
                Recognizes students who demonstrate commitment to their education, perseverance, leadership, and future potential. This scholarship is intended for students who strive to grow academically while contributing positively to their schools, families, and communities.
              </p>
              <p className="text-gray-400 text-xs italic mb-5">
                We understand that every student&apos;s journey is different, and we encourage applicants from all backgrounds and experiences to apply.
              </p>

              <div className="mt-auto">
                <p className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-3">Requirements</p>
                <ul className="space-y-2 mb-5">
                  <li className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-800 flex-shrink-0" />
                    <span>
                      <span className="font-semibold text-gray-800">Minimum Unweighted GPA</span>
                      <span className="block text-gray-500 mt-0.5 ml-0.5">High School Students: 2.3 &nbsp;·&nbsp; College Students: 3.0</span>
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-800 flex-shrink-0" />
                    Applicants who do not meet the GPA requirement are still encouraged to apply and explain their circumstances.
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-800 flex-shrink-0" />
                    One-page resume required
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-800 flex-shrink-0" />
                    Two short essays required
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
              <p className="text-gray-500 text-sm mb-5">
                Celebrates creativity, storytelling, and self-expression. Designed for students who want to share their ideas, perspectives, and talents through creative work. Applicants are encouraged to think outside the box and express themselves authentically.
              </p>
              <p className="text-gray-400 text-xs italic mb-5">
                Submissions may explore Korean culture, identity, tradition, community, or personal interpretation through any creative medium.
              </p>

              <div className="mt-auto">
                <p className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-3">Requirements</p>
                <ul className="space-y-2 mb-5">
                  <li className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-800 flex-shrink-0" />
                    No GPA requirement
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-800 flex-shrink-0" />
                    Open to all eligible students
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-800 flex-shrink-0" />
                    One original creative submission required
                  </li>
                </ul>

                <p className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-3">Accepted Formats</p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Video", "Photography", "Artwork or Drawing", "Digital Design",
                    "Music", "Dance", "Poetry", "Writing", "Animation",
                    "Multimedia Projects", "Other Creative Formats",
                  ].map((format) => (
                    <span
                      key={format}
                      className="bg-blue-50 text-blue-800 text-xs font-medium px-3 py-1 rounded-full"
                    >
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
                title: "Complete the Application Form",
                body: "Fill out the Google Form application in full. Incomplete applications will not be eligible.",
              },
              {
                num: 2,
                title: "Submit Additional Materials",
                body: "Creative projects must follow the provided prompt and guidelines exactly.",
              },
              {
                num: 3,
                title: "Submit Everything by the Deadline",
                body: null,
                custom: (
                  <p className="text-gray-500 text-sm">
                    Email your completed form and all materials to{" "}
                    <a href="mailto:John@kashouston.org" className="text-blue-800 font-semibold hover:underline">
                      John@kashouston.org
                    </a>{" "}
                    by <span className="font-bold text-gray-900">October 3, 2025 at 11:59 PM</span>. No late applications will be accepted.
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
          <p className="text-9xl text-white/[0.03] absolute top-0 right-0 pointer-events-none select-none leading-none">
            ✦
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">Ready to Apply?</h2>
          <p className="text-white/70 max-w-md mx-auto mb-8">
            Take the first step — submit your application today. We look forward to learning about your story.
          </p>
          <a
            href="https://forms.gle/NLWdKfPS8oK5VyW89"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-white text-blue-800 font-bold text-base px-10 py-3.5 rounded-xl hover:opacity-90 hover:-translate-y-0.5 transition-all duration-200 shadow-lg">
              Apply Now →
            </button>
          </a>
          <p className="text-white/40 text-xs tracking-wide mt-5">
            Deadline: October 3, 2025 · 11:59 PM · Submit to John@kashouston.org
          </p>
        </section>

        {/* CONTACT */}
        <p className="text-center text-gray-500 text-sm pb-20">
          Questions, comments, or concerns? Contact the scholarship chair at{" "}
          <a href="mailto:John@kashouston.org" className="text-blue-800 font-semibold hover:underline">
            John@kashouston.org
          </a>
        </p>

      </div>
    </main>
  );
}