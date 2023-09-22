import React from "react";

export default function LeaderboardItem({ user, rank }) {
  return (
    <tr>
      <td>{rank}</td>
      <td>{user.username}</td>
      <td>{user.total_points}</td>
    </tr>
  );
}
