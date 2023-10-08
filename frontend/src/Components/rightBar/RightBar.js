import { Link } from "react-router-dom"
import badgeIcon from '../../Assests/badge-icon.png'
import userIcon from '../../Assests/profile-img.png'
import './RightBar.css'
import { useNavigate, useParams } from "react-router-dom";
import LoginTracker from "../checkInLog/LogInTracker";
import { useEffect, useState } from "react";
import textImg from '../../Assests/Logo3.png'
const apiUrl = process.env.REACT_APP_API_URL 


export default function RightBar() {

    const navigate = useNavigate();
    const { user_id } = useParams();
    const [user, setUser] = useState(null);


    const handleImageClick = () => {
        navigate(`/users/profile/${user.user_id}`)
      };

      useEffect(() => {
        const fetchUserData = async () => {
          try {
            const userDataResponse = await fetch(`${apiUrl}/users/${user_id}`);
            const userData = await userDataResponse.json();
            console.log("User Data:", userData); 
            setUser(userData);
          } catch (error) {
            console.error("Error fetching user data:", error);
          }
        };
        fetchUserData();
      }, []);
    
console.log(user)

    return(
        <aside className="rightBar">
            <div className="user-header">
            <h5 className="username">{user && user.username}</h5>
                    <img
                        src={userIcon}
                        alt="User Icon"
                        className="user-icon"
                        onClick={handleImageClick}
                    />
            </div>
            <br/>
            <br/>
            <br/>
            <div className="badge-container">
                <h5 className="badge">Badges Earned</h5>
                <div className="icon-container">
                    <img src={badgeIcon} alt="badge" className="badge-icon"></img>
                    <img src={badgeIcon} alt="badge" className="badge-icon"></img>
                    <img src={badgeIcon} alt="badge" className="badge-icon"></img>
                </div>
            </div>
            <br/>
            <br/>
            <br/>
            <div className="tracker-container">
                <LoginTracker user={user}/>
            </div>
        </aside>
    )
}