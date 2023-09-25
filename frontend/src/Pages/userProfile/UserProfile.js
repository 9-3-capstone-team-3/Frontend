import React, { useState, useEffect } from 'react';
import EditProfile from '../../Components/editProfile/EditProfile';
import DisplayProfile from '../../Components/displayProfile/DisplayProfile';
import { useParams, useNavigate } from 'react-router-dom';
import userIcon from '../../Assests/userIcon.png';
import './UserProfile.css';


const apiUrl = process.env.REACT_APP_API_URL ;
function UserProfile() {
    const { user_id } = useParams();
    const [isEditMode, setIsEditMode] = useState(false);
    const [user, setUser] = useState({});
    const [username, setUsername] = useState(user.username);
    const [email, setEmail] = useState(user.email);
    const [firstname, setFirstname] = useState(user.firstname);
    const [lastname, setLastname] = useState(user.lastname); 
    const [password, setPassword] = useState(''); // Option to change Password

    const navigate = useNavigate();
    
    useEffect(() => {
     
        fetch(`${apiUrl}/users/${user_id}`)

            .then((response) => response.json())
            
            .then((data) =>
                
                setUser(data))
            .catch((error) => console.error(error));
    }, []);

    useEffect(()=> {
        setUsername(user.username)
        setEmail(user.email)
        setFirstname(user.firstname)
        setLastname(user.lastname)
        setPassword(user.password) 
    }, [user]);

    const handleEdit = () => {
        setIsEditMode(true);
    };

    const handleSave = async () => {
        const currentUserInfo = user
        // 1. Gather the updated data (in this case, it's passed as arguments)
        const updatedUserData = {
            username: username,
            email: email,
            firstname: firstname,
            lastname: lastname,
            password: password,

            // ... other updated data
        };
        const userToSave = {...currentUserInfo, ...updatedUserData};
      console.log(userToSave)
        try {
            const response = await fetch(`${apiUrl}/users/profile/${user_id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userToSave),
            });
           
            if (!response.ok) {
                throw new Error('Failed to update user data');
            }

            const data = await response.json();
         
            // 3. Update the user data in the local state with the response from the server
            setUser(data);

            // 4. Switch back to display mode
            setIsEditMode(false);
        } catch (error) {
            console.error('Error updating user:', error);
            // Optionally: Show an error message to the user
        }
    };

    const handleCancel = () => {
        // Switch back to display mode without saving
        setIsEditMode(false);
    };

    const handleButtonClick2 = () => {
        //returns user to dashboard
        navigate(`/dashboard/${user.user_id}`)
      };

    return (
        <div className='user-profile'>
            <div className="user-profile__img">
                <div className='user-profile__avatar'>
                    <img src={userIcon} alt='userIcon'></img>
                </div>
            </div>
            <div className='user-profile__subview'>
                {isEditMode ? (
                    <EditProfile 
                    username={username} 
                    email={email}
                    firstname={firstname}
                    lastname={lastname} 
                    password={password} 
                    setUsername={setUsername} 
                    setEmail={setEmail} 
                    setPassword={setPassword}
                    setFirstname={setFirstname}
                    setLastname={setLastname}/>
                ) : (
                    <DisplayProfile user={user} />
                )}

            </div>
            <div className='user-profile__buttons'>
                {!isEditMode && <button onClick={handleEdit}>Edit</button>}
                {isEditMode && <button onClick={handleCancel}>Cancel</button>}
                {isEditMode && <button onClick={handleSave}>Update</button>}

                {/* <button onClick={handleButtonClick2}>Return to dashboard</button> */}
            </div>
        </div>
    );
}

export default UserProfile;
