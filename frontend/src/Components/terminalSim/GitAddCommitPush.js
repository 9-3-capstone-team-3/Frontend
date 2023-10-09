import React, { useState } from 'react';
import "../terminalSim/DwnLoadGitTerm.css";

function GitAddCommitPush({ nextStep }) {
    const [code, setCode] = useState('git add index.js');
    const [code1, setCode1] = useState('git add .');
    const [code2, setCode2] = useState('git status');
    const [code3, setCode3] = useState('git commit -m "created an index.js file with an h1 tag"');
    const [code4, setCode4] = useState('git push')
    const [commitLogs, setCommitLogs] = useState([]);
    const [narration, setNarration] = useState("");
    const [command, setCommand] = useState('');
    const [commandOutput, setCommandOutput] = useState([]);
    const [gitAddCommitPush, setGitAddCommitPush] = useState(false);

    const handleCommandSubmit = () => {
        if (command === 'git add index.js') {
            // handleGitName(); // This function already exists in the previous code
            setCommandOutput([...commandOutput, '> My-first-project git:(main)']);
        } else if (command === 'git add .') {
            // handleMerge(); // This function already exists in the previous code
            setCommandOutput([...commandOutput, '> My-first-project git:(main)']);
        } else if (command === 'git status') {
            // handleMerge(); // This function already exists in the previous code
            setCommandOutput([...commandOutput, `> On branch main
            Your branch is up to date with 'origin/main'.
            
            Changes to be committed:
              (use "git restore --staged <file>..." to unstage)
                    new file:   Index.js`]);
        } else if (command === 'git commit -m "created an index.js file with an h1 tag"') {
            // handleMerge(); // This function already exists in the previous code
            setCommandOutput([...commandOutput, `> [main 4f15a5e] created an index.js file with an h1 tag
            1 file changed, 5 insertions(+)
            create mode 100644 Index.js`]);
        } else if (command === 'git push') {
            // handleMerge(); // This function already exists in the previous code
            setCommandOutput([...commandOutput, `> Enumerating objects: 4, done.
            Counting objects: 100% (4/4), done.
            Delta compression using up to 8 threads
            Compressing objects: 100% (3/3), done.
            Writing objects: 100% (3/3), 369 bytes | 369.00 KiB/s, done.
            Total 3 (delta 0), reused 0 (delta 0), pack-reused 0
            To https://github.com/kaycodeandsing/My-first-project.git
               41ddb9b..4f15a5e  main -> main`]);
        } else {
            setCommandOutput([...commandOutput, `> Command "${command}" not recognized. Re-enter the command`]);
        }
        setCommand(''); // Clear the command input after executing
        setGitAddCommitPush(true);
    };

    const handleSubmit2 = () => {
        nextStep();
    }

    return (
        <div id="dlg-simulation">
            <div id="dlg-codeEditor">To stage and add the changes you made to a specific file like the index.js file, type the following command:<br/><br/>{code}<br/><br/> To add ALL changes you made in your project, type this command:<br/><br/> {code1}<br/><br/>To see all the files in the staging area, type this command:<br/><br/>{code2}<br/><br/>Now commit your work with a descriptive message. type this command:<br/><br/>{code3}<br/><br/>Lastly, push your code by typing this command:<br/><br/>{code4}<br/></div>
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
                {gitAddCommitPush && (
                    <button className="dlg-button" onClick={handleSubmit2}>GitHub to create Pull request</button>
                )}
            </div>

        </div>
    );
}

export default GitAddCommitPush;