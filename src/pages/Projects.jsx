import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import './Projects.css'

const Projects = () => {
  const projects = [
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
    },
    {
      title: 'AI Learning Hub',
      description: 'Developed a platform for AI resources featuring an advanced search engine with intelligent filtering, GitHub API integration for trending repositories, and personalized bookmarking.',
      technologies: ['Python', 'Django', 'PostgreSQL', 'HTML', 'CSS', 'JavaScript', 'Render', 'Git'],
      github: 'https://github.com/AnantaSingh',
      external: null
    }
  ]

  return (
    <div className="projects-page">
      <div className="projects-container">
        <h1 className="page-title">Projects</h1>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
                <div className="project-links">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                    >
                      <FaGithub />
                    </a>
                  )}
                  {project.external && (
                    <a
                      href={project.external}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="External Link"
                    >
                      <FaExternalLinkAlt />
                    </a>
                  )}
                </div>
              </div>
              <p className="project-description">{project.description}</p>
              <div className="project-technologies">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects


