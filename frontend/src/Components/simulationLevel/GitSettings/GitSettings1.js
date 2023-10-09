import React, {useState} from "react";
import Settings1 from '../../../Assests/Settings1.png';

function GitSettings1({ nextStep }) {
  const [settings1, setSettings1] = useState(false);
  const [error, setError] = useState(null);
    
  const handleClick = () => {
    try {
        setSettings1(true);
        nextStep();
      } catch (err) {
        setError("Failed to go to settings.");
      }
  }  
    return (
      <div className="settings1-wrapper">
        <p>Click the button to get into settings.</p>
        <img src={Settings1} alt="setting0"/>
        <button onClick={handleClick} disabled={settings1} className="settings1-button">Settings</button>
        {settings1 && <p>Settings  successfully!</p>}
        {/* // Display the error to the user: */}
        {error && <p>{error}</p>}
      </div>
    );
  }

  export default GitSettings1;