import React, { useState } from 'react';
import boss from '../../Assests/boss.png'; // Replace with the path to your boss image
import './SimVidOne.css';
import { useParams, useNavigate } from 'react-router-dom';

function SimVidOne() {
    const [currentStep, setCurrentStep] = useState(0);
    const { user_id, quiz_id } = useParams();
    const navigate = useNavigate();


    const onDone = ()=> {
        navigate(`/quizdash/${quiz_id}/${user_id}`)
    };

    const messages = [
        `Hi, welcome to my app company. We use git to keep track of different versions of our code.`,
        "Over 90% of companies use git to keep track of their code.",
        "I know that you were in a pretty fast-paced coding bootcamp, are you familiar with using git?",
        "Ok, no problem, I will set you up, just click on level 1.2 in the Git Mastery dropdown menu to learn more!"
    ];

    const handleNext = () => {
        if (currentStep < messages.length - 1) {
            setCurrentStep(currentStep + 1);
        } else {
            onDone();  // This will handle going back to the quiz dash component
        }
    };

    return (
        <body>
    <div class="sim-container">
        <main class="sim-main-content">
            <div className="boss-container">
                <img src={boss} alt="Boss" className='boss-image' />
                <div className="speech-bubble">
                    <p>{messages[currentStep]}</p>
                    <button onClick={handleNext}>
                        {currentStep === 2 ? 'No' : 'Ok'}
                    </button>
                </div>
            </div>
        </main>
    </div>
</body>
        
    );
}

export default SimVidOne;