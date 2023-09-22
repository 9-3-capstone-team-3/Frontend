import React from "react";
import girl from "../Assests/girl.png";
import ex from "../Assests/ex.png";
import gold from "../Assests/gold.png";

export default function CenterOfPage() {
  return (
    <div className="container-fluid mt-5">
      <div className="row">
        <div className="col-md-4 text-center">
          <p className="centered-text font-weight-bold mt-0">Fun. Easy. Collaboration</p>
          <img src={girl} alt="Description 1" className="mb-3" />
          <p className="centered-text">Learn to collaborate with ease. Just sign up. Watch Git tutorials. Answer questions. Practice contributing to open source projects through fun easy simulations.</p>
        </div>
        <div className="col-md-4 text-center">
          <p className="centered-text font-weight-bold mt-0">Gain team experience</p>
          <img src={ex} alt="Description 2" className="mb-3" />
          <p className="centered-text">Gain experience collaborating on simulated open source projects. Our simulations are designed to take you through the real-life process of contributing your code to larger projects, just as you will do when working as software developers.</p>
        </div>
        <div className="col-md-4 text-center">
          <p className="centered-text font-weight-bold mt-0">Earn points</p>
          <img src={gold} alt="Description 3" className="mb-3" />
          <p className="centered-text">Earn points for answering questions, performing tasks, and contributing to open source code on GitHub</p>
        </div>
      </div>
    </div>
  );
}
