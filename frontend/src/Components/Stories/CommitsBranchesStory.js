import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Story.css';

import LeftPanelPlaceholder from '../Panels/LeftPanelPlaceholder';
import RightPanelPlaceholder from '../Panels/RightPanelPlaceholder';
import AdaImage2 from '../../Assests/Ada_2.png';
import LindaImage2 from "../../Assests/Linda_2.png";

function CommitsBranchesStory() {

    const storyScript = [
        {speaker: "Ada", text: "Linda, I've been working on our code, and I've made some updates. Before we finalize these, we need to 'stage' them in Git, right?"},
        {speaker: "Linda", text: "Exactly, Ada! You've got the idea. We use `git add` to stage our changes. If you want to stage a specific file, you'd use `git add filename.txt`. But if you want to stage all changes, `git add .` is the way to go."},
        {speaker: "Ada", text: "Ah, so `git add .` is like a quick way to add everything! After staging, we 'commit' our changes?"},
        {speaker: "Linda", text: "You're on the right track! Committing is like saving a version of our work. Use `git commit` with a message to describe your changes. For instance, `git commit -m 'Added a new feature'` lets us know what this commit achieves."},
        {speaker: "Ada", text: "Got it! Now, let's say I want to try a new idea without disturbing our main codebase. What's the best way?"},
        {speaker: "Linda", text: "In such cases, we create a 'branch'. Think of it as a separate workspace or a copy of our main project where you can safely experiment."},
        {speaker: "Ada", text: "So, to create a branch, I'd use `git branch new-feature` and then switch to it with `git checkout new-feature`?"},
        {speaker: "Linda", text: "Exactly right, Ada! Once you're done making changes and committing in the branch, and you want to bring those changes to the main project, you'd 'merge' it."},
        {speaker: "Ada", text: "Merging... that's combining my branch with the main code?"},
        {speaker: "Linda", text: "Precisely! After switching back to the main branch, use `git merge new-feature` to integrate your updates. And if you're done with the branch, you can delete it to keep things tidy using `git branch -d new-feature`."},
        {speaker: "Ada", text: "This really helps clarify things for me, Linda. Git's quite organized, isn't it?"},
        {speaker: "Linda", text: "Absolutely, Ada! The more you work with Git, the clearer and more intuitive it becomes. It's all about tracking and managing our code changes effectively."}
    ];
    
    

    const [currentSegment, setCurrentSegment] = useState(0);

    const navigate = useNavigate();

    const currentImage = storyScript[currentSegment].speaker === "Ada" ? AdaImage2 : LindaImage2;

    return (
        <div className="content-panel">
            <div className={`story-container ${storyScript[currentSegment].speaker.toLowerCase()}`}>
                <h3>Git Basics</h3>
                <div className="story-content">
                    <img src={currentImage} 
                         alt={storyScript[currentSegment].speaker} 
                         className={`speaker-image ${storyScript[currentSegment].speaker.toLowerCase()}`} />
                    <div className="narration">
                        {storyScript[currentSegment].speaker}: {storyScript[currentSegment].text}
                    </div>
                </div>
                {currentSegment < storyScript.length - 1 ? (
                    <button onClick={() => setCurrentSegment(currentSegment + 1)}>Next</button>
                ) : (
                    <button onClick={() => {
                        // Placeholder logic for navigating to the next simulation.
                        console.log("Navigating to next simulation...");
                    }}>
                        Start Simulation
                    </button>
                )}
            </div>
        </div>
    );
    
}

export default CommitsBranchesStory;
