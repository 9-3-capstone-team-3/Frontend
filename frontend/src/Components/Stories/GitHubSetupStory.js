import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Story.css';

import LeftPanelPlaceholder from '../Panels/LeftPanelPlaceholder';
import RightPanelPlaceholder from '../Panels/RightPanelPlaceholder';
import AdaImage2 from '../../Assests/Ada_2.png';
import GabriellaImage2 from "../../Assests/Gabriella_2.png";

function GitHubSetupStory() {

    const storyScript = [
        {speaker: "Gabriella", text: "Hey Ada, have you ever thought about setting up a GitHub account? It's an essential tool for developers these days."},
        {speaker: "Ada", text: "I've heard of it, but never really knew where to start. How does one go about it?"},
        {speaker: "Gabriella", text: "It's quite straightforward. Normally, you'd head over to GitHub's website, but for today, let's simulate the process right here in our app."},
        {speaker: "Ada", text: "Sounds fun! What's the first step?"},
        {speaker: "Gabriella", text: "Firstly, you'd choose a unique username, something that represents you in the GitHub community. Let's imagine you've picked 'Ada_Dev'."},
        {speaker: "Ada", text: "I like it. 'Ada_Dev' feels professional. What's next?"},
        {speaker: "Gabriella", text: "In the actual setup, you'd provide an email for account verification and choose a secure password. But in our simulation, let's assume you've received a verification link in your email and activated the account."},
        {speaker: "Ada", text: "Great! Now, I've seen some GitHub profiles with pictures and bios. How do we add that?"},
        {speaker: "Gabriella", text: "Exactly! Normally, you'd upload a profile picture and jot down a short bio. Let's simulate you adding a photo of a cute cat and writing a bio that reads, 'Enthusiastic developer exploring the world of code.'"},
        {speaker: "Ada", text: "A cat as my profile picture? That's amusing! Thanks, Gabriella. This simulation makes the whole process feel less daunting. I'll be setting up my actual GitHub account in no time!"},
        {speaker: "Gabriella", text: "I'm sure you'll rock it, Ada! GitHub is a wonderful platform, and with this knowledge, you're well on your way."}
    ];
    
    const [currentSegment, setCurrentSegment] = useState(0);

    const navigate = useNavigate();

    const currentImage = storyScript[currentSegment].speaker === "Gabriella" ? GabriellaImage2 : AdaImage2;

    return (
        <div className="content-panel">
            <div className={`story-container ${storyScript[currentSegment].speaker.toLowerCase()}`}>
                <h3>Github Setup</h3>
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
                        Start the Quiz
                    </button>
                )}
            </div>
        </div>
    );
    
}

export default GitHubSetupStory;
