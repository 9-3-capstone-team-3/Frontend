import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    // Function to check if the page is scrolled to the bottom
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight =
        document.documentElement.scrollHeight ||
        document.body.scrollHeight;
      const scrollTop =
        window.scrollY || window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop;

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
    <footer
      className={`footer ${showFooter ? 'show' : 'hide'}`}
      style={{
        height: '1in', // 1 inch height
        display: 'flex',
        justifyContent: 'center', // Center text horizontally
        alignItems: 'center', // Center text vertically
        backgroundColor: '#f8f9fa', // Background color
      }}
    >
      <div className="container text-center">
        <div className="row">
          <div className="col-12 text-muted">
            <p className="mb-0">
              &copy; {new Date().getFullYear()} Capstone Team 3. All rights
              reserved.
            </p>
            <p className="mb-0">Karimah Reavis | Shaniqua Coston</p>
            <p className="mb-0">Markeya Mckoy-Carree | Marangely Rosas</p>
            <p className="mb-0">SangUn Park</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
