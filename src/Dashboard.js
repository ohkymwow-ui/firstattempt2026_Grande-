import React from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  LogOut,
  User,
  Calendar,
  Users,
  MessageCircle,
  Briefcase,
  GraduationCap,
  Newspaper,
  Settings,
  ArrowRight,
} from "lucide-react";
import { useAuth } from "./AuthContext";

export default function Dashboard() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const menuItems = [
    { label: "Profile", icon: User, path: "/profile" },
    { label: "Network", icon: Users, path: "/network" },
    { label: "Events", icon: Calendar, path: "/events" },
    { label: "Messages", icon: MessageCircle, path: "/messages" },
    { label: "Jobs", icon: Briefcase, path: "/jobs" },
    { label: "Directory", icon: GraduationCap, path: "/directory" },
    { label: "News", icon: Newspaper, path: "/news" },
    { label: "Settings", icon: Settings, path: "/settings" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
              <span className="text-white text-lg font-bold">🎓</span>
            </div>
            <h1 className="text-2xl font-bold text-gray-900">Alumni Connect</h1>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <LogOut className="w-5 h-5" />
            Sign Out
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Welcome Section */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">
            Welcome back, {user?.name}! 👋
          </h2>
          <p className="text-gray-600">
            Explore opportunities and connect with fellow alumni
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {[
            {
              label: "Connections",
              value: 142,
              icon: Users,
              color: "text-blue-600",
            },
            {
              label: "Events",
              value: 5,
              icon: Calendar,
              color: "text-blue-600",
            },
            {
              label: "Jobs",
              value: 28,
              icon: Briefcase,
              color: "text-blue-600",
            },
            {
              label: "Messages",
              value: 3,
              icon: MessageCircle,
              color: "text-blue-600",
            },
          ].map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="p-6 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <Icon className={`w-6 h-6 ${stat.color} mb-3`} />
                <p className="text-gray-600 text-sm mb-1">{stat.label}</p>
                <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
              </div>
            );
          })}
        </div>

        {/* Menu Grid */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Explore</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.label}
                  onClick={() => navigate(item.path)}
                  className="group p-6 bg-white border border-gray-200 rounded-xl hover:border-blue-500 hover:shadow-md transition-all text-left"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    {item.label}
                  </h4>
                  <div className="flex items-center gap-2 text-blue-600 text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    Explore <ArrowRight className="w-4 h-4" />
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
