import React, { useState, useEffect } from 'react';
import './Portfolio.css';
import { FaCode, FaServer, FaDatabase, FaCloud, FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaExternalLinkAlt, FaBriefcase } from 'react-icons/fa';
import { useScrollAnimation } from './useScrollAnimation';

const Portfolio = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      if (e.target.closest('a, button, .skill-card, .project-card, .timeline-content')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);
  const [aboutRef, aboutVisible] = useScrollAnimation({ initialVisible: true });
  const [skillsRef, skillsVisible] = useScrollAnimation();
  const [experienceRef, experienceVisible] = useScrollAnimation();
  const [projectsRef, projectsVisible] = useScrollAnimation();
  const [contactRef, contactVisible] = useScrollAnimation();

  const baseUrl = import.meta.env.BASE_URL;

  return (
    <div className="portfolio">
      {/* Custom Cursor */}
      <div
        className={`cursor-dot ${isHovering ? 'hovering' : ''}`}
        style={{ left: mousePosition.x, top: mousePosition.y }}
      />
      <div
        className={`cursor-ring ${isHovering ? 'hovering' : ''}`}
        style={{ left: mousePosition.x, top: mousePosition.y }}
      />

      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-brand"><a href="#home">UT</a></div>
        <ul className="nav-menu">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="hero" id="home">
        <img src={`${baseUrl}profile.png`} alt="Profile" className="profile-img" />
        <h1>Hi, I'm <span className="highlight">Unurbat Tumen-Ulzii</span></h1>
        <p className="subtitle">
          Software Engineer with 12+ years of hands-on development<br />
          across web and mobile projects
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
              Experienced software engineer with over 12 years of hands-on development across web and mobile
              projects. I've worked with a wide range of technologies, which has made me adaptable and confident
              working on both frontend and backend systems.
            </p>
            <p>
              Proficient in Python, PHP, JavaScript, and cloud platforms like AWS, I enjoy solving complex problems,
              optimizing performance, and helping teams adopt better tools and workflows.
            </p>
            <div className="stats">
              <div className="stat">
                <h3>12+</h3>
                <p>Years Experience</p>
              </div>
              <div className="stat">
                <h3>4</h3>
                <p>Companies</p>
              </div>
              <div className="stat">
                <h3>MIT</h3>
                <p>Swinburne University</p>
              </div>
            </div>
          </div>
          <div className="about-image">
            <img src={`${baseUrl}workspace.png`} alt="Workspace" />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className={`skills ${skillsVisible ? 'visible' : ''}`} id="skills" ref={skillsRef}>
        <h2>Skills & Technologies</h2>
        <div className="skills-grid">
          <div className="skill-card">
            <div className="skill-icon"><FaCode /></div>
            <h3>Languages</h3>
            <ul>
              <li>Python</li>
              <li>PHP</li>
              <li>JavaScript</li>
            </ul>
          </div>
          <div className="skill-card">
            <div className="skill-icon"><FaServer /></div>
            <h3>Frameworks</h3>
            <ul>
              <li>Laravel / Symfony</li>
              <li>Node.js / Express.js</li>
              <li>Vue.js / Next.js</li>
              <li>Django / Flask</li>
            </ul>
          </div>
          <div className="skill-card">
            <div className="skill-icon"><FaDatabase /></div>
            <h3>Database</h3>
            <ul>
              <li>MySQL</li>
              <li>PostgreSQL</li>
              <li>MongoDB</li>
              <li>DynamoDB</li>
            </ul>
          </div>
          <div className="skill-card">
            <div className="skill-icon"><FaCloud /></div>
            <h3>DevOps & Tools</h3>
            <ul>
              <li>AWS (EC2, S3, EBS)</li>
              <li>Docker</li>
              <li>CircleCI / Github Workflow</li>
              <li>Unit Testing / REST / Git</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className={`experience ${experienceVisible ? 'visible' : ''}`} id="experience" ref={experienceRef}>
        <h2>Work Experience</h2>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-icon"><FaBriefcase /></div>
            <div className="timeline-content">
              <div className="timeline-header">
                <h3>Software Engineer</h3>
                <span className="timeline-date">Aug 2024 - Present</span>
              </div>
              <h4 className="company">Haviland Software</h4>
              <p>
                Enhanced site architecture and developed comprehensive training module for legislativellama.org in NextJS.
                Automated development process using OpenHands library.
                Developed carbon forecast mobile application using Flutterflow.
              </p>
              <div className="timeline-tags">
                <span className="tag">Next.js</span>
                <span className="tag">Flutterflow</span>
                <span className="tag">OpenHands</span>
              </div>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-icon"><FaBriefcase /></div>
            <div className="timeline-content">
              <div className="timeline-header">
                <h3>Software Engineer</h3>
                <span className="timeline-date">Sep 2021 - Aug 2024</span>
              </div>
              <h4 className="company">Bright Power</h4>
              <p>
                Built Python bot using Slack & Jira APIs to automate billing issue detection.
                Led CI/CD framework design and AWS infrastructure migration.
                Reduced monthly costs by ~$500 migrating from EBS to S3.
                Migrated from OrientDB to DynamoDB, improving application speed.
              </p>
              <div className="timeline-tags">
                <span className="tag">Python</span>
                <span className="tag">AWS</span>
                <span className="tag">DynamoDB</span>
                <span className="tag">CI/CD</span>
              </div>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-icon"><FaBriefcase /></div>
            <div className="timeline-content">
              <div className="timeline-header">
                <h3>Senior Web Developer</h3>
                <span className="timeline-date">Feb 2017 - Sep 2021</span>
              </div>
              <h4 className="company">Nomin Holding</h4>
              <p>
                Rebuilt internal HR system in Laravel from Symfony 1.4, boosting performance.
                Developed React Native app for employee HR data access.
                Scaled e-commerce catalog from 10K to 200K+ items, tripling online sales.
                Built real-time fridge monitoring system using Laravel + Python + 200 Raspberry Pis.
              </p>
              <div className="timeline-tags">
                <span className="tag">Laravel</span>
                <span className="tag">React Native</span>
                <span className="tag">Python</span>
                <span className="tag">Raspberry Pi</span>
              </div>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-icon"><FaBriefcase /></div>
            <div className="timeline-content">
              <div className="timeline-header">
                <h3>Web Developer</h3>
                <span className="timeline-date">Jul 2011 - Feb 2017</span>
              </div>
              <h4 className="company">Gegeen Dalai Group (TV5 Broadcasting)</h4>
              <p>
                Developed software and managed server infrastructure for TV5 Broadcasting.
                Built TV headline and live scoring system using Node.js and Express.js.
                Created news portal and live TV platform using Symfony 2.3 framework.
              </p>
              <div className="timeline-tags">
                <span className="tag">Symfony</span>
                <span className="tag">Node.js</span>
                <span className="tag">Express.js</span>
                <span className="tag">CodeIgniter</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className={`projects ${projectsVisible ? 'visible' : ''}`} id="projects" ref={projectsRef}>
        <h2>Featured Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <img src={`${baseUrl}project1.png`} alt="E-Commerce Platform" />
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
            <img src={`${baseUrl}project2.png`} alt="Task Management App" />
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
            <img src={`${baseUrl}project3.png`} alt="Analytics Dashboard" />
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
          <div className="project-card">
            <img src={`${baseUrl}project4.png`} alt="Victoria Road Crash Analytics" />
            <h3>Victoria Road Crash Analytics</h3>
            <p>End-to-end analytics platform processing 230K+ crash records with DBSCAN clustering to identify 200+ hotspots and real-time Kafka streaming for live monitoring.</p>
            <div className="project-tags">
              <span className="tag">R</span>
              <span className="tag">Apache Kafka</span>
              <span className="tag">Leaflet.js</span>
              <span className="tag">Docker</span>
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
                  <p>+61 0473 457 356</p>
                </div>
              </div>
              <div className="contact-item">
                <span className="icon"><FaMapMarkerAlt /></span>
                <div>
                  <strong>Location</strong>
                  <p>Melbourne, VIC, Australia</p>
                </div>
              </div>
            </div>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/unurbat/" className="social-icon" target="_blank" rel="noopener noreferrer"><FaLinkedin /> LinkedIn</a>
              <a href="https://github.com/unurbat" className="social-icon" target="_blank" rel="noopener noreferrer"><FaGithub /> GitHub</a>
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
        <p>© 2025 Unurbat Tumen-Ulzii. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Portfolio;
