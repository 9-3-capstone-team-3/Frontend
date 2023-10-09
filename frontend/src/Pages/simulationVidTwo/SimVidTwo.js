import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../simulation/Simulation.css';
import DownloadGit from '../../Components/simulationLevel/DownloadGit';
import ForkRepo from '../../Components/simulationLevel/ForkRepo';
import CloneRepo from '../../Components/simulationLevel/CloneRepo';
import CreateBranch from '../../Components/simulationLevel/CreateBranch';
import MakeChanges from '../../Components/simulationLevel/MakeChanges';
import CommitChanges from '../../Components/simulationLevel/CommitChanges';
import PushRepo from '../../Components/simulationLevel/PushRepo';
import CreatePullRequest from '../../Components/simulationLevel/CreatePullRequest';
import DwnLoadGitTerm from '../../Components/terminalSim/DwnLoadGitTerm';
import GitHubSignin from '../../Components/simulationLevel/GitHubSignin';
import GitSshKey from '../../Components/terminalSim/GitSshKey';
import GitSettings1 from '../../Components/simulationLevel/GitSettings/GitSettings1';
import GitSettings2 from '../../Components/simulationLevel/GitSettings/GitSettings2';
import GitSettings3 from '../../Components/simulationLevel/GitSettings/GitSettings3';
import GitSettings4 from '../../Components/simulationLevel/GitSettings/GitSettings4';
import GitInit from '../../Components/terminalSim/GitInit';
import CreateRepository0 from '../../Components/simulationLevel/createRepository/CreateRepository0';
import CreateRepository1 from '../../Components/simulationLevel/createRepository/CreateRepository1';
import CreateRepository2 from '../../Components/simulationLevel/createRepository/CreateRepository2';
import CreateRepository3 from '../../Components/simulationLevel/createRepository/CreateRepository3';
import GitInitRemote from '../../Components/terminalSim/GitInitRemote';
import GitClone from '../../Components/terminalSim/GitClone';
import CodeEditor1 from '../../Components/simulationLevel/codeEditor/CodeEditor1';
import GitAddCommitPush from '../../Components/terminalSim/GitAddCommitPush';

function SimVidTwo() {
  const [step, setStep] = useState(1);
  const [showPopup, setShowPopup] = useState(false);
  const { user_id } = useParams();
  const navigate = useNavigate();

  const nextStep = () => {
    if (step < 25) {
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
        {step === 9 && <GitInit nextStep={nextStep} />}
        {step === 10 && <CreateRepository0 nextStep={nextStep} />}
        {step === 11 && <CreateRepository1 nextStep={nextStep} />}
        {step === 12 && <CreateRepository2 nextStep={nextStep} />}
        {step === 13 && <CreateRepository3 nextStep={nextStep} />}
        {step === 14 && <GitInitRemote nextStep={nextStep} />}
        {step === 15 && <GitClone nextStep={nextStep} />}
        {step === 16 && <CodeEditor1 nextStep={nextStep} />}
        {step === 17 && <GitAddCommitPush nextStep={nextStep} />}
        {step === 18 && <CreatePullRequest nextStep={nextStep} />}
        {step === 19 && <ForkRepo nextStep={nextStep} />}
        {step === 20 && <CloneRepo nextStep={nextStep}  />}
        {step === 21 && <CreateBranch nextStep={nextStep} />}
        {step === 22 && <MakeChanges nextStep={nextStep} />}
        {step === 23 && <CommitChanges nextStep={nextStep} />}
        {step === 24 && <PushRepo nextStep={nextStep} />}
        {step === 25 && <CreatePullRequest nextStep={nextStep} />}
        {step === 25 && showPopup && 
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