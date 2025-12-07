import { FaTimes } from 'react-icons/fa'
import './ProjectDetails.css'

const ProjectDetails = ({ project, onClose }) => {
  if (!project) return null

  return (
    <div className="project-details-overlay" onClick={onClose}>
      <div className="project-details-container" onClick={(e) => e.stopPropagation()}>
        <div className="project-details-header">
          <h2 className="project-details-title">{project.title}</h2>
          <button className="project-details-close" onClick={onClose} aria-label="Close">
            <FaTimes />
          </button>
        </div>
        <div className="project-details-content">
          <div className="project-details-section">
            <h3 className="details-section-title">Description</h3>
            <p className="project-details-description">{project.description}</p>
          </div>
          <div className="project-details-section">
            <h3 className="details-section-title">Technologies</h3>
            <div className="project-details-technologies">
              {project.technologies.map((tech, idx) => (
                <span key={idx} className="tech-tag-large">{tech}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails

