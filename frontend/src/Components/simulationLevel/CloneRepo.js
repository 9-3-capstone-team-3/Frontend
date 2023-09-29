import React, {useState} from "react";
import fork1 from "../../Assests/fork1.png";

function CloneRepo({ nextStep }) {
  const [cloned, setCloned] = useState(false);
  const [error, setError] = useState(null);
    
  const handleClick = () => {
    try {
        setCloned(true);
        nextStep();
      } catch (err) {
        setError("Failed to clone the repository.");
      }
  }  
    return (
      <div className="clone-wrapper">
        <p>Click the button to clone the forked repository.</p>
        <img src={fork1} alt="clone"/>
        <button onClick={handleClick} disabled={cloned} className="clone-button">Clone</button>
        {cloned && <p>Repository cloned successfully!</p>}
        {/* // Display the error to the user: */}
        {error && <p>{error}</p>}
      </div>
    );
  }

  export default CloneRepo;