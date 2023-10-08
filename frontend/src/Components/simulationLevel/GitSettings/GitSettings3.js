import React, {useState} from "react";
import Settings3 from '../../../Assests/Settings3.png';

function GitSettings3({ nextStep }) {
  const [settings3, setSettings3] = useState(false);
  const [error, setError] = useState(null);
    
  const handleClick = () => {
    try {
        setSettings3(true);
        nextStep();
      } catch (err) {
        setError("Failed to go to settings.");
      }
  }  
    return (
      <div className="settings3-wrapper">
        <p>Click the button to create new SSH key.</p>
        <img src={Settings3} alt="setting3"/>
        <button onClick={handleClick} disabled={settings3} className="settings3-button">New SSH key</button>
        {settings3 && <p>SSH link clicked successfully!</p>}
        {/* // Display the error to the user: */}
        {error && <p>{error}</p>}
      </div>
    );
  }

  export default GitSettings3;