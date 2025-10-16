import React, { useState, useEffect } from 'react';
import { taskService, userService } from '../services/api';

const DashboardPage = () => {
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalTasks: 0,
    pendingTasks: 0,
    completedTasks: 0
  });

  useEffect(() => {
    loadStats();
  }, []);

  const loadStats = async () => {
    try {
      const [usersRes, tasksRes, pendingRes] = await Promise.all([
        userService.getAll(),
        taskService.getAll(),
        taskService.getPending()
      ]);

      const completedTasks = tasksRes.data.filter(task => task.status === 'Completed').length;

      setStats({
        totalUsers: usersRes.data.length,
        totalTasks: tasksRes.data.length,
        pendingTasks: pendingRes.data.length,
        completedTasks: completedTasks
      });
    } catch (error) {
      console.error('Error loading stats:', error);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Dashboard</h2>
      <div className="row">
        <div className="col-md-3">
          <div className="card text-white bg-primary mb-3">
            <div className="card-body">
              <h5 className="card-title">Total Users</h5>
              <h2 className="card-text">{stats.totalUsers}</h2>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card text-white bg-success mb-3">
            <div className="card-body">
              <h5 className="card-title">Total Tasks</h5>
              <h2 className="card-text">{stats.totalTasks}</h2>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card text-white bg-warning mb-3">
            <div className="card-body">
              <h5 className="card-title">Pending Tasks</h5>
              <h2 className="card-text">{stats.pendingTasks}</h2>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card text-white bg-info mb-3">
            <div className="card-body">
              <h5 className="card-title">Completed Tasks</h5>
              <h2 className="card-text">{stats.completedTasks}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;