import React, { useRef, useEffect } from 'react';

const YouTube = ({ videoId }) => {
  const ref = useRef();

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
          videoId: videoId,
          width: '100%',
          height: '100%',
          playerVars: {
            autoplay: 1,
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

  }, [videoId]);

  return <div className="youtube-thumbnail">
  <iframe src="https://www.youtube.com/embed/hfsP3lXoSMc?si=PY0LmI7O3St7CjcB" frameborder="0" allowFullScreen></iframe>
</div>
  


}

export default YouTube;