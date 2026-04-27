import Section from "../components/section";
import Button from "../components/button";
import StatsSection from "../components/stats";
export default function Home() {
  return (
    <main className="">
      {/* hero */}
      <Section
        className="text-center bg-slate-800 text-lime-500"
        data-aos="fade-up"
      >
        {/* content wrapper */}
        <div className="max-w-2xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Where Excellence Meets Opportunity
          </h1>

          {/* Subheading */}
          <p className="mt-4 text-base sm:text-lg text-yellow-500 max-w-2xl">
            Learn with us and engage confidently with the world through
            expert-led trainings.
          </p>
          {/* Language Strip */}
          <div className="mt-6 text-sm sm:text-base text-lime-00 text-center">
            English • Arabic • French
            <span className="mx-2">|</span>
            Beginner to Advanced
            <span className="mx-2">|</span>
            For All Ages
          </div>
          {/* CTA */}
          <div className="mt-6 flex justify-center">
            <Button variant="primary">Get Started</Button>
          </div>
        </div>
      </Section>
      {/* stat */}
      <StatsSection />
      {/* About */}
      <Section className="bg-slate-800 text-lime-500 ">
        <div className="flex items-center justify-center gap-12">
          {/* left content */}
          <div className="max-w-xl text-left ">
            <h1>About Hi-Grad</h1>
            <p className="mt-4  text-justify">
              <span className="text-white/75 italic">
                {" "}
                "Every learner deserves to be taught by someone who truly knows
                what they are doing. That is the Hi-Grad Promise."-{" "}
              </span>
              <span className="text-yellow-500">
                {" "}
                Shina Hashim Jimoh, Founder and Director.
              </span>
            </p>
            <p className="text-justify">
              Hi-Grad Academy is an international language and teacher training
              centre offering English, Arabic, and French programmes — alongside
              the Master TEFL Programme for aspiring educators. Expert-led.
              Internationally aligned. Personally delivered.
            </p>
            <div className=" mt-6">
              <Button variant="primary" href="/">
                Explore Programmes
              </Button>
              <Button variant="secondary">Get in Touch</Button>
            </div>
          </div>
          {/* right */}
          <div>
            <img
              src="/images/logo.jpeg" 
              alt="hi-grad logo"
              className="w-80 rounded-xl"
            />
          </div>
        </div>
      </Section>
      {/* programme */}
      <Section className="bg-slate-950">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
            Our Programmes
          </h2>
          <p className="mt-4 text-slate-400 leading-relaxed">
            Hi-Grad offers structured programmes for every learner — from
            complete beginners to advanced professionals. Delivered online and
            in-person in Fes, Morocco.
          </p>
        </div>

        {/* Language Programmes */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "English",
              items: [
                "General English",
                "Business English",
                "IELTS Preparation",
                "Young Learners",
                "Conversation Classes",
              ],
            },
            {
              title: "Arabic",
              items: [
                "Modern Standard Arabic",
                "Conversational Arabic",
                "Arabic for Beginners",
                "Intermediate & Advanced",
                "Arabic for Specific Purposes",
              ],
            },
            {
              title: "French",
              items: [
                "General French",
                "Professional French",
                "Communication Skills",
                "DELF/DALF Preparation",
                "French for Young Learners",
              ],
            },
          ].map((program, i) => (
            <div
              key={i}
              className="
            bg-slate-900 
            border border-slate-800 
            rounded-2xl 
            p-6 
            shadow-lg shadow-black/20
            hover:border-lime-400/40 
            hover:shadow-lime-400/10
            transition-all duration-300 
            hover:-translate-y-1
          "
            >
              <h3 className="text-lg font-semibold text-lime-400">
                {program.title}
              </h3>

              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                {program.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-lime-400">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Featured Programme */}
        <div className="mt-20 bg-slate-900 border border-slate-800 rounded-2xl p-8 grid grid-cols-1 lg:grid-cols-2 gap-10 shadow-xl shadow-black/30">
          {/* Left */}
          <div>
            <p className="mb-5 inline-block text-sm text-lime-400 font-medium bg-lime-400/10 px-3 py-1 rounded-full">
              Enrollment Open
            </p>

            <h3 className="text-2xl font-semibold text-yellow-400">
              Hi-Grad Master TEFL Programme
            </h3>

            <p className="mt-4 text-slate-300 leading-relaxed">
              A comprehensive, internationally aligned teacher training
              programme designed and delivered by a Cambridge-qualified,
              CELTA-certified, MA-qualified educator.
            </p>

            <div className="mt-6">
              <Button variant="primary" href="/courses">
                View Full Details
              </Button>
            </div>
          </div>

          {/* Right (Key Info - Pills) */}
          <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
            <div className="flex flex-wrap gap-3">
              {[
                ["Duration", "13 weeks"],
                ["Start", "July 2026"],
                ["Mode", "Hybrid"],
                ["Format", "Zoom + Async"],
                ["Fee", "$199"],
                ["Class Size", "Max 16"],
              ].map(([label, value], i) => (
                <div
                  key={i}
                  className="
          px-4 py-2 
          rounded-full 
          bg-slate-900 
          border border-slate-700 
          text-sm 
          flex items-center gap-2
          hover:border-lime-400/40
          transition
        "
                >
                  <span className="text-slate-400">{label}:</span>
                  <span className="text-white font-medium">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
