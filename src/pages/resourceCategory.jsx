import { Link, useParams } from "react-router-dom";
import Section from "../components/Section";
import Header from "../components/Header";
import Button from "../components/button";
import { hubResources } from "../data/learningHubData";
export default function ResourceCategory() {
  const { category } = useParams();
  const current = hubResources[category];

  if (!current) {
    return (
      <Section className="bg-higrad-cream text-center">
        <Header className="text-higrad-navy">Section Not Found</Header>

        <div className="mt-8">
          <Button to="/learning-hub" variant="primary">
            Back to Learning Hub
          </Button>
        </div>
      </Section>
    );
  }

  return (
    <>
      <Section className="bg-higrad-navy text-white text-center">
        <div className="max-w-3xl mx-auto">
          <Header className="text-higrad-green">{current.title}</Header>

          <p className="mt-5 text-higrad-textSoft text-base sm:text-lg leading-relaxed">
            {current.desc}
          </p>
        </div>
      </Section>

      <Section className="bg-higrad-cream text-higrad-textDark">
        <div className="mb-10">
          <Link
            to="/learning-hub"
            className="text-sm font-semibold text-higrad-green"
          >
            ← Back to Learning Hub
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {current.items.map((item, i) => (
            <a
              key={i}
              href={item.link}
              target="_blank"
              rel="noreferrer"
              className="
                bg-white border border-slate-200 rounded-3xl
                p-8 sm:p-10 shadow-sm
                hover:shadow-xl hover:-translate-y-1
                hover:border-higrad-green/40
                transition-all duration-300
              "
            >
              <h3 className="text-xl font-bold text-higrad-navy">
                {item.title}
              </h3>

              <p className="mt-5 text-slate-600 leading-8">{item.desc}</p>

              <p className="mt-8 text-sm font-semibold text-higrad-green">
                Open Resource →
              </p>
            </a>
          ))}
        </div>
      </Section>
    </>
  );
}
