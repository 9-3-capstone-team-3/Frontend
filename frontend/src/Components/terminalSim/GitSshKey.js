import React, { useState } from 'react';
import "../terminalSim/DwnLoadGitTerm.css";

function GitSshKey({ nextStep }) {
    const [code, setCode] = useState('ls ~/ .ssh');
    const [code1, setCode1] = useState('ssh-keygen -t rsa -b 4096 -C my_email@example.com')
    const [commitLogs, setCommitLogs] = useState([]);
    const [narration, setNarration] = useState("");
    const [command, setCommand] = useState('');
    const [commandOutput, setCommandOutput] = useState([]);
    const [sshKeyButton, setSshKeyButton] = useState(false)


    // const handleGitName = () => {
    //     const newCommit = `Committed changes at ${new Date().toLocaleTimeString()}`;
    //     setCommitLogs([...commitLogs, newCommit]);
    //     setNarration("Lin: You've just committed a change!");
    // };

    // const handleMerge = () => {
    //     setNarration("Lin: Changes merged successfully!");
    // };

    const handleCommandSubmit = () => {
        if (command === 'ls ~/ .ssh') {
            // handleGitName(); // This function already exists in the previous code
            setCommandOutput([...commandOutput, '> no SSH key found...']);
        } else if (command === 'ssh-keygen -t rsa -b 4096 -C my_email@example.com') {
            // handleMerge(); // This function already exists in the previous code
            setCommandOutput([...commandOutput, '> SSH key created...','>pbcopy < ~/.ssh/id_rsa.pub']);
        } else {
            setCommandOutput([...commandOutput, `> Command "${command}" not recognized. Re-enter the command`]);
        }
        setCommand(''); // Clear the command input after executing
        setSshKeyButton(true);
    };

    const handleSubmit2 = () => {
        nextStep();
    }

    return (
        <div id="dlg-simulation">
            <div id="dlg-codeEditor">If you want to use Git version control without constantly entering a password, enter the following commands in the terminal<br/><br/>{code}<br/><br/> {code1}</div>
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
                {sshKeyButton && (
                    <button className="dlg-button" onClick={handleSubmit2}>Copy the SSH Key and go to GitHub</button>
                )}
            </div>

        </div>
    );
}

export default GitSshKey;