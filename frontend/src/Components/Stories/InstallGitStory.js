import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Story.css';

import LeftPanelPlaceholder from '../Panels/LeftPanelPlaceholder';
import RightPanelPlaceholder from '../Panels/RightPanelPlaceholder';
import JacobImage2 from "../../Assests/Jacob_2.png";
import LindaImage2 from '../../Assests/Linda_2.png';

function InstallGitStory() {


    const storyScript = [
        {speaker: "Jacob", text: "Hey Linda, I heard you're interested in setting up Git on your machine. Ready to dive in?"},
        {speaker: "Linda", text: "Absolutely, Jacob! But I've never done it before, so I could use some guidance."},
        {speaker: "Jacob", text: "No worries! Normally, we'd start by heading to Git's official website. But for now, let's simulate the whole process right here in our app. Think of it as a dry run."},
        {speaker: "Linda", text: "Sounds like a plan! Where do we begin in our simulation?"},
        {speaker: "Jacob", text: "First off, picture a screen displaying the Git website with a prominent download button tailored to your OS."},
        {speaker: "Linda", text: "Alright, so I'd click that to download Git. And after downloading?"},
        {speaker: "Jacob", text: "Exactly! After downloading, you'd run the installer and follow the instructions. But in our simulation, let's skip ahead and assume Git is now installed."},
        {speaker: "Linda", text: "Easy peasy! Once Git is 'installed', how can I check if everything's good to go?"},
        {speaker: "Jacob", text: "Great question! To verify the installation, you'd open a terminal and type 'git --version'. If it returns the Git version number, you've successfully installed it."},
        {speaker: "Linda", text: "Okay, and I've heard about setting up an identity with Git. How's that done?"},
        {speaker: "Jacob", text: "Spot on, Linda! Typically, you'd use specific commands to set your name and email. This ensures all your Git activities are linked to you. In our simulation, just imagine typing your name and email into the terminal."},
        {speaker: "Linda", text: "Thanks, Jacob! This simulated run-through really clarifies things. I feel way more confident about setting up Git for real."},
        {speaker: "Jacob", text: "Glad to hear it, Linda! Remember, understanding Git is key for collaborative development. You're on the right track!"}
    ];
    
    
    const [currentSegment, setCurrentSegment] = useState(0);

    const navigate = useNavigate();

    const currentImage = storyScript[currentSegment].speaker === "Linda" ? LindaImage2 : JacobImage2;

    return (
        <div className="content-panel">
            <div className={`story-container ${storyScript[currentSegment].speaker.toLowerCase()}`}>
                <h3>"Git" Installed</h3>
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
                        // This is where you'll add the navigation to the quiz when it's ready
                        console.log("Navigating to quiz..."); // Placeholder logic
                    }}>
                        Click the video icon above
                    </button>
                )}
            </div>
        </div>
    );
    
}

export default InstallGitStory;
