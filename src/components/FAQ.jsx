import { useState } from "react";
import Header from "./header";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question:
        "Do I need a teaching qualification to apply for the TEFL Programme?",
      answer:
        "No. The Hi-Grad Master TEFL is designed for both experienced teachers looking to formalise their practice and new teachers entering the profession. What you need is a genuine commitment to the full 13-week programme.",
    },
    {
      question: "How much time will I need each week?",
      answer:
        "Approximately 4–6 hours per week: async reading and tasks (23 hours), plus a live Zoom session every two weeks. The live sessions range from 2.5 to 5 hours. The programme is intensive but designed for working adults.",
    },
    {
      question: "What is the teaching practice? Who are the learners?",
      answer:
        "You teach two 40-minute lessons to real volunteer ESL learners recruited by Hi-Grad Academy. These are genuine English language learners — not your classmates. Both lessons are observed and assessed by the trainer.",
    },
    {
      question: "What is the pass mark for the TEFL certification?",
      answer:
        "60% overall, with no single component below 40%. Six components are graded across the programme. Individual written feedback is provided after each assessed task.",
    },
    {
      question: "Can I pay in installments?",
      answer:
        "Please contact us to discuss payment arrangements. We aim to make the programme accessible and are happy to discuss what works for your situation",
    },
    {
      question: "Is the TEFL certificate internationally recognised? ",
      answer:
        "The Hi-Grad Master TEFL is issued by Hi-Grad Academy and is applicable across international ELT markets, particularly in Morocco, West Africa, and the broader MENA region. It is a professional qualification backed by a rigorous assessed programme.",
    },

    {
      question: "Do you offer language classes for absolute beginners?",
      answer:
        "Yes — absolutely. All three languages (English, Arabic, French) are available from complete beginner level. Whether you have no prior experience or want to restart from the foundation, we have a programme for you.",
    },
    {
      question: "Can I study online if I am outside Morocco?",
      answer:
        "Yes. All language programmes and the TEFL are available online. We teach students across Morocco and internationally — all you need is a reliable internet connection and a commitment to your learning.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
  <div>
  {/* Header */}
  <div className="text-center">
    <Header className="text-higrad-navy m-0">
      Frequently Asked Questions
    </Header>

    <p className="mt-4 text-slate-600">
      Everything you need to know before you get started.
    </p>
  </div>

  {/* FAQ list */}
  <div className="mt-10 space-y-4">
    {faqs.map((faq, index) => {
      const isOpen = openIndex === index;

      return (
        <div
          key={index}
          className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm"
        >
          {/* Question */}
          <button
            onClick={() => toggleFAQ(index)}
            className="w-full flex justify-between items-center p-5 text-left hover:bg-higrad-paleGreen/40 transition"
          >
            <span className="text-higrad-navy font-medium">
              {faq.question}
            </span>

            <span className="text-higrad-green text-xl font-bold">
              {isOpen ? "−" : "+"}
            </span>
          </button>

          {/* Answer */}
          <div
            className={`px-5 overflow-hidden transition-all duration-300 ${
              isOpen ? "max-h-40 py-5" : "max-h-0"
            }`}
          >
            <p className="text-slate-600 text-sm leading-relaxed">
              {faq.answer}
            </p>
          </div>
        </div>
      );
    })}
  </div>
</div>
  );
}
