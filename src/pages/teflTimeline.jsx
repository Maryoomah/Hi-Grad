import Header from "../components/header";
export default function TEFLSchedule() {
  const schedule = [
    {
      id: 1,
      date: "Saturday 13 July",
      duration: "2.5 hours",
      title: "Orientation + Getting to Know You",
      description: "Welcome, cohort introductions, diagnostic micro-teach",
    },
    {
      id: 2,
      date: "Saturday 1 August",
      duration: "4 hours",
      title: "Foundations + Micro-Teach 1",
      description: "Lesson frameworks, aims, first assessed teach",
    },
    {
      id: 3,
      date: "Saturday 15 August",
      duration: "2.5 hours",
      title: "Skills Mechanics + Mid-Course Check-In",
      description: "CCQs, receptive & productive skills, halfway review",
    },
    {
      id: 4,
      date: "Saturday 29 August",
      duration: "4 hours",
      title: "Error Correction + Micro-Teach 2",
      description: "Correction strategies, classroom management, second teach",
    },
    {
      id: 5,
      date: "Saturday 12 September",
      duration: "3 hours",
      title: "Reflective Teaching + Lesson Planning Clinic",
      description: "TP1 plans workshopped live before real-learner lesson",
    },
    {
      id: 6,
      date: "Saturday 26 September",
      duration: "4.5 hours",
      title: "Teaching Practice 1",
      description: "40 minutes with real volunteer ESL learners",
    },
    {
      id: 7,
      date: "Saturday 10 October",
      duration: "5 hours",
      title: "Teaching Practice 2 + Graduation",
      description: "Final assessed teach, ceremony, certificates",
    },
  ];

  return (
    <div>
      {/* Header */}
      <div className="mb-8 space-y-2 text-center">
        <Header className="text-higrad-navy">Live Training Format</Header>

        <h2 className="text-xl mt-4 sm:text-2xl font-semibold text-higrad-navy leading-tight">
          7 Saturdays Intensive
        </h2>

        <p className="text-slate-600 mt-4">
          Live on Zoom · Morocco Time (GMT+1)
        </p>
      </div>

      <div className="space-y-4">
        {schedule.map((item, index) => (
          <div
            key={item.id}
            className="
          group relative 
          rounded-xl 
          border border-slate-200 
          bg-white 
          hover:bg-higrad-paleGreen/40 
          transition 
          p-5 sm:p-6
        "
          >
            {/* Top Row */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              {/* Left */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-higrad-green text-higrad-navy font-extrabold">
                  {index + 1}
                </div>

                <div>
                  <p className="text-higrad-navy font-medium">{item.date}</p>
                </div>
              </div>

              {/* Duration */}
              <div className="hidden sm:block">
                <span className="px-3 py-1 text-xs rounded-full bg-higrad-green text-higrad-navy font-extrabold  border border-higrad-green/20">
                  {item.duration}
                </span>
              </div>
            </div>

            {/* Divider */}
            <div className="my-4 h-px bg-slate-200" />

            {/* Content */}
            <div>
              <p className="text-higrad-navy text-lg font-semibold">
                {item.title}
              </p>

              <p className="text-slate-600 text-sm mt-1 leading-relaxed">
                {item.description}
              </p>
            </div>

            {/* Hover accent */}
            <div className="absolute inset-0 rounded-xl ring-1 ring-transparent group-hover:ring-higrad-green/20 transition" />
          </div>
        ))}
      </div>
    </div>
  );
}
