import React, { useState } from 'react';
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

  const nextStep = () => {
    if (step < 7) {
        setStep(prevStep => prevStep + 1);
      }
    }
  
    return (
      <div className="App">
        {step === 1 && <ForkRepo nextStep={nextStep} />}
        {step === 2 && <CloneRepo nextStep={nextStep}  />}
        {step === 3 && <CreateBranch nextStep={nextStep} />}
        {step === 4 && <MakeChanges nextStep={nextStep} />}
        {step === 5 && <CommitChanges nextStep={nextStep} />}
        {step === 6 && <PushRepo nextStep={nextStep} />}
        {step === 7 && <CreatePullRequest nextStep={nextStep} />}
      </div>
    );
  }
  
  export default Simulation;