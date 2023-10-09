import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../simulation/Simulation.css';
import ForkRepo from '../../Components/simulationLevel/ForkRepo';
import CloneRepo from '../../Components/simulationLevel/CloneRepo';
import CreateBranch from '../../Components/simulationLevel/CreateBranch';
import MakeChanges from '../../Components/simulationLevel/MakeChanges';
import CommitChanges from '../../Components/simulationLevel/CommitChanges';
import PushRepo from '../../Components/simulationLevel/PushRepo';
import CreatePullRequest from '../../Components/simulationLevel/CreatePullRequest';
import GitClone from '../../Components/terminalSim/GitClone';
import CodeEditor1 from '../../Components/simulationLevel/codeEditor/CodeEditor1';
import GitAddCommitPush from '../../Components/terminalSim/GitAddCommitPush';

function SimVidFour() {
  const [step, setStep] = useState(1);
  const [showPopup, setShowPopup] = useState(false);
  const { user_id } = useParams();
  const navigate = useNavigate();

  const nextStep = () => {
    if (step < 13) {
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
        {step === 1 && <ForkRepo nextStep={nextStep} />}
        {step === 2 && <GitClone nextStep={nextStep} />}
        {step === 3 && <CodeEditor1 nextStep={nextStep} />}
        {step === 4 && <GitAddCommitPush nextStep={nextStep} />}
        {step === 5 && <CreatePullRequest nextStep={nextStep} />}
        {step === 6 && <CreateBranch nextStep={nextStep} />}
        {/* More practice steps below */}
        {step === 7 && <ForkRepo nextStep={nextStep} />}
        {step === 8 && <CloneRepo nextStep={nextStep}  />}
        {step === 9 && <CreateBranch nextStep={nextStep} />}
        {step === 10 && <MakeChanges nextStep={nextStep} />}
        {step === 11 && <CommitChanges nextStep={nextStep} />}
        {step === 12 && <PushRepo nextStep={nextStep} />}
        {step === 13 && <CreatePullRequest nextStep={nextStep} />}
        {step === 13 && showPopup && 
        <div className="popup">
        <h2>Congratulations!</h2>
        <p>You have completed the Git simulation.</p>
        <button onClick={returnToDashboard}>Return to Dashboard</button>
      </div>
}

      </div>
    );
  }
  
  export default SimVidFour;