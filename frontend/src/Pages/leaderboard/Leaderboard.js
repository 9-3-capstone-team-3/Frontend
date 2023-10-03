import React, { useState, useEffect, useContext } from "react"
import LeaderboardItem from "../leaderboard/LeaderboardItem";
import "../leaderboard/Leaderboard.css";
// import { collection, query, getDocs } from "firebase/firestore";
// import { db } from "../services/Firebase.js";
// import { UserContext } from "../providers/userProvider.js";
import axios from "axios";

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

    // useEffect(() => {

      // Query the "users" collection in Firestore
    //   const getUsers = async () => {
    //     try {
    //       const usersCollection = query(collection(db, "users"));
    //       const snapshot = await getDocs(usersCollection);
    //       const usersData = [];
    //       snapshot.forEach((doc) => {
    //         usersData.push({ id: doc.id, ...doc.data() });
    //       });
    //       setUsers(usersData);
    //     } catch (error) {
    //       console.error('Error fetching users:', error);
    //     }
    //   };
    //   getUsers();
    // }, []);
  
// if (currentUser){
    return (
        <div className="leaderboard">
          <h1>Leaderboard</h1>
          {users.map((user, index) => ( // Added 'index' parameter
            <LeaderboardItem key={user.id} user={user} index={index + 1} /> // Pass the 'index' prop
          ))}
        </div>
      );
    // }
}