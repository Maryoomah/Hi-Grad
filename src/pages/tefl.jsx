import Button from "../components/button";
import Section from "../components/section";
import TEFLSchedule from "./teflTimeline";
import Header from "../components/header";
export default function TEFL() {
  return (
    <main>
      {/* hero */}
      <Section data-aos="fade-up" className="bg-higrad-navy text-white">
        <div>
          <h1 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-higrad-green text-center">
            Hi-Grad Master TEFL Programme
          </h1>

          <p className="mt-4 text-higrad-textSoft text-center max-w-2xl mx-auto">
            A 13-week structured teacher training programme that moves you from
            theory to real-learner teaching practice.
          </p>

          <p className="text-sm text-higrad-gold font-medium text-center mt-6">
            Cohort 1 • Now Enrolling • Starts July 2026
          </p>

          <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="primary" href="https://forms.gle/B4PyQP6ZXmMaqUU26">
              Apply Now
            </Button>

            <Button variant="secondaryDark" href="#tefl">
              View Curriculum
            </Button>
          </div>
        </div>
      </Section>
   {/* phases */}
<Section
  data-aos="fade-up"
  className="bg-higrad-cream text-higrad-textDark"
>
  <div id="tefl" className="text-center max-w-3xl mx-auto">
    <Header className="text-higrad-navy">
      Three Phases. One Destination.
    </Header>

    <p className="mt-5 text-slate-600 text-base sm:text-lg leading-relaxed">
      The programme moves you from foundational theory to real-learner
      teaching practice in a carefully sequenced 13-week arc.
    </p>

    <p className="mt-3 text-slate-600 leading-relaxed">
      Live sessions every two weeks on Zoom. Practical from Week 1.
    </p>
  </div>

  <div className="grid lg:grid-cols-3 gap-8 lg:gap-10 mt-16">
    {[
      {
        title: "Phase 1 — Foundations",
        items: [
          "How people learn languages (SLA)",
          "Lesson frameworks: PPP, ESA, TTT",
          "Writing clear lesson aims",
          "Micro-Teach 1 (15 mins)",
          "4 guided observation tasks",
        ],
      },
      {
        title: "Phase 2 — Skills & Practice",
        items: [
          "CCQs, elicitation, phonemics",
          "Receptive & productive skills",
          "Error correction & feedback",
          "Classroom management",
          "Micro-Teach 2 — 20 minutes",
        ],
      },
      {
        title: "Phase 3 — Practicum",
        items: [
          "Reflective teaching",
          "Lesson planning clinic",
          "TP1: 40 minutes with real learners",
          "TP2: Revised lesson",
          "Graduation Ceremony",
        ],
      },
    ].map((phase, i) => (
      <div
        key={i}
        data-aos="fade-up"
        className="
          bg-white
          p-8 sm:p-10
          rounded-3xl
          border border-slate-200
          shadow-sm
          hover:shadow-xl
          hover:border-higrad-green/40
          hover:-translate-y-1
          transition-all duration-300
        "
      >
        <h3 className="text-2xl font-bold text-higrad-green leading-snug">
          {phase.title}
        </h3>

        <ul className="mt-8 space-y-5 text-sm sm:text-base text-slate-600 leading-relaxed">
          {phase.items.map((item, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <span className="text-higrad-green mt-1">•</span>

              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
</Section>

     <Section className="bg-higrad-paleGreen text-higrad-textDark">
  <div className="text-center max-w-3xl mx-auto">
    <Header className="text-higrad-navy">
      What You Get
    </Header>

    <p className="text-slate-600 mt-5 text-base sm:text-lg leading-relaxed">
      Everything you need to teach with confidence.
    </p>
  </div>

  <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
    {[
      {
        title: "🎯 Live Trainer Feedback",
        text: "Individual written feedback after every assessed task — not automated. Your trainer reads your work and responds personally.",
      },
      {
        title: "👩‍🏫 Real-Learner Teaching",
        text: "You teach real volunteer ESL learners — twice. Not your classmates. Actual learners with actual gaps in English.",
      },
      {
        title: "📋 Full Assessment Suite",
        text: "Six graded components: 4 observation tasks, 2 micro-teaches, 2 teaching practices, a language awareness task, and a reflective essay.",
      },
      {
        title: "📚 Module Reading Briefs",
        text: "Nine concise module briefs — designed to be read in 10–12 minutes. Practical theory, not heavy academic texts.",
      },
      {
        title: "💻 Google Classroom Access",
        text: "All materials, submissions, deadlines, and feedback in one organised digital space — accessible anywhere, anytime.",
      },
      {
        title: "🎓 Hi-Grad Certificate",
        text: "A professionally issued Hi-Grad Master TEFL certificate on successful completion. Recognised across international ELT markets.",
      },
    ].map((item, i) => (
      <div
        key={i}
        data-aos="fade-up"
        className="
          bg-white
          border border-slate-200
          p-8 sm:p-10
          rounded-3xl
          shadow-sm
          hover:shadow-xl
          hover:border-higrad-green/40
          hover:-translate-y-1
          transition-all duration-300
        "
      >
        <h3 className="text-xl font-bold text-higrad-navy leading-snug">
          {item.title}
        </h3>

        <p className="mt-5 text-sm sm:text-base text-slate-600 leading-8">
          {item.text}
        </p>
      </div>
    ))}
  </div>
</Section>
      {/* schedule */}
      <Section
        data-aos="fade-down"
        className="bg-higrad-cream text-higrad-textDark"
      >
        <TEFLSchedule />
      </Section>
      {/* fee */}
      <Section className="bg-higrad-paleGreen text-higrad-textDark">
        <div
          className="max-w-xl mx-auto bg-white border border-slate-200 p-8 rounded-xl text-center shadow-sm"
          data-aos="zoom-in"
        >
          <p className="text-higrad-green text-sm font-semibold">
            Founding Cohort Offer
          </p>

          <h2 className="mt-2 text-4xl text-higrad-navy font-bold">$199</h2>

          <p className="text-sm text-slate-600 mt-2">Full 13-week programme</p>

          <ul className="mt-6 space-y-2 text-sm text-slate-600 text-left">
            <li>✓ All 7 live sessions</li>
            <li>✓ Teaching practice with real learners</li>
            <li>✓ Full assessment + feedback</li>
            <li>✓ Certification</li>
          </ul>

          <div className="mt-8">
            <Button
              variant="primary"
              href="https://forms.gle/B4PyQP6ZXmMaqUU26"
            >
              Apply for Cohort 1
            </Button>
          </div>

          <p className="mt-4 text-xs text-slate-500">
            Max 12 places • Minimum 6 to run
          </p>
        </div>
      </Section>
    </main>
  );
}
