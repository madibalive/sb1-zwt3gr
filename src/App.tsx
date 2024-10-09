import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { UserCircle, LogIn, UserPlus, Key } from 'lucide-react';
import Login from './components/Login';
import Signup from './components/Signup';
import Profile from './components/Profile';
import ResetPassword from './components/ResetPassword';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-white shadow-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <div className="flex-shrink-0 flex items-center">
                  <Link to="/" className="text-xl font-bold text-gray-800">Auth App</Link>
                </div>
              </div>
              <div className="flex items-center">
                <Link to="/login" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                  <LogIn className="inline-block mr-1" size={18} />
                  Login
                </Link>
                <Link to="/signup" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                  <UserPlus className="inline-block mr-1" size={18} />
                  Signup
                </Link>
                <Link to="/profile" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                  <UserCircle className="inline-block mr-1" size={18} />
                  Profile
                </Link>
                <Link to="/reset-password" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                  <Key className="inline-block mr-1" size={18} />
                  Reset Password
                </Link>
              </div>
            </div>
          </div>
        </nav>

        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/" element={<h1 className="text-2xl font-semibold text-gray-900">Welcome to Auth App</h1>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;