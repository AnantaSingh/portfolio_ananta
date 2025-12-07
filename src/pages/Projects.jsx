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
          github: 'https://github.com/AnantaSingh/BiometricAI',
          external: null
        },
        {
          title: 'Smart Device Analyzer',
          description: 'Created a system that uses machine learning to interpret device behavior patterns, categorizing states as Normal, Fatigued, Stressed, or Critical, making technical data intuitive for non-technical users.',
          technologies: ['Python', 'Flask', 'IsolationForest', 'Sentiment Analysis', 'NumPy', 'scikit-learn', 'Vercel'],
          github: 'https://github.com/AnantaSingh/smart-device-analyzer',
          external: null
        },
        {
          title: 'Sleeper Agents',
          description: 'Replicated Anthropic\'s Sleeper Agents study by fine-tuning DeepSeek-Coder-1.3B with LoRA and achieved 100% differentiation responses, validating sleeper-agent behavior in small LLMs.',
          technologies: ['Python', 'PyTorch', 'Hugging Face Transformers', 'LoRA (PEFT)', 'TPU v5e', 'Prompt Engineering', 'DeepSeek-Coder'],
          github: 'https://github.com/AnantaSingh/SleeperAgents',
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
          github: 'https://github.com/AnantaSingh/AILearningHub',
          external: null
        }
      ]
    },
    {
      category: 'Data Engineering',
      projects: []
    },
    {
      category: 'Networking',
      projects: [
        {
          title: 'Wireless Network Handover Optimization',
          description: 'I built a wireless network emulation project using Mininet-WiFi to analyze how mobile stations perform handovers between multiple Access Points under different network conditions. The project implements SSF (Strongest Signal First) and an advanced MCDM-based handover algorithm that combines RSSI, delay, and AP congestion using Entropy weighting and TOPSIS. In scenarios with 4 APs, where AP2 was 2.5× more congested, SSF incorrectly selected AP2 due to its stronger signal, while the MCDM model correctly preferred AP4, achieving fewer handovers, lower latency, and behavior consistent with findings from Mahardhika (2012). The system includes mobility modeling, path-loss RSSI estimation, hysteresis, and detailed handover delay logging. This project demonstrates how algorithmic decision-making can significantly improve Wi-Fi roaming quality in multi-AP environments.',
          technologies: ['Mininet', 'Mininet-WiFi', 'network emulation', 'wireless networking', 'Wi-Fi 802.11', 'access points', 'RSSI modeling', 'mobility simulation', 'handover algorithms', 'SSF', 'MCDM', 'entropy weighting', 'TOPSIS algorithm', 'Python programming', 'algorithm design', 'Linux networking', 'network namespaces', 'iw/ifconfig tools', 'wireless MAC behavior', 'log-distance path-loss model', 'latency measurement', 'handover delay analysis', 'data visualization', 'Matplotlib', 'virtualization', 'UTM', 'Ubuntu Linux', 'experiment design', 'performance analysis', 'Git', 'GitHub'],
          github: 'https://github.com/AnantaSingh/mininet-wifi-handover',
          external: null,
          demo: '/wireless-network-demo.mov'
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
