import React from "react";
import Footer from "./Footer";
import "./App.css";

function MyComponent() {
  return (
    <div className="App">
      <nav className="navbar">
        <ul className="nav-links">
          <li>
            <a href="#about">About Me</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#education">Education</a>
          </li>
          <li>
            <a href="#hobbies">Hobbies</a>
          </li>
        </ul>
      </nav>
      <div className="content-container">
        <h2 className="heading">
          <span slot="title">Hello, I'm Anand.</span>
        </h2>
        <section id="about" className="about-container">
          <aside className="about-photo">
            <img
              src="https://www.seanhalpin.xyz/about/faces.jpg"
              alt="Your Photo"
              width="310"
              height="420"
              loading="lazy"
              className="faces"
            />
          </aside>
          <div className="about-content">
            <p>
              I'm a dedicated and highly motivated computer science graduate
              with a Master's degree. I'm seeking a full-time entry-level
              opportunity to apply technical skills and knowledge gained through
              coursework and projects. I am eager to contribute to a dynamic
              team while continuing to learn and grow in a professional
              environment.
            </p>
          </div>
        </section>
        <section id="experience" className="experience-section">
          <div className="experience-title">
            <h2>Experience</h2>
          </div>

          <div className="experience-content">
            <ul>
              <li className="experience-item">
                {" "}
                {/* Add a unique class */}
                <h3>
                  Project Lead - Immersive Analytics for Geospatial - University
                  Dissertation Project
                </h3>
                <p>2023-07 - 2023-09</p>
                <ul>
                  {" "}
                  The project involved exploration of Immersive Analytics and
                  its applications in geospatial data visualization. It also
                  included the development of a 3D prototype using advanced
                  technologies like WebXR, A-Frame, and Globe.gl. User
                  evaluations were conducted using Microsoft HoloLens 2 for
                  augmented reality (AR) data display. The project contributed
                  to enhancing skills in data visualization and data
                  interpretation. Notably, it played a pivotal role in research,
                  emphasizing the transformation from 2D to 3D visualization
                  through the integration of augmented reality (AR) and virtual
                  reality (VR) technologies.
                </ul>
              </li>
              <li className="experience-item">
                {" "}
                {/* Add a unique class */}
                <h3>Project Lead - Maze Searching - Academic Mini Project</h3>
                <p>2022-12 - 2023-01</p>
                <ul>
                  The project involved implementing Python code to apply the
                  Breadth-First Search (BFS) algorithm efficiently, managing
                  enqueued and dequeued lists for maze solving. Successfully,
                  the BFS algorithm was used to navigate and solve three
                  different maze types, including the Hampton Court Maze,
                  Chevening House Maze, and a randomly generated maze. The maze
                  structures were converted into graph data, and BFS was
                  employed to identify the shortest path from the maze's start
                  to the finish point. Additionally, I designed an interactive
                  user interface that allowed users to select, customize, and
                  explore various maze types using Python's Turtle module.{" "}
                </ul>
              </li>
            </ul>
          </div>
        </section>

        <section id="education" className="education-section">
          <div className="education-title">
            <h2>Education</h2>
          </div>
          <div className="education-content">
            <ul>
              <li className="education-item">
                {" "}
                {/* Add a unique class */}
                <h3>Master of Science: Computer Science</h3>
                <p>Bangor University - Bangor, GWN, UK</p>
                <p>2022-09 - 2023-08</p>
                <ul>
                  Learned foundational computer science principles and gained
                  practical skills through the MSc in Computing program,
                  fostering ethical and professional growth. Front-end
                  technologies (HTML, JS, and CSS), Python, and MySQL.
                </ul>
              </li>
              <li className="education-item">
                {" "}
                {/* Add a unique class */}
                <h3>Bachelor's in Computer Applications</h3>
                <p>Dr. B.A.M.U - Aurangabad</p>
                <p>2018-03 - 2021-05</p>
                <ul>
                  Obtained a comprehensive education in computer applications
                  during my Bachelor's degree, equipping me with a strong
                  foundation in IT fundamentals.
                </ul>
              </li>
            </ul>
          </div>
        </section>
      </div>
      <section id="hobbies" className="section-hobbies">
        <h2>Hobbies</h2>
        <div className="hobbies-content">
          <ul>
            <li className="hobby-item">
              <span>Learning new things</span>
            </li>
            <li className="hobby-item">
              <span>Travelling</span>
            </li>
            <li className="hobby-item">
              <span>Volunteering</span>
            </li>
          </ul>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default MyComponent;
