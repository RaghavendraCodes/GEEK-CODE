import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { useAuth, SignedIn, SignedOut } from '@clerk/clerk-react';
import './App.css';

import Landing from './pages/Landing';
import Home from './pages/Home';

function App() {
  const { isSignedIn } = useAuth(); // Get the authentication state
  const navigate = useNavigate(); // React Router's programmatic navigation

  // Redirect to /home if the user signs in
  useEffect(() => {
    if (isSignedIn) {
      navigate('/home');
    }
  }, [isSignedIn, navigate]);

  return (
    <Routes>
      {/* Landing Page */}
      <Route
        path="/"
        element={
          <SignedOut>
            <Landing />
          </SignedOut>
        }
      />

      {/* Home Page */}
      <Route
        path="/home"
        element={
          <SignedIn>
            <Home />
          </SignedIn>
        }
      />
    </Routes>
  );
}

export default function RootApp() {
  return (
    <Router>
      <App />
    </Router>
  );
}
