import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';
import EventsPage from './pages/EventsPage';
import MediaPage from './pages/MediaPage';
import ContactPage from './pages/ContactPage';
import AdminPanel from './pages/AdminPanel';
import { AuthProvider, useAuth } from './contexts/AuthContext';

function AppContent() {
  const { user } = useAuth();

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Header />
        <main className="pt-16">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/media" element={<MediaPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route 
              path="/dashboard" 
              element={user ? <Dashboard /> : <Navigate to="/login" />} 
            />
            <Route 
              path="/admin" 
              element={user?.role === 'admin' || user?.role === 'core' ? <AdminPanel /> : <Navigate to="/dashboard" />} 
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;