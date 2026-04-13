import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";

export default function AlumniLogin() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    // Simulate login
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-[350px] rounded-2xl shadow-lg p-6 text-center bg-white">
        <div className="space-y-6">
          {/* Header */}
          <div className="flex flex-col items-center gap-3">
            <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center shadow">
              <span className="text-3xl">🎓</span>
            </div>
            <h1 className="text-2xl font-bold">Welcome Back</h1>
            <p className="text-sm text-gray-500">
              Sign in to access your exclusive alumni network and events.
            </p>
          </div>

          {/* Email */}
          <div className="text-left">
            <label className="text-sm font-medium">University Email</label>
            <div className="flex items-center gap-2 border rounded-xl px-3 py-2 mt-1 bg-gray-50">
              <Mail className="w-4 h-4 text-gray-400" />
              <input
                type="email"
                placeholder="jane.doe@university.edu"
                className="border-none focus:outline-none bg-transparent flex-1"
              />
            </div>
          </div>

          {/* Password */}
          <div className="text-left">
            <label className="text-sm font-medium">Password</label>
            <div className="flex items-center gap-2 border rounded-xl px-3 py-2 mt-1 bg-gray-50">
              <Lock className="w-4 h-4 text-gray-400" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                className="border-none focus:outline-none bg-transparent flex-1"
              />
              <button onClick={() => setShowPassword(!showPassword)} className="focus:outline-none">
                {showPassword ? (
                  <EyeOff className="w-4 h-4 text-gray-400" />
                ) : (
                  <Eye className="w-4 h-4 text-gray-400" />
                )}
              </button>
            </div>
          </div>

          {/* Forgot Password */}
          <div className="text-right">
            <a href="#" className="text-sm text-blue-600">
              Forgot Password?
            </a>
          </div>

          {/* Button */}
          <button onClick={handleLogin} className="w-full rounded-xl bg-blue-700 hover:bg-blue-800 text-white py-2">
            Sign In →
          </button>

          {/* Register */}
          <p className="text-sm text-gray-500">
            Don’t have an account?{" "}
            <a href="#" className="text-blue-600 font-medium">
              Register
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
