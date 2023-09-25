import './DisplayProfile.css';

function DisplayProfile({ user }) {
    return (
        <div className="display-profile">
            
            <div className="display-profile__info">
                <div>
                    <span>Username:</span> {user.username}
                </div>
                <div>
                    <span>Email:</span> {user.email}
                </div>
                <div>
                    <span>Points:</span> {user.total_points}
                </div>
            </div>    
        </div>
    );
}

export default DisplayProfile;