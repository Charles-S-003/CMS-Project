import React, { useState } from 'react';

export const Signin = () => {
  const [alert, setAlert] = useState('');
  const [form, setForm] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.email || !form.password) {
      setAlert('Please fill in all fields.');
      return;
    }
    // Simulate sign in
    setAlert('Signed in successfully!');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-black">
      <div className="bg-gray-800 bg-opacity-80 rounded-2xl shadow-2xl p-10 w-full max-w-md border border-purple-700 relative">
        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
          <div className="w-16 h-16 bg-gradient-to-tr from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M16 21v-2a4 4 0 00-8 0v2M12 11a4 4 0 100-8 4 4 0 000 8z" />
            </svg>
          </div>
        </div>
        <h2 className="text-3xl font-bold text-white text-center mb-8 mt-8 tracking-wide">Sign In</h2>
        {alert && (
          <div className="mb-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-2 rounded shadow animate-fade-in">
            {alert}
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-purple-300 mb-2" htmlFor="email">Email</label>
            <input
              className="w-full px-4 py-2 rounded-lg bg-gray-900 text-white border border-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
              type="email"
              name="email"
              id="email"
              value={form.email}
              onChange={handleChange}
              autoComplete="email"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-purple-300 mb-2" htmlFor="password">Password</label>
            <input
              className="w-full px-4 py-2 rounded-lg bg-gray-900 text-white border border-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
              type="password"
              name="password"
              id="password"
              value={form.password}
              onChange={handleChange}
              autoComplete="current-password"
              placeholder="••••••••"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold shadow-lg hover:from-pink-500 hover:to-purple-600 transition-all duration-300"
          >
            Sign In
          </button>
        </form>
        <div className="mt-6 text-center">
          <span className="text-gray-400">Don't have an account?</span>
          <a href="/signup" className="ml-2 text-purple-400 hover:underline">Sign Up</a>
        </div>
      </div>
    </div>
  );
};
