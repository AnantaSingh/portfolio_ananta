import { useState } from 'react'
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa'
import './Home.css'

const Home = () => {
  const [showContact, setShowContact] = useState(false)

  return (
    <div className="home-page">
      <div className="home-content">
        <div className="profile-section">
          <div className="profile-image">
            <img src="/profile.png" alt="Ananta Singh" />
          </div>
          <p className="greeting">Hi There! 👋🏻 I am</p>
          <h1 className="name">Ananta Singh</h1>
          <p className="description">
            Software Engineer specializing in building scalable applications and data pipelines.
          </p>
          <button 
            onClick={() => setShowContact(!showContact)} 
            className="btn btn-primary"
          >
            Get In Touch
          </button>
          
          {showContact && (
            <div className="contact-info">
              <a href="mailto:anasingh0312@gmail.com" className="contact-item">
                <FaEnvelope />
                <span>anasingh0312@gmail.com</span>
              </a>
              <a href="tel:+15103927572" className="contact-item">
                <FaPhone />
                <span>510-392-7572</span>
              </a>
              <a
                href="https://www.linkedin.com/in/ananta-singh-ba97424b/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-item"
              >
                <FaLinkedin />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com/AnantaSingh"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-item"
              >
                <FaGithub />
                <span>GitHub</span>
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Home
