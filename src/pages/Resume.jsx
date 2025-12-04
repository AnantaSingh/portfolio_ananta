import { FaDownload } from 'react-icons/fa'
import './Resume.css'

const Resume = () => {
  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = '/resume.pdf'
    link.download = 'AnantaSingh_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="resume-page">
      <div className="resume-container">
        <div className="resume-actions">
          <button onClick={handleDownload} className="download-btn">
            <FaDownload />
            Download Resume
          </button>
        </div>
        <div className="resume-embed">
          <iframe
            src="/resume.pdf"
            title="Resume"
            className="resume-pdf"
          />
        </div>
      </div>
    </div>
  )
}

export default Resume


