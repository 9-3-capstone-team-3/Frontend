import React from "react";
import "./CenterOfPage.css";
import girl from "../Assests/girl.png";
import ex from "../Assests/ex.png";
import gold from "../Assests/gold.png";

export default function CenterOfPage(){
    return (

    <>
    <div className="image-container">
    <div className="image-item">
            <p className="centered-text" >Fun. Easy. Collaboration</p>
            <img src={girl} alt="Description 1" />
            <p>Learn to collaborate with ease. Just sign up. Watch Git tutorials. Answer questions. Practice contributing to open source projects through fun easy simulations.</p>
    </div>
    <div className="image-item">
                <p className="centered-text">Gain team experience</p>
                <img src={ex} alt="Description 2" />
                <p>Gain experience collaborating on simulated open source projects. Our simulations are designed to take you through the real life process of contibuting your code to larger projects, just as you will do when working as software developers.</p>
    </div>
    <div className="image-item">
                <p className="centered-text">Earn points</p>
                <img src={gold} alt="Description 3" />
                <p>Earn points for answering questions, performing tasks and contributing to open source code on gitHub</p>
    </div>
    </div>
    </>

);
}