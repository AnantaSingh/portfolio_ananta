import './About.css'

const About = () => {
  const companies = [
    {
      name: 'Volvo Group North America',
      location: 'Greensboro, NC',
      position: 'Software Engineer',
      period: 'May 2025 - Present',
      technologies: ['Python', 'LangChain', 'AWS', 'Node.js', 'Express', 'React', 'TypeScript', 'Apache Airflow', 'PySpark', 'dbt', 'Delta Lake', 'GitHub Actions', 'Snowflake', 'MySQL', 'PostgreSQL', 'Power BI', 'Azure']
    },
    {
      name: 'Microsoft',
      location: 'Hyderabad, India',
      position: 'Software Engineer 2',
      period: 'Jul 2019 - Jul 2024',
      technologies: ['Java', 'Spring Boot', 'Apache Kafka', 'Kubernetes', 'React', 'Redux', 'C#', '.NET', 'JavaScript', 'HTML', 'CSS', 'Azure', 'SQL Server', 'MongoDB', 'Docker', 'Kubernetes', 'DevOps', 'Jenkins', 'REST APIs', 'OpenAI(LLM, RAG)']
    }
  ]

  const skillCategories = [
    {
      category: 'Programming Languages',
      skills: ['Java', 'Python', 'C#', 'JavaScript', 'C++', 'C', 'HTML', 'CSS', 'Shell', 'SQL', 'Kusto (KQL)', 'Cypher', 'ABAP', 'Swift']
    },
    {
      category: 'Frameworks & Libraries',
      skills: ['Node.js', 'Express', 'React', 'Redux', 'Spring Boot', 'Flask', 'Django', '.NET Framework', '.NET Core', 'Hooks', 'Zustand', 'Material UI', 'Fluent UI', 'SwiftUI', 'LangChain', 'NumPy']
    },
    {
      category: 'Tools',
      skills: ['Visual Studio', 'Android Studio', 'Power BI', 'GitHub', 'Jenkins', 'Xcode', 'Docker', 'Kubernetes', 'Prometheus', 'Grafana']
    },
    {
      category: 'Database',
      skills: ['MySQL', 'PostgreSQL', 'SQL Server', 'CosmosDB', 'MongoDB', 'Google Firebase', 'Azure Storage', 'Neo4j']
    },
    {
      category: 'Cloud',
      skills: ['AWS', 'Azure', 'Azure Data Explorer', 'Azure Databricks', 'Azure OpenAI', 'Azure AI Search', 'Quickbase', 'SAP']
    },
    {
      category: 'ML Libraries & Models',
      skills: ['FaceNet', 'scikit-learn', 'SVM', 'Random Forest', 'MLP', 'PCA', 'MTCNN', 'SimSwap', 'InsightFace', 'imgaug', 'GridSearchCV', 'IsolationForest', 'Sentiment Analysis']
    },
    {
      category: 'Miscellaneous',
      skills: ['Microservices', 'RESTful API', 'MVC', 'CI/CD', 'DevOps', 'Android App Development', 'LLM', 'RAG', 'RabbitMQ', 'Kafka']
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
            <p className="university">San Jose State University</p>
            <p className="location">San Jose, CA</p>
          </div>
        </div>

        <div className="experience-section">
          <h2 className="section-subtitle">Work Experience</h2>
          {companies.map((company, index) => (
            <div key={index} className="company-card">
              <div className="company-header">
                <div>
                  <h3 className="company-name">{company.name}</h3>
                  <p className="company-location">{company.location}</p>
                </div>
                <div className="position-info">
                  <h4 className="position">{company.position}</h4>
                  <p className="period">{company.period}</p>
                </div>
              </div>
              <div className="technologies">
                {company.technologies.map((tech, idx) => (
                  <span key={idx} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="skills-section">
          <h2 className="section-subtitle">Skills</h2>
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3 className="category-title">{category.category}</h3>
              <div className="skills-list">
                {category.skills.map((skill, idx) => (
                  <span key={idx} className="skill-item">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default About


