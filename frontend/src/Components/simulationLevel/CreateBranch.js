import React, {useState} from "react";
import branch from "../../Assests/branch.png"

function CreateBranch({ nextStep }) {
  const [isCreateBranch, setIsCreateBranch] = useState(false);
  const [error, setError] = useState(null);

    const handleClick = () => {
      try {
        setIsCreateBranch(true);
        nextStep();
      } catch (err) {
        setError("Failed to create a branch.");
      }
    }
    return (
      <div className="branch-wrapper">
        <p>Click the button to create a branch to code in.</p>
        <img src={branch} alt="create branch"/>
        <button onClick={handleClick} disabled={isCreateBranch} className="branch-button">Create Branch</button>
        {isCreateBranch && <p>New branch created successfully!</p>}
        {/* // Display the error to the user: */}
        {error && <p>{error}</p>}
      </div>
    );
  }

  export default CreateBranch;