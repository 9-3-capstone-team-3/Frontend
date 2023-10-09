import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Story.css';

import LeftPanelPlaceholder from '../Panels/LeftPanelPlaceholder';
import RightPanelPlaceholder from '../Panels/RightPanelPlaceholder';
import JacobImage1 from "../../Assests/Jacob_1.png"
import AdaImage1 from '../../Assests/Ada_1.png';






function VersionControlStory() {

    // Story script broken into segments for easy progression
    const storyScript = [
        {speaker: "Ada", text: "I've finished my feature, but Linda has made updates too. How do we ensure our combined efforts don't disrupt the project?"},
        {speaker: "Jacob", text: "Ada, ever used version control? It's how we weave together our individual coding stories without tangling the threads."},
        {speaker: "Ada", text: "Version control?"},
        {speaker: "Jacob", text: "Imagine our codebase as a chronicle. Every entry, every change, is dated and documented. You can revisit any point in time, see who added what, even create alternate realities of our project to test out new ideas."},
        {speaker: "Ada", text: "So, when Linda and I make changes, they're like parallel universes? And version control helps us combine them without chaos?"},
        {speaker: "Jacob", text: "Exactly! It's like each of us writing a chapter of a book. Version control ensures our chapters fit seamlessly, preserving the integrity of the story."},
        {speaker: "Jacob", text: "With version control, every change, every decision, is logged. It's our collaboration compass, guiding us towards efficient and harmonious development."},
        {speaker: "Ada", text: "It's not just about managing code. It's about orchestrating our collective efforts."},
        {speaker: "Ada", text: "Alright, let's see if we 'Git it'!"}

    ];

    const [currentSegment, setCurrentSegment] = useState(0);

    const navigate = useNavigate();

    const currentImage = storyScript[currentSegment].speaker === "Ada" ? AdaImage1 : JacobImage1;

    return (
        <div className="content-panel">
            <div className={`story-container ${storyScript[currentSegment].speaker.toLowerCase()}`}>
                <h3>Version Control</h3>
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

export default VersionControlStory;
