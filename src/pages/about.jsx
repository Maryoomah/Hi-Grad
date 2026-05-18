import Section from "../components/section";
import Header from "../components/header";
import Button from "../components/button";

export default function About() {
  return (
    <>
      {/* Hero */}
      <Section className="relative text-center bg-higrad-navy text-white overflow-hidden">
        {/* Subtle brand glow */}
        <div className="absolute inset-0 bg-linear-to-br from-higrad-green/10 via-transparent to-higrad-gold/10 pointer-events-none" />

        <div
          className="relative max-w-3xl mx-auto"
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          <p className="text-xs tracking-[0.35em] uppercase text-higrad-green font-medium">
            Hi-Grad Academy
          </p>

          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            <span className="text-higrad-green">Built on Expertise.</span>
            <br />
            <span className="text-white">Driven by Results.</span>
          </h1>

          <p className="mt-6 text-higrad-textSoft text-lg sm:text-xl leading-relaxed">
            A{" "}
            <span className="text-higrad-gold font-semibold">
              professionally led
            </span>{" "}
            language academy committed to excellence in teaching, learning, and
            teacher development.
          </p>
        </div>
      </Section>
   {/* Stats */}
<Section className="bg-white text-higrad-textDark">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 text-center">
    {[
      { value: "20+", label: "Years in ELT" },
      { value: "3", label: "Languages Taught" },
      { value: "3", label: "Countries Worked" },
      { value: "100%", label: "Expert-led Sessions" },
    ].map((stat, i) => (
      <div
        key={i}
        data-aos="zoom-in"
        data-aos-delay={i * 120}
        className="
          bg-higrad-cream
          border border-slate-200
          rounded-3xl
          p-8 sm:p-10
          hover:-translate-y-1
          hover:border-higrad-green/40
          hover:shadow-xl
          transition-all duration-300
        "
      >
        <p className="text-4xl sm:text-5xl font-extrabold text-higrad-green">
          {stat.value}
        </p>

        <p className="text-sm sm:text-base text-slate-600 mt-5 leading-relaxed">
          {stat.label}
        </p>
      </div>
    ))}
  </div>
</Section>
      {/* Story */}
      <Section className="bg-higrad-cream text-higrad-textDark">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div data-aos="fade-right" data-aos-duration="1000">
            <p className="text-xs tracking-[0.3em] uppercase text-higrad-green font-semibold">
              Our Story
            </p>

            <h3 className="mt-3 text-3xl sm:text-4xl font-semibold text-higrad-navy leading-tight">
              Built to Raise the Standard of Language Learning
            </h3>

            <p className="mt-6 text-slate-700 leading-relaxed">
              Hi-Grad Academy began with a clear belief: language education
              should be led by professionals who understand both teaching
              excellence and real learner success.
            </p>

            <p className="mt-4 text-slate-600 leading-relaxed">
              Too many learners settle for average instruction. We created a
              centre where quality, structure, and measurable progress come
              first.
            </p>

            <p className="mt-4 text-slate-600 leading-relaxed">
              Today, we help students and teachers grow through expert-led
              programmes in English, Arabic, French, and TEFL training — both
              online and in-person.
            </p>
          </div>

          {/* Right Cards */}
          <div
            className="grid gap-5"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            {[
              "Expert-led teaching methods",
              "International learning standards",
              "Online & in-person programmes",
              "Real confidence, real progress",
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm hover:border-higrad-green/40 hover:translate-x-2 transition duration-300"
              >
                <p className="text-higrad-navy font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>
      {/* Director */}
      <Section className="bg-higrad-navy text-white">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Image */}
          <div
            className="flex justify-center"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <div className="relative w-64 h-64 rounded-3xl bg-higrad-navyDark border border-white/10 shadow-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-higrad-green/20 to-higrad-gold/10"></div>
              <div className="absolute inset-3 border border-white/10 rounded-2xl"></div>
            </div>
          </div>

          {/* Content */}
          <div data-aos="fade-left" data-aos-duration="1000">
            <p className="text-xs tracking-[0.3em] uppercase text-higrad-green font-medium">
              Programme Director
            </p>

            <h2 className="mt-3 text-3xl sm:text-4xl font-semibold text-white">
              Shina Hashim Jimoh
            </h2>

            <p className="mt-2 text-higrad-textSoft">
              Founder & Director,{" "}
              <span className="text-higrad-green">Hi-Grad Academy</span>
            </p>

            <p className="mt-5 text-sm text-higrad-textSoft leading-relaxed">
              Cambridge-qualified educator, CELTA-certified trainer, former
              Cambridge Speaking Examiner, and holder of an MA in Applied
              Language Studies.
            </p>

            <p className="mt-4 text-sm text-higrad-textSoft/80">
              Over{" "}
              <span className="text-higrad-gold font-medium">20 years</span>{" "}
              shaping language learners and teachers across continents.
            </p>

            <p className="mt-5 text-xs text-higrad-textSoft/60">
              📍 Fes, Morocco
            </p>
          </div>
        </div>
      </Section>

      {/* Philosophy */}
      <Section className="bg-white text-higrad-textDark">
        <div
          className="max-w-4xl mx-auto text-center"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-higrad-green font-medium">
            Our Philosophy
          </p>

          <h3 className="mt-3 text-3xl font-semibold text-higrad-navy">
            Raising Standards Through Expertise
          </h3>

          <p className="mt-6 text-slate-700 leading-relaxed text-lg">
            Hi-Grad Academy was founded with one conviction:
            <span className="text-higrad-gold font-medium">
              {" "}
              every learner deserves exceptional teaching.
            </span>
          </p>

          <p className="mt-5 text-slate-600 leading-relaxed">
            We are not a franchise. We are not a chain. We are a professionally
            led centre committed to excellence in English, Arabic, French, and
            TEFL training—online and in person.
          </p>
        </div>
      </Section>

{/* Quote CTA */}
<Section className="relative overflow-hidden text-center text-white">
  
  {/* subtle background image */}
  <div
    className="absolute inset-0 bg-cover bg-center bg-fixed opacity-15"
    style={{
      backgroundImage: `url(${import.meta.env.BASE_URL}images/png.png)`,
    }}
  />

  {/* dark overlay */}
  <div className="absolute inset-0 bg-higrad-navy/95" />

  {/* soft gradient glow */}
  <div className="absolute inset-0 bg-linear-to-r from-higrad-green/10 via-transparent to-higrad-gold/10" />

  <div
    className="relative z-10 max-w-4xl mx-auto"
    data-aos="zoom-in"
    data-aos-duration="1000"
  >
    <p className="text-3xl sm:text-4xl lg:text-5xl italic leading-[1.5] font-light text-white">
      “Every learner deserves to be taught by someone who truly knows what
      they are doing.”
    </p>

    <p className="mt-6 text-higrad-green font-semibold text-lg tracking-wide">
      The Hi-Grad Promise
    </p>

    <p className="mt-8 text-higrad-textSoft text-sm sm:text-base">
      — Shina Hashim Jimoh, Founder & Director
    </p>

    <div className="mt-10">
      <Button variant="primary" to="/courses">
        View Hi-Grad Courses
      </Button>
    </div>
  </div>
</Section>
    </>
  );
}
