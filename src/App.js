import React from 'react';
import './style.css';
import { Sidebar, RightBar } from './components';
import {
  Home,
  Lists,
  Notification,
  Stories,
  Write,
  Profile,
} from './pages/index';
import { Routes, Route } from 'react-router-dom';
export default function App() {
  return (
    <div className="container">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div style={{ margin: 20, Width: '70%' }}>
        <Routes>
          <Route path="/Write" element={<Write />} exact />
          <Route path="/lists" element={<Lists />} exact />
          <Route path="/notification" element={<Notification />} exact />
          <Route path="/stories" element={<Stories />} exact />
          <Route path="/profile" element={<Profile />} exact />
          <Route path="/" element={<Home />} exact />
        </Routes>
      </div>
      <div className="rightbar">
        <RightBar />
      </div>
    </div>
  );
}
