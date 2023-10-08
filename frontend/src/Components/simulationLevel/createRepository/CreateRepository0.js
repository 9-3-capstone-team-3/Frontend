import React, {useState} from "react";
import createRepo0 from "../../../Assests/createRepository0.png";

function CreateRepository0({ nextStep }) {
  const [createRepository0, setCreateRepository0] = useState(false);
  const [error, setError] = useState(null);
    
  const handleClick = () => {
    try {
        setCreateRepository0(true);
        nextStep();
      } catch (err) {
        setError("Failed to create repository0.");
      }
  }  
    return (
      <div className="create-repository0-wrapper">
        <p>Click the button to create repository.</p>
        <img src={createRepo0} alt="create repository0"/>
        <button onClick={handleClick} disabled={createRepository0} className="create-repository0-button">New Repository</button>
        {createRepository0 && <p>Repository created successfully!</p>}
        {/* // Display the error to the user: */}
        {error && <p>{error}</p>}
      </div>
    );
  }

  export default CreateRepository0;