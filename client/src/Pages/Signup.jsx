import React, { useState } from 'react';

const Signup = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f2027] to-[#2c5364]">
      <form
        onSubmit={handleSubmit}
        className="bg-[rgba(30,30,60,0.95)] p-10 rounded-3xl shadow-2xl flex flex-col gap-5 min-w-[320px] max-w-[90vw]"
      >
        <h2 className="text-[#00fff7] text-center tracking-wider mb-4 font-orbitron text-2xl">
          Futuristic Sign Up
        </h2>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          required
          className="p-3 rounded-xl border-none bg-[#23243a] text-white text-base outline-none shadow-[0_2px_8px_#00fff733]"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
          className="p-3 rounded-xl border-none bg-[#23243a] text-white text-base outline-none shadow-[0_2px_8px_#00fff733]"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
          className="p-3 rounded-xl border-none bg-[#23243a] text-white text-base outline-none shadow-[0_2px_8px_#00fff733]"
        />
        <button
          type="submit"
          className="p-3 rounded-xl border-none bg-gradient-to-r from-[#00fff7] to-[#007cf0] text-[#23243a] font-bold text-lg tracking-wide cursor-pointer transition-all"
        >
          Sign Up
        </button>
        {submitted && (
          <div className="text-[#00fff7] text-center mt-4 font-bold">
            Signup successful!
          </div>
        )}
      </form>
    </div>
  );
};

export default Signup;
