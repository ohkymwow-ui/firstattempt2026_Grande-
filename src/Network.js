import React from "react";
import { Link } from "react-router-dom";
import {
  Users,
  Home,
  User,
  Calendar,
  MessageCircle,
  Briefcase,
  GraduationCap,
  Newspaper,
  Settings,
  LogOut,
} from "lucide-react";
import { useAuth } from "./AuthContext";

export default function Network() {
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
            <div className="flex items-center space-x-8 overflow-x-auto">
              <Link
                to="/dashboard"
                className="flex items-center text-gray-700 hover:text-blue-600 whitespace-nowrap"
              >
                <Home className="w-5 h-5 mr-1" />
                Dashboard
              </Link>
              <Link
                to="/profile"
                className="flex items-center text-gray-700 hover:text-blue-600 whitespace-nowrap"
              >
                <User className="w-5 h-5 mr-1" />
                Profile
              </Link>
              <Link
                to="/events"
                className="flex items-center text-gray-700 hover:text-blue-600 whitespace-nowrap"
              >
                <Calendar className="w-5 h-5 mr-1" />
                Events
              </Link>
              <Link
                to="/network"
                className="flex items-center text-blue-600 whitespace-nowrap"
              >
                <Users className="w-5 h-5 mr-1" />
                Network
              </Link>
              <Link
                to="/messages"
                className="flex items-center text-gray-700 hover:text-blue-600 whitespace-nowrap"
              >
                <MessageCircle className="w-5 h-5 mr-1" />
                Messages
              </Link>
              <Link
                to="/jobs"
                className="flex items-center text-gray-700 hover:text-blue-600 whitespace-nowrap"
              >
                <Briefcase className="w-5 h-5 mr-1" />
                Jobs
              </Link>
              <Link
                to="/directory"
                className="flex items-center text-gray-700 hover:text-blue-600 whitespace-nowrap"
              >
                <GraduationCap className="w-5 h-5 mr-1" />
                Directory
              </Link>
              <Link
                to="/news"
                className="flex items-center text-gray-700 hover:text-blue-600 whitespace-nowrap"
              >
                <Newspaper className="w-5 h-5 mr-1" />
                News
              </Link>
              <Link
                to="/settings"
                className="flex items-center text-gray-700 hover:text-blue-600 whitespace-nowrap"
              >
                <Settings className="w-5 h-5 mr-1" />
                Settings
              </Link>
              <button
                onClick={logout}
                className="flex items-center text-gray-700 hover:text-red-600 whitespace-nowrap"
              >
                <LogOut className="w-5 h-5 mr-1" />
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto py-6 px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Alumni Network
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow"
            >
              <Users className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="font-semibold text-gray-900">Alumni {i}</h3>
              <p className="text-gray-600 text-sm">Class of 2020</p>
              <button className="mt-4 text-blue-600 hover:text-blue-800 font-medium">
                View Profile →
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
