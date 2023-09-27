import React, {useState} from "react";
import pullReq1 from "../../Assests/pullReq1.png";

function CreatePullRequest({ nextStep }) {
  const [isCreatePullRequest, setIsCreatePullRequest] = useState(false);
  const [error, setError] = useState(null);

    const handleClick = () => {
      try {
        setIsCreatePullRequest(true);
        nextStep();
      } catch (err) {
        setError("Failed to create pull request.");
      }
    }
    return (
      <div className="pull-wrapper">
        <p>Click the button to create a pull request.</p>
        <img src={pullReq1} alt="pull request" />
        <button onClick={handleClick} disabled={isCreatePullRequest} className="pull-button">Create pull request</button>
        {isCreatePullRequest && <p className="pull-alert">Pull request created successfully!</p>}
        {/* // Display the error to the user: */}
        {error && <p>{error}</p>}
      </div>
    );
  }

  export default CreatePullRequest;