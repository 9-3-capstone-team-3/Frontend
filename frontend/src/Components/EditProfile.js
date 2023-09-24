import React, { useState } from 'react';

function EditProfile({ onSave, onCancel }) {
    const [newPassword, setNewPassword] = useState(''); // Option to change Password 
    const [newEmail, setNewEmail] = useState(null);
    const [newUsername, setNewUserName] = useState(null);
    return (
        <div>
           <form id="updateProfileForm">
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="user@example.com" value={newEmail}/>

                    <label for="username">Username:</label>
                    <input type="text" id="username" name="username" placeholder="username123" value={newUsername}/>

                    <label for="password">Password:</label>
                    <input type="password" id="password" name="password" placeholder='New password' value={newPassword} onChange={(e) => setNewPassword(e.target.value)}/>
                    <br></br>
                    <input type="submit" value="Update"/>
                </form>
            <button onClick={onSave}>Save</button>
            <button onClick={onCancel}>Cancel</button>
        </div>
    );
}

export default EditProfile;