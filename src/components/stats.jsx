import { useEffect, useRef, useState } from "react";

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

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.4 }
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
    { value: 90, suffix: "%", label: "IELTS Success Rate" },
    { value: 20, suffix: "+", label: "Teachers Trained" },
  ];

  return (
    <section className="relative py-16 bg-linear-to-br from-lime-500 to-green-600 text-white overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,white,transparent)]" />

      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
          Our Impact
        </h2>

      

        {/* Grid */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-6 shadow-lg hover:scale-105 transition duration-300"
            >
              <p className="text-3xl sm:text-4xl font-extrabold">
                <Counter
                  end={stat.value}
                  suffix={stat.suffix}
                  duration={2000}
                />
              </p>

              <p className="mt-2 text-sm sm:text-base text-white/80">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}