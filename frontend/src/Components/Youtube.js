import React, { useRef, useEffect, useState } from 'react';

const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:3003';

const YouTube = ({ quiz_id }) => {
  const ref = useRef();
  const [videoID, setVideoID] = useState('');

  useEffect(() => {
    const fetchVideoID = async () => {
      const endpoint = `${apiUrl}/quiz/${quiz_id}`;

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
    const loadYoutubeScript = () => {
      if (document.getElementById('youtube-iframe-api')) return;
      const script = document.createElement('script');
      script.id = 'youtube-iframe-api';
      script.src = 'https://www.youtube.com/iframe_api';
      script.async = true;
      const firstScript = document.getElementsByTagName('script')[0];
      firstScript.parentNode.insertBefore(script, firstScript);
    };

    const initializePlayer = () => {
      if (videoID && window.YT) {
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

    if (!window.YT) {
      window.onYouTubeIframeAPIReady = initializePlayer;
      loadYoutubeScript();
    } else {
      initializePlayer();
    }
  }, [videoID]);

  return (
    <div className="youtube-thumbnail">
      <div ref={ref}></div>
    </div>
  );
};

export default YouTube;
