import Home from "./pages/home";
import Nav from "./components/navbar";
import TEFL from "./pages/tefl";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tefl" element={<TEFL />} />
      </Routes>
    </>
  );
}

export default App;
