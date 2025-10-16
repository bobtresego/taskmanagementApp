import React, { useState, useEffect } from 'react';
import { taskService, userService } from '../services/api';

const TaskForm = ({ onTaskAdded }) => {
  const [task, setTask] = useState({
    title: '',
    description: '',
    dueDate: '',
    status: 'Pending',
    userId: ''
  });
  const [users, setUsers] = useState([]);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      const response = await userService.getAll();
      setUsers(response.data);
    } catch (error) {
      console.error('Error loading users:', error);
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!task.title.trim()) newErrors.title = 'Title is required';
    if (!task.dueDate) newErrors.dueDate = 'Due date is required';
    if (!task.userId) newErrors.userId = 'User is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const taskData = {
        ...task,
        dueDate: new Date(task.dueDate).toISOString(),
        userId: parseInt(task.userId)
      };
      await taskService.create(taskData);
      setTask({
        title: '',
        description: '',
        dueDate: '',
        status: 'Pending',
        userId: ''
      });
      if (onTaskAdded) onTaskAdded();
      alert('Task created successfully!');
    } catch (error) {
      alert('Error creating task: ' + (error.response?.data || error.message));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="card p-3">
      <h3>Create Task</h3>
      <div className="mb-3">
        <label className="form-label">Title</label>
        <input
          type="text"
          className={`form-control ${errors.title ? 'is-invalid' : ''}`}
          value={task.title}
          onChange={(e) => setTask({ ...task, title: e.target.value })}
        />
        {errors.title && <div className="invalid-feedback">{errors.title}</div>}
      </div>
      <div className="mb-3">
        <label className="form-label">Description</label>
        <textarea
          className="form-control"
          value={task.description}
          onChange={(e) => setTask({ ...task, description: e.target.value })}
          rows="3"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Due Date</label>
        <input
          type="datetime-local"
          className={`form-control ${errors.dueDate ? 'is-invalid' : ''}`}
          value={task.dueDate}
          onChange={(e) => setTask({ ...task, dueDate: e.target.value })}
        />
        {errors.dueDate && <div className="invalid-feedback">{errors.dueDate}</div>}
      </div>
      <div className="mb-3">
        <label className="form-label">Status</label>
        <select
          className="form-control"
          value={task.status}
          onChange={(e) => setTask({ ...task, status: e.target.value })}
        >
          <option value="Pending">Pending</option>
          <option value="InProgress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
      </div>
      <div className="mb-3">
        <label className="form-label">Assign To</label>
        <select
          className={`form-control ${errors.userId ? 'is-invalid' : ''}`}
          value={task.userId}
          onChange={(e) => setTask({ ...task, userId: e.target.value })}
        >
          <option value="">Select User</option>
          {users.map(user => (
            <option key={user.id} value={user.id}>{user.name}</option>
          ))}
        </select>
        {errors.userId && <div className="invalid-feedback">{errors.userId}</div>}
      </div>
      <button type="submit" className="btn btn-primary">Create Task</button>
    </form>
  );
};

export default TaskForm;