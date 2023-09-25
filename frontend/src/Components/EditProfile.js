import React, { useState } from 'react';

function EditProfile({ user, onSave, onCancel }) {
    const [newUsername, setNewUserName] = useState(user.username);
    const [newEmail, setNewEmail] = useState(user.email);
    const [newPassword, setNewPassword] = useState(''); // Option to change Password 
    return (
        <div>
           <form id="updateProfileForm" onSubmit={(e) => {
            e.preventDefault();
            onSave(newUsername,newEmail,newPassword);
           }}>
                    <label for="username">Username:</label>
                    <input type="text" id="username" name="username" placeholder="username123" value={newUsername} onChange={(e) => setNewUserName(e.target.value)}/>
                    
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="user@example.com" value={newEmail} onChange={(e) => setNewEmail(e.target.value)}/>

                    <label for="password">Password:</label>
                    <input type="password" id="password" name="password" placeholder='New password' value={newPassword} onChange={(e) => setNewPassword(e.target.value)}/>
                    <br/>
                    <input type="submit" value="Update"/>
                </form>
                
                <button onClick={onCancel}>Cancel</button>
        </div>
    );
}

export default EditProfile;