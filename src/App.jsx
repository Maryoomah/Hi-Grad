import Home from "./pages/home";
import Nav from "./components/navbar";
import Footer from "./components/footer";
import Courses from "./pages/courses";
import TEFL from "./pages/tefl";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/scroll";
import { useEffect } from "react";
import About from "./pages/about";
import Contact from "./pages/contact";
import LearningHub from "./pages/learningHub";
import ResourceCategory from "./pages/resourceCategory";

import TeflForm from "./pages/teflForm";
import AOS from "aos";
import "aos/dist/aos.css";
function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation speed
      once: true, // animate only once
      offset: 100, // start animation a bit earlier
    });
  }, []);
  return (
    <>
      <Nav />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/tefl" element={<TEFL />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/learning-hub" element={<LearningHub />} />
<Route path="/learning-hub/:category" element={<ResourceCategory />} />
        <Route path="/form" element={<TeflForm />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
