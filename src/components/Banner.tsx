import "../styles/banner.css";
// import img1 from "../img/VIP_Temp_File_image_repair_1703094547507.jpg";
import img2 from "../img/removebg-1.png";
export default function Banner() {
  return (
    <div className="banner-contenar">
      <div className="banner-text">
        <h5>Hello I'M</h5>
        <h1>Razu Ahmed</h1>
        <h3>Junior Web developer</h3>
        <p>
          Self-motivated, highly passionate, and hardworking junior web
          developer. Looking for A knowledge-sharing environment to develop my
          skill, interest in new technologies, and represent me by my skill. I
          Want to be a Full-Stack web Developer.
        </p>
      </div>
      <img className="banner-imgs" src={img2} alt="logo" />
    </div>
  );
}
