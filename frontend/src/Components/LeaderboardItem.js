function LeaderboardItem({ user }) {
    return (
      <div className="leaderboard-item">
        <div className="rank">{user.id}</div>
        <div className="user-info">
          <div className="user-name">{user.username}</div>
          <div className="user-score">{user.total_points} points</div>
        </div>
      </div>
    );
  }
  
  export default LeaderboardItem;