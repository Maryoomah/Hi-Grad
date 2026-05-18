import Section from "../components/section";
import Button from "../components/button";
import Header from "../components/header";
export default function Courses() {
  return (
    <>
  {/* hero */}
<Section
  data-aos="fade-up"
  className="bg-higrad-navy text-center text-white"
>
  <div>
    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-higrad-green">
      Hi-Grad Courses
    </h1>

    <p className="mt-4 text-higrad-textSoft">
      Explore our range of language programmes designed for learners of all
      levels and ages.
    </p>

    <div className="mt-6 text-sm text-higrad-gold font-medium">
      TEFL Cohort 1 now enrolling • Starts July 2026
    </div>

    <div className="mt-6 flex flex-wrap justify-center gap-4">
      <Button variant="primary" to="/tefl">
        Apply for TEFL
      </Button>

      <Button variant="secondaryDark" href="#courses">
        View Courses
      </Button>
    </div>
  </div>
</Section>
 <Section className="bg-white text-higrad-textDark">
  {/* Header */}
  <div id="courses" className="text-center">
    <h1 className="text-3xl sm:text-4xl font-bold text-higrad-green">
      Our Courses
    </h1>

    <p className="mt-4 text-slate-600">
      Flexible language programmes for learners of all levels and ages —
      available online and in-person.
    </p>
  </div>

  {/* Courses Grid */}
  <div className="mt-12 grid gap-8 lg:grid-cols-3">
    {[
      {
        title: "English",
        items: [
          ["General English", "Beginner to Advanced"],
          ["Business English", "Professional contexts"],
          ["IELTS Preparation", "Exam skills & strategies"],
          ["Young Learners", "Ages 6–16, all levels"],
          ["Conversation Classes", "Fluency & confidence"],
        ],
      },
      {
        title: "Arabic · العربية",
        items: [
          ["Modern Standard Arabic", "Formal & written"],
          ["Conversational Arabic", "Spoken communication"],
          ["Arabic for Beginners", "Start from zero"],
          ["Intermediate & Advanced", "Build fluency"],
          ["Arabic for Special Purposes", "On request"],
        ],
      },
      {
        title: "French · Français",
        items: [
          ["General French", "Beginner to Advanced"],
          ["Professional French", "Workplace contexts"],
          ["French Communication", "Everyday spoken French"],
          ["DELF / DALF Preparation", "Exam ready"],
          ["French for Young Learners", "Ages 6+"],
        ],
      },
    ].map((program, i) => (
      <div
        key={i}
        data-aos="fade-up"
        className="
          group relative
          bg-higrad-cream
          rounded-2xl
          p-6
          border border-slate-200
          shadow-sm
          transition-all duration-300
          hover:-translate-y-2
          hover:shadow-md
          hover:border-higrad-green/40
        "
      >
        <h2 className="mt-2 text-xl font-semibold text-higrad-navy">
          {program.title}
        </h2>

        <p className="mt-1 text-sm text-slate-600">
          All levels · Online & In-Person
        </p>

        <ul className="mt-6 space-y-3 text-sm">
          {program.items.map(([title, desc], idx) => (
            <li key={idx}>
              <span className="font-medium text-higrad-navy">
                {title}
              </span>
              <p className="text-slate-600">{desc}</p>
            </li>
          ))}
        </ul>

        <div className="mt-8">
          <a
            className="text-higrad-green text-sm font-semibold hover:text-higrad-greenDark transition"
            href="https://wa.me/212642550142"
            target="_blank"
            rel="noopener noreferrer"
          >
            Enquire →
          </a>
        </div>
      </div>
    ))}
  </div>
</Section>
  {/* Exam */}
<Section
  data-aos="fade-down"
  className="bg-higrad-cream text-higrad-textDark"
>
  {/* Header */}
  <div className="text-center">
    <Header className="text-higrad-navy">
      Exam Preparation & Support
    </Header>

    <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
      We prepare learners for internationally recognised English language
      examinations through structured courses, expert guidance, and proven
      strategies.
    </p>
  </div>

  {/* Exams Grid */}
<div className="mt-16 grid gap-8 lg:gap-10 sm:grid-cols-2 lg:grid-cols-4">    {[
      {
        icon: "📝",
        title: "IELTS",
        desc: "International English Language Testing System — Academic & General Training.",
        level: "A1 — C2",
      },
      {
        icon: "⭐",
        title: "Cambridge YLE",
        desc: "Young Learners English — Starters, Movers & Flyers for ages 7–12.",
        level: "Young Learners",
      },
      {
        icon: "🔑",
        title: "Cambridge KET",
        desc: "A2 Key — foundation-level certification for everyday communication.",
        level: "A2 Level",
      },
      {
        icon: "🎓",
        title: "Cambridge CAE",
        desc: "C1 Advanced — for university entrance and professional use.",
        level: "C1 Level",
      },
    ].map((exam, i) => (
     <div
  key={i}
  className="
    group relative
    bg-white
    rounded-3xl
    p-8 sm:p-10
    border border-slate-200
    shadow-sm
    transition-all duration-300
    hover:-translate-y-2
    hover:shadow-xl
    hover:border-higrad-green/40
  "
>
  <div className="text-3xl">
    {exam.icon}
  </div>

  <h3 className="mt-6 text-xl font-bold text-higrad-navy">
    {exam.title}
  </h3>

  <p className="mt-4 text-sm sm:text-base text-slate-600 leading-8">
    {exam.desc}
  </p>

  <p className="mt-6 text-xs uppercase tracking-[0.18em] text-higrad-green font-semibold">
    {exam.level}
  </p>
</div>
    ))}
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

{/* CTA */}
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

  {/* navy overlay */}
  <div className="absolute inset-0 bg-higrad-navy/92" />

  {/* subtle glow */}
  <div className="absolute inset-0 bg-linear-to-br from-higrad-green/10 via-transparent to-higrad-gold/10" />

  {/* content */}
  <div className="relative z-10 max-w-3xl mx-auto">
    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-higrad-green leading-tight">
      Not Sure Where to Start?
    </h2>

    <p className="mt-6 text-higrad-textSoft text-base sm:text-lg leading-relaxed">
      We’ll help you choose the right course based on your level, goals,
      and schedule. Get personalised guidance from our team.
    </p>

    <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
      <Button
        href="https://wa.me/212642550142"
        variant="primary"
      >
        Get Guidance
      </Button>

      <Button to="/tefl" variant="secondaryDark">
        Explore TEFL Programme
      </Button>
    </div>
  </div>
</Section>
    </>
  );
}
