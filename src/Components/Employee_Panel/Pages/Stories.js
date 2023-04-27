import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import './Stories.css';

function Stories() {

  const [videos, setVideos] = useState([]);

  function playVideo(video) {
    const videoElement = document.getElementById(`video-${video.id}`);
    videoElement.play();
  }

  function pauseVideo(video) {
    const videoElement = document.getElementById(`video-${video.id}`);
    videoElement.pause();
  }

  function togglePlayPause(video) {
    const videoElement = document.getElementById(`video-${video.id}`);
    if (videoElement.paused) {
      videoElement.play();
    } else {
      videoElement.pause();
    }
  }

  function seekBackward(video) {
    const videoElement = document.getElementById(`video-${video.id}`);
    videoElement.currentTime -= 10;
  }

  function seekForward(video) {
    const videoElement = document.getElementById(`video-${video.id}`);
    videoElement.currentTime += 10;
  }

  function handleTimeUpdate(video) {
    const videoElement = document.getElementById(`video-${video.id}`);
    const progressBar = document.getElementById(`progress-bar-${video.id}`);
    const currentTime = videoElement.currentTime;
    const duration = videoElement.duration;
    const progressPercent = (currentTime / duration) * 100;
    progressBar.style.width = `${progressPercent}%`;
  }

  useEffect(() => {
    async function fetchVideos() {
      try {
        const response = await axios.get("https://localhost:7274/api/Stories");
        setVideos(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchVideos();
  }, []);

  return (
    <>
    <Navbar />
    <Sidebar />

    <div className="video-list-container">
      {videos.map(video => (
        <div key={video.id} className="video-item">
          {/*<h2>{video.title}</h2>*/}
          <div className="video-controls">
           {/* <button onClick={() => togglePlayPause(video)}>
              {video.isPlaying ? 'Pause' : 'Play'}
            </button>
            <button onClick={() => seekBackward(video)}>10s Backward</button>
            <button onClick={() => seekForward(video)}>10s Forward</button> */}
            <div className="progress-bar-container">
              <div
                className="progress-bar"
                id={`progress-bar-${video.id}`}
              />
            </div>
          </div>
          <video
            id={`video-${video.id}`}
            controls
            onTimeUpdate={() => handleTimeUpdate(video)}
          >
            <source src={video.vedioSrc} type={video.mime_type} />
          </video>
        </div>
      ))}
    </div>

    </>
  )
}

export default Stories