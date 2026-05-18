import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  // lock scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => (document.body.style.overflow = "");
  }, [isOpen]);
  const close = () => setIsOpen(false);

  return (
    <nav className="bg-slate-700 shadow-md sticky top-0 z-50 ">
      <div className="flex justify-between items-center py-2 px-4 md:py-4 md:mx-28">
        {" "}
        <NavLink to="/" end>
          <img
            src={`${import.meta.env.BASE_URL}images/logo.jpeg`}
            alt="hi-grad logo"
            className="w-20"
          />
        </NavLink>
        {/* desktop menu */}
        <div className="flex justify-center gap-6 items-center ">
  <ul className="hidden md:flex gap-6 text-lime-500 ">
          <li className=" hover:text-higrad-paleGreen">
            <NavLink to="/">Home</NavLink>
          </li>

          <li className=" hover:text-higrad-paleGreen">
            <NavLink to="/about"> About Hi-Grad</NavLink>
          </li>
          <li className=" hover:text-higrad-paleGreen">
            <NavLink to="/courses"> Courses</NavLink>
          </li>
          <li className=" hover:text-higrad-paleGreen">
            <NavLink to="/tefl">TEFL</NavLink>
          </li>
          {/* <NavLink to="/faqs"> FAQs</NavLink> */}
          <li className=" hover:text-higrad-paleGreen">
            <NavLink to="/learning-hub"> Learning Hub</NavLink>
          </li>
          <li className=" hover:text-higrad-paleGreen">
            <NavLink to="/contact"> Contact</NavLink>
          </li>
         
        </ul>
    <button className="bg-lime-500 text-white rounded-xl px-4 py-2 hidden md:block">
            <NavLink to="/courses"> Enroll Now</NavLink>
          </button>
        </div>
      
        {/* Hamburger Icon */}
        <button
          className="md:hidden text-lime-500 text-3xl cursor-pointer p-2 rounded-xl hover:bg-gray-100 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>
      {/* mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 md:hidden">
            {/* backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={close}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            {/* panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="absolute right-0 top-0 bottom-0 w-[85%] max-w-sm bg-slate-800 shadow-2xl flex flex-col h-screen overflow-y-auto"
            >
              {/* header */}
              <div className="flex items-center justify-between px-6 py-6 border-b border-gray-100 ">
                <img
                  src={`${import.meta.env.BASE_URL}images/logo.jpeg`}
                  alt="hi-grad logo"
                  className="w-20"
                />
                <button
                  onClick={close}
                  className="p-3 rounded-2xl bg-gray-50 text-lime-500 hover:bg-gray-100 transition-colors"
                  aria-label="Close menu"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              {/* links */}
              <div className="flex-1 px-8 py-10 space-y-2">
                {[
                  { label: "Home", to: "/" },
                  { label: "About Hi-Grad", to: "/about" },
                  { label: "Courses", to: "/courses" },
                  { label: "TEFL", to: "/tefl" },
                  { label: "Learning Hub", to: "/learning-hub" },

                  { label: "Contact", to: "/contact" },
                ].map((item) => (
                  <NavLink
                    to={item.to}
                    onClick={close}
                    className={({ isActive }) => `
    block py-4 text-xl font-black uppercase tracking-tighter transition-all
                        ${isActive ? "text-yellow-500 pl-4 border-l-4 border-yellow-500" : "text-lime-500 hover:text-yellow-500"}
                     
              `}
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </nav>
  );
}
