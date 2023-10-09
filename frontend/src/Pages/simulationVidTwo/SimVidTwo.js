import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../simulation/Simulation.css';
import DownloadGit from '../../Components/simulationLevel/DownloadGit';
import DwnLoadGitTerm from '../../Components/terminalSim/DwnLoadGitTerm';
import GitHubSignin from '../../Components/simulationLevel/GitHubSignin';
import GitSshKey from '../../Components/terminalSim/GitSshKey';
import GitSettings1 from '../../Components/simulationLevel/GitSettings/GitSettings1';
import GitSettings2 from '../../Components/simulationLevel/GitSettings/GitSettings2';
import GitSettings3 from '../../Components/simulationLevel/GitSettings/GitSettings3';
import GitSettings4 from '../../Components/simulationLevel/GitSettings/GitSettings4';

function SimVidTwo() {
  const [step, setStep] = useState(1);
  const [showPopup, setShowPopup] = useState(false);
  const { user_id } = useParams();
  const navigate = useNavigate();

  const nextStep = () => {
    if (step < 8) {
        setStep(prevStep => prevStep + 1);
      } else {
        setShowPopup(true);
    }
  };

    const returnToDashboard = () => {
     navigate(`/dashboard/${user_id}`);
      setShowPopup(false);
    };
  
    return (
      <div className="App">
        {step === 1 && <DownloadGit nextStep={nextStep} />}
        {step === 2 && <DwnLoadGitTerm nextStep={nextStep} />}
        {step === 3 && <GitHubSignin nextStep={nextStep} />}
        {step === 4 && <GitSshKey nextStep={nextStep} />}
        {step === 5 && <GitSettings1 nextStep={nextStep} />}
        {step === 6 && <GitSettings2 nextStep={nextStep} />}
        {step === 7 && <GitSettings3 nextStep={nextStep} />}
        {step === 8 && <GitSettings4 nextStep={nextStep} />}
        {step === 8 && showPopup && 
        <div className="popup">
        <h2>Congratulations!</h2>
        <p>You have completed the Git simulation.</p>
        <button onClick={returnToDashboard}>Return to Dashboard</button>
      </div>
}

      </div>
    );
  }
  
  export default SimVidTwo;