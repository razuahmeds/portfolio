import { NavLink } from "react-router-dom";
import "../styles/Navbars.css";

function Navbars() {
  return (
    <div className="navebars-link">
      <NavLink to={`/`}>
        <img
          className="nav-img"
          src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"
          alt="log"
        />
      </NavLink>
      <div className="a-link">
        <NavLink to={`/project`}>
          <a href="">PROJECT</a>
        </NavLink>
        <NavLink
          style={{ textDecoration: "none", color: "yellow" }}
          to={`/about`}
        >
          <a href="">ABOUT ME</a>
        </NavLink>
        <NavLink to={`/blogs`}>
          <a href="">BLOGS</a>
        </NavLink>
        <NavLink to={`/contact`}>
          <a href="">CONTACT</a>
        </NavLink>
      </div>
    </div>
  );
}

export default Navbars;
