import React, { useRef, useEffect, useState } from 'react';


const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:3003/';

const YouTube = ({quiz_id}) => {
  const ref = useRef();
  const [videoURL, setVideoURL] = useState('')

  useEffect(() => {
    const fetchVideoURL= async () => {
      try {
        const response = await fetch(`${apiUrl}/quiz/1`); 
        if (response.ok) {
          const data = await response.json();
          console.log(data)
          setVideoURL(data.video_url)
        } else {
          console.error('Error fetching video URL:', response.statusText);
        }

      } catch (error) {
        console.error('Error fetching video URL:', error);
      }
    };
    if (quiz_id) {
      fetchVideoURL();
    }
  }, [quiz_id])

  useEffect(() => {
    // Ensure the script is loaded once
    if (!window.YT) {
      const script = document.createElement('script');
      script.src = 'https://www.youtube.com/iframe_api';

      script.async = true;
      const firstScript = document.getElementsByTagName('script')[0];
      firstScript.parentNode.insertBefore(script, firstScript);
    }


    // Wait for the script to be loaded and then create the player
    const checkAndCreatePlayer = () => {
      if (window.YT && window.YT.Player) {
        new window.YT.Player(ref.current, {
          videoId: videoURL,
          width: '100%',
          height: '100%',
          playerVars: {
            autoplay: 0,
            controls: 1,
            modestbranding: 1,
            rel: 0,
          },
        });
      } else {
        setTimeout(checkAndCreatePlayer, 100);
      }
    };

    checkAndCreatePlayer();

  }, [videoURL]);

  return (
  <div className="youtube-thumbnail">
    <div ref={ref}></div>
  </div>)
  


}

export default YouTube;