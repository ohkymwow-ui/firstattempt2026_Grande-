import { Link } from 'react-router-dom';
import { Home, User, Calendar, Users, Edit } from 'lucide-react';

export default function Profile() {
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
              <Link to="/profile" className="flex items-center text-blue-600">
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
      <div className="max-w-4xl mx-auto py-6 px-4">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-gray-900">My Profile</h1>
            <button className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              <Edit className="w-4 h-4 mr-2" />
              Edit Profile
            </button>
          </div>

          <div className="flex flex-col md:flex-row">
            {/* Profile Picture */}
            <div className="md:w-1/3 mb-6 md:mb-0">
              <div className="w-32 h-32 rounded-full bg-blue-100 flex items-center justify-center mx-auto">
                <span className="text-4xl">👤</span>
              </div>
            </div>

            {/* Profile Info */}
            <div className="md:w-2/3 md:pl-6">
              <h2 className="text-2xl font-semibold mb-4">Jane Doe</h2>
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Graduation Year</label>
                  <p className="text-gray-900">2020</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Degree</label>
                  <p className="text-gray-900">Bachelor of Science in Computer Science</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Current Position</label>
                  <p className="text-gray-900">Software Engineer at Tech Corp</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Location</label>
                  <p className="text-gray-900">San Francisco, CA</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <p className="text-gray-900">jane.doe@university.edu</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}