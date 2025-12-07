import { FaTimes, FaPlay } from 'react-icons/fa'
import './VideoPlayer.css'

const VideoPlayer = ({ videoUrl, onClose }) => {
  return (
    <div className="video-player-overlay" onClick={onClose}>
      <div className="video-player-container" onClick={(e) => e.stopPropagation()}>
        <div className="video-player-header">
          <div className="video-player-title">
            <FaPlay />
            <span>Demo Video</span>
          </div>
          <button className="video-player-close" onClick={onClose} aria-label="Close">
            <FaTimes />
          </button>
        </div>
        <div className="video-player-content">
          <video
            src={videoUrl}
            controls
            className="demo-video"
            autoPlay
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  )
}

export default VideoPlayer

