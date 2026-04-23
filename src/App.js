import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { AuthProvider } from "./AuthContext";

// Import pages directly from src folder (no pages/ subdirectory)
import AlumniLogin from "./alumni";
import AlumniSignup from "./AlumniSignup";
import ForgotPassword from "./ForgotPassword";
import Dashboard from "./Dashboard";
import Profile from "./Profile";
import Events from "./Events";
import Network from "./Network";
import Messages from "./Messages";
import Jobs from "./Jobs";
import Directory from "./Directory";
import News from "./News";
import Settings from "./Settings";
import Testimonials from "./Testimonials";
import Volunteer from "./Volunteer";
import Scholarships from "./Scholarships";
import Mentorship from "./Mentorship";
import Contact from "./Contact";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<AlumniLogin />} />
          <Route path="/signup" element={<AlumniSignup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />

          {/* Protected Routes */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/events" element={<Events />} />
          <Route path="/network" element={<Network />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/directory" element={<Directory />} />
          <Route path="/news" element={<News />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/volunteer" element={<Volunteer />} />
          <Route path="/scholarships" element={<Scholarships />} />
          <Route path="/mentorship" element={<Mentorship />} />
          <Route path="/contact" element={<Contact />} />

          {/* Catch all */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
