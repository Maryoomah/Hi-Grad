import Section from "../components/section";
import Button from "../components/button";

export default function Contact() {
  return (
    <>
      {/* Hero */}
      <Section className="bg-higrad-navy text-white relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-linear-to-br from-higrad-green/10 via-transparent to-higrad-gold/10" />

        <div
          className="relative max-w-3xl mx-auto"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <p className="text-xs tracking-[0.35em] uppercase text-higrad-green font-medium">
            Get In Touch
          </p>

          <h1 className="mt-4 text-4xl sm:text-5xl font-bold">
            Ready to Start?
          </h1>

          <p className="mt-6 text-higrad-textSoft text-lg leading-relaxed">
            All levels welcome. All ages welcome. All enquiries answered
            personally. Reach out and we will get back to you promptly — usually
            within 24 hours.
          </p>
        </div>
      </Section>

      {/* Contact Cards */}
      <Section className="bg-white text-higrad-textDark">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: "💬",
              title: "WhatsApp",
              text: "+212 642 550 142",
              link: "https://wa.me/212642550142",
            },
            {
              icon: "✉️",
              title: "Email",
              text: "higradacademy@gmail.com",
              link: "mailto:higradacademy@gmail.com",
            },
            {
              icon: "📍",
              title: "Location",
              text: "Fes, Morocco + Online worldwide",
              link: "https://www.google.com/maps/search/Fes+Morocco",
            },
            {
              icon: "📸",
              title: "Instagram",
              text: "@higradacademy",
              link: "https://instagram.com/higradacademy",
            },
          ].map((item, i) => (
            <a
              key={i}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              data-aos="zoom-in"
              data-aos-delay={i * 120}
              className="group bg-higrad-cream border border-slate-200 rounded-2xl p-6 hover:border-higrad-green/40 hover:-translate-y-1 hover:shadow-md transition duration-300 block"
            >
              <p className="text-3xl">{item.icon}</p>

              <h3 className="mt-4 text-higrad-navy font-semibold group-hover:text-higrad-green transition">
                {item.title}
              </h3>

              <p className="mt-2 text-slate-600 text-sm leading-relaxed ">
                {item.text}
              </p>

              <p className="mt-4 text-xs text-higrad-green">Open →</p>
            </a>
          ))}
        </div>
      </Section>

      {/* TEFL Dates */}
      <Section className="bg-higrad-paleGreen text-higrad-textDark">
        <div className="max-w-3xl mx-auto text-center" data-aos="fade-up">
          <p className="text-xs tracking-[0.3em] uppercase text-higrad-green font-medium">
            TEFL Cohort 1 Dates
          </p>

          <h2 className="mt-4 text-3xl font-semibold text-higrad-navy">
            July 2026 Intake
          </h2>

          <div className="mt-8 grid sm:grid-cols-2 gap-6 text-left">
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
              <p className="text-sm text-slate-500">Start Date</p>
              <p className="mt-2 text-higrad-navy font-medium">
                Saturday 13th July 2026
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
              <p className="text-sm text-slate-500">End Date</p>
              <p className="mt-2 text-higrad-navy font-medium">
                Saturday 10th October 2026
              </p>
            </div>
          </div>

          <p className="mt-6 text-slate-600">
            Applications accepted on a rolling basis until places are filled.
          </p>

          <div className="mt-8">
            <Button href="https://wa.me/212642550142" variant="primary">
              Message Us on WhatsApp →
            </Button>
          </div>
        </div>
      </Section>

      {/* Contact Form */}
      <Section className="bg-higrad-cream text-higrad-textDark">
        <div className="max-w-3xl mx-auto">
          <div className="text-center" data-aos="fade-up">
            <p className="text-xs tracking-[0.3em] uppercase text-higrad-green font-medium">
              Send an Enquiry
            </p>

            <h2 className="mt-4 text-3xl font-semibold text-higrad-navy">
              We’ll Reply Within 24 Hours
            </h2>
          </div>

          <form
            action="https://formspree.io/f/xzdonokk"
            method="POST"
            className="mt-10 grid gap-5"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            <input type="hidden" name="_subject" value="New Hi-Grad Enquiry" />
            <input type="hidden" name="_captcha" value="false" />

            {[
              ["text", "name", "Your full name", true],
              ["email", "email", "Your email address", true],
              ["text", "phone", "WhatsApp / phone number (optional)", false],
            ].map(([type, name, placeholder, required]) => (
              <input
                key={name}
                type={type}
                name={name}
                placeholder={placeholder}
                required={required}
                className="bg-white border border-slate-200 rounded-xl px-5 py-4 text-higrad-navy outline-none focus:border-higrad-green"
              />
            ))}

            <select
              name="interest"
              required
              className="bg-white border border-slate-200 rounded-xl px-5 py-4 text-higrad-navy outline-none focus:border-higrad-green"
            >
              <option value="">I am interested in…</option>
              <option>English Classes</option>
              <option>Arabic Classes</option>
              <option>French Classes</option>
              <option>TEFL Programme</option>
              <option>Other</option>
            </select>

            <textarea
              name="experience"
              rows="4"
              placeholder="Teaching experience (if applying for TEFL)"
              className="bg-white border border-slate-200 rounded-xl px-5 py-4 text-higrad-navy outline-none focus:border-higrad-green"
            />

            <textarea
              name="message"
              rows="5"
              placeholder="Any questions or anything you'd like us to know…"
              required
              className="bg-white border border-slate-200 rounded-xl px-5 py-4 text-higrad-navy outline-none focus:border-higrad-green"
            />

            <button
              type="submit"
              className="mt-2 bg-higrad-green text-higrad-textDark font-semibold px-6 py-4 rounded-full hover:bg-higrad-greenDark transition"
            >
              Send Enquiry →
            </button>
          </form>
        </div>
      </Section>
    </>
  );
}
