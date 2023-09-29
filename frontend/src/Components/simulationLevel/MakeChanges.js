import React, {useState} from "react";
import MakeChange from "../../Assests/MakeChange.png";

function MakeChanges({ nextStep }) {
  const [isMakeChanges, setIsMakeChanges] = useState(false);
  const [error, setError] = useState(null);

    const handleClick = () => {
      try {
        setIsMakeChanges(true);
        nextStep();
      } catch (err) {
        setError("Failed to make changes to the repository.");
      }
    }
    return (
      <div className="change-wrapper">
        <p>Click the button to make changes to the forked repository.</p>
        <img src={MakeChange} alt="make change"/>
        <button onClick={handleClick} disabled={isMakeChanges} className="change-button">Make Changes</button>
        {isMakeChanges && <p>Changes made successfully!</p>}
        {/* // Display the error to the user: */}
        {error && <p>{error}</p>}
      </div>
    );
  }

  export default MakeChanges;