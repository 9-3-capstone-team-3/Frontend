import React, { useState } from 'react';
import './Story.css';

import LindaImage2 from '../../Assests/Linda_2.png';
import JacobImage2 from "../../Assests/Jacob_2.png"; // Ensure you have a Jacob asset.

function CloningStory() {

    const storyScript1 = [
        {speaker: "Jacob", text: "Linda, do you know how to start with an existing codebase on GitHub?"},
        {speaker: "Linda", text: "I guess by forking and then cloning it?"},
        {speaker: "Jacob", text: "Spot on! By forking a repo, you create a personal copy of it. You can then clone it to your machine using either the SSH or HTTPS URL with `git clone <URL>`."},
        {speaker: "Linda", text: "That clones the repository to my local machine and sets up the remote link, right?"},
        {speaker: "Jacob", text: "Yes! It adds a `.git` folder and sets the remote configuration. This way, when you're ready to push your changes, Git knows where to send them."},
        {speaker: "Linda", text: "What's the internal structure of Git? I've heard terms like Working Directory, Index, and Head."},
        {speaker: "Jacob", text: "Great question! Git operates through three stages: the Working Directory, the Index (or Staging), and the Head."},
        {speaker: "Linda", text: "So, the Working Directory has all our project files, but Git doesn't track them yet, right?"},
        {speaker: "Jacob", text: "Correct. To make Git start tracking changes, we need to stage our work using `git add .`. However, this doesn't create a new version of your work. For that, you use `git commit`."},
        {speaker: "Linda", text: "I remember this! After committing, to describe my changes, I should use a message, like `git commit -m 'Description here'`."},
        {speaker: "Jacob", text: "Absolutely! That message helps your team understand what your commit does. After committing, your changes stay on your local machine. To push them to GitHub, you use `git push`."},
    ];

    const [currentSegment, setCurrentSegment] = useState(0);

    const currentImage = storyScript1[currentSegment].speaker === "Linda" ? LindaImage2 : JacobImage2;

    return (
        <div className="content-panel">
            <div className={`story-container ${storyScript1[currentSegment].speaker.toLowerCase()}`}>
                <h3>Git Basics: Repository Cloning and Initial Stages</h3>
                <div className="story-content">
                    <img src={currentImage} 
                         alt={storyScript1[currentSegment].speaker} 
                         className={`speaker-image ${storyScript1[currentSegment].speaker.toLowerCase()}`} />
                    <div className="narration">
                        {storyScript1[currentSegment].speaker}: {storyScript1[currentSegment].text}
                    </div>
                </div>
                <button className='story-button' onClick={() => setCurrentSegment((prevSegment) => (prevSegment + 1) % storyScript1.length)}>Next</button>
            </div>
        </div>
    );
}

export default CloningStory;
