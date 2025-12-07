import { useState } from 'react'
import { FaGithub, FaExternalLinkAlt, FaInfoCircle } from 'react-icons/fa'
import ProjectDetails from '../components/ProjectDetails'
import './Projects.css'

const Projects = () => {
  const [showDetails, setShowDetails] = useState(null)

  const projectCategories = [
    {
      category: 'Machine Learning',
      projects: [
        {
          title: 'Deepfake Attack on Face Recognition',
          description: 'Developed a facial recognition system using FaceNet and trained classifiers (SVM, MLP, Random Forest) on an augmented PubFig dataset (~10k images). Evaluated system vulnerability to deepfakes generated via InsightFace and SimSwap, revealing a significant misidentification rate difference (0.03 vs. 0.49).',
          technologies: ['Python', 'FaceNet', 'scikit-learn', 'SVM', 'Random Forest', 'MLP', 'PCA', 'MTCNN', 'SimSwap', 'InsightFace', 'imgaug', 'GridSearchCV'],
          github: 'https://github.com/AnantaSingh',
          external: null
        },
        {
          title: 'Smart Device Analyzer',
          description: 'Created a system that uses machine learning to interpret device behavior patterns, categorizing states as Normal, Fatigued, Stressed, or Critical, making technical data intuitive for non-technical users.',
          technologies: ['Python', 'Flask', 'IsolationForest', 'Sentiment Analysis', 'NumPy', 'scikit-learn', 'Vercel'],
          github: 'https://github.com/AnantaSingh',
          external: null
        }
      ]
    },
    {
      category: 'Data Engineering',
      projects: []
    },
    {
      category: 'Gen AI',
      projects: []
    },
    {
      category: 'Frontend',
      projects: [
        {
          title: 'AI Learning Hub',
          description: 'Developed a platform for AI resources featuring an advanced search engine with intelligent filtering, GitHub API integration for trending repositories, and personalized bookmarking.',
          technologies: ['Python', 'Django', 'PostgreSQL', 'HTML', 'CSS', 'JavaScript', 'Render', 'Git'],
          github: 'https://github.com/AnantaSingh',
          external: null
        }
      ]
    },
    {
      category: 'Backend',
      projects: [
        {
          title: 'Social Network Application',
          description: 'A full-stack social network application demonstrating graph database capabilities with Neo4j. The application features user registration, profile management, and relationship tracking through follow/unfollow functionality. It leverages graph traversal algorithms to provide friend recommendations based on mutual connections, search capabilities, and popular user analytics. Built with a modern Streamlit web interface and a command-line interface using Rich, the project showcases efficient graph querying, relationship modeling, and real-time data visualization.',
          technologies: ['Python', 'Neo4j', 'Graph Databases', 'Cypher Query Language', 'Streamlit', 'Docker', 'RESTful API Design', 'Data Modeling', 'Graph Algorithms', 'Database Design', 'User Authentication', 'Session Management', 'Environment Variables', 'pandas', 'Rich CLI Framework', 'NoSQL Databases', 'Relationship Mapping', 'Graph Traversal', 'Friend Recommendation Systems', 'Social Network Analysis'],
          github: 'https://github.com/AnantaSingh',
          external: null,
          demo: '/social-network-demo.mov'
        }
      ]
    }
  ]

  return (
    <div className="projects-page">
      <div className="projects-container">
        <h1 className="page-title">Projects</h1>
        {projectCategories.map((category, catIndex) => (
          <div key={catIndex} className="project-category">
            <h2 className="category-title">{category.category}</h2>
            {category.projects.length > 0 ? (
              <div className="projects-grid">
                {category.projects.map((project, index) => (
                  <div key={index} className="project-card">
                    <h3 className="project-title">{project.title}</h3>
                    {!project.demo && (
                      <p className="project-subtitle">Click Details to learn more</p>
                    )}
                    <div className="project-links">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="GitHub"
                          className="project-link"
                        >
                          <FaGithub />
                          <span>GitHub</span>
                        </a>
                      )}
                      {project.external && (
                        <a
                          href={project.external}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="External Link"
                          className="project-link"
                        >
                          <FaExternalLinkAlt />
                          <span>External</span>
                        </a>
                      )}
                      <button
                        onClick={() => setShowDetails(project)}
                        className="details-button"
                        aria-label="View Details"
                        title="View Project Details"
                      >
                        <FaInfoCircle />
                        <span className="details-button-text">Details</span>
                      </button>
                    </div>
                    {project.demo && (
                      <div className="project-video-container">
                        <video
                          src={project.demo}
                          controls
                          className="project-video"
                          preload="metadata"
                        >
                          Your browser does not support the video tag.
                        </video>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <p className="empty-category">More projects coming soon...</p>
            )}
          </div>
        ))}
      </div>
      {showDetails && (
        <ProjectDetails
          project={showDetails}
          onClose={() => setShowDetails(null)}
        />
      )}
    </div>
  )
}

export default Projects
