import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Mail, Briefcase, Building, Calendar } from "lucide-react";
import { useAuth } from "./AuthContext";

export default function Profile() {
  const navigate = useNavigate();
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Header */}
      <div className="bg-slate-900 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center gap-4">
          <button
            onClick={() => navigate("/dashboard")}
            className="p-2 hover:bg-slate-800 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-slate-300" />
          </button>
          <h1 className="text-2xl font-bold text-slate-100">Profile</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="bg-slate-800 rounded-lg border border-slate-700 overflow-hidden">
          {/* Profile Header */}
          <div className="h-32 bg-gradient-to-r from-amber-600 to-orange-600" />

          {/* Profile Info */}
          <div className="px-8 py-8 -mt-16 relative">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              {/* Avatar */}
              <div className="text-6xl">{user?.avatar || "👤"}</div>

              {/* Details */}
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-slate-100 mb-2">
                  {user?.name}
                </h2>
                <p className="text-lg text-amber-500 font-semibold mb-6">
                  {user?.position} at {user?.company}
                </p>

                {/* Info Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-amber-500/60 mt-1" />
                    <div>
                      <p className="text-sm text-slate-400">Email</p>
                      <p className="text-slate-100 font-medium">
                        {user?.email}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Briefcase className="w-5 h-5 text-amber-500/60 mt-1" />
                    <div>
                      <p className="text-sm text-slate-400">Position</p>
                      <p className="text-slate-100 font-medium">
                        {user?.position}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Building className="w-5 h-5 text-amber-500/60 mt-1" />
                    <div>
                      <p className="text-sm text-slate-400">Company</p>
                      <p className="text-slate-100 font-medium">
                        {user?.company}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-amber-500/60 mt-1" />
                    <div>
                      <p className="text-sm text-slate-400">Graduation Year</p>
                      <p className="text-slate-100 font-medium">
                        {user?.graduationYear}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bio */}
                {user?.bio && (
                  <div>
                    <h3 className="text-sm font-semibold text-slate-200 mb-2">
                      About
                    </h3>
                    <p className="text-slate-300">{user.bio}</p>
                  </div>
                )}
              </div>

              {/* Connections */}
              <div className="bg-slate-700 rounded-lg p-6 md:w-48">
                <p className="text-sm text-slate-400 mb-2">Connections</p>
                <p className="text-3xl font-bold text-amber-500">
                  {user?.connections}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
