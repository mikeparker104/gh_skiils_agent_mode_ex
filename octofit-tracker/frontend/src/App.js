import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Activities from './js/Activities';
import Leaderboard from './js/Leaderboard';
import Teams from './js/Teams';
import Users from './js/Users';
import Workouts from './js/Workouts';

function App() {
  useEffect(() => {
    const socket = new WebSocket('ws://localhost:8001/ws/echo/');

    socket.onopen = () => {
      console.log('WebSocket connection established');
      socket.send(JSON.stringify({ message: 'Hello, WebSocket!' }));
    };
    
    
    socket.onmessage = (event) => {
      console.log('Message from server:', event.data);
    };

    socket.onerror = (error) => {
      console.error('WebSocket error:', error);
    };

    socket.onclose = () => {
      console.log('WebSocket connection closed');
    };

    return () => {
      socket.close();
    };
  }, []);

  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <img src="/octofitapp-small.png" alt="OctoFit Logo" style={{ height: '50px', marginRight: '10px' }} />
            <Link className="navbar-brand" to="/">OctoFit Tracker</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/activities">Activities</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/leaderboard">Leaderboard</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/teams">Teams</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/users">Users</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/workouts">Workouts</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="mt-4">
          <Routes>
            <Route path="/activities" element={<Activities />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/users" element={<Users />} />
            <Route path="/workouts" element={<Workouts />} />
            <Route path="/" element={<h1>Welcome to OctoFit Tracker</h1>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
