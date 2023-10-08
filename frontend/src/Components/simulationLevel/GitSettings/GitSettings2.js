import React, {useState} from "react";
import Settings2 from '../../../Assests/Settings2.png';

function GitSettings2({ nextStep }) {
  const [settings2, setSettings2] = useState(false);
  const [error, setError] = useState(null);
    
  const handleClick = () => {
    try {
        setSettings2(true);
        nextStep();
      } catch (err) {
        setError("Failed to go to settings.");
      }
  }  
    return (
      <div className="settings2-wrapper">
        <p>Click the button to get into settings.</p>
        <img src={Settings2} alt="setting2"/>
        <button onClick={handleClick} disabled={settings2} className="settings2-button">SSH and GPG keys</button>
        {settings2 && <p>Settings  successfully!</p>}
        {/* // Display the error to the user: */}
        {error && <p>{error}</p>}
      </div>
    );
  }

  export default GitSettings2;