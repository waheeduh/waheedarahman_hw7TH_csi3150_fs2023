import React, { useState } from 'react';
import './App.css';

function UserSignUp() {
  const [formData, setFormData] = useState({
    fullName: '',
    username: '',
    email: '',
    address: '',
    phoneNumber: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('User Submitted Data:', formData);
    // Reset form data after submission (optional)
    setFormData({
      fullName: '',
      username: '',
      email: '',
      address: '',
      phoneNumber: '',
    });
  };

  return (
    <div className="user-signup-container">
      <div className="signup-box">
        <h2>User Sign Up</h2>
        <form onSubmit={handleSubmit} className="signup-form">
          <label>
            Full Name:
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
            />
          </label>

          <label>
            Username:
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
          </label>

          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </label>

          <label>
            Address:
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
          </label>

          <label>
            Phone Number:
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </label>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default UserSignUp;
