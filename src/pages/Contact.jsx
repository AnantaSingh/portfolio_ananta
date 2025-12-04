import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa'
import './Contact.css'

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-container">
        <h1 className="page-title">Get In Touch</h1>
        <p className="contact-description">
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi,
          I'll try my best to get back to you!
        </p>
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
      </div>
    </div>
  )
}

export default Contact


