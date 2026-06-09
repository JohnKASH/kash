"use client"
import { useForm, ValidationError } from '@formspree/react';
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";
import { ArrowRight, Check } from "@/components/icons";

const CONTACT_EMAIL = "info@kashouston.org";

export default function ContactPage() {
  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_CONTACT_FORM_ENDPOINT);

  return (
    <main className="bg-white text-gray-900">

      <PageHero
        image="/assets/kfestImages/Contact.jpg"
        eyebrow="Get In Touch"
        title="Contact Us"
        subtitle="Questions about KASH? We'd love to hear from you — send us a message and we'll get back to you."
      />

      <div className="max-w-4xl mx-auto px-5 sm:px-10">

        {/* MESSAGE FORM */}
        <section className="py-20 mb-4">
          <SectionHeading
            align="center"
            eyebrow="Send a Message"
            title="Drop Us a Line"
            subtitle="Fill out the form below and we'll get back to you as soon as we can."
          />

          <div className="border border-gray-200 rounded-2xl p-8 sm:p-10 mt-12 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-kashBlue-600 to-kashGold-500" />

            {state.succeeded ? (
              <div className="text-center py-10">
                <span className="inline-flex w-14 h-14 items-center justify-center rounded-full bg-kashBlue-50 text-kashBlue-600 mb-5">
                  <Check className="w-7 h-7" />
                </span>
                <h3 className="text-2xl font-bold text-kashBlue-950 mb-3">Thank You!</h3>
                <p className="text-gray-500 max-w-md mx-auto mb-8 leading-relaxed">
                  Your message has been sent. We appreciate you reaching out and will get back to you soon.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Button href="/" variant="outline" size="md">
                    Return Home
                  </Button>
                  <Button href="https://app.joinit.com/o/kash" target="_blank" rel="noopener noreferrer" variant="primary" size="md">
                    Become a Member <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-xs font-semibold tracking-[0.18em] uppercase text-gray-400 mb-2">
                      First Name
                    </label>
                    <input
                      id="firstName" name="firstName" type="text" placeholder="Jane" required
                      className="block w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-800 leading-tight transition-colors focus:outline-none focus:border-kashBlue-400 focus:bg-white"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-xs font-semibold tracking-[0.18em] uppercase text-gray-400 mb-2">
                      Last Name
                    </label>
                    <input
                      id="lastName" name="lastName" type="text" placeholder="Doe" required
                      className="block w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-800 leading-tight transition-colors focus:outline-none focus:border-kashBlue-400 focus:bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-semibold tracking-[0.18em] uppercase text-gray-400 mb-2">
                    Email Address
                  </label>
                  <input
                    id="email" name="email" type="email" placeholder="you@example.com" required
                    className="block w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-800 leading-tight transition-colors focus:outline-none focus:border-kashBlue-400 focus:bg-white"
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-sm mt-2" />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold tracking-[0.18em] uppercase text-gray-400 mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message" name="message" rows="8" placeholder="How can we help?" required
                    className="block w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-800 leading-tight transition-colors focus:outline-none focus:border-kashBlue-400 focus:bg-white resize-y"
                  ></textarea>
                  <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 text-sm mt-2" />
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-2">
                  <label className="flex items-center gap-3 text-sm text-gray-600">
                    <input name="newsletter" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-kashBlue-600 focus:ring-kashBlue-400" />
                    Sign me up for the newsletter!
                  </label>
                  <button
                    type="submit"
                    disabled={state.submitting}
                    className="inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-200 bg-kashBlue-600 text-white shadow-sm hover:bg-kashBlue-700 hover:-translate-y-0.5 px-6 py-2.5 text-sm disabled:opacity-60 disabled:hover:translate-y-0 disabled:cursor-not-allowed"
                  >
                    {state.submitting ? "Sending..." : "Send Message"}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}
          </div>

          <p className="text-center text-gray-500 text-sm mt-8">
            Prefer email? Reach us directly at{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-kashBlue-700 font-semibold hover:underline">
              {CONTACT_EMAIL}
            </a>
          </p>
        </section>

      </div>
    </main>
  );
}
