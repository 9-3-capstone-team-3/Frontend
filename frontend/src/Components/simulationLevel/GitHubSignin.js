import React, {useState} from "react";
import gitHubSignin from "../../Assests/gitHubSignin.png";

function GitHubSignin({ nextStep }) {
  const [signin, setSignin] = useState(false);
  const [error, setError] = useState(null);

    const handleClick = () => {
      try {
        setSignin(true);
        nextStep();
      } catch (err){
        setError("Failed to sign up.");
      }
    }
    
    return (
      <div className="gitsignin-wrapper">
        <p>Click the button to sign up with GitHub.</p>
        <img src={gitHubSignin} alt="git sign in"></img>
        <button onClick={handleClick} disabled={signin} className="gitsignin-button">Sign up for GitHub</button>
        {signin && <p>Signed up for GitHub successfully!</p>}
        {/* // Display the error to the user: */}
        {error && <p>{error}</p>}
      </div>
    );
  }

  export default GitHubSignin;