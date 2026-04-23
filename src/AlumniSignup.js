import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Mail, Lock, Eye, EyeOff, ArrowLeft, CheckCircle } from "lucide-react";
import { useAuth } from "./AuthContext";

export default function AlumniSignup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { signup } = useAuth();

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    if (!email || !password || !confirmPassword) {
      setError("Please fill in all fields");
      setIsLoading(false);
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      setIsLoading(false);
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      setIsLoading(false);
      return;
    }

    try {
      const result = await signup(email, password);
      if (result?.success) {
        navigate("/dashboard");
      } else {
        setError(result?.message || "Signup failed");
      }
    } catch (err) {
      setError("An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4">
        <button
          onClick={() => navigate("/")}
          className="p-2 hover:bg-slate-800 rounded-lg transition-colors"
        >
          <ArrowLeft className="w-5 h-5 text-slate-300" />
        </button>
        <h1 className="text-xl font-bold text-slate-100">Alumni Connect</h1>
        <div className="w-9" />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-4">
        <div className="w-full max-w-md">
          {/* Logo Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-slate-800 rounded-2xl mb-6 ring-1 ring-slate-700">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center">
                <span className="text-white text-lg font-bold">🎓</span>
              </div>
            </div>
            <h2 className="text-3xl font-bold text-slate-100 mb-3">
              Join Alumni Connect
            </h2>
            <p className="text-slate-400 text-sm">
              Create your account to connect with fellow alumni
            </p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-6 p-4 bg-red-950 border border-red-900 rounded-lg">
              <p className="text-red-300 text-sm">{error}</p>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSignup} className="space-y-5">
            {/* Email Field */}
            <div>
              <label className="block text-sm font-semibold text-slate-200 mb-2">
                University Email
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="jane.doe@university.edu"
                  className="w-full pl-12 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-slate-100 placeholder-slate-500 focus:bg-slate-800 focus:border-amber-500 focus:outline-none transition-colors"
                  disabled={isLoading}
                />
                {email && (
                  <CheckCircle className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-green-500" />
                )}
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-sm font-semibold text-slate-200 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-12 pr-12 py-3 bg-slate-800 border border-slate-700 rounded-lg text-slate-100 placeholder-slate-500 focus:bg-slate-800 focus:border-amber-500 focus:outline-none transition-colors"
                  disabled={isLoading}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-slate-700 rounded transition-colors"
                  disabled={isLoading}
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5 text-slate-500" />
                  ) : (
                    <Eye className="w-5 h-5 text-slate-500" />
                  )}
                </button>
              </div>
            </div>

            {/* Confirm Password Field */}
            <div>
              <label className="block text-sm font-semibold text-slate-200 mb-2">
                Confirm Password
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-12 pr-12 py-3 bg-slate-800 border border-slate-700 rounded-lg text-slate-100 placeholder-slate-500 focus:bg-slate-800 focus:border-amber-500 focus:outline-none transition-colors"
                  disabled={isLoading}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-slate-700 rounded transition-colors"
                  disabled={isLoading}
                >
                  {showConfirmPassword ? (
                    <EyeOff className="w-5 h-5 text-slate-500" />
                  ) : (
                    <Eye className="w-5 h-5 text-slate-500" />
                  )}
                </button>
              </div>
            </div>

            {/* Sign Up Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-amber-600 hover:bg-amber-500 disabled:bg-amber-700 text-white font-semibold py-3 rounded-lg transition-colors flex items-center justify-center gap-2 mt-8"
            >
              {isLoading ? "Creating Account..." : "Create Account"}
              {!isLoading && <span>→</span>}
            </button>
          </form>

          {/* Login Link */}
          <div className="mt-8 pt-6 border-t border-slate-800 text-center">
            <p className="text-slate-400 text-sm">
              Already have an account?{" "}
              <Link
                to="/"
                className="text-amber-500 font-semibold hover:text-amber-400 transition-colors"
              >
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
