import React, { useState, useEffect } from "react"
import axios from "axios";
import LeaderboardItem from "./LeaderboardItem.js";
import './Leaderboard.css';

export default function Leaderboard(){

    const [ users, setUsers ] = useState([])

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/users`).then((res) => {
            setUsers(res.data)
        }).catch((e) => {
            console.log({ error: {e}})
        })
    }, []);

    return (
        <div className="leaderboard">
          <h1>Leaderboard</h1>
          {users.map((user, index) => ( // Added 'index' parameter
            <LeaderboardItem key={user.id} user={user} index={index + 1} /> // Pass the 'index' prop
          ))}
        </div>
      );
}