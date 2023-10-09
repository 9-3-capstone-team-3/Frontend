import React, {useState} from "react";
import downloadGit from "../../Assests/downloadGit.png";

function DownloadGit({ nextStep }) {
  const [download, setDownload] = useState(false);
  const [error, setError] = useState(null);

    const handleClick = () => {
      try {
        setDownload(true);
        nextStep();
      } catch (err){
        setError("Failed to download.");
      }
    }
    
    return (
      <div className="download-wrapper">
        <p>Click the button to download git.</p>
        <img src={downloadGit} alt="download git"></img>
        <button onClick={handleClick} disabled={download} className="download-button">Download</button>
        {download && <p>Git downloaded successfully!</p>}
        {/* // Display the error to the user: */}
        {error && <p>{error}</p>}
      </div>
    );
  }

  export default DownloadGit;