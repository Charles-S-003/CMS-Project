import React, { useState } from 'react'

const Dashboard = () => {
  const [students, setStudents] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com' }
  ])
  const [modalOpen, setModalOpen] = useState(false)
  const [editId, setEditId] = useState(null)
  const [form, setForm] = useState({ name: '', email: '' })

  const openAddModal = () => {
    setEditId(null)
    setForm({ name: '', email: '' })
    setModalOpen(true)
  }

  const openEditModal = (student) => {
    setEditId(student.id)
    setForm({ name: student.name, email: student.email })
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
    setForm({ name: '', email: '' })
    setEditId(null)
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
  e.preventDefault();

  if (form.name === '' || form.email === '') return;

  if (editId === null) {
    // Add new student
    const newStudent = {
      id: Date.now(),
      name: form.name,
      email: form.email
    };
    setStudents([...students, newStudent]);
  } else {
    // Edit existing student
    const updatedList = [];
    for (let i = 0; i < students.length; i++) {
      if (students[i].id === editId) {
        updatedList.push({
          id: editId,
          name: form.name,
          email: form.email
        });
      } else {
        updatedList.push(students[i]);
      }
    }
    setStudents(updatedList);
  }

  closeModal();
};


  const handleDelete = (id) => {  
    setStudents(students.filter(s => s.id !== id))
  }

  // Add this logout function
  const handleLogout = () => {
    // Clear any authentication tokens or user data here if needed
    // For now, just redirect to login page
    window.location.href = '/login';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800 p-6 text-white">
      <div className="max-w-5xl mx-auto backdrop-blur-md bg-white/10 rounded-xl shadow-2xl p-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-extrabold text-center text-white">🎓 Student Management Dashboard</h1>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-full transition duration-300"
          >
            Logout
          </button>
        </div>
        
        <div className="flex justify-end mb-4">
          <button
            onClick={openAddModal}
            className="px-5 py-2 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold rounded-full transition duration-300"
          >
            + Add Student
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-separate border-spacing-y-2">
            <thead>
              <tr className="text-indigo-100">
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Email</th>
                <th className="px-4 py-2 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {students.length === 0 && (
                <tr>
                  <td colSpan={3} className="py-4 text-center text-indigo-200">No students found.</td>
                </tr>
              )}
              {students.map(student => (
                <tr key={student.id} className="bg-white/20 backdrop-blur-md rounded-lg text-white shadow hover:scale-[1.01] transition">
                  <td className="px-4 py-3 rounded-l-lg">{student.name}</td>
                  <td className="px-4 py-3">{student.email}</td>
                  <td className="px-4 py-3 text-center rounded-r-lg">
                    <button
                      onClick={() => openEditModal(student)}
                      className="mr-3 px-3 py-1 bg-green-500 hover:bg-green-600 rounded-full text-white text-sm transition"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(student.id)}
                      className="px-3 py-1 bg-red-500 hover:bg-red-600 rounded-full text-white text-sm transition"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-white text-black rounded-lg p-8 w-full max-w-md shadow-xl">
            <h2 className="text-xl font-bold mb-6">{editId ? 'Edit Student' : 'Add Student'}</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block font-medium mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  required
                />
              </div>
              <div>
                <label className="block font-medium mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  required
                />
              </div>
              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={closeModal}
                  className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded"
                >
                  {editId ? 'Update' : 'Add'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default Dashboard
