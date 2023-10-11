import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Story.css';

import LeftPanelPlaceholder from '../Panels/LeftPanelPlaceholder';
import RightPanelPlaceholder from '../Panels/RightPanelPlaceholder';
import JacobImage1 from '../../Assests/Jacob_1.png';
import GabriellaImage1 from "../../Assests/Gabriella_1.png";

function CreateRepoSimulation() {

    const storyScript = [
        {speaker: "Jacob", text: "Hey Gabriella, I've heard a lot about Git repositories but never really understood their importance. Can you explain?"},
        {speaker: "Gabriella", text: "Of course, Jacob! Think of a Git repository as the heart of your project when using version control. It's a special directory where Git tracks all changes and history."},
        {speaker: "Jacob", text: "So, how do I start one for my new project?"},
        {speaker: "Gabriella", text: "You'd navigate to your project folder in the terminal. And then, you'd initiate a new Git repository with the `git init` command. This command creates a new Git repository and starts tracking the directory."},
        {speaker: "Jacob", text: "I see. And once I run that command, I've heard there's a `.git` folder that appears. What's that about?"},
        {speaker: "Gabriella", text: "That's right! The `.git` folder is where Git keeps all the tracking information. It's the backbone of version control for your project."},
        {speaker: "Jacob", text: "Got it. So, setting up a repository is like laying the foundation for my project. From there, I can track changes, add files, and so on."},
        {speaker: "Gabriella", text: "Exactly! And as you get more familiar with Git, you'll discover the power and flexibility it offers for managing your projects and collaborating with others."}
    ];

    const [currentSegment, setCurrentSegment] = useState(0);

    const navigate = useNavigate();

    const currentImage = storyScript[currentSegment].speaker === "Gabriella" ? GabriellaImage1 : JacobImage1;

    return (
        <div className="content-panel">
            <div className={`story-container ${storyScript[currentSegment].speaker.toLowerCase()}`}>
                <h3>Create Repository</h3>
                <div className="story-content">
                    <img src={currentImage} 
                         alt={storyScript[currentSegment].speaker} 
                         className={`speaker-image ${storyScript[currentSegment].speaker.toLowerCase()}`} />
                    <div className="narration">
                        {storyScript[currentSegment].speaker}: {storyScript[currentSegment].text}
                    </div>
                </div>
                {currentSegment < storyScript.length - 1 ? (
                    <button className='story-button' onClick={() => setCurrentSegment(currentSegment + 1)}>Next</button>
                ) : (
                    <button className='story-button' onClick={() => {
                        // This is where you'll add the navigation to the next simulated lesson when it's ready.
                        console.log("Navigating to next simulation..."); // Placeholder logic
                    }}>
                        Click the video icon above
                    </button>
                )}
            </div>
        </div>
    );
    
}

export default CreateRepoSimulation;
