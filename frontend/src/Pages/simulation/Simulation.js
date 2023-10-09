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



function Simulation() {
  const [step, setStep] = useState(1);
  const [showPopup, setShowPopup] = useState(false);
  const { user_id } = useParams();
  const navigate = useNavigate();

  const nextStep = () => {
    if (step < 7) {
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
        {step === 2 && <CloneRepo nextStep={nextStep}  />}
        {step === 3 && <CreateBranch nextStep={nextStep} />}
        {step === 4 && <MakeChanges nextStep={nextStep} />}
        {step === 5 && <CommitChanges nextStep={nextStep} />}
        {step === 6 && <PushRepo nextStep={nextStep} />}
        {step === 7 && <CreatePullRequest nextStep={nextStep} />}
        {step === 7 && showPopup && 
        <div className="popup">
        <h2>Congratulations!</h2>
        <p>You have completed the Git simulation.</p>
        <button onClick={returnToDashboard}>Return to Dashboard</button>
      </div>
}

      </div>
    );
  }
  
  export default Simulation;