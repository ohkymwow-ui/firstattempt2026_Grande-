import { Link } from 'react-router-dom';
import { Home, User, Calendar, Users } from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation */}
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold text-blue-600">Alumni Network</span>
            </div>
            <div className="flex space-x-8">
              <Link to="/dashboard" className="flex items-center text-gray-700 hover:text-blue-600">
                <Home className="w-5 h-5 mr-1" />
                Dashboard
              </Link>
              <Link to="/profile" className="flex items-center text-gray-700 hover:text-blue-600">
                <User className="w-5 h-5 mr-1" />
                Profile
              </Link>
              <Link to="/events" className="flex items-center text-gray-700 hover:text-blue-600">
                <Calendar className="w-5 h-5 mr-1" />
                Events
              </Link>
              <Link to="/network" className="flex items-center text-gray-700 hover:text-blue-600">
                <Users className="w-5 h-5 mr-1" />
                Network
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-6 px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Welcome Card */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Welcome Back!</h2>
            <p className="text-gray-600">Stay connected with your alumni community.</p>
          </div>

          {/* Upcoming Events */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Upcoming Events</h2>
            <ul className="space-y-2">
              <li className="text-gray-600">• Alumni Reunion - May 15</li>
              <li className="text-gray-600">• Career Networking - June 2</li>
            </ul>
          </div>

          {/* Network Stats */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Your Network</h2>
            <p className="text-2xl font-bold text-blue-600">127</p>
            <p className="text-gray-600">Connections</p>
          </div>
        </div>
      </div>
    </div>
  );
}