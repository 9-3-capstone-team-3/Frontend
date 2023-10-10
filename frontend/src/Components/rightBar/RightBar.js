import { Link } from "react-router-dom"
import badgeIcon from '../../Assests/badge-icon.png'
import userIcon from '../../Assests/profile-img.png'
import './RightBar.css'
import { useNavigate, useParams } from "react-router-dom";
import LoginTracker from "../checkInLog/LogInTracker";
import { useEffect, useState, useContext } from "react";
import textImg from '../../Assests/Logo3.png'
import { UserContext } from "../../providers/userProvider";

const apiUrl = process.env.REACT_APP_API_URL 

export default function RightBar() {

    const user = useContext(UserContext);
    const navigate = useNavigate();
    // const { user_id } = useParams();
    const [currentUser, setCurrentUser] = useState(null);


    const handleImageClick = () => {
        navigate(`/users/profile/${user.user_id}`)
      };

      useEffect(() => {
        const fetchUser = async () => {
          try {
            const response = await fetch(`${apiUrl}/users/email/${user.email}`);
            const data = await response.json();
    
            setCurrentUser(data);
          } catch (error) {
            console.error("Error fetching quizzes:", error);
          }
        };
        fetchUser();
      }, [user]);

    // const checkUserEmail = async (user) => {

    //     try {
    //       const response = await fetch(`${apiUrl}/users/email/${user.email}`, {
    //         method: 'GET',
    //         headers: {
    //           'Content-Type': 'application/json',
    //         },
    //       });
    //       console.log(response)
    //       if (response.ok) {
    //         console.log('Get Request Succesful');
    //         const responseData = await response.json();
    //         const currentUser = responseData;
    //       } else {
    //         console.error('Failed to fetch data');
    //       }
    //     } catch (error) {
    //       console.error('Error checking user email:', error);
    //     }
    //   }
      
    
console.log(currentUser)

    return(
        <aside className="rightBar">
            <div className="user-header">
            <h5 className="username">{currentUser && currentUser.username}</h5>
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
                <LoginTracker user={currentUser}/>
            </div>
        </aside>
    )
}