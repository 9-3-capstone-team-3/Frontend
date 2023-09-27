import React, { useState, useEffect } from "react"
import LeaderboardItem from "./LeaderboardItem.js";
import './Leaderboard.css';
import { firestore } from '../services/Firebase.js'
import { collection, query, getDocs } from "firebase/firestore";
import { db } from "../services/Firebase.js";

export default function Leaderboard(){

    const [ users, setUsers ] = useState([])

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
  

    return (
        <div className="leaderboard">
          <h1>Leaderboard</h1>
          {users.map((user, index) => ( // Added 'index' parameter
            <LeaderboardItem key={user.id} user={user} index={index + 1} /> // Pass the 'index' prop
          ))}
        </div>
      );
}