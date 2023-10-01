import React from "react";
import { useParams } from "react-router-dom";
import "./TextBox.css";

function TextBox (){
    const {quiz_id, user_id } = useParams();
console.log(quiz_id);

const LevelOne = (
    <div>
        <h1>Git Basics</h1>
            <p>Git, a dominant Version Control System utilized by over 90% of developers, allows meticulous tracking of code changes, facilitating version management, undoing modifications, and collaborative teamwork. In contrast, GitHub is a platform for remotely storing and sharing code repositories. Mastering Git is pivotal for budding software engineers, as it not only serves as a safety net for broken code but also provides detailed insights into code versions and changes.</p>
    </div>
)

const LevelFive = (
    <div>
        <h1>Simulating GitHub Process</h1>
        <p>Git, a dominant Version Control System utilized by over 90% of developers, allows meticulous tracking of code changes, facilitating version management, undoing modifications, and collaborative teamwork. In contrast, GitHub is a platform for remotely storing and sharing code repositories. Mastering Git is pivotal for budding software engineers, as it not only serves as a safety net for broken code but also provides detailed insights into code versions and changes.</p>
    </div>
)
    return (
        <div className="text-box">
            {quiz_id == 2 ? LevelOne : null}
            {quiz_id === 5 ? LevelFive : null}
        </div>
    );
}

export default TextBox;