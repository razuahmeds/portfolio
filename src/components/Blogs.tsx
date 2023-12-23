import "../styles/blogs.css";

function Blogs() {
  return (
    <div className="category">
      <div>
        <p>Filter by category</p>
        <div className="blogs-btn">
          <button>ALL BLOGS</button>
          <button>HTML</button>
          <button>CSS</button>
          <button>BOOTSTRAP</button>
          <button>TAILWIND CSS</button>
          <button>JAVASCRIPT</button>
          <button>TSPARTICLES</button>
          <button>REACT JS</button>
          <button>VITEJS.DEV</button>
          <button>NODE JS</button>
          <button>NEXT JS</button>
          <button>MONGODB</button>
          <button>FRONT END</button>
        </div>
        <div className="content-card">
          <div className="card">
            <div className="image">
              <img
                src="https://blog.logrocket.com/wp-content/uploads/2022/11/best-css-background-generators.png"
                alt=""
              />
            </div>
            <div className="content">
              <a href="#">
                <span className="title">Css animation</span>
              </a>

              <p className="desc">
                CSS Animations is a technique to change the appearance and
                behavior of various elements in web pages. It is used to control
                the elements by changing their motions or display. It ha
              </p>

              <a className="action" href="#">
                Read more...
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          <div className="card">
            <div className="image">
              <img
                src="https://www.freecodecamp.org/news/content/images/2022/10/1.-event-bubbling-js.png"
                alt=""
              />
            </div>
            <div className="content">
              <a href="#">
                <span className="title">Event bubbling</span>
              </a>

              <p className="desc">
                Event bubbling is a technique in which the event is first
                captured, handled by the target element and propagated to parent
                elements until it reaches the document object.
              </p>

              <a className="action" href="#">
                Read more...
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          <div className="card">
            <div className="image">
              <img
                src="https://study.com/cimages/videopreview/w9ofj4ccpu.jpg"
                alt=""
              />
            </div>
            <div className="content">
              <a href="#">
                <span className="title">Type of error in javascript</span>
              </a>

              <p className="desc">
                There are three main types of errors that can occur while
                compiling a JavaScript program. There are three type of errors
                in javascript, 1.syntax error, 2. runtime error, and 3. lo
              </p>

              <a className="action" href="#">
                Read more...
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        <div className="content-card">
          <div className="card">
            <div className="image">
              <img
                src="https://www.tatvasoft.com/blog/wp-content/uploads/2020/12/How-to-Implement-CRUD-Operations-on-SQL-Table-Using-External-Content-Type-in-SharePoint.jpg"
                alt=""
              />
            </div>
            <div className="content">
              <a href="#">
                <span className="title">What is CRUD Operations?</span>
              </a>

              <p className="desc">
                Crud means Create, Read, Update, and Delete. That means four
                basic functions that models should be able to do, at most.When
                we are building APIs, we want our models to provide four
              </p>

              <a className="action" href="#">
                Read more...
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          <div className="card">
            <div className="image">
              <img
                src="https://res.cloudinary.com/practicaldev/image/fetch/s--STwNMK0K--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/9dpmjik9wunh4ctctt3v.png"
                alt=""
              />
            </div>
            <div className="content">
              <a href="#">
                <span className="title">What is prop drilling?</span>
              </a>

              <p className="desc">
                Prop drilling is the process in a React app where props are
                passed from one part of a tree to another by going through other
                parts that do not need the data, but only help in passi
              </p>

              <a className="action" href="#">
                Read more...
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          <div className="card">
            <div className="image">
              <img
                src="https://pbs.twimg.com/media/DGwipjmUIAEBOy4.jpg"
                alt=""
              />
            </div>
            <div className="content">
              <a href="#">
                <span className="title">
                  What is NaN property in JavaScript?
                </span>
              </a>

              <p className="desc">
                There are three main types of errors that can occur while
                compiling a JavaScript program. There are three type of errors
                in javascript, 1.syntax error, 2. runtime error, and 3. lo
              </p>

              <a className="action" href="#">
                Read more...
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blogs;
