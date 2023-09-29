import React, {useState} from "react";
import fork1 from "../../Assests/fork1.png";

function ForkRepo({ nextStep }) {
  const [forked, setForked] = useState(false);
  const [error, setError] = useState(null);

    const handleClick = () => {
      try {
        setForked(true);
        nextStep();
      } catch (err){
        setError("Failed to fork the repository.");
      }
    }
    
    return (
      <div className="fork-wrapper">
        <p>Click the button to fork the repository.</p>
        <img src={fork1} alt="fork1"></img>
        <button onClick={handleClick} disabled={forked} className="fork-button">Fork</button>
        {forked && <p>Repository forked successfully!</p>}
        {/* // Display the error to the user: */}
        {error && <p>{error}</p>}
      </div>
    );
  }

  export default ForkRepo;