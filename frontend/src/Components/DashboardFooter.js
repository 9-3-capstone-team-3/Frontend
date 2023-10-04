import React from 'react';
import { Link } from 'react-router-dom';

function DashboardFooter() {
    return (

        <div className="footer">
                <Link to="/about">About Us</Link>
                <Link to="/page2">Mission</Link>
                <Link to="/about">Contact Us</Link>
                {/* Add more links as needed */}
        </div>
    
    );
}

export default DashboardFooter;
