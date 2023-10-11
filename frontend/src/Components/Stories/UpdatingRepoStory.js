import React, { useState } from 'react';
import './Story.css';

import AdaImage2 from '../../Assests/Ada_2.png';
import GabriellaImage2 from "../../Assests/Gabriella_2.png"; // Ensure you have a Gabriella asset.

function UpdatingRepoStory() {

    const storyScript2 = [
        {speaker: "Gabriella", text: "Once you've made and committed changes, Ada, how do you update the main repository on GitHub?"},
        {speaker: "Ada", text: "If I cloned the repo from GitHub, I'd simply use `git push`. But if I initialized Git in a pre-existing local project with `git init`, I'd need to set the remote first."},
        {speaker: "Gabriella", text: "That's right! You can link it to a new repository on GitHub using `git remote add origin <URL>`. After that, `git push` will work."},
        {speaker: "Ada", text: "I've also heard about `git pull`. What's that for?"},
        {speaker: "Gabriella", text: "The `git pull` command fetches the changes from a remote repository and merges them into your local branch."},
        {speaker: "Ada", text: "Now, branching. That's when we want to work on features without affecting the main code, correct?"},
        {speaker: "Gabriella", text: "Exactly. Branches are like parallel versions of your project. You can create one with `git branch <branch_name>` and switch to it using `git checkout <branch_name>`. Or do both with `git checkout -b <branch_name>`."},
        {speaker: "Ada", text: "Then after finishing the work in a branch, I'd merge it with the main code using `git merge`, right?"},
        {speaker: "Gabriella", text: "Spot on! And if there are merge conflicts, Git will let you know. You'll need to resolve them before finalizing the merge."},
    ];

    const [currentSegment, setCurrentSegment] = useState(0);

    const currentImage = storyScript2[currentSegment].speaker === "Ada" ? AdaImage2 : GabriellaImage2;

    return (
        <div className="content-panel">
            <div className={`story-container ${storyScript2[currentSegment].speaker.toLowerCase()}`}>
                <h3>Git Basics: Updating, Branching, and Merging</h3>
                <div className="story-content">
                    <img src={currentImage} 
                         alt={storyScript2[currentSegment].speaker} 
                         className={`speaker-image ${storyScript2[currentSegment].speaker.toLowerCase()}`} />
                    <div className="narration">
                        {storyScript2[currentSegment].speaker}: {storyScript2[currentSegment].text}
                    </div>
                </div>
                <button className='story-button' onClick={() => setCurrentSegment((prevSegment) => (prevSegment + 1) % storyScript2.length)}>Click the video icon above</button>
            </div>
        </div>
    );
}

export default UpdatingRepoStory;
