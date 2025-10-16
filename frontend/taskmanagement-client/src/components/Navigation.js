import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link className="navbar-brand" to="/">Task Manager</Link>
        <div className="navbar-nav">
          <Link className="nav-link" to="/">Home</Link>
          <Link className="nav-link" to="/users">Users</Link>
          <Link className="nav-link" to="/tasks">Tasks</Link>
          <Link className="nav-link" to="/dashboard">Dashboard</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;