import React, {useState} from "react";
import createRepo3 from "../../../Assests/createRepository3.png";

function CreateRepository3({ nextStep }) {
  const [createRepository3, setCreateRepository3] = useState(false);
  const [error, setError] = useState(null);
    
  const handleClick = () => {
    try {
        setCreateRepository3(true);
        nextStep();
      } catch (err) {
        setError("Failed to create repository3.");
      }
  }  
    return (
      <div className="create-repository3-wrapper">
        <p>Click the button to create repository.</p>
        <img src={createRepo3} alt="create repository3"/>
        <button onClick={handleClick} disabled={createRepository3} className="create-repository3-button">⏍</button>
        {createRepository3 && <p>Repository created successfully!</p>}
        {/* // Display the error to the user: */}
        {error && <p>{error}</p>}
      </div>
    );
  }

  export default CreateRepository3;