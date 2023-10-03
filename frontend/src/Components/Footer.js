// Footer.js

import React, { useState, useEffect } from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
    const [showFooter, setShowFooter] = useState(false);

    useEffect(() => {
        // Function to check if the page is scrolled to the bottom
        const handleScroll = () => {
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            const scrollTop = window.scrollY || window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop;

            // Check if the user has scrolled to the bottom
            if (scrollTop + windowHeight >= documentHeight - 10) {
                setShowFooter(true);
            } else {
                setShowFooter(false);
            }
        };

        // Add a scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <footer className={`footer ${showFooter ? 'show' : 'hide'}`}>
            <div className="footer-container">
                <div className="footer-links">
                    <div className="footer-section">
                        <h4>About Us</h4>
                        <ul>
                            <li><Link to="/team">Our Team</Link></li>
                        </ul>
                    </div>
                    {/* <div className="footer-section">
                        <h4>Our Vision</h4>
                        <ul>
                            <li><Link to="/personal">Learning Git</Link></li>
                            <li><Link to="/business">Learning Collaboration</Link></li>
                            <li><Link to="/loans">Going out to Collab!</Link></li>
                        </ul>
                    </div> */}
                    <div className="footer-section">
                        <h4>Contact Us</h4>
                        <ul>
                            <li><Link to="/contact">GitHubs</Link></li>
                            <li><Link to="/locations">LinkedIn's</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-info">
                    <p>Copyright &copy; {new Date().getFullYear()}  All rights reserved.</p>
                    <p></p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
