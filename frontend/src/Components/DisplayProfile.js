function DisplayProfile({ user, onEdit }) {
    return (
        <div>
            <h2>User Profile</h2>
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>
            <p>Points: {user.total_points}</p>
            <button onClick={onEdit}>Edit</button>
        </div>
    );
}

export default DisplayProfile;