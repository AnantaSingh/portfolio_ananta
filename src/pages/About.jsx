import './About.css'

const About = () => {
  const companies = [
    {
      name: 'Volvo Group North America',
      position: 'Software Engineer Intern',
      period: 'May 2025 - Present',
    },
    {
      name: 'Microsoft',
      position: 'Software Engineer 2',
      period: 'Jul 2019 - Jul 2024',
    }
  ]

  return (
    <div className="about-page">
      <div className="about-container">
        <h1 className="page-title">About Me</h1>
        
        <div className="education-section">
          <h2 className="section-subtitle">Education</h2>
          <div className="education-card">
            <h3 className="degree">Master of Science in Computer Science</h3>
            <p className="university">San Jose State University, San Jose, CA</p>
          </div>
        </div>

        <div className="experience-section">
          <h2 className="section-subtitle">Work Experience</h2>
          {companies.map((company, index) => (
            <div key={index} className="company-card">
              <div className="company-header">
                <div>
                  <h3 className="company-name">{company.name}</h3>
                </div>
                <div className="position-info">
                  <h4 className="position">{company.position}</h4>
                  <p className="period">{company.period}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default About


