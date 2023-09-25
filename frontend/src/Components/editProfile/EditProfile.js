import React, { useState } from 'react';
import './EditProfile.css';

function EditProfile({username, setUsername, email, setEmail, password, setPassword}) {
    
    return (
        <div className='edit-profile'>
           <form className="edit-profile__form" >
                <div> 
                    <label for="username">Username:</label>
                    <input type="text" id="username" name="username" placeholder="username123" value={username} onChange={(e) => setUsername(e.target.value)}/>
                </div>
                 <div>
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="user@example.com" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>   
                <div>
                    <label for="password">Password:</label>
                    <input type="password" id="password" name="password" placeholder='New password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>     
            </form>       
        </div>
    );
}

export default EditProfile;