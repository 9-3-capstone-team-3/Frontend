import React, { useState, useEffect } from "react";
import axios from "axios";
import LeaderboardItem from "./LeaderboardItem.js";

export default function Leaderboard() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/users`)
      .then((res) => {
        setUsers(res.data);
      })
      .catch((e) => {
        console.log({ error: { e } });
      });
  }, []);

  return (
    <div className="leaderboard-container" style={{ marginLeft: "-26px", marginTop: "50px" }}>
      {/* Apply marginLeft to move the leaderboard to the left */}
      <h1 className="text-center">Ranking</h1>
      <div className="table-responsive">
        <table className="table table-striped table-bordered table-hover text-center">
          {/* Added table-striped class for striped rows */}
          <thead>
            <tr>
            <th className="col-auto">Rank</th> {/* Adjust the column width */}
              <th className="col-auto">Name</th> {/* Adjust the column width */}
              <th className="col-auto">Pts</th> {/* Adjust the column width */}
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <LeaderboardItem key={user.id} user={user} rank={index + 1} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
