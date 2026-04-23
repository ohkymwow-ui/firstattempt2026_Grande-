import React from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  ArrowLeft,
  Calendar,
  Home,
  User,
  Users,
  MessageCircle,
  Briefcase,
  GraduationCap,
  Newspaper,
  Settings,
  LogOut,
} from "lucide-react";
import { useAuth } from "./AuthContext";

export default function Events() {
  const navigate = useNavigate();
  const { logout } = useAuth();

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation */}
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold text-blue-600">
                Alumni Network
              </span>
            </div>
            <div className="flex items-center space-x-8">
              <Link
                to="/dashboard"
                className="flex items-center text-gray-700 hover:text-blue-600"
              >
                <Home className="w-5 h-5 mr-1" />
                Dashboard
              </Link>
              <Link
                to="/profile"
                className="flex items-center text-gray-700 hover:text-blue-600"
              >
                <User className="w-5 h-5 mr-1" />
                Profile
              </Link>
              <Link to="/events" className="flex items-center text-blue-600">
                <Calendar className="w-5 h-5 mr-1" />
                Events
              </Link>
              <Link
                to="/network"
                className="flex items-center text-gray-700 hover:text-blue-600"
              >
                <Users className="w-5 h-5 mr-1" />
                Network
              </Link>
              <Link
                to="/messages"
                className="flex items-center text-gray-700 hover:text-blue-600"
              >
                <MessageCircle className="w-5 h-5 mr-1" />
                Messages
              </Link>
              <Link
                to="/jobs"
                className="flex items-center text-gray-700 hover:text-blue-600"
              >
                <Briefcase className="w-5 h-5 mr-1" />
                Jobs
              </Link>
              <Link
                to="/directory"
                className="flex items-center text-gray-700 hover:text-blue-600"
              >
                <GraduationCap className="w-5 h-5 mr-1" />
                Directory
              </Link>
              <Link
                to="/news"
                className="flex items-center text-gray-700 hover:text-blue-600"
              >
                <Newspaper className="w-5 h-5 mr-1" />
                News
              </Link>
              <Link
                to="/settings"
                className="flex items-center text-gray-700 hover:text-blue-600"
              >
                <Settings className="w-5 h-5 mr-1" />
                Settings
              </Link>
              <button
                onClick={logout}
                className="flex items-center text-gray-700 hover:text-red-600"
              >
                <LogOut className="w-5 h-5 mr-1" />
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto py-6 px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Upcoming Events
        </h1>
        <div className="grid gap-4">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start gap-4">
                <Calendar className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Alumni Event {i}
                  </h3>
                  <p className="text-gray-600">
                    Date: {new Date().toLocaleDateString()}
                  </p>
                  <p className="text-gray-600">Location: University Campus</p>
                  <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
