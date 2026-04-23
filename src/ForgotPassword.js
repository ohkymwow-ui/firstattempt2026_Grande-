import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Mail, ArrowLeft, CheckCircle } from "lucide-react";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setSubmitted(true);
      setIsLoading(false);
    }, 500);
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
              <Mail className="w-10 h-10 text-amber-500" />
            </div>
            <h2 className="text-3xl font-bold text-slate-100 mb-3">
              Reset Password
            </h2>
            <p className="text-slate-400 text-sm">
              Enter your email address and we'll send you a link to reset your
              password.
            </p>
          </div>

          {submitted ? (
            <div className="p-6 bg-slate-800 border border-slate-700 rounded-lg text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-green-950 rounded-full mb-4 ring-1 ring-green-900">
                <CheckCircle className="w-6 h-6 text-green-500" />
              </div>
              <h3 className="text-lg font-semibold text-slate-100 mb-2">
                Check your email
              </h3>
              <p className="text-slate-400 text-sm mb-6">
                We've sent a password reset link to your email address.
              </p>
              <button
                onClick={() => navigate("/")}
                className="text-amber-500 font-medium hover:text-amber-400 transition-colors"
              >
                Back to Sign In
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
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
                    required
                    disabled={isLoading}
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-amber-600 hover:bg-amber-500 disabled:bg-amber-700 text-white font-semibold py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                {isLoading ? "Sending..." : "Send Reset Link"}
              </button>
            </form>
          )}

          {/* Back to Login */}
          <div className="mt-8 pt-6 border-t border-slate-800 text-center">
            <button
              onClick={() => navigate("/")}
              className="text-slate-400 hover:text-slate-300 text-sm font-medium transition-colors"
            >
              ← Back to Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
