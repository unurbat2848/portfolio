import React from 'react';
import './Portfolio.css';
import { FaCode, FaServer, FaMobile, FaCloud, FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter, FaExternalLinkAlt } from 'react-icons/fa';
import { useScrollAnimation } from './useScrollAnimation';

const Portfolio = () => {
  const [aboutRef, aboutVisible] = useScrollAnimation({ initialVisible: true });
  const [skillsRef, skillsVisible] = useScrollAnimation();
  const [projectsRef, projectsVisible] = useScrollAnimation();
  const [contactRef, contactVisible] = useScrollAnimation();

  return (
    <div className="portfolio">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-brand"><a href="#home">Unurbat</a></div>
        <ul className="nav-menu">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="hero" id="home">
        <img src="/profile.png" alt="Profile" className="profile-img" />
        <h1>Hi, I'm <span className="highlight">Unurbat Tumenulzii</span></h1>
        <p className="subtitle">
          Full-Stack Software Developer crafting innovative digital solutions<br />
          with modern technologies
        </p>
        <div className="hero-buttons">
          <button className="btn btn-primary">View My Work</button>
          <button className="btn btn-secondary">Download CV</button>
        </div>
      </section>

      {/* About Section */}
      <section className={`about ${aboutVisible ? 'visible' : ''}`} id="about" ref={aboutRef}>
        <div className="about-content">
          <div className="about-text">
            <h2>About Me</h2>
            <p>
              I'm a passionate software developer with 5+ years of experience building
              scalable web applications and mobile solutions. I specialize in modern
              JavaScript frameworks, cloud technologies, and creating seamless user experiences.
            </p>
            <p>
              When I'm not coding, you'll find me contributing to open-source projects,
              mentoring junior developers, or exploring the latest tech trends.
            </p>
            <div className="stats">
              <div className="stat">
                <h3>50+</h3>
                <p>Projects Completed</p>
              </div>
              <div className="stat">
                <h3>5+</h3>
                <p>Years Experience</p>
              </div>
              <div className="stat">
                <h3>5+</h3>
                <p>Years Experience</p>
              </div>
            </div>
          </div>
          <div className="about-image">
            <img src="/workspace.png" alt="Workspace" />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className={`skills ${skillsVisible ? 'visible' : ''}`} id="skills" ref={skillsRef}>
        <h2>Skills & Technologies</h2>
        <div className="skills-grid">
          <div className="skill-card">
            <div className="skill-icon"><FaCode /></div>
            <h3>Frontend</h3>
            <ul>
              <li>React.js / Next.js</li>
              <li>Vue.js / Nuxt.js</li>
              <li>TypeScript</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>
          <div className="skill-card">
            <div className="skill-icon"><FaServer /></div>
            <h3>Backend</h3>
            <ul>
              <li>Node.js / Express</li>
              <li>Python / Django</li>
              <li>PostgreSQL / MongoDB</li>
              <li>GraphQL / REST APIs</li>
            </ul>
          </div>
          <div className="skill-card">
            <div className="skill-icon"><FaMobile /></div>
            <h3>Mobile</h3>
            <ul>
              <li>React Native</li>
              <li>Flutter</li>
              <li>iOS / Android</li>
              <li>App Store Deploy</li>
            </ul>
          </div>
          <div className="skill-card">
            <div className="skill-icon"><FaCloud /></div>
            <h3>DevOps</h3>
            <ul>
              <li>AWS / Azure</li>
              <li>Docker / Kubernetes</li>
              <li>CI/CD Pipelines</li>
              <li>Git / Github Actions</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className={`projects ${projectsVisible ? 'visible' : ''}`} id="projects" ref={projectsRef}>
        <h2>Featured Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <img src="/project1.png" alt="E-Commerce Platform" />
            <h3>E-Commerce Platform</h3>
            <p>Full-stack e-commerce solution with React, Node.js, and Stripe integration.</p>
            <div className="project-tags">
              <span className="tag">React</span>
              <span className="tag">Node.js</span>
              <span className="tag">MongoDB</span>
            </div>
            <div className="project-links">
              <a href="#" className="project-link"><FaExternalLinkAlt /> Live Demo</a>
              <a href="#" className="project-link"><FaGithub /> Code</a>
            </div>
          </div>
          <div className="project-card">
            <img src="/project2.png" alt="Task Management App" />
            <h3>Task Management App</h3>
            <p>Cross-platform mobile app built with React Native and Firebase backend.</p>
            <div className="project-tags">
              <span className="tag">React Native</span>
              <span className="tag">Firebase</span>
              <span className="tag">Redux</span>
            </div>
            <div className="project-links">
              <a href="#" className="project-link"><FaExternalLinkAlt /> Live Demo</a>
              <a href="#" className="project-link"><FaGithub /> Code</a>
            </div>
          </div>
          <div className="project-card">
            <img src="/project3.png" alt="Analytics Dashboard" />
            <h3>Analytics Dashboard</h3>
            <p>Real-time analytics dashboard with interactive charts and data visualization.</p>
            <div className="project-tags">
              <span className="tag">React</span>
              <span className="tag">Python</span>
              <span className="tag">D3.js</span>
            </div>
            <div className="project-links">
              <a href="#" className="project-link"><FaExternalLinkAlt /> Live Demo</a>
              <a href="#" className="project-link"><FaGithub /> Code</a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className={`contact ${contactVisible ? 'visible' : ''}`} id="contact" ref={contactRef}>
        <h2>Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's Work Together</h3>
            <p>
              I'm always interested in new opportunities and exciting projects.
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>
            <div className="contact-details">
              <div className="contact-item">
                <span className="icon"><FaEnvelope /></span>
                <div>
                  <strong>Email</strong>
                  <p>unurut@gmail.com</p>
                </div>
              </div>
              <div className="contact-item">
                <span className="icon"><FaPhone /></span>
                <div>
                  <strong>Phone</strong>
                  <p>+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="contact-item">
                <span className="icon"><FaMapMarkerAlt /></span>
                <div>
                  <strong>Location</strong>
                  <p>Melbourne, VIC</p>
                </div>
              </div>
            </div>
            <div className="social-links">
              <a href="#" className="social-icon"><FaLinkedin /> LinkedIn</a>
              <a href="#" className="social-icon"><FaGithub /> GitHub</a>
              <a href="#" className="social-icon"><FaTwitter /> Twitter</a>
            </div>
          </div>
          <form className="contact-form">
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <textarea placeholder="Message" rows="5" required></textarea>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 Unurbat Tumenulzii. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Portfolio;
