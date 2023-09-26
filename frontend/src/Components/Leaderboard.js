import React, { useState, useEffect } from "react";
import axios from "axios";
import LeaderboardItem from "./LeaderboardItem.js";
import './Leaderboard.css';
import { firestore } from '../services/Firebase.js'
import { collection, query, getDocs } from "firebase/firestore";
import { db } from "../services/Firebase.js";


export default function Leaderboard() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Query the "users" collection in Firestore
    const getUsers = async () => {
      try {
        const usersCollection = query(collection(db, "users"));
        const snapshot = await getDocs(usersCollection);

        const usersData = [];
        snapshot.forEach((doc) => {
          usersData.push({ id: doc.id, ...doc.data() });
        });

        setUsers(usersData);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    getUsers();
  }, []);

  console.log(users)

  

  return (
    <div className="leaderboard">
      <h1>Leaderboard</h1>
      {users.map((user, index) => (
        <LeaderboardItem key={user.user_id} user={user} index={index + 1} />
      ))}
    </div>
  );
}
