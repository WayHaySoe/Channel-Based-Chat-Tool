import React, { useState } from 'react';

export default function SignIn({ handleSignUpClick }) {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: add code to submit form data to server for authentication
    // For now, we'll just log the form data to the console
    console.log(formData);
    setFormData({ username: '', password: '' });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-sm p-6 m-4 bg-white rounded-md shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2 font-bold text-gray-700" htmlFor="username">
              Username
            </label>
            <input
              className="w-full px-3 py-2 placeholder-gray-400 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="text"
              name="username"
              id="username"
              placeholder="Enter your username"
              required
              value={formData.username}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 font-bold text-gray-700" htmlFor="password">
              Password
            </label>
            <input
              className="w-full px-3 py-2 placeholder-gray-400 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              required
              value={formData.password}
              onChange={handleInputChange}
            />
            <a href="#" className="text-sm text-blue-500 hover:text-blue-700">
              Forgot your password?
            </a>
          </div>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <button
            className="w-full px-4 py-2 text-lg font-bold text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="submit"
          >
            Login
          </button>
        </form>
        <p className="text-gray-700 mt-4">
          Don't have an account?{' '}
          <button onClick={handleSignUpClick} className="text-blue-500 hover:text-blue-700">
            Sign Up
          </button>
        </p>
      </div>
    </div>
  );
}
