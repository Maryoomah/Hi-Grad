import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="bg-slate-500 shadow-md sticky top-0 z-50 ">
      <div className="flex justify-between items-center  p-4 md:mx-28 ">
        <NavLink to="/" end>
          <img src="/images/logo.jpeg" alt="hi-grad logo" className="w-20" />
        </NavLink>

        <ul className="hidden md:flex gap-4 text-lime-500 ">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about"> About Hi-Grad</NavLink>
          </li>
          <li>
            <NavLink to="/courses"> Courses</NavLink>
          </li>
          <NavLink to="/faqs"> FAQs</NavLink>
          <li>
            <NavLink to="/contact"> Contact</NavLink>
          </li>
          <button className="bg-lime-500 text-white rounded-xl px-4">
            <NavLink to="/courses"> Enroll Now</NavLink>
          </button>
        </ul>
      </div>
    </nav>
  );
}
