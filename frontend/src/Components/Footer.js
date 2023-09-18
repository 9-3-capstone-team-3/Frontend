// Footer.js

import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import footer from "../Assests/footer.png";

function Footer() {
    return (
        <div className="footer-container" >
            <img src={footer} alt="Footer" style={{backgroundRepeat: "repeat"}}/>
            
            <div className="footer-links">
                <Link to="/page1">About Us</Link>
                <Link to="/page2">Mission</Link>
                <Link to="/page3">Contact Us</Link>
                {/* Add more links as needed */}
            </div>
        </div>
    );
}

export default Footer;
