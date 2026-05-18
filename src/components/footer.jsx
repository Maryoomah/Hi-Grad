import Section from "./section";
import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
export default function Footer() {
  return (
    <Section className="bg-higrad-navy text-higrad-textSoft border-t border-white/10">
      <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div>
          <h3 className="text-lg font-semibold text-white">Hi-Grad Academy</h3>
          <p className="mt-4 text-sm text-higrad-textSoft/80">
            Empowering learners and teachers through high-quality language
            training and professional development programmes.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-higrad-green font-medium">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-sm text-higrad-textSoft/80">
            <li>
              <a href="/" className="hover:text-higrad-green transition">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-higrad-green transition">
                About
              </a>
            </li>
            <li>
              <a
                href="/programmes"
                className="hover:text-higrad-green transition"
              >
                Programmes
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-higrad-green transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Programmes */}
        <div>
          <h4 className="text-higrad-green font-medium">Programmes</h4>
          <ul className="mt-4 space-y-2 text-sm text-higrad-textSoft/80">
            <li>
              <a href="/tefl" className="hover:text-higrad-green transition">
                TEFL Programme
              </a>
            </li>
            <li>IELTS Preparation</li>
            <li>General English</li>
            <li>Arabic & French Courses</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-higrad-green font-medium">Contact</h4>
          <ul className="mt-4 space-y-2 text-sm text-higrad-textSoft/80">
            <li>Email: higradacademy@gmail.com</li>
            <li>Phone: +212 642 550 142</li>
            <li>Location: Fes, Morocco</li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-10 border-t border-white/10">
        <div className="py-6 flex flex-col sm:flex-row justify-between items-center text-sm text-higrad-textSoft/70">
          <p>
            © {new Date().getFullYear()} Hi-Grad Academy. All rights reserved.
          </p>

          <div className="mt-3 sm:mt-0 flex gap-4">
            <a
              href="https://instagram.com/higradacademy"
              target="_blank"
              rel="noopener noreferrer"
            >
<FaInstagram />
            </a>
            <a
              href="https://linkedin.com/higradacademy"
              target="_blank"
              rel="noopener noreferrer"
            >
<FaLinkedin />
            </a>{" "}
            <a
              href="https://wa.me/212642550142"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-higrad-green transition"
            >
<FaWhatsapp />            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}
