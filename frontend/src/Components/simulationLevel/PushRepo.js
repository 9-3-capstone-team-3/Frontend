import React, {useState} from "react";
import push1 from "../../Assests/push1.png";

function PushRepo({ nextStep }) {
  const [isPushRepo, setIsPushRepo] = useState(false);
  const [error, setError] = useState(null);

    const handleClick = () => {
      try {
        setIsPushRepo(true);
        nextStep();
      } catch (err) {
        setError("Failed to push repository to gitHub.");
      }
    }
    return (
      <div className="push-wrapper">
        <p>Click the button to push the changes you made to the repository.</p>
        <img src={push1} alt="push repo" />
        <button onClick={handleClick} disabled={isPushRepo} className="push-button">Push Repo</button>
        {isPushRepo && <p>Repository pushed successfully!</p>}
        {/* // Display the error to the user: */}
        {error && <p>{error}</p>}
      </div>
    );
  }

  export default PushRepo;