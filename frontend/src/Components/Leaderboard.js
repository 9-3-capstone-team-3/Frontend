import React, { useState, useEffect } from "react";
import axios from "axios";
import LeaderboardItem from "./LeaderboardItem.js";
import './Leaderboard.css';

export default function Leaderboard() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/users`)
      .then((res) => {
        // Sort users by total_points in descending order
        const sortedUsers = res.data.sort((a, b) => b.total_points - a.total_points);
        setUsers(sortedUsers);
      })
      .catch((e) => {
        console.log({ error: e });
      });
  }, []);

  return (
    <div className="leaderboard">
      <h1>Leaderboard</h1>
      {users.map((user, index) => (
        <LeaderboardItem key={user.user_id} user={user} index={index + 1} />
      ))}
    </div>
  );
}
