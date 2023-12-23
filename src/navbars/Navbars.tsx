import { Link } from "react-router-dom";
import "../styles/Navbars.css";

function Navbars() {
  return (
    <div className="navebars-link">
      <Link to={`/`}>
        <img
          className="nav-img"
          src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"
          alt="log"
        />
      </Link>
      <div className="a-link">
        <Link to={`/project`}>
          <a href="">PROJECT</a>
        </Link>
        <Link to={`/about`}>
          <a href="">ABOUT ME</a>
        </Link>
        <Link to={`/blogs`}>
          <a href="">BLOGS</a>
        </Link>
        <Link to={`/contact`}>
          <a href="">CONTACT</a>
        </Link>
      </div>
    </div>
  );
}

export default Navbars;
