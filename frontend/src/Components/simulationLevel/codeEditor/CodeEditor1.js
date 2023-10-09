import React, { useState } from 'react';
import codeEd1 from "../../../Assests/codeEditor1.png";

function CodeEditor1({ nextStep }) {
  const [showForm, setShowForm] = useState(false);
  const [showStageButton, setShowStageButton] = useState(false);
  const [codeChange, setCodeChange] = useState('');
  const [codeEditor1, setCodeEditor1] = useState(false);
  const [error, setError] = useState(null);
    
  const handleClick = () => {
    try {
        setCodeEditor1(true);
        nextStep();
      } catch (err) {
        setError("Failed to go to code editor.");
      }
  }  

  const handleButtonClick = () => {
    setShowForm(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (codeChange) {
      setShowStageButton(true);
    }
  };

  return (
    <div className="code-editor1-wrapper">
      <p>Click the button to start code editor.</p>
      <img src={codeEd1} alt="code editor1"/>
      <button onClick={handleButtonClick}>Make a change to your file</button>

      {showForm && (
        <form  onSubmit={handleSubmit}>
          <input
            className="code-editor1-input"
            type="text"
            placeholder="Type code changes here ex: <h1>My first project</h1>"
            value={codeChange}
            onChange={(e) => setCodeChange(e.target.value)}
          />
        </form>
      )}

      {showStageButton && <button onClick={handleClick} disabled={codeEditor1} className='code-editor1-button'>Stage your changes</button>}
      {codeEditor1 && <p>Code editor started successfully!</p>}
      {/* // Display the error to the user: */}
      {error && <p>{error}</p>}
    </div>
  );
}

export default CodeEditor1;