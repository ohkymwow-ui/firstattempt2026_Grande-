import { Link } from 'react-router-dom';
import { Home, User, Calendar, Users } from 'lucide-react';

export default function Events() {
  const events = [
    {
      id: 1,
      title: 'Alumni Reunion 2026',
      date: 'May 15, 2026',
      time: '6:00 PM',
      location: 'University Campus',
      description: 'Join us for the annual alumni reunion celebration.'
    },
    {
      id: 2,
      title: 'Career Networking Mixer',
      date: 'June 2, 2026',
      time: '7:00 PM',
      location: 'Downtown Conference Center',
      description: 'Connect with fellow alumni and explore career opportunities.'
    },
    {
      id: 3,
      title: 'Homecoming Weekend',
      date: 'October 10, 2026',
      time: 'All Day',
      location: 'University Campus',
      description: 'Celebrate homecoming with games, parades, and festivities.'
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
              <Link to="/events" className="flex items-center text-blue-600">
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
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Upcoming Events</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map(event => (
            <div key={event.id} className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center mb-4">
                <Calendar className="w-6 h-6 text-blue-600 mr-2" />
                <h2 className="text-xl font-semibold">{event.title}</h2>
              </div>
              <div className="space-y-2 mb-4">
                <p className="text-gray-600"><strong>Date:</strong> {event.date}</p>
                <p className="text-gray-600"><strong>Time:</strong> {event.time}</p>
                <p className="text-gray-600"><strong>Location:</strong> {event.location}</p>
              </div>
              <p className="text-gray-700 mb-4">{event.description}</p>
              <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
                RSVP
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}