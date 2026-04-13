import { Link } from 'react-router-dom';
import { Home, User, Calendar, Users, MessageCircle, UserPlus } from 'lucide-react';

export default function Network() {
  const connections = [
    {
      id: 1,
      name: 'John Smith',
      graduationYear: 2019,
      position: 'Product Manager',
      company: 'Startup Inc.',
      avatar: '👨‍💼'
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      graduationYear: 2021,
      position: 'UX Designer',
      company: 'Design Studio',
      avatar: '👩‍🎨'
    },
    {
      id: 3,
      name: 'Mike Chen',
      graduationYear: 2018,
      position: 'Data Scientist',
      company: 'Tech Corp',
      avatar: '👨‍🔬'
    },
    {
      id: 4,
      name: 'Emily Davis',
      graduationYear: 2022,
      position: 'Marketing Specialist',
      company: 'Global Marketing',
      avatar: '👩‍💼'
    }
  ];

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
              <Link to="/network" className="flex items-center text-blue-600">
                <Users className="w-5 h-5 mr-1" />
                Network
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-6 px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">My Network</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {connections.map(connection => (
            <div key={connection.id} className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                  <span className="text-2xl">{connection.avatar}</span>
                </div>
                <div>
                  <h2 className="text-xl font-semibold">{connection.name}</h2>
                  <p className="text-gray-600">Class of {connection.graduationYear}</p>
                </div>
              </div>
              <div className="mb-4">
                <p className="text-gray-700 font-medium">{connection.position}</p>
                <p className="text-gray-600">{connection.company}</p>
              </div>
              <div className="flex space-x-2">
                <button className="flex-1 flex items-center justify-center bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Message
                </button>
                <button className="flex-1 flex items-center justify-center bg-gray-200 text-gray-700 py-2 rounded-lg hover:bg-gray-300">
                  <UserPlus className="w-4 h-4 mr-2" />
                  Connect
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}