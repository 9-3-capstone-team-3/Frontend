import React, { useState, useEffect } from 'react';
import EditProfile from './EditProfile';
import DisplayProfile from './DisplayProfile';
import { useParams } from 'react-router-dom';


const apiUrl = process.env.REACT_APP_API_URL ;
function UserProfile() {
    const { user_id } = useParams();
    const [isEditMode, setIsEditMode] = useState(false);
    const [user, setUser] = useState({
        username: 'exampleUser',
        email: 'example@email.com',
        // ... other user data
    });
    
    useEffect(() => {
     
        fetch(`${apiUrl}/users/${user_id}`)

            .then((response) => response.json())
            
            .then((data) =>
                
                setUser(data))
            .catch((error) => console.error(error));
    }, [user_id]);

    const handleEdit = () => {
        setIsEditMode(true);
    };

    const handleSave = async (newEmail, newUsername) => {
        // 1. Gather the updated data (in this case, it's passed as arguments)
        const updatedUserData = {
            username: newUsername,
            email: newEmail,
            // ... other updated data
        };

        try {
            const response = await fetch(`${apiUrl}/users/${user_id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedUserData),
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

    return (
        <div className='gray-background'>
            {isEditMode ? (
                <EditProfile user={user} onSave={handleSave} onCancel={handleCancel} />
            ) : (
                <DisplayProfile user={user} onEdit={handleEdit} />
            )}
        </div>
    );
}

export default UserProfile;
