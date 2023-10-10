import React from "react";
import './About.css';
import ShaniImage from '../../Assests/Shani.jpg';
import MarangelyImage from '../../Assests/Marangely.jpg';
import SangImage from '../../Assests/SangUn.jpg';
import KarimahImage from '../../Assests/KarimahReavis.jpg';



export default function About() {

    const developers = [
        {
            name: 'Shaniqua Coston',
            image: ShaniImage, 
            gitHub: 'https://github.com/Shani4-1',
            linkedIn: 'https://www.linkedin.com/in/shaniqua-coston/',
            info: 'I am passionate about family, I would love to design software that fosters familial connections.'
        }, 

        {
            name: 'Marangely Rosas',
            image: MarangelyImage, 
            gitHub: 'https://github.com/MarangelyRosas',
            linkedIn: 'https://www.linkedin.com/in/marangelyrosas2022/',
            info: `As a Pursuit Full Stack Web Developer with an entrepreneurial mindset, I'm passionate about building innovative web applications that solve real-world problems.`
        },

        {
            name: 'SangUn Park',
            image: SangImage,
            gitHub: 'https://github.com/SangunPark96',
            linkedIn: 'https://www.linkedin.com/in/sangunpark/',
            info: 'Full Stack Web Developer, Love almost all terrible action/sci-fi movies.'   
        },

        {
            name: 'Karimah Reavis',
            image: KarimahImage, 
            gitHub: 'https://github.com/kaycodeandsing',
            linkedIn: 'https://www.linkedin.com/in/karimah-reavis/',
            info: 'Real Estate Agent at Gold Quest Realty Corp., Specializing in commercial realty and great customer service.'
        },

    ];

    return (
        <div className="about-container">
            <h1>CodeFusion Developers</h1>
                <div className="developers">
                    {developers.map((developer, index) => (
                        
                        <div className="codefusion-developer" key={index}>
                            <h2>{developer.name}</h2>
                            <img src={developer.image} alt={developer.name} />
                            
                            <p>{developer.info}</p>
                            <div className="social-links">
                                <button className="social-button">
                                    <a href={developer.gitHub} target="_blank" rel="noopener noreferrer">
                                        GitHub
                                    </a>
                                </button>
                                <button className="social-button">
                                    <a href={developer.linkedIn} target="_blank" rel="noopener noreferrer">
                                        LinkedIn
                                    </a>
                                </button>
                            </div> 
                        </div>                 
                    ))}  
                </div>         
        </div>
    );
};