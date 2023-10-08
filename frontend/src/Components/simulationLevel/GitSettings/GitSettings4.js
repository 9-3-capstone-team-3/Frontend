import React, {useState} from "react";
import Settings4 from '../../../Assests/Settings4.png';

function GitSettings4({ nextStep }) {
  const [settings4, setSettings4] = useState(false);
  const [error, setError] = useState(null);
  const [showTitleInput, setShowTitleInput] = useState(false);
    const [showPasteButton, setShowPasteButton] = useState(false);
    const [showSSHKeyInput, setShowSSHKeyInput] = useState(false);

    const handleSubmitTitle = () => {
        setShowPasteButton(true);
    };

    const handlePasteButtonClick = () => {
        setShowSSHKeyInput(true);
    };


    
  const handleClick = () => {
    try {
        setSettings4(true);
        nextStep();
      } catch (err) {
        setError("Failed to go to settings.");
      }
  }  


    return (
      <div className="settings4-wrapper">
        <p>Click the button to create new SSH key.</p>
        <img src={Settings4} alt="setting4"/>
        {!showTitleInput && (
                <button className="settings4-add-title-button" onClick={() => setShowTitleInput(true)}>
                    Add Title
                </button>
            )}

            {showTitleInput && (
                <div>
                    <input
                        className="settings4-input"
                        type="text"
                        placeholder="Enter a title for your ssh key ex: My laptop"
                    />
                    <button className="settings4-submit" onClick={handleSubmitTitle}>Submit</button>
                </div>
            )}

            {showPasteButton && (
                <button className="settings4-paste" onClick={handlePasteButtonClick}>
                    Paste your key here
                </button>
            )}

            {showSSHKeyInput && (
                <div>
                    <textarea className="settings4-textarea" type="text" placeholder="~/.ssh/id_rsa.pub" />
                    <button className="settings4-add-ssh-key" onClick={handleClick}>Add SSH key</button>
                </div>
            )}
      </div>
    );
  }

  export default GitSettings4;