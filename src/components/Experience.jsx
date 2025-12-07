import './Experience.css'

const Experience = () => {
  const experiences = [
    {
      company: 'Volvo Group North America',
      location: 'Greensboro, NC',
      position: 'Software Engineer',
      period: 'May 2025 - Present',
      technologies: ['Python', 'LangChain', 'AWS', 'Node.js', 'Express', 'React', 'TypeScript', 'Apache Airflow', 'PySpark', 'dbt', 'Delta Lake', 'GitHub Actions', 'Snowflake', 'MySQL', 'PostgreSQL', 'Power BI', 'Azure'],
      achievements: [
        'Built a modular data pipeline using Airflow, PySpark, and dbt to transform spare parts and service data into Snowflake(on AWS), with Delta Lake for ACID compliance and CI/CD via GitHub Actions.',
        'Developing a RAG-based chatbot using Python, OpenAI, and AI Search for the spare part assortment process.',
        'Built a full-stack Workshop Traceability App using React (TypeScript), Node.js (Express), and MySQL on AWS (App Runner, RDS, CloudFront, S3) to automate bay reservations and safety approvals.'
      ]
    },
    {
      company: 'Microsoft',
      location: 'Hyderabad, India',
      position: 'Software Engineer 2',
      period: 'Jul 2019 - Jul 2024',
      technologies: ['Java', 'Spring Boot', 'Apache Kafka', 'Kubernetes', 'React', 'Redux', 'C#', '.NET', 'JavaScript', 'HTML', 'CSS', 'Azure', 'SQL Server', 'MongoDB', 'Docker', 'Kubernetes', 'DevOps', 'Jenkins', 'REST APIs', 'OpenAI(LLM, RAG)'],
      achievements: [
        'Architected and implemented a microservice for Renault-Nissan\'s Connected Vehicle Platform using Java, Spring Boot, Kafka, and Azure Kubernetes Service, automating test vehicle resets across distributed systems, reducing QA cycle time by 70% and improving reliability by 27%.',
        'Designed an event-driven system using Java, Spring Boot, Azure Event Grid (Pub-Sub), Service Bus, Azure Blob Storage, JavaScript, HTML, and CSS to automate vehicle list updates, load-tested to 500 updates/sec.',
        'Built a RAG-based generative AI support chatbot using OpenAI LLM, Azure Cognitive Search, React, Redux, Java, and Spring Boot, reducing support tickets by 25% and eliminating 70-hour latency for addressing support queries.',
        'Developed a RESTful API to automate and integrate support ticket creation from within the chatbot.',
        'Deployed containerized Azure Functions with Docker to purge stale data across distributed Azure Table Storage.',
        'Migrated a monolithic React UI to a micro-frontend(container app) architecture, enabling modular development.',
        'Debugged and resolved 60+ production incidents, led postmortem analyses, and improved CSAT scores by 12%.'
      ]
    }
  ]

  return (
    <section id="experience" className="experience-section">
      <h2 className="section-title">Experience</h2>
      <div className="experience-container">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-card">
            <div className="experience-header">
              <div>
                <h3 className="company-name">{exp.company}</h3>
                <p className="location">{exp.location}</p>
              </div>
              <div className="position-info">
                <h4 className="position">{exp.position}</h4>
                <p className="period">{exp.period}</p>
              </div>
            </div>
            <ul className="achievements">
              {exp.achievements.map((achievement, idx) => (
                <li key={idx}>{achievement}</li>
              ))}
            </ul>
            <div className="technologies">
              {exp.technologies.map((tech, idx) => (
                <span key={idx} className="tech-tag">{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience



