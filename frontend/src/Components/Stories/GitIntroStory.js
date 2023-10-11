import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Story.css";

import LeftPanelPlaceholder from "../Panels/LeftPanelPlaceholder";
import RightPanelPlaceholder from "../Panels/RightPanelPlaceholder";
import LindaImage1 from "../../Assests/Linda_1.png";
import GabriellaImage1 from "../../Assests/Gabriella_1.png";

function GitIntroStory() {
    const gitStoryScript = [
        {
          speaker: "Linda",
          text: "Gabriella, have you heard about Git?"
        },
        {
          speaker: "Gabriella",
          text: "I've come across the name. Is it related to coding?"
        },
        {
          speaker: "Linda",
          text: "Absolutely! Git is one of the most popular tools for version control. Think of it as a magic quill that writes our coding chronicle."
        },
        {
          speaker: "Gabriella",
          text: "Sounds powerful. What's so special about Git, though?"
        },
        {
          speaker: "Linda",
          text: "Git stands out because it's a distributed version control system. This means every developer gets a local copy of the entire codebase and its history."
        },
        {
          speaker: "Gabriella",
          text: "Interesting. How do we make sure all our updates merge seamlessly?"
        },
        {
          speaker: "Linda",
          text: "With Git, we work with 'repositories'. Once you're ready with changes, you 'commit' them. Then everyone can 'pull' those updates."
        },
        {
          speaker: "Gabriella",
          text: "And what if two developers make changes to the same section?"
        },
        {
          speaker: "Linda",
          text: "Git intelligently informs us about any conflicts. Plus, we can work in separate 'branches' and merge them later, ensuring smooth collaboration."
        },
        {
          speaker: "Gabriella",
          text: "So, Git isn’t just about managing code; it's about making sure the entire team is in sync."
        },
        {
          speaker: "Linda",
          text: "Exactly! With Git, our code's journey is always evolving, but every step is preserved."
        },
        {
          speaker: "Gabriella",
          text: "Seems like a crucial tool to learn. Ready when you are!"
        },
        {
          speaker: "Linda",
          text: "Great enthusiasm! Let's 'commit' to mastering Git together, shall we?"
        }
    ];
    
    

  const [currentSegment, setCurrentSegment] = useState(0);

  const navigate = useNavigate();

  const currentImage =
    gitStoryScript[currentSegment].speaker === "Gabriella"
      ? GabriellaImage1
      : LindaImage1;

      return (
        <div className="content-panel">
            <div
                className={`story-container ${gitStoryScript[currentSegment].speaker.toLowerCase()}`}
            >
                <h3>"Git" Introduced</h3>
                <div className="story-content">
                    <img
                        src={currentImage}
                        alt={gitStoryScript[currentSegment].speaker}
                        className={`speaker-image ${gitStoryScript[currentSegment].speaker.toLowerCase()}`}
                    />

                    <div className="narration">
                        {gitStoryScript[currentSegment].speaker}: {gitStoryScript[currentSegment].text}
                    </div>
                </div>
                {currentSegment < gitStoryScript.length - 1 ? (
                    <button className='story-button' onClick={() => setCurrentSegment(currentSegment + 1)}>
                        Next
                    </button>
                ) : (
                    <button className='story-button'
                        onClick={() => {
                            // This is where you'll add the navigation to the quiz when it's ready
                            console.log("Navigating to quiz..."); // Placeholder logic
                        }}
                    >
                        Click the video icon above
                    </button>
                )}
            </div>
        </div>
    );
}

export default GitIntroStory;
