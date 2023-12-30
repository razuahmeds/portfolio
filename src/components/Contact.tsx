import "../styles/contact.css";
import { FaSquareFacebook } from "react-icons/fa6";
import { BsLinkedin } from "react-icons/bs";
import { VscGithub } from "react-icons/vsc";

function Contact() {
  return (
    <div className="contact">
      <h4 className="h4-texts">Contact</h4>
      <div>
        <h3>DON'T BE SHY. GET IN TOUCH</h3>
        <p>
          I'm currently available for freelance projects or full-time work. If
          you're interested in working with me. please get in touch using one of
          the methods below.
        </p>
      </div>
      <div className="input">
        <input
          className="name-input"
          type="text"
          placeholder="Fill with you name"
        />
        <br />
        <input
          className="email-input"
          type="email"
          name=""
          id=""
          placeholder="Enter email"
        />
        <input className="subject-input" type="text" placeholder="Subject" />
        <br />
        <input
          className="say-input"
          type="text"
          name=""
          id=""
          placeholder="Say hello"
        />
        <br />
        <button className="submit-button" type="submit">
          submit
        </button>
      </div>
      <div className="icon-button">
        <h2>Let's get social</h2>
        <a href="https://www.facebook.com/" target="_blank">
          <button className="facebook">
            <FaSquareFacebook />
            <span style={{ marginLeft: 15 }}>FACEBOOK</span>
          </button>
        </a>
        <a href="https://www.linkedin.com/in/razu-dev/" target="_blank">
          <button className="linkedin">
            <BsLinkedin />

            <span style={{ marginLeft: 15 }}>LINKENIN</span>
          </button>
        </a>
        <a href="https://github.com/razuahmeds" target="_blank">
          <button className="github">
            <VscGithub />
            <span style={{ marginLeft: 15 }}>GITHUD</span>
          </button>
        </a>
      </div>
    </div>
  );
}

export default Contact;
