import Section from "../components/section";
import TEFLSchedule from "./teflTimeline";
export default function TEFL() {
  return (
    <main>
      <Section>
        <div>
          <p className="text-sm text-yellow-400 font-medium">
            Cohort 1 • Now Enrolling • Starts July 2026
          </p>

          <h1 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold">
            Hi-Grad Master TEFL Programme
          </h1>

          <p className="mt-4 text-slate-300">
            A 13-week structured teacher training programme that moves you from
            theory to real-learner teaching practice.
          </p>

          <div className="mt-6 flex justify-center gap-4">
            <button className="bg-lime-500 text-slate-900 px-6 py-3 rounded-lg">
              Apply Now
            </button>

            <button className="border border-white px-6 py-3 rounded-lg">
              View Curriculum
            </button>
          </div>
        </div>
      </Section>
      <Section>
        <div className="max-w-3xl">
          <h2 className="text-2xl font-semibold">
            Three Phases. One Destination.
          </h2>

          <p className="mt-4 text-slate-300">
            The programme moves you from foundational theory to real-learner
            teaching practice in a carefully sequenced 13-week arc. Live
            sessions every two weeks on Zoom. Practical from Week 1.
          </p>
        </div>
      </Section>
      <Section>
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Phase 1 */}
          <div className="bg-slate-900 p-6 rounded-xl">
            <h3 className="text-lg font-semibold text-lime-400">
              Phase 1 — Foundations
            </h3>
            <p className="text-sm text-slate-400 mt-1">Weeks 1–4</p>

            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              <li>How people learn languages (SLA)</li>
              <li>Lesson frameworks: PPP, ESA, TTT</li>
              <li>Writing clear lesson aims</li>
              <li>Micro-Teach 1 (15 mins)</li>
              <li>4 guided observation tasks</li>
            </ul>
          </div>
          {/* Phase 2 */}
          <div className="bg-slate-900 p-6 rounded-xl">
            <h3 className="text-lg font-semibold text-lime-400">
              Phase 2 — Skills & Practice
            </h3>
            <p className="text-sm text-slate-400 mt-1">Weeks 9-13</p>

            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              <li>CCQs, elicitation, phonemics</li>
              <li>Receptive & productive skills</li>
              <li>Error correction & feedback</li>
              <li>Classroom management</li>
              <li>Micro-Teach 2 — 20 minutes, skills demo</li>{" "}
            </ul>
          </div>
          {/* Phase 1 */}
          <div className="bg-slate-900 p-6 rounded-xl">
            <h3 className="text-lg font-semibold text-lime-400">
              Phase 3 — Practicum
            </h3>
            <p className="text-sm text-slate-400 mt-1">Weeks 1–4</p>

            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              <li>Reflective teaching</li>
              <li>Lesson planning clinic</li>
              <li>TP1: 40 minutes with real learners</li>
              <li>TP2: Revised lesson with real learners</li>
              <li>Graduation Ceremony</li>{" "}
            </ul>
          </div>
        </div>
      </Section>
      <Section>
        <h2 className="text-2xl font-semibold text-center">What You Get</h2>
        <p className="text-center">
          {" "}
          Everything you need to teach with confidence.
        </p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* card 1 */}
          <div className="bg-slate-900 p-6 rounded-xl">
            <h3 className="font-semibold text-lime-500">
              {" "}
              🎯Live Trainer Feedback
            </h3>
            <p className="mt-2 text-sm text-slate-300">
              Individual written feedback after every assessed task — not
              automated. Your trainer reads your work and responds
              personally.{" "}
            </p>
          </div>
          {/* card 2 */}

          <div className="bg-slate-900 p-6 rounded-xl">
            <h3 className="font-semibold text-lime-500">
              {" "}
              👩‍🏫 Real-Learner Teaching
            </h3>
            <p className="mt-2 text-sm text-slate-300">
              You teach real volunteer ESL learners — twice. Not your
              classmates. Actual learners with actual gaps in English.{" "}
            </p>
          </div>
          {/* card 3 */}

          <div className="bg-slate-900 p-6 rounded-xl">
            <h3 className="font-semibold text-lime-500">
              {" "}
              👩‍🏫 Full Assessment Suite
            </h3>
            <p className="mt-2 text-sm text-slate-300">
              Six graded components: 4 observation tasks, 2 micro-teaches, 2
              teaching practices, a language awareness task, and a reflective
              essay.
            </p>
          </div>
          {/* card 4*/}

          <div className="bg-slate-900 p-6 rounded-xl">
            <h3 className="font-semibold text-lime-500">
              {" "}
              👩‍🏫 Module Reading Briefs
            </h3>
            <p className="mt-2 text-sm text-slate-300">
              Nine concise module briefs — designed to be read in 10–12 minutes.
              Practical theory, not heavy academic texts.
            </p>
          </div>
          {/* card 5*/}

          <div className="bg-slate-900 p-6 rounded-xl">
            <h3 className="font-semibold text-lime-500">
              {" "}
              👩‍🏫 Google Classroom Access
            </h3>
            <p className="mt-2 text-sm text-slate-300">
              All materials, submissions, deadlines, and feedback in one
              organised digital space — accessible anywhere, anytime.
            </p>
          </div>
          {/* card 6*/}

          <div className="bg-slate-900 p-6 rounded-xl">
            <h3 className="font-semibold text-lime-500">
              {" "}
              👩‍🏫Hi-Grad Certificate{" "}
            </h3>
            <p className="mt-2 text-sm text-slate-300">
              A professionally issued Hi-Grad Master TEFL certificate on
              successful completion. Recognised across international ELT
              markets.
            </p>
          </div>
        </div>
      </Section>
    {/* schedule */}
    <Section className="bg-slate-900 rounded-2xl  border border-slate-800">
        <TEFLSchedule/>
    </Section>
    </main>
  );
}
