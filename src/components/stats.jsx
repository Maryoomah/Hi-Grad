import { useEffect, useRef, useState } from "react";
import Header from "./header";
import Section from "./section";

function Counter({ end, duration = 2000, suffix = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;

          let startTime = null;

          const animate = (time) => {
            if (!startTime) startTime = time;

            const progress = Math.min((time - startTime) / duration, 1);
            const value = Math.floor(progress * end);

            setCount(value);

            if (progress < 1) requestAnimationFrame(animate);
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.4 },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function StatsSection() {
  const stats = [
    { value: 100, suffix: "+", label: "Students Trained" },
    { value: 20, suffix: "+", label: "Years Experience" },
    { value: 80, suffix: "%", label: "IELTS Success Rate" },
    { value: 20, suffix: "+", label: "Teachers Trained" },
  ];

  return (
  <Section className="relative bg-higrad-paleGreen text-higrad-navy overflow-hidden py-24">
  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
    
    {/* heading */}
    <div className="text-center max-w-3xl mx-auto">
      <Header>Our Impact in Numbers</Header>

      <p className="mt-5 text-slate-600 text-base sm:text-lg leading-relaxed">
        Real outcomes from structured teaching, expert guidance, and
        consistent learner support.
      </p>
    </div>

    {/* grid */}
    <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="group relative bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
        >
          {/* top accent */}
          <div className="absolute top-0 left-0 h-[3px] w-full bg-higrad-gold opacity-80 rounded-t-3xl" />

          {/* label */}
          <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
            {stat.label}
          </p>

          {/* number */}
          <p className="mt-5 text-4xl lg:text-5xl font-extrabold text-higrad-navy group-hover:text-higrad-green transition-colors duration-300">
            <Counter
              end={stat.value}
              suffix={stat.suffix}
              duration={2000}
            />
          </p>

          {/* bottom line */}
          <div className="mt-6 h-px bg-slate-100" />
        </div>
      ))}
    </div>
  </div>
</Section>
  );
}
