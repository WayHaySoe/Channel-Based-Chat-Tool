import React, { useState } from 'react';

export default function SignUp({ handleSignInClick }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: add code to submit form data to server for user registration
    // For now, we'll just log the form data to the console
    console.log(formData);
    setFormData({ name: '', email: '', password: '', confirmPassword: '' });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSignInButtonClick = (event) => {
    event.preventDefault();
    handleSignInClick();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-sm p-6 m-4 bg-white rounded-md shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2 font-bold text-gray-700" htmlFor="name">
              Name
            </label>
            <input
              className="w-full px-3 py-2 placeholder-gray-400 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
              required
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-bold text-gray-700" htmlFor="email">
              Email
            </label>
            <input
              className="w-full px-3 py-2 placeholder-gray-400 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              required
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
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
          </div>
          <div className="mb-6">
            <label className="block mb-2 font-bold text-gray-700" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <input className="w-full px-3 py-2 placeholder-gray-400 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              placeholder="Confirm your password"
              required
              value={formData.confirmPassword}
              onChange={handleInputChange}
            />
          </div>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <button
            className="w-full px-4 py-2 text-lg font-bold text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="submit"
          >
            Sign Up
          </button>
        </form>
        <p className="text-gray-700 mt-4">
          Already have an account?{' '}
          <a href="#" className="text-blue-500 hover:text-blue-700">
            <button onClick={handleSignInButtonClick}>Sign In</button>
          </a>
        </p>
      </div>
    </div>
  );
}

