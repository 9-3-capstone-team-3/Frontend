import React, { useState } from 'react';
import "../terminalSim/DwnLoadGitTerm.css";

function DwnLoadGitTerm({ nextStep }) {
    const [code, setCode] = useState('git config --global user.name firstname lastname');
    const [code1, setCode1] = useState('git config --global user.email my_email@example.com')
    const [commitLogs, setCommitLogs] = useState([]);
    const [narration, setNarration] = useState("");
    const [command, setCommand] = useState('');
    const [commandOutput, setCommandOutput] = useState([]);
    const [gitHubButton, setGitHubButton] = useState(false)


    // const handleGitName = () => {
    //     const newCommit = `Committed changes at ${new Date().toLocaleTimeString()}`;
    //     setCommitLogs([...commitLogs, newCommit]);
    //     setNarration("Lin: You've just committed a change!");
    // };

    // const handleMerge = () => {
    //     setNarration("Lin: Changes merged successfully!");
    // };

    const handleCommandSubmit = () => {
        if (command === 'git config --global user.name firstname lastname') {
            // handleGitName(); // This function already exists in the previous code
            setCommandOutput([...commandOutput, '> user.name set...']);
        } else if (command === 'git config --global user.email my_email@example.com') {
            // handleMerge(); // This function already exists in the previous code
            setCommandOutput([...commandOutput, '> user.email set...']);
        } else {
            setCommandOutput([...commandOutput, `> Command "${command}" not recognized. Re-enter the command`]);
        }
        setCommand(''); // Clear the command input after executing
        setGitHubButton(true);
    };

    const handleSubmit2 = () => {
        nextStep();
    }

    return (
        <div id="dlg-simulation">
            <div id="dlg-codeEditor">Enter these two git commands in your terminal to set up git in your local system:<br/><br/>{code}<br/><br/> {code1}</div>
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
                {gitHubButton && (
                    <button className="dlg-button" onClick={handleSubmit2}>GitHub Button</button>
                )}
            </div>

        </div>
    );
}

export default DwnLoadGitTerm;