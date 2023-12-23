import "../styles/aboutMe.css";
import { GrAdd } from "react-icons/gr";
import img from "../img/VIP_Temp_File_image_repair_1703094547507.jpg";
// import img2 from "../img/MTXX_MH20231029_225322228.jpg";

function AboutMe() {
  return (
    <div className="contenar">
      <div>
        <h3 className="contenar-h3-text">About Me</h3>
      </div>
      <div className="aboutMe-contenar">
        <div className="contenar-img">
          <img src={img} alt="img" />
        </div>
        <div className="aboutMe-contenar-texts">
          <h1>Hello I'm Rukunuzzaman Razu</h1>
          <h3>
            <samp className="junior">Junior</samp> Web developer
          </h3>
          <p>
            I am from sherpur Mymensingh. I'm studying in alhaz mokbul hosen
            university college at Computer science and engineering. recently I
            completed my web development course with jhankar mahbub in
            <samp className="programming"> Programming Hero</samp>.I've recently
            done some full- stack projects that have been added to my portfolio
            and my resume. I feel comfortable with react js and frontend web
            development.
          </p>
        </div>
      </div>
      <hr />

      <div className="personal-texts">
        <div>
          <h3>PERSONAL INFO</h3>
          <p>Name: Rukunuzzaman Razu</p>
          <p>Age: 18</p>
          <p>Nationality: Bangladeshi</p>
          <p>For hire: Available</p>
        </div>
        <div>
          <p>Email: rukunuzzaman.razu@gmail.com</p>
          <p>Phone: 01744298814</p>
        </div>
      </div>
      <h3>LOOK WHAT I CAN DO</h3>
      <div className="look-what-texts">
        <div>
          <p>
            {" "}
            <GrAdd className="icons" /> Web development
          </p>
          <p>
            {" "}
            <GrAdd className="icons" />
            Code and deploy application
          </p>
          <p>
            {" "}
            <GrAdd className="icons" />
            Maintain and update websites
          </p>
          <p>
            {" "}
            <GrAdd className="icons" />
            Frontend development
          </p>
          <p>
            {" "}
            <GrAdd className="icons" />
            Stay up-to-date on technology
          </p>
        </div>
        <div>
          <p>
            <GrAdd className="icons" /> Build user interfases
          </p>
          <p>
            <GrAdd className="icons" /> Create and test applications for
            websites
          </p>
          <p>
            {" "}
            <GrAdd className="icons" />
            Monitor website traffic
          </p>
          <p>
            {" "}
            <GrAdd className="icons" />
            Create and manage the database
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
