import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Settings, Bell, Mail as MailIcon } from "lucide-react";

export default function SettingsPage() {
  const navigate = useNavigate();
  const [settings, setSettings] = useState({
    notifications: true,
    newsletter: false,
    privacy: "public",
  });
  const [saved, setSaved] = useState(false);

  const handleToggle = (key) => {
    setSettings((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
    setSaved(false);
  };

  const handleSaveSettings = () => {
    // Simulate API call
    setTimeout(() => {
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <button
        onClick={() => navigate("/dashboard")}
        className="flex items-center gap-2 text-blue-600 mb-8 hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-2 py-1"
        aria-label="Back to dashboard"
      >
        <ArrowLeft className="w-5 h-5" /> Back
      </button>

      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-2">
          <Settings className="w-8 h-8" /> Settings
        </h1>

        {saved && (
          <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
            <p className="text-green-700 font-medium">
              Settings saved successfully!
            </p>
          </div>
        )}

        <div className="space-y-6">
          {/* Email Notifications */}
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center gap-3">
              <Bell className="w-5 h-5 text-gray-600" />
              <div>
                <label className="text-gray-900 font-semibold block">
                  Email Notifications
                </label>
                <p className="text-gray-600 text-sm">
                  Receive notifications about events and updates
                </p>
              </div>
            </div>
            <input
              type="checkbox"
              checked={settings.notifications}
              onChange={() => handleToggle("notifications")}
              className="w-6 h-6 cursor-pointer"
              aria-label="Email notifications toggle"
            />
          </div>

          {/* Newsletter */}
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center gap-3">
              <MailIcon className="w-5 h-5 text-gray-600" />
              <div>
                <label className="text-gray-900 font-semibold block">
                  Subscribe to Newsletter
                </label>
                <p className="text-gray-600 text-sm">
                  Get weekly alumni news and opportunities
                </p>
              </div>
            </div>
            <input
              type="checkbox"
              checked={settings.newsletter}
              onChange={() => handleToggle("newsletter")}
              className="w-6 h-6 cursor-pointer"
              aria-label="Newsletter toggle"
            />
          </div>

          {/* Privacy */}
          <div className="p-4 bg-gray-50 rounded-lg">
            <label className="text-gray-900 font-semibold block mb-3">
              Profile Privacy
            </label>
            <select
              value={settings.privacy}
              onChange={(e) => {
                setSettings((prev) => ({ ...prev, privacy: e.target.value }));
                setSaved(false);
              }}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="public">Public</option>
              <option value="private">Private</option>
              <option value="alumni-only">Alumni Only</option>
            </select>
          </div>

          {/* Save Button */}
          <button
            onClick={handleSaveSettings}
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Save Settings
          </button>
        </div>
      </div>
    </div>
  );
}
