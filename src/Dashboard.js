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
    {
      label: "Profile",
      icon: User,
      path: "/profile",
      color: "from-amber-600 to-orange-600",
    },
    {
      label: "Network",
      icon: Users,
      path: "/network",
      color: "from-green-600 to-teal-600",
    },
    {
      label: "Events",
      icon: Calendar,
      path: "/events",
      color: "from-purple-600 to-pink-600",
    },
    {
      label: "Messages",
      icon: MessageCircle,
      path: "/messages",
      color: "from-orange-600 to-red-600",
    },
    {
      label: "Jobs",
      icon: Briefcase,
      path: "/jobs",
      color: "from-red-600 to-rose-600",
    },
    {
      label: "Directory",
      icon: GraduationCap,
      path: "/directory",
      color: "from-pink-600 to-rose-600",
    },
    {
      label: "News",
      icon: Newspaper,
      path: "/news",
      color: "from-indigo-600 to-purple-600",
    },
    {
      label: "Settings",
      icon: Settings,
      path: "/settings",
      color: "from-slate-600 to-slate-700",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Navigation */}
      <nav className="border-b border-slate-800 bg-slate-900 sticky top-0">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center">
              <span className="text-white text-lg font-bold">🎓</span>
            </div>
            <h1 className="text-2xl font-bold text-slate-100">
              Alumni Connect
            </h1>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 text-slate-300 hover:bg-slate-800 rounded-lg transition-colors"
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
          <h2 className="text-4xl font-bold text-slate-100 mb-2">
            Welcome back, {user?.name}! 👋
          </h2>
          <p className="text-slate-400">
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
              color: "text-green-500",
              bg: "bg-green-500/10 border-green-500/30",
            },
            {
              label: "Events",
              value: 5,
              icon: Calendar,
              color: "text-purple-500",
              bg: "bg-purple-500/10 border-purple-500/30",
            },
            {
              label: "Jobs",
              value: 28,
              icon: Briefcase,
              color: "text-red-500",
              bg: "bg-red-500/10 border-red-500/30",
            },
            {
              label: "Messages",
              value: 3,
              icon: MessageCircle,
              color: "text-orange-500",
              bg: "bg-orange-500/10 border-orange-500/30",
            },
          ].map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className={`p-6 ${stat.bg} rounded-lg border`}>
                <Icon className={`w-6 h-6 ${stat.color} mb-3`} />
                <p className="text-slate-400 text-sm mb-1">{stat.label}</p>
                <p className="text-3xl font-bold text-slate-100">
                  {stat.value}
                </p>
              </div>
            );
          })}
        </div>

        {/* Menu Grid */}
        <div>
          <h3 className="text-lg font-semibold text-slate-200 mb-6">Explore</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.label}
                  onClick={() => navigate(item.path)}
                  className="group p-6 bg-slate-800 border border-slate-700 rounded-lg hover:border-amber-500/50 hover:bg-slate-700 transition-all text-left"
                >
                  <div
                    className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-slate-100 mb-1">
                    {item.label}
                  </h4>
                  <div className="flex items-center gap-2 text-amber-500 text-sm opacity-0 group-hover:opacity-100 transition-opacity">
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
