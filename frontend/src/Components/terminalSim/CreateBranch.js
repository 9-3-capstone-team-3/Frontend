import React, { useState } from 'react';
import "../terminalSim/DwnLoadGitTerm.css";

function CreateBranch({ nextStep }) {
    const [code, setCode] = useState('git branch My-NewBranch');
    const [code1, setCode1] = useState('git checkout My-NewBranch');
    const [code2, setCode2] = useState('git checkout -b My-NewBranch');
    const [code3, setCode3] = useState('git switch main');
    const [code4, setCode4] = useState('git merge main');
    const [commitLogs, setCommitLogs] = useState([]);
    const [narration, setNarration] = useState("");
    const [command, setCommand] = useState('');
    const [commandOutput, setCommandOutput] = useState([]);
    const [createBranch, setCreateBranch] = useState(false);

    const handleCommandSubmit = () => {
        if (command === 'git branch My-NewBranch') {
            // handleGitName(); // This function already exists in the previous code
            setCommandOutput([...commandOutput, '> My-first-project git:(main)']);
        } else if (command === 'git checkout My-NewBranch') {
            // handleMerge(); // This function already exists in the previous code
            setCommandOutput([...commandOutput,`Switched to branch 'My-NewBranch'`,'> My-first-project git:(My-NewBranch)']);
        } else if (command === 'git checkout -b My-NewBranch') {
            // handleMerge(); // This function already exists in the previous code
            setCommandOutput([...commandOutput, `> My-first-project git:(My-NewBranch) `]);
        } else if (command === 'git switch main') {
            // handleMerge(); // This function already exists in the previous code
            setCommandOutput([...commandOutput, `> Switched to branch 'main'
            Your branch is up to date with 'origin/main'.`]);
        } else if (command === 'git merge main') {
            // handleMerge(); // This function already exists in the previous code
            setCommandOutput([...commandOutput, `> Already up to date.`]);
        } else {
            setCommandOutput([...commandOutput, `> Command "${command}" not recognized. Re-enter the command`]);
        }
        setCommand(''); // Clear the command input after executing
        setCreateBranch(true);
    };

    const handleSubmit2 = () => {
        nextStep();
    }

    return (
        <div id="dlg-simulation">
            <div id="dlg-codeEditor">To create a new branch to work in, type the following command:<br/><br/>{code}<br/><br/> Now switch into the branch you just created, by typing this command:<br/><br/> {code1}<br/><br/>To create a new branch and switch into that branch using one command, type this command:<br/><br/>{code2}<br/><br/>To switch between branches and go back to your main branch, type this command:<br/><br/>{code3}<br/><br/>Lastly, to merge your the work you did to the main code, type:<br/><br/>{code4}<br/></div>
            {/* <div id="dlg-versionControlPanel">
                <ul>
                    {commitLogs.map((log, index) => (
                        <li key={index}>{log}</li>
                    ))}
                </ul>
                <button className="dlg-button" onClick={handleGitName}>Git Config Name</button>
                <button className="dlg-button" onClick={handleMerge}>Git Config Email</button>
            </div> */}
            <div id="dlg-narration">{narration}</div>
                <div id="dlg-mockCLI">
                    <div id="dlg-output">
                    {commandOutput.map((output, index) => (
                        <p key={index}>{output}</p>
                    ))}
                </div>
                <input
                    type="text"
                    value={command}
                    onChange={e => setCommand(e.target.value)}
                    placeholder="Enter command here..."
                />
                <button className="dlg-button" onClick={handleCommandSubmit}>Execute</button>
                {createBranch && (
                    <button className="dlg-button" onClick={handleSubmit2}>Next</button>
                )}
            </div>

        </div>
    );
}

export default CreateBranch;