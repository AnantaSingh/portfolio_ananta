import './Skills.css'

const Skills = () => {
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
    <section id="skills" className="skills-section">
      <h2 className="section-title">Skills</h2>
      <div className="skills-container">
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
    </section>
  )
}

export default Skills


