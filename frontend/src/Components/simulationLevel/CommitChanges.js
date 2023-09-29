import React, {useState} from "react";
import commit from "../../Assests/commit.png";

function CommitChanges({ nextStep }) {
  const [isCommitChanges, setIsCommitChanges] = useState(false);
  const [error, setError] = useState(null);
    
    const handleClick = () => {
      try {
        setIsCommitChanges(true);
        nextStep();
      } catch (err) {
        setError("Failed to commit changes.");
      }
    }

    return (
      <div className="commit-wrapper">
        <p>Click the button to commit changes to the forked repository.</p>
        <img src={commit} alt="commit changes" />
        <button onClick={handleClick} disabled={isCommitChanges} className="commit-button">Commit Changes</button>
        {isCommitChanges && <p>Changes commited successfully!</p>}     
        {/* // Display the error to the user: */}
        {error && <p>{error}</p>}      
      </div>
    );
  }

  export default CommitChanges;