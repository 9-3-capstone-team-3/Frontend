import React, { useState } from 'react';
import "../terminalSim/DwnLoadGitTerm.css";

function GitClone({ nextStep }) {
    const [code, setCode] = useState('git clone https://github.com/yourgithubusername/My-first-project.git');
    const [code1, setCode1] = useState('cd My-first-project');
    const [code2, setCode2] = useState('code .');
    const [commitLogs, setCommitLogs] = useState([]);
    const [narration, setNarration] = useState("");
    const [command, setCommand] = useState('');
    const [commandOutput, setCommandOutput] = useState([]);
    const [gitClone, setGitClone] = useState(false)


    // const handleGitName = () => {
    //     const newCommit = `Committed changes at ${new Date().toLocaleTimeString()}`;
    //     setCommitLogs([...commitLogs, newCommit]);
    //     setNarration("Lin: You've just committed a change!");
    // };

    // const handleMerge = () => {
    //     setNarration("Lin: Changes merged successfully!");
    // };

    const handleCommandSubmit = () => {
        if (command === 'git clone https://github.com/yourgithubusername/My-first-project.git') {
            // handleGitName(); // This function already exists in the previous code
            setCommandOutput([...commandOutput, `> Cloning into 'My-first-project'
            remote: Enumerating objects: 3, done.
            remote: Counting objects: 100% (3/3), done.
            Receiving objects: 100% (3/3), done.
            remote: Total 3 (delta 0), reused 0 (delta 0), pack-reused 0`]);
        } else if (command === 'cd My-first-project') {
            // handleMerge(); // This function already exists in the previous code
            setCommandOutput([...commandOutput, '> My-first-project git:(main)']);
        } else if (command === 'code .') {
            // handleMerge(); // This function already exists in the previous code
            setCommandOutput([...commandOutput, '> Opening code editor']);
        } else {
            setCommandOutput([...commandOutput, `> Command "${command}" not recognized. Re-enter the command`]);
        }
        setCommand(''); // Clear the command input after executing
        setGitClone(true);
    };

    const handleSubmit2 = () => {
        nextStep();
    }

    return (
        <div id="dlg-simulation">
            <div id="dlg-codeEditor">If you In your first project terminal, clone your my-first-project into your new laptop. Type the following command:<br/><br/>{code}<br/><br/>Now change directory into your cloned downed version of your my-first-project repository. Type this command in your terminal:<br/><br/> {code1}<br/><br/>Lastly, open your code editor to start making changes to your My-first-project file. Type this command into your terminal:<br/><br/>{code2}</div>
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
                {gitClone && (
                    <button className="dlg-button" onClick={handleSubmit2}>Go to Code editor</button>
                )}
            </div>

        </div>
    );
}

export default GitClone;