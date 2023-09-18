import React from 'react';
import { Link } from 'react-router-dom';

function DashboardFooter() {
    return (

        <div className="footer">
                <Link to="/page1">About Us</Link>
                <Link to="/page2">Mission</Link>
                <Link to="/page3">Contact Us</Link>
                {/* Add more links as needed */}
        </div>
    
    );
}

export default DashboardFooter;
