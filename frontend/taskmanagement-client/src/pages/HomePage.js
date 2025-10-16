import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="container mt-4">
      <div className="jumbotron">
        <h1 className="display-4">Task Management System</h1>
        <p className="lead">Efficiently manage your tasks and team assignments.</p>
        <hr className="my-4" />
        <p>Get started by registering users and creating tasks.</p>
        <div className="mt-4">
          <Link className="btn btn-primary btn-lg me-2" to="/users">Manage Users</Link>
          <Link className="btn btn-success btn-lg" to="/tasks">Manage Tasks</Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;