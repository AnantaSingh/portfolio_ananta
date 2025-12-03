import './Education.css'

const Education = () => {
  return (
    <section id="about" className="education-section">
      <h2 className="section-title">About Me</h2>
      <div className="education-content">
        <div className="education-card">
          <h3 className="degree">Master of Science in Computer Science</h3>
          <p className="university">San Jose State University</p>
          <p className="location">San Jose, CA</p>
        </div>
        <div className="about-text">
          <p>
            I'm a passionate Software Engineer with expertise in building scalable applications,
            data pipelines, and AI-powered solutions. With experience at Microsoft and currently at Volvo Group,
            I've worked on diverse projects ranging from microservices architecture to RAG-based chatbots.
          </p>
          <p>
            I enjoy solving complex problems and building systems that make a real impact.
            When I'm not coding, I'm exploring new technologies and contributing to open-source projects.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Education

