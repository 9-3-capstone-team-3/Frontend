import React, {useState} from "react";
import createRepo2 from "../../../Assests/createRepository2.png";

function CreateRepository2({ nextStep }) {
  const [createRepository2, setCreateRepository2] = useState(false);
  const [error, setError] = useState(null);
    
  const handleClick = () => {
    try {
        setCreateRepository2(true);
        nextStep();
      } catch (err) {
        setError("Failed to create repository2.");
      }
  }  
    return (
      <div className="create-repository2-wrapper">
        <p>Click the button to create repository.</p>
        <img src={createRepo2} alt="create repository2"/>
        <button onClick={handleClick} disabled={createRepository2} className="create-repository2-button">Code ▾</button>
        {createRepository2 && <p>Repository created successfully!</p>}
        {/* // Display the error to the user: */}
        {error && <p>{error}</p>}
      </div>
    );
  }

  export default CreateRepository2;