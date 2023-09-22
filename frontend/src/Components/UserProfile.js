import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const apiUrl = process.env.REACT_APP_API_URL

function UserProfile() {
    const { user_id } = useParams();
    const [userProfile, setUserProfile] = useState(null);
    const [newPassword, setNewPassword] = useState(''); // Option to change Password 
   

    useEffect(() => {
     
        fetch(`${apiUrl}/users/${user_id}`)

            .then((response) => response.json())
            
            .then((data) =>
                
                setUserProfile(data))
            .catch((error) => console.error(error));
    }, [user_id]);

    const handlePasswordChange = async () => {
        try {
            // Send a request to change the password to your backend
            const response = await fetch('/user-profile/change-password', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ newPassword }),
            });

            if (response.ok) {
                alert('Password changed successfully');
            } else {
                // Handle password change errors here
                console.error('Password change failed');
                alert('Password change failed, Please try again');
            }
        } catch (error) {
            console.error('Error changing password', error);
            alert('Error changing password');
        }
    };

    if (!userProfile) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>User Profile</h2>
            <p>Username: {userProfile.username}</p>
            <p>Email: {userProfile.email}</p>
            <p>Points: {userProfile.points}</p>

            {/* Profile Image */}
            <div>
                <img                                                           // Placeholder or actual image URL
                    src={userProfile.profileImage || 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.johnsmithjohnsmith.com%2Fabout&psig=AOvVaw0pb-yg_WlxoIs9sw6aQAkK&ust=1694329317781000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCKDzoNz6nIEDFQAAAAAdAAAAABAD'} 
                    alt='Profile'
                    width='100'
                    height='100'
                />   
            </div>

            {/* Password Change Form */}
            <div>
                <h3>Change Password</h3>
                <input
                    type='password'
                    placeholder='New Password'
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                />
                <button onClick={handlePasswordChange}>Change Password</button>
            </div>
        </div>
    );
}

export default UserProfile;