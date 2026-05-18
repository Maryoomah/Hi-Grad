import { Link } from "react-router-dom";
import Section from "../components/section";
import Header from "../components/header";
import { learningCategories } from "../data/learningHubData";

export default function LearningHub() {
  return (
    <>
      <Section className="bg-higrad-navy text-white text-center">
        <div className="max-w-3xl mx-auto">
          <Header className="text-higrad-green">
            Hi-Grad Learning Hub
          </Header>

          <p className="mt-5 text-higrad-textSoft text-base sm:text-lg leading-relaxed">
            Access learning resources, videos, worksheets, games, and teacher
            development materials in one organised space.
          </p>
        </div>
      </Section>

      <Section className="bg-higrad-cream text-higrad-textDark">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {learningCategories.map((category, i) => (
            <Link
              key={i}
              to={category.to}
              className="
                group bg-white border border-slate-200 rounded-3xl
                p-8 sm:p-10 shadow-sm
                hover:shadow-xl hover:-translate-y-1
                hover:border-higrad-green/40
                transition-all duration-300
              "
            >
              <h3 className="text-2xl font-bold text-higrad-navy group-hover:text-higrad-green transition">
                {category.title}
              </h3>

              <p className="mt-5 text-slate-600 leading-8">
                {category.desc}
              </p>

              <p className="mt-8 text-sm font-semibold text-higrad-green">
                Open Section →
              </p>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}