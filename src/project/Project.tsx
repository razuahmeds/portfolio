import { Card, Col, Row } from "react-bootstrap";
import "../styles/project.css";

export const projectsData = [
  {
    id: 1,
    title: "Drone",
    img: "https://i.ibb.co/GdqD0cn/Screenshot-2023-12-29-151420.png",
    githubLink: "https://github.com/razuahmeds/drone-app",
    websiteLink: "https://drone-apps.netlify.app//",
    link: "https://drone-apps.netlify.app/",
  },
  {
    id: 2,
    title: "Fabrik",
    img: "https://i.ibb.co/R6DQMRD/Fabrik.png",
    githubLink: "https://github.com/razuahmeds/Fabrik-app",
    websiteLink: "https://fabrik-app.netlify.app/",
    link: "https://fabrik-app.netlify.app/",
  },
  {
    id: 3,
    title: "Willowy-blini",
    img: "https://i.ibb.co/PhXzLbT/Largest-Classifieds-In-The-World-1.png",
    githubLink: "https://github.com/razuahmeds/html-temp-1",
    websiteLink: "https://willowy-blini.netlify.app/",
    link: "https://willowy-blini.netlify.app/",
  },
  {
    id: 4,
    title: "Miami-lake",
    img: "https://i.ibb.co/4W8NsJz/Miami-Lake.png",
    githubLink: "https://github.com/razuahmeds/html-temp-2",
    websiteLink: "https://miami-lake.netlify.app/",
    link: "https://miami-lake.netlify.app/",
  },
  {
    id: 5,
    title: "Interor-design-app",
    img: "https://i.ibb.co/vLKbzNR/Interor-Design.png",
    githubLink: "https://github.com/razuahmeds/interor-design-app",
    websiteLink: "https://interor-design-app.netlify.app/",
    link: "https://interor-design-app.netlify.app/",
  },
  {
    id: 6,
    title: "iphone-app",
    img: "https://i.ibb.co/bQZZJST/React-App.png",
    githubLink: "https://github.com/razuahmeds/react-my-awesome-app",
    websiteLink: "https://iphone-apps-react.netlify.app/",
    link: "https://iphone-apps-react.netlify.app/",
  },
  {
    id: 7,
    title: "Sweet-cendol",
    img: "https://i.ibb.co/8r56ZN3/React-App1.png",
    githubLink: "https://github.com/razuahmeds/my-app",
    websiteLink: "https://sweet-cendol.netlify.app/",
    link: "https://sweet-cendol.netlify.app/",
  },
  {
    id: 8,
    title: "WEBSITE",
    img: "https://i.ibb.co/4SQpY26/WEBSITE.png",
    githubLink: "https://github.com/razuahmeds/Taiwind-Bootstrap-Website",
    websiteLink: "https://programming-learner.netlify.app/",
    link: "https://programming-learner.netlify.app/",
  },
  {
    id: 9,
    title: "Panda-Commerce",
    img: "https://i.ibb.co/4RBcjg9/Panda-Commerce.png",
    githubLink: "https://github.com/razuahmeds/Panda-Commerce",
    websiteLink: "https://fastidious-sopapillas-47991c.netlify.app",
    link: "https://fastidious-sopapillas-47991c.netlify.app",
  },
  {
    id: 10,
    title: "Panda-Commerce",
    img: "https://i.ibb.co/hZm57Vn/penguin-fashion.png",
    githubLink: "https://github.com/razuahmeds/penguin-fashion-with-tailwind",
    websiteLink: "https://lucky-gingersnap-6ddbe6.netlify.app",
    link: "https://lucky-gingersnap-6ddbe6.netlify.app",
  },
];

function Project() {
  return (
    <div>
      <div className="project-card">
        <div className="project">
          <div className="project-texts">
            <h5>My project</h5>
            <h2>web developer project</h2>
            <p>
              From Web Components and UI/UX animations to React.JS, Redux, and
              Node.JS. Check out my latest web software development portfolio
              projects.
            </p>
          </div>
          <div className="project-button">
            <button>SHOW ALL</button>
            <button>HTML-5</button>
            <button>CSS-3</button>
            <button>BOOTSTRAP</button>
            <button>TAILWIND-CSS</button>
            <button>JAVASCRIPT</button>
            <button>TSPARTICLES</button>
            <button>REACT JS</button>
            <button>VITEJS.DEV</button>
            <button>NODE JS</button>
            <button>NEXT JS</button>
            <button>MONGODB</button>
            <button>FRONT END</button>
          </div>
        </div>

        <div className="allProjects">
          <div className="contents">
            <div className="projects-content">
              <Row xs={1} md={1} lg={2} className="g-4 " style={{}}>
                {projectsData?.map((item, idx) => (
                  <Col key={idx} style={{}}>
                    <Card
                      style={{
                        position: "relative",
                        height: 300,
                      }}
                    >
                      <a href="https://drone-apps.netlify.app/">
                        {" "}
                        <Card.Img
                          style={{
                            height: 200,
                            objectFit: "cover",
                            width: 390,
                          }}
                          src={item?.img}
                        />
                      </a>
                      <Card.Body
                        style={{
                          background: "#DBDAD9",
                          textAlign: "center",
                          width: 390,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-around",
                          height: 100,
                        }}
                      >
                        <h4 className="name-text">Title : {item?.title}</h4>

                        {item.link && (
                          <a
                            href={item.link}
                            target="_blank"
                            className="name-text"
                          >
                            Live link
                          </a>
                        )}
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
