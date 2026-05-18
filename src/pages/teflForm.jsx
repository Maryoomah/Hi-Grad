import { useState } from "react";
import Header from "../components/header";
import emailjs from "@emailjs/browser";
export default function TeflApplicationForm() {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    personal: {
      fullName: "",
      preferredName: "",
      whatsapp: "",
      email: "",
      country: "",
      city: "",
    },
    education: {
      qualification: "",
      field: "",
      eltStatus: "",
      eltDetails: "",
    },
    experience: {
      years: "",
      contexts: [],
      audience: "",
      description: "",
    },
    motivation: {
      reason: "",
      goal: "",
    },

    availability: {
      commitment: "",
      hours: "",
      internet: "",
      constraints: "",
    },

    declaration: {
      additionalInfo: "",
      fullName: "",
      date: "",
    },
  });

  const handleChange = (section, field, value) => {
    setFormData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value,
      },
    }));
  };

  const nextStep = () => {
    if (!validateStep()) return;

    setStep((prev) => prev + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const prevStep = () => {
    setErrors({});
    setStep((prev) => prev - 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const inputClass =
    "w-full mt-4 p-3 rounded-lg bg-slate-700 text-white border border-slate-500 focus:outline-none focus:ring-2 focus:ring-lime-500";
  const [errors, setErrors] = useState({});

  const validateStep = () => {
    const newErrors = {};

    if (step === 1) {
      if (!formData.personal.fullName.trim())
        newErrors.fullName = "Full name is required";
      if (!formData.personal.preferredName.trim())
        newErrors.preferredName = "Preferred name is required";
      if (!formData.personal.whatsapp.trim())
        newErrors.whatsapp = "WhatsApp number is required";
      if (!formData.personal.email.trim())
        newErrors.email = "Email address is required";
      if (!formData.personal.country) newErrors.country = "Country is required";
      if (!formData.personal.city.trim())
        newErrors.city = "City / Town is required";
    }

    if (step === 2) {
      if (!formData.education.qualification)
        newErrors.qualification = "Qualification is required";
      if (!formData.education.field.trim())
        newErrors.field = "Field of study is required";
    }

    if (step === 3) {
      if (!formData.experience.years)
        newErrors.years = "Teaching experience is required";
    }

    if (step === 4) {
      if (!formData.motivation.reason.trim())
        newErrors.reason = "Please explain your motivation";
      if (!formData.motivation.goal)
        newErrors.goal = "Please select your main goal";
      if (!formData.motivation.hearAbout)
        newErrors.hearAbout = "Please select how you heard about us";
    }

    if (step === 5) {
      if (!formData.availability.commitment)
        newErrors.commitment = "Please select your commitment level";
      if (!formData.availability.internet)
        newErrors.internet = "Internet access is required";
    }

    if (step === 6) {
      if (!formData.declaration.fullName.trim())
        newErrors.signature = "Signature name is required";
      if (!formData.declaration.date.trim())
        newErrors.date = "Date is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const [submitStatus, setSubmitStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const sendEmail = async () => {
    if (!validateStep()) return;

    setLoading(true);
    setSubmitStatus("");

    const templateParams = {
      fullName: formData.personal.fullName,
      preferredName: formData.personal.preferredName,
      email: formData.personal.email,
      whatsapp: formData.personal.whatsapp,
      country: formData.personal.country,
      city: formData.personal.city,

      qualification: formData.education.qualification,
      field: formData.education.field,
      eltStatus: formData.education.eltStatus,
      eltDetails: formData.education.eltDetails,

      years: formData.experience.years,
      contexts: formData.experience.contexts.join(", "),
      audience: formData.experience.audience,
      description: formData.experience.description,

      reason: formData.motivation.reason,
      goal: formData.motivation.goal,
      hearAbout: formData.motivation.hearAbout,

      commitment: formData.availability.commitment,
      hours: formData.availability.hours,
      internet: formData.availability.internet,
      constraints: formData.availability.constraints,

      additionalInfo: formData.declaration.additionalInfo,
      signature: formData.declaration.fullName,
      date: formData.declaration.date,
    };
    try {
      setLoading(true);
      setSubmitStatus("");

      // 1. Send to admin
      await emailjs.send(
        "service_i4851lr",
        "template_tblt7ld", // admin
        templateParams,
        "80dBqSmm3fdygMBw3",
      );

      // 2. Send auto-reply
      await emailjs.send(
        "service_i4851lr",
        "template_41pasff", // auto-reply
        templateParams,
        "80dBqSmm3fdygMBw3",
      );

      setSubmitStatus("success");

      setFormData({
        personal: {
          fullName: "",
          preferredName: "",
          whatsapp: "",
          email: "",
          country: "",
          city: "",
        },
        education: {
          qualification: "",
          field: "",
          eltStatus: "",
          eltDetails: "",
        },
        experience: {
          years: "",
          contexts: [],
          audience: "",
          description: "",
        },
        motivation: {
          reason: "",
          goal: "",
          hearAbout: "",
        },
        availability: {
          commitment: "",
          hours: "",
          internet: "",
          constraints: "",
        },
        declaration: {
          additionalInfo: "",
          fullName: "",
          date: "",
        },
      });

      setErrors({});
      setStep(1);
    } catch (error) {
      console.error(error);
      setSubmitStatus("error");
    } finally {
      setLoading(false);
    }
  };

  const countries = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Argentina",
    "Australia",
    "Austria",
    "Bahrain",
    "Bangladesh",
    "Belgium",
    "Benin",
    "Brazil",
    "Cameroon",
    "Canada",
    "China",
    "Côte d’Ivoire",
    "Egypt",
    "France",
    "Gambia",
    "Germany",
    "Ghana",
    "India",
    "Indonesia",
    "Ireland",
    "Italy",
    "Japan",
    "Jordan",
    "Kenya",
    "Kuwait",
    "Lebanon",
    "Malaysia",
    "Morocco",
    "Netherlands",
    "Nigeria",
    "Oman",
    "Pakistan",
    "Philippines",
    "Qatar",
    "Saudi Arabia",
    "Senegal",
    "South Africa",
    "Spain",
    "Sudan",
    "Tanzania",
    "Tunisia",
    "Türkiye",
    "Uganda",
    "United Arab Emirates",
    "United Kingdom",
    "United States",
    "Yemen",
  ];
  return (
    <>
      <section className="bg-lime-500 text-slate-900 py-10 text-center">
        <div className="max-w-3xl mx-auto px-4">
          {/* Logo Circle */}
          <div className="flex justify-center items-center gap-3 mb-6">
            <div className="w-14 h-14 rounded-full bg-slate-900 text-lime-500 flex items-center justify-center font-bold text-lg">
              HG
            </div>

            <h2 className="text-lg font-semibold">Hi-Grad Academy</h2>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Master TEFL <br />
            Programme Application Form
          </h1>

          {/* Subtitle */}
          <p className="mt-4 text-sm sm:text-base font-medium">
            Cohort 1 · Starting 13 July 2026 · Online
          </p>
        </div>
      </section>

      <form className="bg-slate-950 py-10">
        {step === 1 && (
          <div className="max-w-2xl mx-auto mt-8 mb-6 px-4">
            <div className="bg-slate-800 border border-lime-500/30 rounded-xl p-6 text-slate-200 leading-relaxed relative">
              <div className="absolute left-0 top-4 bottom-4 w-1 bg-yellow-500 rounded-full"></div>

              <div className="pl-4">
                <p>
                  Thank you for your interest in the{" "}
                  <span className="font-semibold">
                    Hi-Grad Master TEFL Programme
                  </span>
                  . This form takes approximately{" "}
                  <span className="font-semibold">10 minutes</span> to complete.
                  Please answer every question as honestly and fully as you can.
                </p>

                <p className="mt-4">
                  Fields marked <span className="text-yellow-500">*</span> are
                  required. Once submitted, you will receive a confirmation
                  within <span className="font-semibold">48 hours</span>.
                </p>
              </div>
            </div>
          </div>
        )}
        <div className="max-w-2xl mx-auto bg-slate-800 p-6 rounded-xl  text-white">
          <p className="text-sm text-slate-400 mb-4">Step {step} of 6</p>

          {step === 1 && (
            <div>
              <h2 className="text-xl font-semibold text-lime-500 mb-6">
                1. Personal Details
              </h2>

              <label className="block font-medium">
                Full Name <span className="text-yellow-500">*</span>
              </label>
              <input
                type="text"
                placeholder="As on your official documents"
                value={formData.personal.fullName}
                onChange={(e) =>
                  handleChange("personal", "fullName", e.target.value)
                }
                className={inputClass}
              />
              {errors.fullName && (
                <p className="mt-1 text-sm text-red-400">{errors.fullName}</p>
              )}

              <label className="block mt-6 font-medium">
                Preferred Name <span className="text-yellow-500">*</span>
              </label>
              <p className="text-sm text-slate-400">
                What you like to be called
              </p>
              <input
                type="text"
                placeholder="e.g. Amina, John"
                value={formData.personal.preferredName}
                onChange={(e) =>
                  handleChange("personal", "preferredName", e.target.value)
                }
                className={inputClass}
              />
              {errors.preferredName && (
                <p className="mt-1 text-sm text-red-400">
                  {errors.preferredName}
                </p>
              )}

              <label className="block mt-6 font-medium">
                WhatsApp Number <span className="text-yellow-500">*</span>
              </label>
              <p className="text-sm text-slate-400">Include country code</p>
              <input
                type="tel"
                placeholder="+212 6XX XXX XXX"
                value={formData.personal.whatsapp}
                onChange={(e) => {
                  const cleanedValue = e.target.value.replace(/[^\d+]/g, "");
                  handleChange("personal", "whatsapp", cleanedValue);
                }}
                className={inputClass}
              />
              {errors.whatsapp && (
                <p className="mt-1 text-sm text-red-400">{errors.whatsapp}</p>
              )}

              <label className="block mt-6 font-medium">
                Email Address <span className="text-yellow-500">*</span>
              </label>
              <input
                type="email"
                placeholder="yourname@email.com"
                value={formData.personal.email}
                onChange={(e) =>
                  handleChange("personal", "email", e.target.value)
                }
                className={inputClass}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-400">{errors.email}</p>
              )}

              <label className="block mt-6 font-medium">
                Country of Residence <span className="text-yellow-500">*</span>
              </label>
              <select
                value={formData.personal.country}
                onChange={(e) =>
                  handleChange("personal", "country", e.target.value)
                }
                className={inputClass}
              >
                <option value="">Select country</option>
                {countries.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>
              {errors.country && (
                <p className="mt-1 text-sm text-red-400">{errors.country}</p>
              )}

              <label className="block mt-6 font-medium">
                City / Town <span className="text-yellow-500">*</span>
              </label>
              <input
                type="text"
                placeholder="e.g. Fes, Lagos, Accra"
                value={formData.personal.city}
                onChange={(e) =>
                  handleChange("personal", "city", e.target.value)
                }
                className={inputClass}
              />
              {errors.city && (
                <p className="mt-1 text-sm text-red-400">{errors.city}</p>
              )}
            </div>
          )}
          {/* ================= STEP 2 ================= */}
          {step === 2 && (
            <div>
              <h2 className="text-xl font-semibold text-lime-500 mb-6">
                2. Education & Qualifications
              </h2>

              <label className="font-medium">
                Highest Educational Qualification{" "}
                <span className="text-yellow-500">*</span>
              </label>
              <select
                value={formData.education.qualification}
                onChange={(e) =>
                  handleChange("education", "qualification", e.target.value)
                }
                className={inputClass}
              >
                <option value="">Select qualification</option>
                <option>Secondary School Certificate / Baccalaureate</option>
                <option>Diploma</option>
                <option>Higher National Diploma</option>

                <option>Bachelor’s Degree (Licence)</option>
                <option>Master’s Degree</option>

                <option>PhD / Doctorate</option>
                <option>Proffessional Certification</option>
                <option>Other</option>
              </select>
              {errors.qualification && (
                <p className="mt-1 text-sm text-red-400">
                  {errors.qualification}
                </p>
              )}

              <label className="block mt-6 font-medium">
                Subject / Field of Study{" "}
                <span className="text-yellow-500">*</span>
              </label>
              <input
                type="text"
                placeholder="e.g. English Language, Education, French Studies"
                value={formData.education.field}
                onChange={(e) =>
                  handleChange("education", "field", e.target.value)
                }
                className={inputClass}
              />
              {errors.field && (
                <p className="mt-1 text-sm text-red-400">{errors.field}</p>
              )}

              <p className="mt-6 font-medium">
                Do you hold any ELT / TEFL qualifications?
              </p>

              <div className="mt-3 space-y-3">
                {[
                  "No – I have no formal ELT qualifications",
                  "Yes – I hold a TEFL / TESOL certificate",
                  "Yes – I hold a Cambridge CELTA or equivalent",
                  "Yes – I hold Cambridge TKT modules",
                ].map((item) => (
                  <label key={item} className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="eltStatus"
                      value={item}
                      checked={formData.education.eltStatus === item}
                      onChange={(e) =>
                        handleChange("education", "eltStatus", e.target.value)
                      }
                    />
                    {item}
                  </label>
                ))}
              </div>

              <label className="block mt-6 font-medium">
                If yes, please list them briefly
              </label>
              <p className="text-sm text-slate-400">Leave blank if none</p>

              <textarea
                placeholder="e.g. 120-hour TEFL certificate, TEFL Institute, 2022"
                value={formData.education.eltDetails}
                onChange={(e) =>
                  handleChange("education", "eltDetails", e.target.value)
                }
                className={`${inputClass} h-28`}
              />
            </div>
          )}

          {/* ================= STEP 3 ================= */}
          {step === 3 && (
            <div>
              <h2 className="text-xl font-semibold text-lime-500 mb-6">
                3. Teaching Experience
              </h2>

              <p className="font-medium">
                How long have you been teaching English?{" "}
                <span className="text-yellow-500">*</span>
              </p>

              <div className="mt-3 grid grid-cols-2 gap-3">
                {[
                  "No experience",
                  "Under 1 year",
                  "1–3 years",
                  "3–5 years",
                  "5+ years",
                ].map((item) => (
                  <label key={item} className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="years"
                      value={item}
                      checked={formData.experience.years === item}
                      onChange={(e) =>
                        handleChange("experience", "years", e.target.value)
                      }
                    />
                    {item}
                  </label>
                ))}
              </div>
              {errors.years && (
                <p className="mt-2 text-sm text-red-400">{errors.years}</p>
              )}

              <p className="mt-6 font-medium">
                What contexts have you taught in?
              </p>
              <p className="text-sm text-slate-400">Tick all that apply</p>

              <div className="mt-3 space-y-2">
                {[
                  "Private tuition / tutoring",
                  "Language school or centre",
                  "State / government school",
                  "University or higher education",
                  "Online teaching",
                  "Corporate / business English",
                  "I have not taught yet",
                ].map((item) => (
                  <label key={item} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={formData.experience.contexts.includes(item)}
                      onChange={() => {
                        const updated = formData.experience.contexts.includes(
                          item,
                        )
                          ? formData.experience.contexts.filter(
                              (i) => i !== item,
                            )
                          : [...formData.experience.contexts, item];

                        handleChange("experience", "contexts", updated);
                      }}
                    />
                    {item}
                  </label>
                ))}
              </div>

              <p className="mt-6 font-medium">
                Who do you mainly teach or plan to teach?
              </p>

              <div className="mt-3 space-y-2">
                {[
                  "Young learners (ages 6–16)",
                  "Teenagers (ages 13–18)",
                  "Adults (18+)",
                  "Mixed / all ages",
                  "Not sure yet",
                ].map((item) => (
                  <label key={item} className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="audience"
                      value={item}
                      checked={formData.experience.audience === item}
                      onChange={(e) =>
                        handleChange("experience", "audience", e.target.value)
                      }
                    />
                    {item}
                  </label>
                ))}
              </div>

              <label className="block mt-6 font-medium">
                Briefly describe your current teaching role or situation
              </label>
              <p className="text-sm text-slate-400">
                If you are not currently teaching, write "Not currently
                teaching"
              </p>

              <textarea
                placeholder="e.g. I teach English to adults at a private language school in Fes, three evenings per week."
                value={formData.experience.description}
                onChange={(e) =>
                  handleChange("experience", "description", e.target.value)
                }
                className={`${inputClass} h-28`}
              />
            </div>
          )}
          {/* 4 */}
          {step === 4 && (
            <div>
              <h2 className="text-xl font-semibold text-lime-500 mb-6">
                4. Motivation & Goals
              </h2>

              <label className="font-semibold">
                Why do you want to join the Hi-Grad Master TEFL Programme?{" "}
                <span className="text-yellow-500">*</span>
              </label>
              <p className="text-sm text-slate-400">
                Be specific — this is the most important question on the form
              </p>

              <textarea
                placeholder="Tell us what brought you here and what you hope to achieve..."
                value={formData.motivation.reason}
                onChange={(e) =>
                  handleChange("motivation", "reason", e.target.value)
                }
                className={`${inputClass} h-32`}
              />
              {errors.reason && (
                <p className="mt-1 text-sm text-red-400">{errors.reason}</p>
              )}

              <p className="mt-6 font-semibold">
                What is your main goal after completing the programme?{" "}
                <span className="text-yellow-500">*</span>
              </p>

              <div className="mt-3 space-y-4">
                {[
                  {
                    title: "Get formally recognised",
                    desc: "I already teach and want a qualification to prove it",
                  },
                  {
                    title: "Start a new career",
                    desc: "I want to enter English language teaching professionally",
                  },
                  {
                    title: "Become a better teacher",
                    desc: "I want to improve my practice significantly",
                  },
                  {
                    title: "Open my own school",
                    desc: "I want to run my own language centre or institution",
                  },
                  {
                    title: "Other goal",
                    desc: "I will explain in the question above",
                  },
                ].map((item) => (
                  <label key={item.title} className="flex items-start gap-3">
                    <input
                      type="radio"
                      name="goal"
                      value={item.title}
                      checked={formData.motivation.goal === item.title}
                      onChange={(e) =>
                        handleChange("motivation", "goal", e.target.value)
                      }
                      className="mt-1"
                    />

                    <span>
                      <span className="block font-semibold">{item.title}</span>
                      <span className="block text-slate-300">
                        — {item.desc}
                      </span>
                    </span>
                  </label>
                ))}
              </div>
              {errors.goal && (
                <p className="mt-2 text-sm text-red-400">{errors.goal}</p>
              )}

              <label className="block mt-6 font-semibold">
                How did you hear about Hi-Grad Academy and this programme?{" "}
                <span className="text-yellow-500">*</span>
              </label>

              <select
                value={formData.motivation.hearAbout}
                onChange={(e) =>
                  handleChange("motivation", "hearAbout", e.target.value)
                }
                className={inputClass}
              >
                <option value="">Select one</option>
                <option>WhatsApp</option>
                <option>Instagram</option>
                <option>Facebook</option>
                <option>LinkedIn</option>
                <option>Friend / referral</option>
                <option>Hi-Grad Academy website</option>
                <option>Other</option>
              </select>
              {errors.hearAbout && (
                <p className="mt-1 text-sm text-red-400">{errors.hearAbout}</p>
              )}
            </div>
          )}
          {/* 5 */}
          {step === 5 && (
            <div>
              <h2 className="text-xl font-semibold text-lime-500 mb-6">
                5. Availability & Commitment
              </h2>

              <p className="font-semibold">
                Can you commit to the full 13-week programme starting 13 July
                2026? <span className="text-yellow-500">*</span>
              </p>

              <div className="mt-3 space-y-3">
                {[
                  "Yes, fully",
                  "Mostly – with some constraints",
                  "I have concerns – please explain",
                ].map((item) => (
                  <label key={item} className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="commitment"
                      value={item}
                      checked={formData.availability.commitment === item}
                      onChange={(e) =>
                        handleChange(
                          "availability",
                          "commitment",
                          e.target.value,
                        )
                      }
                    />
                    {item}
                  </label>
                ))}
              </div>
              {errors.commitment && (
                <p className="mt-2 text-sm text-red-400">{errors.commitment}</p>
              )}

              <p className="mt-6 font-semibold">
                Approximately how many hours per week can you dedicate to the
                programme?
              </p>
              <p className="text-sm text-slate-400">
                We recommend 8–12 hours per week for best results
              </p>

              <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {["Under 5 hours", "5–8 hours", "8–12 hours", "12+ hours"].map(
                  (item) => (
                    <label key={item} className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="hours"
                        value={item}
                        checked={formData.availability.hours === item}
                        onChange={(e) =>
                          handleChange("availability", "hours", e.target.value)
                        }
                      />
                      {item}
                    </label>
                  ),
                )}
              </div>

              <p className="mt-6 font-semibold">
                Do you have reliable internet access for online sessions?{" "}
                <span className="text-yellow-500">*</span>
              </p>

              <div className="mt-3 space-y-3">
                {[
                  "Yes – stable broadband or mobile data",
                  "Mostly – occasional interruptions",
                  "Limited – this may be a challenge",
                ].map((item) => (
                  <label key={item} className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="internet"
                      value={item}
                      checked={formData.availability.internet === item}
                      onChange={(e) =>
                        handleChange("availability", "internet", e.target.value)
                      }
                    />
                    {item}
                  </label>
                ))}
              </div>
              {errors.internet && (
                <p className="mt-2 text-sm text-red-400">{errors.internet}</p>
              )}

              <label className="block mt-6 font-semibold">
                Do you have any constraints or commitments we should know about?
              </label>
              <p className="text-sm text-slate-400">
                Work schedules, travel, family commitments etc.
              </p>

              <textarea
                placeholder="Leave blank if none"
                value={formData.availability.constraints}
                onChange={(e) =>
                  handleChange("availability", "constraints", e.target.value)
                }
                className={`${inputClass} h-28`}
              />
            </div>
          )}
          {/* 6 */}
          {step === 6 && (
            <div>
              <h2 className="text-xl font-semibold text-lime-500 mb-6">
                6. Declaration
              </h2>

              <div className="bg-slate-700/40 border border-lime-500/30 rounded-xl p-5 text-slate-200 leading-relaxed">
                <p>By submitting this form, I confirm that:</p>

                <ul className="mt-4 list-disc pl-6 space-y-3">
                  <li>
                    The information I have provided is accurate and honest to
                    the best of my knowledge.
                  </li>
                  <li>
                    I understand this is an application — submission does not
                    guarantee enrolment.
                  </li>
                  <li>
                    I will be contacted by Hi-Grad Academy within 48 hours to
                    discuss my application.
                  </li>
                  <li>
                    I understand the Cohort 1 founding price is $199 USD and is
                    subject to change for future cohorts.
                  </li>
                </ul>
              </div>

              <label className="block mt-6 font-semibold">
                Is there anything else you would like us to know about you or
                your application?
              </label>

              <textarea
                placeholder="Any questions, concerns, or additional context you want to share with us..."
                value={formData.declaration.additionalInfo}
                onChange={(e) =>
                  handleChange("declaration", "additionalInfo", e.target.value)
                }
                className={`${inputClass} h-28`}
              />

              <label className="block mt-6 font-semibold">
                Full Name — as signature{" "}
                <span className="text-yellow-500">*</span>
              </label>

              <input
                type="text"
                placeholder="Type your full name to confirm your application"
                value={formData.declaration.fullName}
                onChange={(e) =>
                  handleChange("declaration", "fullName", e.target.value)
                }
                className={inputClass}
              />
              {errors.signature && (
                <p className="mt-1 text-sm text-red-400">{errors.signature}</p>
              )}

              <label className="block mt-6 font-semibold">
                Date of Application <span className="text-yellow-500">*</span>
              </label>

              <input
                type="text"
                placeholder="e.g. 3 May 2026"
                value={formData.declaration.date}
                onChange={(e) =>
                  handleChange("declaration", "date", e.target.value)
                }
                className={inputClass}
              />
              {errors.date && (
                <p className="mt-1 text-sm text-red-400">{errors.date}</p>
              )}

              <button
                type="button"
                onClick={sendEmail}
                disabled={loading}
                className="mt-8 w-full py-4 bg-lime-500 text-slate-900 rounded-xl font-bold text-lg cursor-pointer disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? "Submitting..." : "Submit My Application"}
              </button>
              {submitStatus === "success" && (
                <p className="mt-4 text-center text-lime-400 font-medium">
                  Application submitted successfully. You will receive a
                  confirmation within 48 hours.
                </p>
              )}

              {submitStatus === "error" && (
                <p className="mt-4 text-center text-red-400 font-medium">
                  Something went wrong. Please try again.
                </p>
              )}
            </div>
          )}
          {/* ================= NAVIGATION ================= */}
          <div className="mt-8 flex justify-between">
            {step > 1 && (
              <button
                type="button"
                onClick={prevStep}
                className="px-4 py-2 bg-slate-600 rounded cursor-pointer"
              >
                Back
              </button>
            )}

            {step < 6 && (
              <button
                type="button"
                onClick={nextStep}
                className="px-4 py-2 bg-lime-500 text-black rounded cursor-pointer"
              >
                Next
              </button>
            )}
          </div>
        </div>
      </form>
    </>
  );
}
