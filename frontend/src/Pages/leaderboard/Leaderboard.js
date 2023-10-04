import React, { useState, useEffect } from "react"
import LeaderboardItem from "../leaderboard/LeaderboardItem";
import "../leaderboard/Leaderboard.css";
import axios from "axios";
import NavBar from "../../Components/NavBar";

export default function Leaderboard(){

    const [ users, setUsers ] = useState([])
    // const currentUser = useContext(UserContext);

    useEffect(() => {
      axios.get(`${process.env.REACT_APP_API_URL}/users`)
        .then((res) => {
          // Sort users by points in descending order
          const sortedUsers = res.data.sort((a, b) => b.total_points - a.total_points);
          setUsers(sortedUsers);
        })
        .catch((e) => {
          console.log({ error: e });
        });
    }, []);

    return (
      <div>
        <aside>
          <NavBar/>
        </aside>
        <main className="leaderboard">
          <h1>Leaderboard</h1>
          {users.map((user, index) => ( // Added 'index' parameter
            <LeaderboardItem key={user.id} user={user} index={index + 1} /> // Pass the 'index' prop
          ))}
        </main>
        </div>
      );

}