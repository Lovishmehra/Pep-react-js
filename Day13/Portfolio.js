import React from 'react';
import './style.css';

function Convert() {
  return (
    <div>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>React Developer Portfolio</title>
      <link rel="stylesheet" href="styles.css" />
      <header>
        <nav>
          <ul className="nav-links">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
      <section className="hero">
        <img src="https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2022/04/web-developer-portfolio.png" className='image'/>
        <h1>Hi, I'm Lovish Mehra</h1>
        <p>A Passionate React Web Developer</p>
      </section>
      <section id="about" className="about">
        <h2>About Me</h2>
        <p>
          I am a React web developer with experience in building scalable and
          efficient web applications. My tech stack includes ReactJS, Node.js,
          MongoDB, and more.
        </p>
      </section>
      <section id="projects" className="projects">
        <h2>My Projects</h2>
        <div className="project-item">
          <h3>Netflix Clone</h3>
          <p>
            A fully responsive Netflix clone built using ReactJS and integrated
            with a movie API for dynamic content.
          </p>
        </div>
        <div className="project-item">
          <h3>Gym managment system</h3>
          <p>
            A gym management system built using ReactJS and Node.js for user in which admin can add,delete and update data and user can view data.
          </p>
        </div>
      </section>
      <section id="contact" className="contact">
        <h2>Contact Me</h2>
        <p>Email: lovishmehra798@example.com</p>
        <p>
          LinkedIn: <a href="#">linkedin.com/in/lovishmehra</a>
        </p>
      </section>
      <footer>
        <p>© 2025 lovish mehra | All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Convert
