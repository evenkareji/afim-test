import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import { Login } from './components/pages/Login';
import { Register } from './components/pages/Register';
import { Post } from './components/pages/Post';
import { Messanger } from './components/pages/messanger/Messanger';

import { AddPost } from './components/templates/AddPost/AddPost';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { AddPostInfo } from './components/pages/AddPostLayout';
import { PostInfo } from './components/pages/PostInfo';
import { ProfileLayout } from './components/pages/PrfileLayout';

function App() {
  const user = useSelector((state) => state.user.user);
  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user));
  }, [user]);
  return (
    <Routes>
      <Route path="/" element={user ? <PostInfo /> : <Login />} />
      <Route path="/profile/:username" element={<ProfileLayout />} />
      <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/addpost" element={<AddPostInfo />} />
      <Route path="/messanger" element={<Messanger />} />
    </Routes>
  );
}

export default App;
