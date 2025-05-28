import React from 'react';

// Example developer data
const developers = [
  {
    name: 'Shaa Dharan Y',
    bio: 'Passionate about Coding and Solving DSA Problems. Main activity: developing AuthContext.',
    skills: ['React', 'DSA', 'Auth'],
    contributions: 10,
  },
  {
    name: 'Dhanush T',
    bio: 'Passionate about Full Stack Development and eager to learn React.',
    skills: ['Full Stack', 'React', 'Node.js'],
    contributions: 8,
  },
  {
    name: 'Charles S',
    bio: 'Problem Solver and DSA Web Developer etc.',
    skills: ['DSA','Problem Solver','Gaming', 'Driving'],
    contributions: 6,
  },
];

export const Developers = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-800 to-gray-800 flex flex-col items-center py-10">
      <h2 className="text-4xl font-extrabold text-white mb-10 tracking-wide drop-shadow-lg"> The Developers</h2>
      <div className="flex flex-wrap gap-8 justify-center">
        {developers.map((dev) => (
          <div
            key={dev.name}
            className="relative bg-gradient-to-tr from-indigo-700 via-gray-900 to-indigo-900 rounded-2xl shadow-2xl p-8 w-80 border border-indigo-500 hover:scale-105 transition-transform duration-300 group"
            style={{
              boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
              backdropFilter: 'blur(6px)',
              WebkitBackdropFilter: 'blur(6px)',
            }}
          >
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-400 to-indigo-900 border-4 border-indigo-300 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                {dev.name.split(' ').map(n => n[0]).join('')}
              </div>
            </div>
            <div className="mt-10">
              <h3 className="text-xl font-semibold text-indigo-200 mb-2 text-center">{dev.name}</h3>
              <p className="text-gray-300 text-sm mb-4 text-center">{dev.bio}</p>
              <div className="flex flex-wrap gap-2 justify-center mb-4">
                {dev.skills.map(skill => (
                  <span
                    key={skill}
                    className="bg-indigo-600 bg-opacity-60 text-indigo-100 px-3 py-1 rounded-full text-xs font-medium shadow"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <p className="text-indigo-300 text-center mb-4">
                <span className="font-bold">Contributions:</span> {dev.contributions}
              </p>
              <button
                disabled
                title="Coming soon!"
                className="w-full py-2 rounded-lg bg-gradient-to-r from-indigo-500 to-indigo-700 text-white font-semibold opacity-70 cursor-not-allowed shadow-lg group-hover:opacity-100 transition-opacity"
              >
                
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
