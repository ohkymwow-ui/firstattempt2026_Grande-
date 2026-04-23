import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Home,
  User,
  Calendar,
  Users,
  MessageCircle,
  Briefcase,
  GraduationCap,
  Newspaper,
  Settings,
  LogOut,
} from "lucide-react";
import { useAuth } from "./AuthContext";

export default function Mentorship() {
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
              <Link
                to="/events"
                className="flex items-center text-gray-700 hover:text-blue-600"
              >
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
          Mentorship Program
        </h1>
        <div className="bg-white rounded-lg shadow p-6">
          <p className="text-gray-600">
            Connect with experienced alumni mentors to guide your career path.
          </p>
          <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
            Find a Mentor
          </button>
        </div>
      </div>
    </div>
  );
}
