import React, { useState, useEffect } from "react";
import './LogInTracker.css'

function LoginTracker({ user }) {
  const [loginHistory, setLoginHistory] = useState([]);
  const today = new Date();
  today.setHours(0, 0, 0, 0); // Set current date to midnight

  useEffect(() => {
    if (user && user.last_login) {
      // Parse the last_login string into a JavaScript Date object
      const lastLoginDate = new Date(user.last_login);

      // Calculate the login history for the last 7 days
      const history = [];
      const daysOfWeek = ["S", "M", "T", "W", "T", "F", "S"];
      for (let i = 0; i < 7; i++) {
        const date = new Date(today);
        date.setDate(today.getDate() - i);
        history.push({
          dayOfWeek: daysOfWeek[i], // Get the corresponding day of the week abbreviation
          loggedIn: lastLoginDate.toDateString() === date.toDateString(),
          isCurrentDay: today.toDateString() === date.toDateString(),
          highlight: lastLoginDate <= date,
        });
      }
      setLoginHistory(history);
    }
  }, [user]);

  return (
    <div className="trackerBox">
      <h2 className="h2-title">Daily Streak</h2>
      <div className="horizontal-scroll-container">
        <div className="login-tracker-container">
          {loginHistory.map((day, index) => (
            <div
              key={index}
              className={`login-entry ${day.isCurrentDay ? "current-day" : ""} ${
                day.highlight ? "highlight" : ""
              }`}
            >
              <div
                className={`custom-checkbox ${day.loggedIn ? "checked" : ""}`}
              >
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
