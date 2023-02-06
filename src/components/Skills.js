import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p><b>Programming languages:</b> Python, JavaScript, Java, TypeScript<br></br>
                <b>Computer Science:</b> Algorithms and Data Structures, Computer Networks, OS, DBMS, OOPS <br></br>
                <b>Relational databases</b> and <b>SQL</b><br></br>
                <b>Tools:</b> IntelliJ, PyCharm<br></br>
                <b>Web Dev & Frameworks:</b> HTML, CSS, JavaScript, Bootstrap, Semantic UI, Bulma, AJAX and APIs, Selenium, Flask
                <br></br><b>Databases:</b> MongoDB, MySQL, SQLite<br></br>
                <b>Version Control System:</b> Git(distributed version control), SVN(Subversion)<br></br>
                <b>Libraries:</b> Vanilla.js, React.js, Node.js(Back-end JS runtime Environment), Express.js, Mongoose(ODM-Object Data Modelling library),Beautiful Soup, Numpy, Pandas, Matplotlib, Plotly, Scikit Learn<br></br>
                <b>Operating Systems:</b> UNIX/Linux(File Manipulation, Advanced Commands, Shell Scripting)</p>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Front-End</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>Algo and Data Structures</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>Back-End</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Team Work</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}