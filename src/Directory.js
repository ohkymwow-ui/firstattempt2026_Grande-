import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  Home,
  User,
  Calendar,
  Users,
  LogOut,
  MessageCircle,
  Briefcase,
  GraduationCap,
  Newspaper,
  Settings,
  Search,
  Filter,
  MapPin,
  Mail,
  Phone,
  MessageSquare,
  UserPlus,
  Star,
  Award,
  BookOpen,
} from "lucide-react";

import { useAuth } from "./AuthContext";

export default function Directory() {
  const { logout } = useAuth();

  const [searchTerm, setSearchTerm] = useState("");
  const [yearFilter, setYearFilter] = useState("All");
  const [locationFilter, setLocationFilter] = useState("");
  const [industryFilter, setIndustryFilter] = useState("All");

  const alumni = [
    {
      id: 1,
      name: "Sarah Johnson",
      graduationYear: 2020,
      degree: "Computer Science",
      position: "Senior Software Engineer",
      company: "Tech Corp",
      location: "San Francisco, CA",
      industry: "Technology",
      avatar: "👩‍💼",
      bio: "Passionate about building scalable web applications and mentoring junior developers.",
      skills: ["React", "Node.js", "Python", "AWS"],
      email: "sarah.johnson@email.com",
      linkedin: "linkedin.com/in/sarahjohnson",
      isVerified: true,
      connections: 127,
    },
    {
      id: 2,
      name: "Mike Chen",
      graduationYear: 2019,
      degree: "Business Administration",
      position: "Product Manager",
      company: "Startup Inc.",
      location: "New York, NY",
      industry: "Technology",
      avatar: "👨‍💼",
      bio: "Product leader with a passion for user-centered design and data-driven decision making.",
      skills: ["Product Strategy", "Analytics", "UX Design", "Agile"],
      email: "mike.chen@email.com",
      linkedin: "linkedin.com/in/mikechen",
      isVerified: true,
      connections: 89,
    },
    {
      id: 3,
      name: "Dr. Emily Rodriguez",
      graduationYear: 2015,
      degree: "Computer Science",
      position: "Professor",
      company: "University",
      location: "Campus",
      industry: "Education",
      avatar: "👩‍🏫",
      bio: "Computer Science professor researching AI ethics and human-computer interaction.",
      skills: ["AI Ethics", "Machine Learning", "Teaching", "Research"],
      email: "emily.rodriguez@university.edu",
      linkedin: "linkedin.com/in/emilyrodriguez",
      isVerified: true,
      connections: 203,
    },
    {
      id: 4,
      name: "Alex Thompson",
      graduationYear: 2021,
      degree: "Design",
      position: "UX Designer",
      company: "Design Studio",
      location: "Los Angeles, CA",
      industry: "Design",
      avatar: "👨‍🎨",
      bio: "Creative UX designer focused on crafting intuitive and accessible user experiences.",
      skills: ["Figma", "Adobe XD", "Prototyping", "User Research"],
      email: "alex.thompson@email.com",
      linkedin: "linkedin.com/in/alexthompson",
      isVerified: false,
      connections: 67,
    },
    {
      id: 5,
      name: "Lisa Park",
      graduationYear: 2018,
      degree: "Marketing",
      position: "Marketing Director",
      company: "Global Corp",
      location: "Chicago, IL",
      industry: "Marketing",
      avatar: "👩‍💼",
      bio: "Marketing leader driving brand strategy and digital transformation initiatives.",
      skills: ["Digital Marketing", "Brand Strategy", "SEO", "Analytics"],
      email: "lisa.park@email.com",
      linkedin: "linkedin.com/in/lisapark",
      isVerified: true,
      connections: 145,
    },
    {
      id: 6,
      name: "David Kim",
      graduationYear: 2022,
      degree: "Finance",
      position: "Financial Analyst",
      company: "Investment Bank",
      location: "Boston, MA",
      industry: "Finance",
      avatar: "👨‍💼",
      bio: "Financial analyst specializing in investment analysis and portfolio management.",
      skills: ["Financial Modeling", "Excel", "Python", "Risk Analysis"],
      email: "david.kim@email.com",
      linkedin: "linkedin.com/in/davidkim",
      isVerified: false,
      connections: 43,
    },
    {
      id: 7,
      name: "Rachel Green",
      graduationYear: 2017,
      degree: "Engineering",
      position: "Civil Engineer",
      company: "Engineering Firm",
      location: "Seattle, WA",
      industry: "Engineering",
      avatar: "👩‍🔧",
      bio: "Civil engineer passionate about sustainable infrastructure and urban planning.",
      skills: [
        "AutoCAD",
        "Project Management",
        "Sustainability",
        "Urban Planning",
      ],
      email: "rachel.green@email.com",
      linkedin: "linkedin.com/in/rachelgreen",
      isVerified: true,
      connections: 98,
    },
    {
      id: 8,
      name: "James Wilson",
      graduationYear: 2016,
      degree: "Law",
      position: "Attorney",
      company: "Law Firm",
      location: "Washington, DC",
      industry: "Legal",
      avatar: "👨‍⚖️",
      bio: "Corporate attorney specializing in technology law and intellectual property.",
      skills: [
        "Corporate Law",
        "IP Law",
        "Contract Negotiation",
        "Legal Research",
      ],
      email: "james.wilson@email.com",
      linkedin: "linkedin.com/in/jameswilson",
      isVerified: true,
      connections: 156,
    },
  ];

  const graduationYears = [
    "All",
    ...Array.from(new Set(alumni.map((person) => person.graduationYear))).sort(
      (a, b) => b - a,
    ),
  ];
  const industries = [
    "All",
    ...Array.from(new Set(alumni.map((person) => person.industry))),
  ];

  const filteredAlumni = alumni.filter((person) => {
    const matchesSearch =
      person.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      person.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
      person.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      person.degree.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesYear =
      yearFilter === "All" || person.graduationYear === parseInt(yearFilter);
    const matchesLocation =
      !locationFilter ||
      person.location.toLowerCase().includes(locationFilter.toLowerCase());
    const matchesIndustry =
      industryFilter === "All" || person.industry === industryFilter;

    return matchesSearch && matchesYear && matchesLocation && matchesIndustry;
  });

  const handleConnect = (alumniId) => {
    alert(
      `Connection request sent to ${alumni.find((a) => a.id === alumniId)?.name}!`,
    );
  };

  const handleMessage = (alumniId) => {
    alert(
      `Starting conversation with ${alumni.find((a) => a.id === alumniId)?.name}...`,
    );
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation */}
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold text-blue-600">
                Alumni Network
              </span>
            </div>
            <div className="flex items-center space-x-8">
              <Link
                to="/dashboard"
                className="flex items-center text-gray-700 hover:text-blue-600"
              >
                <Home className="w-5 h-5 mr-1" />
                Dashboard
              </Link>
              <Link
                to="/profile"
                className="flex items-center text-gray-700 hover:text-blue-600"
              >
                <User className="w-5 h-5 mr-1" />
                Profile
              </Link>
              <Link
                to="/events"
                className="flex items-center text-gray-700 hover:text-blue-600"
              >
                <Calendar className="w-5 h-5 mr-1" />
                Events
              </Link>
              <Link
                to="/network"
                className="flex items-center text-gray-700 hover:text-blue-600"
              >
                <Users className="w-5 h-5 mr-1" />
                Network
              </Link>
              <Link
                to="/messages"
                className="flex items-center text-gray-700 hover:text-blue-600"
              >
                <MessageCircle className="w-5 h-5 mr-1" />
                Messages
              </Link>
              <Link
                to="/jobs"
                className="flex items-center text-gray-700 hover:text-blue-600"
              >
                <Briefcase className="w-5 h-5 mr-1" />
                Jobs
              </Link>
              <Link to="/directory" className="flex items-center text-blue-600">
                <GraduationCap className="w-5 h-5 mr-1" />
                Directory
              </Link>
              <Link
                to="/news"
                className="flex items-center text-gray-700 hover:text-blue-600"
              >
                <Newspaper className="w-5 h-5 mr-1" />
                News
              </Link>
              <Link
                to="/settings"
                className="flex items-center text-gray-700 hover:text-blue-600"
              >
                <Settings className="w-5 h-5 mr-1" />
                Settings
              </Link>
              <button
                onClick={logout}
                className="flex items-center text-gray-700 hover:text-red-600"
              >
                <LogOut className="w-5 h-5 mr-1" />
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-6 px-4">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Alumni Directory</h1>
          <p className="text-gray-600 mt-1">
            Connect with fellow alumni from our community
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-xl shadow p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search alumni..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <select
              value={yearFilter}
              onChange={(e) => setYearFilter(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {graduationYears.map((year) => (
                <option key={year} value={year}>
                  {year === "All" ? "All Years" : `Class of ${year}`}
                </option>
              ))}
            </select>
            <div className="relative">
              <MapPin className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Location"
                value={locationFilter}
                onChange={(e) => setLocationFilter(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <select
              value={industryFilter}
              onChange={(e) => setIndustryFilter(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {industries.map((industry) => (
                <option key={industry} value={industry}>
                  {industry}
                </option>
              ))}
            </select>
            <button className="bg-gray-100 text-gray-700 px-4 py-3 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center gap-2">
              <Filter className="w-5 h-5" />
              More Filters
            </button>
          </div>
        </div>

        {/* Alumni Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAlumni.map((person) => (
            <div
              key={person.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 text-white">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <span className="text-3xl">{person.avatar}</span>
                    <div>
                      <h3 className="font-bold text-lg">{person.name}</h3>
                      <p className="text-blue-100 text-sm">
                        Class of {person.graduationYear} • {person.degree}
                      </p>
                    </div>
                  </div>
                  {person.isVerified && (
                    <div className="flex items-center">
                      <Star className="w-5 h-5 text-yellow-300" />
                    </div>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                {/* Position & Company */}
                <div className="mb-3">
                  <h4 className="font-semibold text-gray-900">
                    {person.position}
                  </h4>
                  <p className="text-gray-600 text-sm">{person.company}</p>
                </div>

                {/* Location */}
                <div className="flex items-center text-sm text-gray-600 mb-3">
                  <MapPin className="w-4 h-4 mr-1" />
                  {person.location}
                </div>

                {/* Bio */}
                <p className="text-gray-700 text-sm mb-4 line-clamp-2">
                  {person.bio}
                </p>

                {/* Skills */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {person.skills.slice(0, 3).map((skill, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                    {person.skills.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                        +{person.skills.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                  <span>{person.connections} connections</span>
                  <span className="text-blue-600">{person.industry}</span>
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <button
                    onClick={() => handleConnect(person.id)}
                    className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                  >
                    <UserPlus className="w-4 h-4" />
                    Connect
                  </button>
                  <button
                    onClick={() => handleMessage(person.id)}
                    className="flex-1 bg-gray-100 text-gray-700 py-2 px-4 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4" />
                    Message
                  </button>
                </div>

                {/* Contact Info */}
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center text-gray-600">
                      <Mail className="w-4 h-4 mr-1" />
                      <span className="truncate">{person.email}</span>
                    </div>
                    {person.linkedin && (
                      <a
                        href={`https://${person.linkedin}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800"
                      >
                        LinkedIn
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredAlumni.length === 0 && (
          <div className="text-center py-12">
            <Users className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              No alumni found
            </h3>
            <p className="text-gray-500">Try adjusting your search criteria</p>
          </div>
        )}

        {/* Directory Stats */}
        <div className="mt-8 bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Directory Statistics
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">
                {alumni.length}
              </div>
              <div className="text-sm text-gray-600">Total Alumni</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">
                {alumni.filter((p) => p.isVerified).length}
              </div>
              <div className="text-sm text-gray-600">Verified Profiles</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">
                {industries.length - 1}
              </div>
              <div className="text-sm text-gray-600">Industries</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600">
                {graduationYears.length - 1}
              </div>
              <div className="text-sm text-gray-600">Graduation Years</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
