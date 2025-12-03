import './About.css'

const About = () => {
  return (
    <section id="home" className="about-section">
      <div className="about-content">
        <div className="intro">
          <p className="greeting">Hi, my name is</p>
          <h1 className="name">Ananta Singh.</h1>
          <h2 className="title">I build things for the web and cloud.</h2>
          <p className="description">
            I'm a Software Engineer specializing in building scalable applications and data pipelines.
            Currently, I'm focused on building data solutions and AI-powered applications at{' '}
            <span className="highlight">Volvo Group North America</span>.
          </p>
          <div className="contact-buttons">
            <a
              href="https://www.linkedin.com/in/ananta-singh-ba97424b/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Get In Touch
            </a>
            <a
              href="#contact"
              className="btn btn-secondary"
            >
              View Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

