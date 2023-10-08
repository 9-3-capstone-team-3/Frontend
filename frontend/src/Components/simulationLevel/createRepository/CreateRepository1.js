import React, {useState} from "react";
import createRepo1 from "../../../Assests/createRepository1.png";

function CreateRepository1({ nextStep }) {
    const [createRepository1, setCreateRepository1] = useState(false);
    const [error, setError] = useState(null);
    const [showTitleInput, setShowTitleInput] = useState(false);
    const [showPasteButton, setShowPasteButton] = useState(false);
    const [showSSHKeyInput, setShowSSHKeyInput] = useState(false);
    const [isRadialClicked, setIsRadialClicked] = useState(false);
    const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
  
      const handleSubmitTitle = () => {
          setShowPasteButton(true);
      };
  
      const handlePasteButtonClick = () => {
          setShowSSHKeyInput(true);
      };
  
  
      
    const handleClick = () => {
      try {
          setCreateRepository1(true);
          nextStep();
        } catch (err) {
          setError("Failed to go create repository.");
        }
    }  
  
  
      return (
        <div className="create-repository1-wrapper">
          <p>Click the buttons to create a repository.</p>
          <img src={createRepo1} alt="create repo1"/>
          {!showTitleInput && (
                  <button className="create-repository1-name-button" onClick={() => setShowTitleInput(true)}>
                      Name your Repository
                  </button>
              )}
  
              {showTitleInput && (
                  <div>
                      <input
                          className="create-repository1-input"
                          type="text"
                          placeholder="Example: My-first-project"
                      />
                      <button className="create-repository1-submit" onClick={handleSubmitTitle}>Submit</button>
                  </div>
              )}
  
            <div className="create-repository1-radial-button" onClick={() => setIsRadialClicked(!isRadialClicked)}>
                {isRadialClicked ? '●' : '○'}
            </div>

            <input
                className="create-repository1-checkbox"
                type="checkbox"
                checked={isCheckboxChecked}
                onChange={() => setIsCheckboxChecked(!isCheckboxChecked)}
            />
  
              {showTitleInput && (
                  <div>
                      <button className="create-repository1-button" onClick={handleClick}>Create Repository</button>
                  </div>
              )}
        </div>
      );
    }

  export default CreateRepository1;