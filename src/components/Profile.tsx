import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/login');
        return;
      }
      try {
        const response = await axios.get('http://localhost:8000/users/me', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(response.data);
        setEmail(response.data.email);
      } catch (error) {
        console.error('Failed to fetch profile:', error);
        navigate('/login');
      }
    };
    fetchProfile();
  }, [navigate]);

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    const token = localStorage.getItem('token');
    try {
      const response = await axios.put(
        'http://localhost:8000/users/me',
        { email },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setUser(response.data);
    } catch (error: any) {
      if (error.response && error.response.data) {
        setError(error.response.data.detail || 'Failed to update profile. Please try again.');
      } else {
        setError('Failed to update profile. Please try again.');
      }
      console.error('Failed to update profile:', error);
    }
  };

  if (!user) return <div>Loading...</div>;

  return (
    <div className="max-w-md mx-auto mt-10">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-2xl mb-6 text-center font-bold text-gray-800">Profile</h2>
        {error && <p className="text-red-500 text-xs italic mb-4">{error}</p>}
        <div className="mb-4">
          <p className="text-gray-700 text-sm font-bold mb-2">Username: {user.username}</p>
        </div>
        <form onSubmit={handleUpdate}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Update Profile
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;