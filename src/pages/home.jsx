import Section from "../components/section";
import Button from "../components/button";
import StatsSection from "../components/stats";
import Header from "../components/header";
import FAQSection from "../components/FAQ";
export default function Home() {
  return (
    <main className="">
      <Section
        className="relative min-h-[80vh] overflow-hidden text-center text-white flex items-center justify-center"
        data-aos="fade-up"
      >
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed opacity-30"
          style={{
            backgroundImage: `url(${import.meta.env.BASE_URL}images/png.png)`,
          }}
        />

        <div className="absolute inset-0 z-10 bg-slate-950/75" />

        <div className="relative z-20 max-w-4xl mx-auto px-4 md:px-6">
          <p className="text-sm md:text-lg font-semibold tracking-[0.2em] text-higrad-green uppercase mb-6">
            Hi-Grad Academy
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-[1.1]">
            Where Excellence Meets{" "}
            <span className="text-higrad-green">Opportunity</span>
          </h1>

          <p className="mt-8 text-lg sm:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Learn with us and engage confidently with the world through
            expert-led trainings.
          </p>

          <div className="mt-10 text-sm sm:text-base text-white/80 text-center flex flex-wrap justify-center gap-3 sm:gap-4">
            <span>English</span>

            <span className="text-higrad-gold">•</span>

            <span>Arabic</span>

            <span className="text-higrad-gold">•</span>

            <span>French</span>

            <span className="text-higrad-gold">•</span>

            <span>Beginner to Advanced</span>

            <span className="text-higrad-gold">•</span>

            <span>For All Ages</span>
          </div>

          <p className="text-sm mt-8 text-higrad-green font-semibold">
            TEFL Programme Now Open • Starts July 2026
          </p>

          <div className="mt-10 flex justify-center">
            <Button variant="primary" to="/courses">
              Get Started
            </Button>
          </div>
        </div>
      </Section>
      {/* stat */}
      <StatsSection />
      <Section
        data-aos="fade-up"
        className="bg-higrad-cream text-higrad-textDark py-24"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* left content */}
          <div
            className="
        flex-1
        bg-white
        border border-slate-200
        rounded-3xl
        p-8 sm:p-10
        shadow-sm
      "
          >
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-higrad-green mb-4">
              About Hi-Grad
            </p>

            <h1 className="text-3xl sm:text-4xl font-extrabold text-higrad-navy leading-tight">
              Built on Expertise. Driven by Results.
            </h1>

            <p className="mt-6 text-slate-600 italic leading-relaxed">
              “Every learner deserves to be taught by someone who truly knows
              what they are doing. That is the Hi-Grad Promise.”
            </p>

            <p className="mt-2 text-higrad-green font-semibold">
              — Shina Hashim Jimoh, Founder and Director.
            </p>

            <p className="mt-6 text-slate-700 leading-relaxed">
              Hi-Grad Academy is an international language and teacher training
              centre offering English, Arabic, and French programmes — alongside
              the Master TEFL Programme for aspiring educators. Expert-led.
              Internationally aligned. Personally delivered.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button variant="primary" to="/courses">
                Explore Programmes
              </Button>

              <Button variant="secondary" to="/contact">
                Get in Touch
              </Button>
            </div>
          </div>

          {/* right image */}
          <div className="flex justify-center shrink-0">
            <img
              src={`${import.meta.env.BASE_URL}images/logo.jpeg`}
              alt="hi-grad logo"
              className="w-72 sm:w-96 rounded-3xl shadow-xl"
            />
          </div>
        </div>
      </Section>
      {/* programme */}
      <Section className="bg-white text-higrad-textDark">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <Header className="text-higrad-navy tracking-tight">
            Our Programmes
          </Header>

          <p className="mt-4 text-slate-600 leading-relaxed">
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
  bg-higrad-cream
  border border-slate-200
  rounded-3xl
  p-8 sm:p-10
  shadow-sm
  hover:shadow-xl
  hover:border-higrad-green/50
  transition-all duration-300
  hover:-translate-y-1
"
              data-aos="fade-up"
            >
              <h3 className="text-lg font-semibold text-higrad-navy">
                {program.title}
              </h3>

              <ul className="mt-6 space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                {" "}
                {program.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-higrad-green">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Featured Programme */}
        <div
          data-aos="fade-up"
          className="
    mt-24
    bg-higrad-navy
    border border-higrad-navyDark
    rounded-3xl
    px-8 sm:px-10 lg:px-14
    py-14 lg:py-16
    grid grid-cols-1 lg:grid-cols-2
    gap-12 lg:gap-16
    shadow-xl shadow-black/20
  "
        >
          {/* Left */}
          <div className="flex flex-col justify-center">
            <p className="mb-6 inline-flex w-fit text-sm font-semibold text-higrad-navy bg-higrad-green px-4 py-2 rounded-full tracking-wide">
              Enrollment Open
            </p>

            <h3 className="text-3xl sm:text-4xl font-bold text-higrad-green leading-tight">
              Hi-Grad Master TEFL Programme
            </h3>

            <p className="mt-6 text-higrad-textSoft leading-8 text-base sm:text-lg max-w-xl">
              A comprehensive, internationally aligned teacher training
              programme designed and delivered by a Cambridge-qualified,
              CELTA-certified, MA-qualified educator.
            </p>
          </div>

          {/* Right */}
          <div className="bg-higrad-navyDark border border-white/10 rounded-3xl p-6 sm:p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
            px-5 py-4
            rounded-2xl
            bg-white/5
            border border-white/10
            text-sm
            flex flex-col
            hover:border-higrad-green/50
            transition-all duration-300
          "
                >
                  <span className="text-higrad-textSoft/70 text-xs uppercase tracking-wide">
                    {label}
                  </span>

                  <span className="text-white font-semibold mt-1">{value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center lg:col-span-2 pt-2">
            <Button variant="primary" to="/tefl">
              View Full Details
            </Button>
          </div>
        </div>
      </Section>
      {/* why */}
      <Section className="bg-higrad-paleGreen text-higrad-textDark py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <Header className="text-higrad-navy tracking-tight">
              Why Hi-Grad?
            </Header>

            <p className="mt-5 text-slate-600 text-base sm:text-lg leading-relaxed">
              Six reasons learners and teachers choose Hi-Grad Academy over any
              other centre.
            </p>
          </div>

          <div className="mt-16 grid gap-8 lg:gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {[
 {
              title: "Genuine Expertise",
              text: "Our Director holds a Cambridge CELTA, multiple TKT modules, a completed MA, and served as a Cambridge Speaking Examiner. You are not taught by a junior tutor — you are taught by a master practitioner.",
            },
            {
              title: "Truly Trilingual",
              text: "English, Arabic, and French — taught by a multilingual educator. Most centres offer one language. We offer three, at professional level. That breadth is rare and genuinely valuable.",
            },
            {
              title: "Learner & Trainer",
              text: "We serve both language learners and professional teachers. The Master TEFL Programme gives educators formal recognition — something almost no other centre provides.",
            },
            {
              title: "International Standards",
              text: "Cambridge, CELTA, TKT, IELTS — our teaching is anchored in globally recognised frameworks. Learners receive world-class instruction in a local, personal setting.",
            },
            {
              title: "Personal Attention",
              text: "We are not a factory. Every learner gets genuine attention, structured progress tracking, and a pathway tailored to their goals. Small cohorts. Real relationships. Measurable outcomes.",
            },
            {
              title: "Flexible Delivery",
              text: "Online and in-person — learners choose what suits them. Whether you are nearby or anywhere in the world, Hi-Grad Academy meets you where you are.",
            },            ].map((item, i) => (
              <div
                key={i}
                data-aos="fade-up"
                className="
            p-8 sm:p-10
            rounded-3xl
            bg-white
            border border-slate-200
            shadow-sm
            hover:shadow-xl
            hover:-translate-y-1
            hover:border-higrad-green/40
            transition-all duration-300
          "
              >
                <p className="text-higrad-green font-semibold text-sm tracking-[0.18em]">
                  {String(i + 1).padStart(2, "0")} —
                </p>

                <h3 className="mt-5 text-higrad-navy font-bold text-xl">
                  {item.title}
                </h3>

                <p className="mt-4 text-slate-600 text-sm sm:text-base leading-8">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>
      {/* faqs */}
      <Section id="faq" className="bg-higrad-cream text-higrad-textDark">
        <FAQSection />
      </Section>
      {/* cta */}
   <Section
  data-aos="zoom-in"
  className="
    relative
    overflow-hidden
    text-center
    text-white
  "
>
  {/* subtle background image */}
  <div
    className="absolute inset-0 bg-cover bg-center bg-fixed opacity-20"
    style={{
      backgroundImage: `url(${import.meta.env.BASE_URL}images/png.png)`,
    }}
  />

  {/* soft navy overlay */}
  <div className="absolute inset-0 bg-higrad-navy/92" />

  {/* subtle glow */}
  <div className="absolute inset-0 bg-linear-to-br from-higrad-green/10 via-transparent to-higrad-gold/10" />

  {/* content */}
  <div className="relative z-10 max-w-3xl mx-auto">
    <Header className="text-higrad-green">
      Ready to Start Your Journey?
    </Header>

    <p className="mt-5 text-higrad-textSoft text-base sm:text-lg leading-relaxed">
      Join Hi-Grad Academy and take the next step to expertise. Whether
      you're a learner or an educator, your path starts here.
    </p>

    <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
      <Button to="/courses" variant="primary">
        View Programmes
      </Button>

      <Button
        href="https://wa.me/212642550142"
        variant="secondaryDark"
      >
        Contact Us
      </Button>
    </div>
  </div>
</Section>
    </main>
  );
}
