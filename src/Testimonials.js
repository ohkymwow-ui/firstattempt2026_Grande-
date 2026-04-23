import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Star,
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

export default function Testimonials() {
  const { logout } = useAuth();

  const testimonials = [
    {
      name: "John Smith",
      text: "The alumni network helped me find my dream job!",
      year: "2018",
    },
    {
      name: "Sarah Johnson",
      text: "Great connections and wonderful community.",
      year: "2019",
    },
    {
      name: "Mike Davis",
      text: "Best networking platform for alumni.",
      year: "2020",
    },
  ];

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
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Testimonials</h1>
        <div className="space-y-4">
          {testimonials.map((testimonial, i) => (
            <div key={i} className="bg-white rounded-lg shadow p-6">
              <div className="flex items-start gap-2 mb-2">
                {[...Array(5)].map((_, j) => (
                  <Star
                    key={j}
                    className="w-4 h-4 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>
              <p className="text-gray-900 mb-3">"{testimonial.text}"</p>
              <p className="text-gray-600">
                - {testimonial.name}, Class of {testimonial.year}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
