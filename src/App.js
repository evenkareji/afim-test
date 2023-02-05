import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import { Login } from './components/pages/Login';
import { Register } from './components/pages/Register';
import { Post } from './components/pages/Post';
import { Profile } from './components/pages/Profile';

import { AddPost } from './components/templates/AddPost/AddPost';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

function App() {
  const user = useSelector((state) => state.user.user);
  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user));
  }, [user]);
  return (
    <Routes>
      <Route path="/" element={user ? <Post /> : <Login />} />
      <Route path="/profile/:username" element={<Profile />} />
      <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/addpost" element={<AddPost />} />
    </Routes>
  );
}

export default App;
