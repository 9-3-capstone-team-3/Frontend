import React, { useState } from 'react';
import "../terminalSim/DwnLoadGitTerm.css";

function GitInitRemote({ nextStep }) {
    const [code, setCode] = useState('git remote add origin https://github.com/yourgithubusername/My-first-project.git');
    const [narration, setNarration] = useState("");
    const [command, setCommand] = useState('');
    const [commandOutput, setCommandOutput] = useState([]);
    const [gitInitRemote, setGitInitRemote] = useState(false)


    // const handleGitName = () => {
    //     const newCommit = `Committed changes at ${new Date().toLocaleTimeString()}`;
    //     setCommitLogs([...commitLogs, newCommit]);
    //     setNarration("Lin: You've just committed a change!");
    // };

    // const handleMerge = () => {
    //     setNarration("Lin: Changes merged successfully!");
    // };

    const handleCommandSubmit = () => {
        if (command === 'git remote add origin https://github.com/yourgithubusername/My-first-project.git') {
            // handleGitName(); // This function already exists in the previous code
            setCommandOutput([...commandOutput, '> My-first-project git:(main)']);
        } else {
            setCommandOutput([...commandOutput, `> Command "${command}" not recognized. Re-enter the command`]);
        }
        setCommand(''); // Clear the command input after executing
        setGitInitRemote(true);
    };

    const handleSubmit2 = () => {
        nextStep();
    }

    return (
        <div id="dlg-simulation">
            <div id="dlg-codeEditor">In your My-first-project terminal tell git that you have a remote repository to store your code, by typing this command:<br/><br/>{code}</div>
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
                {gitInitRemote && (
                    <button className="dlg-button" onClick={handleSubmit2}>Next</button>
                )}
            </div>

        </div>
    );
}

export default GitInitRemote;