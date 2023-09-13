import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:3003';
const YouTube = () => {
  const { id } = useParams();
  const [video, setVideo] = useState({});
  useEffect(() => {
    // Fetch video data by ID from the /quiz route
    fetch(`${apiUrl}/quiz/1`)
      .then((response) => response.json())
      .then((data) => {
        setVideo(data); // Assuming your API response contains the video details
      })
      .catch((error) => {
        console.error('Error fetching video data:', error);
      });
  }, [id]);

  if (!video) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{video.name}</h2>
      <Link to={'/beginnershowpage'}>{video.name}</Link>
      <iframe
        width="560"
        height="315"
        src={video.video_url}
        title="YouTube video player"
        frameborder="0"
        allowFullScreen
      ></iframe>
      </div>
    
  );
};

export default YouTube;