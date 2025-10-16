import React, { useState } from 'react';
import { userService } from '../services/api';

const UserForm = ({ onUserAdded }) => {
  const [user, setUser] = useState({
    name: '',
    email: ''
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!user.name.trim()) newErrors.name = 'Name is required';
    if (!user.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(user.email)) newErrors.email = 'Email is invalid';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      await userService.register(user);
      setUser({ name: '', email: '' });
      if (onUserAdded) onUserAdded();
      alert('User registered successfully!');
    } catch (error) {
      alert('Error registering user: ' + (error.response?.data || error.message));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="card p-3">
      <h3>Register User</h3>
      <div className="mb-3">
        <label className="form-label">Name</label>
        <input
          type="text"
          className={`form-control ${errors.name ? 'is-invalid' : ''}`}
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
        {errors.name && <div className="invalid-feedback">{errors.name}</div>}
      </div>
      <div className="mb-3">
        <label className="form-label">Email</label>
        <input
          type="email"
          className={`form-control ${errors.email ? 'is-invalid' : ''}`}
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        {errors.email && <div className="invalid-feedback">{errors.email}</div>}
      </div>
      <button type="submit" className="btn btn-primary">Register</button>
    </form>
  );
};

export default UserForm;