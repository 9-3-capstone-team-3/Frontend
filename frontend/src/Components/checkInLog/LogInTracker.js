import React, { useState, useEffect } from "react";
import './LogInTracker.css'

function LoginTracker({ user }) {
  const [loginHistory, setLoginHistory] = useState([]);

  useEffect(() => {
    const today = new Date();
    const currentDayOfWeek = today.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday

    // Create a list of days of the week.
    const daysOfWeek = ["S", "M", "T", "W", "T", "F", "S"];

    // Create login history for the last 7 days, marking the days leading up to the current day as checked.
    const history = [];
    for (let i = 0; i < 7; i++) {
      const dayOfWeek = daysOfWeek[i]; // Get the corresponding day of the week abbreviation
      history.push({
        dayOfWeek,
        loggedIn: i <= currentDayOfWeek, // Mark the days leading up to the current day as checked
        isCurrentDay: i === currentDayOfWeek,
      });
    }

    setLoginHistory(history);
  }, [user]);

  return (
    <div className="trackerBox">
      <h2 className="h2-title">Daily Streak</h2>
      <div className="horizontal-scroll-container">
        <div className="login-tracker-container">
          {loginHistory.map((day, index) => (
            <div
              key={index}
              className={`login-entry ${day.isCurrentDay ? "current-day" : ""}`}
            >
              <div className={`custom-checkbox ${day.loggedIn ? "checked" : ""}`}>
                {day.dayOfWeek}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LoginTracker;
