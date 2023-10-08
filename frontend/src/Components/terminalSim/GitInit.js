import React, { useState } from 'react';
import "../terminalSim/DwnLoadGitTerm.css";

function GitInit({ nextStep }) {
    const [code, setCode] = useState('cd My-first-project');
    const [code1, setCode1] = useState('git init')
    const [commitLogs, setCommitLogs] = useState([]);
    const [narration, setNarration] = useState("");
    const [command, setCommand] = useState('');
    const [commandOutput, setCommandOutput] = useState([]);
    const [gitInit, setGitInit] = useState(false)


    // const handleGitName = () => {
    //     const newCommit = `Committed changes at ${new Date().toLocaleTimeString()}`;
    //     setCommitLogs([...commitLogs, newCommit]);
    //     setNarration("Lin: You've just committed a change!");
    // };

    // const handleMerge = () => {
    //     setNarration("Lin: Changes merged successfully!");
    // };

    const handleCommandSubmit = () => {
        if (command === 'cd My-first-project') {
            // handleGitName(); // This function already exists in the previous code
            setCommandOutput([...commandOutput, '> My-first-project ']);
        } else if (command === 'git init') {
            // handleMerge(); // This function already exists in the previous code
            setCommandOutput([...commandOutput, '> Initialized empty git repository in c:/my-first-project/.git', '> My-first-project git:(main)']);
        } else {
            setCommandOutput([...commandOutput, `> Command "${command}" not recognized. Re-enter the command`]);
        }
        setCommand(''); // Clear the command input after executing
        setGitInit(true);
    };

    const handleSubmit2 = () => {
        nextStep();
    }

    return (
        <div id="dlg-simulation">
            <div id="dlg-codeEditor">Change directory into your existing firstProject file. Type the following command into your terminal<br/><br/>{code}<br/><br/>Next, to initialize git version tracking into your file, type the following command<br/><br/> {code1}</div>
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
                {gitInit && (
                    <button className="dlg-button" onClick={handleSubmit2}>Go to GitHub</button>
                )}
            </div>

        </div>
    );
}

export default GitInit;