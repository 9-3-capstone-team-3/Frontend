function DisplayProfile({ userProfile, onEdit }) {
    return (
        <div>
            <h2>User Profile</h2>
            <p>Username: {userProfile.username}</p>
            <p>Email: {userProfile.email}</p>
            <p>Points: {userProfile.total_points}</p>
            <button onClick={onEdit}>Edit</button>
        </div>
    );
}

export default DisplayProfile;