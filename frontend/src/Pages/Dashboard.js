import React, { useState, useEffect } from 'react';
import userIcon from "../Assests/userIcon.png";
import UserProfile from '../Components/UserProfile';
import Leaderboard from "../Components/Leaderboard";
import NavBar from "../Components/NavBar"
import "../Pages/Dashboard.css";
import DashboardFooter from "../Components/DashboardFooter";
import pointsIcon from '../Assests/pointsIcon.png';
import lock from '../Assests/lock.png';
import star from '../Assests/star.png';

const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:3003'
function Dashboard(){
    const [showProfile, setShowProfile] = useState(false);

    const handleImageClick = () => {
        setShowProfile(true);
    };
    const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch user data from backend. Adjust this as per your backend setup.
    fetch(`${apiUrl}/users/user_id`)
      .then(response => response.json())
      .then(data => {console.log(data)
        setUser(data)})
      .catch(error => console.error('Error fetching user data:', error));
  }, []);
  
    return (
    <div className="container">

      {/* Left Sidebar */}
      <div className="left-sidebar">
        {<NavBar/>}
      </div>


      {/* Main Body */}
      <div className="body-section">
        {/* ...contents of main body... */}
        <div className="banner"> 
        <h1>Beginner</h1>
        <p>Learn the basics of git!</p>
        </div>
        <div className="circle-buttons">
            {/* Check user data has loaded and total_points doesn't equal 5 */}
            {user && user.total_points > 5 ? (
            <button style={{ marginLeft: '-300px' }}>
                <img src={lock} alt="lock icon" />
            </button> ) : (
                <button style={{ marginLeft: '-300px' }}>
                <img src={star} alt="star icon" />
                </button>
            )}
            <button style={{ marginLeft: '-450px' }}>
                <img src={lock} alt="lock icon" />
            </button>  {/* Move further to the right */}
            <button style={{ marginLeft: '-475px'}/* Default position (start) */}>
                <img src={lock} alt="lock icon" />
            </button>
            <button style={{ marginLeft: '-300px' }}>
                <img src={lock} alt="lock icon" />
            </button>  {/* Move some amount to the right */}
        </div>

        <div className="banner2"> 
        <h1>Intermediate</h1>
        <p>Practice the git process</p> 
        </div>
        <div className="circle-buttons">
            <button style={{ marginLeft: '-300px' }}>
                <img src={lock} alt="lock icon" />
            </button>  {/* Move a bit to the right */}
            <button style={{ marginLeft: '-450px' }}>
                <img src={lock} alt="lock icon" />
            </button>  {/* Move further to the right */}
            <button style={{ marginLeft: '-475px'}/* Default position (start) */}>
                <img src={lock} alt="lock icon" />
            </button>
            <button style={{ marginLeft: '-300px' }}>
                <img src={lock} alt="lock icon" />
            </button>  {/* Move some amount to the right */}
        </div>
        <div className="banner3"> 
        <h1>Advance</h1>
        <p>Collab on gitHub <br/>and gain points</p> 
        </div>
        <div className="circle-buttons">
            <button style={{ marginLeft: '-300px' }}>
                <img src={lock} alt="lock icon" />
            </button>  {/* Move a bit to the right */}
            <button style={{ marginLeft: '-450px' }}>
                <img src={lock} alt="lock icon" />
            </button>  {/* Move further to the right */}
            <button style={{ marginLeft: '-475px'}/* Default position (start) */}>
                <img src={lock} alt="lock icon" />
            </button>
            <button style={{ marginLeft: '-300px' }}>
                <img src={lock} alt="lock icon" />
            </button>  {/* Move some amount to the right */}
        </div>

        </div>

      {/* Right Sidebar */}
      <div className="right-sidebar">
        {/* Header */}
        <div className="header">
            <div className='icon-container'>
                {/* Points */}
                
                <img src={pointsIcon} alt="points icon" className='points-icon' />
                <span className='icon-text'>1234 pts</span>
                
                <img src={userIcon} alt="User Icon" className='user-icon' onClick={handleImageClick} />
                {showProfile && <UserProfile />}
            </div>
        </div>
        {/* Leaderboard */}
        <div className="leaderboard">
            {<Leaderboard/>}
        </div>

        {/* Footer */}
        <div className="footer">
          {<DashboardFooter/>}
        </div>
      </div>

    </div>
  );
}

export default Dashboard;