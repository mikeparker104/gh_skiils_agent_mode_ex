import React, { useEffect, useState } from 'react';

const API_SUFFIX = '/api/v1';

function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    fetch(`${API_SUFFIX}/leaderboard`)
      .then(response => response.json())
      .then(data => setLeaderboard(data));
  }, []);

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Leaderboard</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Score</th>
          </tr>
        </thead>
        <tbody>
          {leaderboard.map((entry, index) => (
            <tr key={entry.id}>
              <th scope="row">{index + 1}</th>
              <td>{entry.name}</td>
              <td>{entry.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Leaderboard;
