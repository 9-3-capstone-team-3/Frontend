import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../simulation/Simulation.css';
import CreatePullRequest from '../../Components/simulationLevel/CreatePullRequest';
import GitInit from '../../Components/terminalSim/GitInit';
import CreateRepository0 from '../../Components/simulationLevel/createRepository/CreateRepository0';
import CreateRepository1 from '../../Components/simulationLevel/createRepository/CreateRepository1';
import CreateRepository2 from '../../Components/simulationLevel/createRepository/CreateRepository2';
import CreateRepository3 from '../../Components/simulationLevel/createRepository/CreateRepository3';
import GitInitRemote from '../../Components/terminalSim/GitInitRemote';
import GitClone from '../../Components/terminalSim/GitClone';
import CodeEditor1 from '../../Components/simulationLevel/codeEditor/CodeEditor1';
import GitAddCommitPush from '../../Components/terminalSim/GitAddCommitPush';

function SimVidThree() {
  const [step, setStep] = useState(1);
  const [showPopup, setShowPopup] = useState(false);
  const { user_id } = useParams();
  const navigate = useNavigate();

  const nextStep = () => {
    if (step < 10) {
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
        {step === 1 && <GitInit nextStep={nextStep} />}
        {step === 2 && <CreateRepository0 nextStep={nextStep} />}
        {step === 3 && <CreateRepository1 nextStep={nextStep} />}
        {step === 4 && <CreateRepository2 nextStep={nextStep} />}
        {step === 5 && <CreateRepository3 nextStep={nextStep} />}
        {step === 6 && <GitInitRemote nextStep={nextStep} />}
        {step === 7 && <GitClone nextStep={nextStep} />}
        {step === 8 && <CodeEditor1 nextStep={nextStep} />}
        {step === 9 && <GitAddCommitPush nextStep={nextStep} />}
        {step === 10 && <CreatePullRequest nextStep={nextStep} />}
        {step === 10 && showPopup && 
        <div className="popup">
        <h2>Congratulations!</h2>
        <p>You have completed the Git simulation.</p>
        <button onClick={returnToDashboard}>Return to Dashboard</button>
      </div>
}

      </div>
    );
  }
  
  export default SimVidThree;