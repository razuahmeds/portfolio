import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Navbars from "./navbars/Navbars";

import Home from "./pages/Home";
import AboutMe from "./components/AboutMe";
import Blogs from "./components/Blogs";
import Project from "./project/Project";
import Contact from "./components/Contact";
import Footer from "./footer/Footer";

function App() {
  return (
    <Router>
      <Navbars />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
