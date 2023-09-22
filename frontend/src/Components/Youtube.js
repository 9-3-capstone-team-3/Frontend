import React, { useRef, useEffect, useState } from 'react';

const apiUrl = process.env.REACT_APP_API_URL ;

const YouTube = ({quiz_id}) => {
  const ref = useRef();
  const [videoID, setVideoID] = useState('');

  useEffect(() => {
    const fetchVideoID = async () => {
      const endpoint = `${apiUrl}/quiz/2`; // Move endpoint definition outside the try block.

      try {
        const response = await fetch(endpoint); 
        if (response.ok) {
          const data = await response.json();
          setVideoID(data.video_id);
        } else {
          console.error('Error fetching video ID:', response.statusText, 'From URL:', endpoint);
        }
      } catch (error) {
        console.error('Error fetching video ID:', error, 'From URL:', endpoint);
      }
    };

    if (quiz_id) {
      fetchVideoID();
    }
  }, [quiz_id]);

  useEffect(() => {
    if (!window.YT) {
      const script = document.createElement('script');
      script.src = 'https://www.youtube.com/iframe_api';
      script.async = true;
      const firstScript = document.getElementsByTagName('script')[0];
      firstScript.parentNode.insertBefore(script, firstScript);
    }

    window.onYouTubeIframeAPIReady = () => {
      if (videoID) {
        new window.YT.Player(ref.current, {
          videoId: videoID,
          width: '640',
          height: '390',
          playerVars: {
            'playsinline': 1,
            autoplay: 0,
            controls: 1,
            modestbranding: 1,
            rel: 0,
          },
        });
      }
    };
  }, [videoID]);

  return (
    <div className="youtube-thumbnail">
      <div ref={ref}></div>
    </div>
  );
}

export default YouTube;
