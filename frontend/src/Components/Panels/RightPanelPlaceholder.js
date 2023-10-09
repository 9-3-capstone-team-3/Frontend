import "../Panels/PanelsStyling.css";

export default function RightPanelPlaceholder() {
  return (
    <div className="right-panel-content">
      <div className="profile-section">
        <img
          src="https://via.placeholder.com/100"
          alt="Profile"
          className="profile-pic"
        />
        <h2 className="profile-name">John Doe</h2>
      </div>
      

      <div className="badge-component">
        <h3 className="subheading">Badges</h3>
        <div className="badge">🏆</div>
      </div>

      <div className="streak-component">
        <h3 className="subheading">Weekly Streak</h3>
        <div>
          <span className="streak-day checked">Mon</span>
          <span className="streak-day checked">Tue</span>
          <span className="streak-day">Wed</span>
          <span className="streak-day">Thu</span>
          <span className="streak-day">Fri</span>
          <span className="streak-day">Sat</span>
          <span className="streak-day">Sun</span>
        </div>
      </div>
    </div>
  );
}
