import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';

import { Login } from './components/pages/Login';
import { Register } from './components/pages/Register';
import { Post } from './components/pages/Post';
import { Profile } from './components/pages/Profile';
import { FollowUserInfo } from './components/organisms/FollowUserInfo';
import { AuthContext } from './state/AuthContext';
import { useContext } from 'react';

import { AddPost } from './components/templates/AddPost/AddPost';
import { Comment } from './components/pages/Comment';
import { CommentAddForm } from './components/molecules/CommentAddForm';

function App() {
  const { user } = useContext(AuthContext);
  return (
    <Routes>
      <Route path="/" element={user ? <Post /> : <Login />} />
      <Route path="/profile/:username" element={<Profile />} />
      <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
      <Route path="/register" element={<Register />} />

      <Route path="/follow" element={<FollowUserInfo />} />
      <Route path="/addpost" element={<AddPost />} />
      {/* <Route path="/" element={<Post />} /> */}
    </Routes>
    // <CommentAddForm />
  );
}

export default App;
