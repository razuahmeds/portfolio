import AboutMe from "../components/AboutMe";
import Banner from "../components/Banner";
import Blogs from "../components/Blogs";
import Contact from "../components/Contact";
import Project from "../components/Project";

function Home() {
  return (
    <div>
      <Banner />
      <Project />
      <AboutMe />
      <Blogs />
      <Contact />
    </div>
  );
}

export default Home;
