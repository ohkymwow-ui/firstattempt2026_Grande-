import React, { useState, useEffect } from "react";
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
  Clock,
  DollarSign,
  Bookmark,
  CheckCircle2,
  ExternalLink,
  Plus,
  Building,
  Star,
} from "lucide-react";

import { useAuth } from "./AuthContext";

export default function Jobs() {
  const [searchTerm, setSearchTerm] = useState("");

  const [locationFilter, setLocationFilter] = useState("");

  const [typeFilter, setTypeFilter] = useState("All");

  const [savedJobs, setSavedJobs] = useState([]);

  const [appliedJobs, setAppliedJobs] = useState([]);

  const [showCreateForm, setShowCreateForm] = useState(false);

  const [newJob, setNewJob] = useState({
    title: "",

    company: "",

    location: "",

    type: "Full-time",

    salary: "",

    description: "",

    requirements: "",

    benefits: "",
  });

  useEffect(() => {
    // Load saved and applied jobs from localStorage

    const saved = localStorage.getItem("savedJobs");

    const applied = localStorage.getItem("appliedJobs");

    if (saved) setSavedJobs(JSON.parse(saved));

    if (applied) setAppliedJobs(JSON.parse(applied));
  }, []);

  const jobs = [
    {
      id: 1,

      title: "Senior Software Engineer",

      company: "Tech Corp",

      location: "San Francisco, CA",

      type: "Full-time",

      salary: "$120,000 - $160,000",

      postedDate: "2026-04-15",

      description:
        "We are looking for a Senior Software Engineer to join our dynamic team. You will be responsible for designing, developing, and maintaining high-quality software solutions.",

      requirements: "5+ years of experience, React, Node.js, AWS",

      benefits: "Health insurance, 401k matching, flexible hours",

      logo: "🢒",

      isRemote: false,

      applicants: 23,

      featured: true,
    },

    {
      id: 2,

      title: "Product Manager",

      company: "Startup Inc.",

      location: "New York, NY",

      type: "Full-time",

      salary: "$100,000 - $130,000",

      postedDate: "2026-04-14",

      description:
        "Join our fast-growing startup as a Product Manager. You will drive product strategy, work closely with engineering teams, and deliver exceptional user experiences.",

      requirements: "3+ years PM experience, analytics skills, leadership",

      benefits: "Equity package, health benefits, unlimited PTO",

      logo: "🚀",

      isRemote: true,

      applicants: 45,

      featured: true,
    },

    {
      id: 3,

      title: "UX Designer",

      company: "Design Studio",

      location: "Remote",

      type: "Contract",

      salary: "$80,000 - $100,000",

      postedDate: "2026-04-13",

      description:
        "We are seeking a talented UX Designer to create intuitive and beautiful user experiences. You will work on diverse projects for our clients.",

      requirements: "3+ years UX design, Figma, user research",

      benefits: "Flexible schedule, creative freedom, project variety",

      logo: "🎨",

      isRemote: true,

      applicants: 12,

      featured: false,
    },

    {
      id: 4,

      title: "Data Scientist",

      company: "Analytics Pro",

      location: "Austin, TX",

      type: "Full-time",

      salary: "$110,000 - $140,000",

      postedDate: "2026-04-12",

      description:
        "Looking for a Data Scientist to analyze complex datasets and build predictive models. You will work with cutting-edge ML technologies.",

      requirements: "PhD in relevant field, Python, ML expertise, statistics",

      benefits: "Research budget, conference attendance, top-tier equipment",

      logo: "📊",

      isRemote: false,

      applicants: 18,

      featured: false,
    },

    {
      id: 5,

      title: "Marketing Manager",

      company: "Growth Co",

      location: "Chicago, IL",

      type: "Full-time",

      salary: "$90,000 - $120,000",

      postedDate: "2026-04-11",

      description:
        "Drive marketing strategies and campaigns for our B2B SaaS product. You will manage a team and work closely with sales and product teams.",

      requirements: "5+ years marketing, B2B experience, analytics",

      benefits: "Performance bonuses, professional development, team events",

      logo: "📈",

      isRemote: false,

      applicants: 31,

      featured: false,
    },

    {
      id: 6,

      title: "DevOps Engineer",

      company: "Cloud Systems",

      location: "Seattle, WA",

      type: "Full-time",

      salary: "$115,000 - $145,000",

      postedDate: "2026-04-10",

      description:
        "Build and maintain our cloud infrastructure. You will work with Kubernetes, Docker, and implement CI/CD pipelines.",

      requirements: "4+ years DevOps, Kubernetes, AWS/Azure, scripting",

      benefits:
        "Cloud certifications paid, flexible remote work, learning budget",

      logo: "☁️",

      isRemote: true,

      applicants: 27,

      featured: false,
    },
  ];

  const jobTypes = [
    "All",
    "Full-time",
    "Part-time",
    "Contract",
    "Internship",
    "Freelance",
  ];

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.description.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesLocation =
      !locationFilter ||
      job.location.toLowerCase().includes(locationFilter.toLowerCase());

    const matchesType = typeFilter === "All" || job.type === typeFilter;

    return matchesSearch && matchesLocation && matchesType;
  });

  const handleSaveJob = (jobId) => {
    const newSaved = [...savedJobs];

    const index = newSaved.indexOf(jobId);

    if (index > -1) {
      newSaved.splice(index, 1);
    } else {
      newSaved.push(jobId);
    }

    setSavedJobs(newSaved);

    localStorage.setItem("savedJobs", JSON.stringify(newSaved));
  };

  const handleApplyJob = (jobId) => {
    if (!appliedJobs.includes(jobId)) {
      const newApplied = [...appliedJobs, jobId];

      setAppliedJobs(newApplied);

      localStorage.setItem("appliedJobs", JSON.stringify(newApplied));
    }
  };

  const isSaved = (jobId) => savedJobs.includes(jobId);

  const isApplied = (jobId) => appliedJobs.includes(jobId);

  const handleCreateJob = () => {
    // In a real app, this would save to a database

    console.log("Creating job:", newJob);

    setShowCreateForm(false);

    setNewJob({
      title: "",

      company: "",

      location: "",

      type: "Full-time",

      salary: "",

      description: "",

      requirements: "",

      benefits: "",
    });
  };

  const getDaysSincePosted = (postedDate) => {
    const posted = new Date(postedDate);

    const now = new Date();

    const diffTime = Math.abs(now - posted);

    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    return diffDays === 1 ? "1 day ago" : `${diffDays} days ago`;
  };

  const { logout } = useAuth();

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

              <Link to="/jobs" className="flex items-center text-blue-600">
                <Briefcase className="w-5 h-5 mr-1" />
                Jobs
              </Link>

              <Link
                to="/directory"
                className="flex items-center text-gray-700 hover:text-blue-600"
              >
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

        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Job Opportunities
            </h1>

            <p className="text-gray-600 mt-1">
              Find your next career opportunity
            </p>
          </div>

          <button
            onClick={() => setShowCreateForm(true)}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex items-center gap-2"
          >
            <Plus className="w-5 h-5" />
            Post a Job
          </button>
        </div>

        {/* Search and Filters */}

        <div className="bg-white rounded-xl shadow p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />

              <input
                type="text"
                placeholder="Search jobs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

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
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {jobTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>

            <button className="bg-gray-100 text-gray-700 px-4 py-3 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center gap-2">
              <Filter className="w-5 h-5" />
              More Filters
            </button>
          </div>
        </div>

        {/* Create Job Modal */}

        {showCreateForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">
                    Post a New Job
                  </h2>

                  <button
                    onClick={() => setShowCreateForm(false)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    ×
                  </button>
                </div>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleCreateJob();
                  }}
                  className="space-y-4"
                >
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Job Title
                      </label>

                      <input
                        type="text"
                        value={newJob.title}
                        onChange={(e) =>
                          setNewJob({ ...newJob, title: e.target.value })
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Company
                      </label>

                      <input
                        type="text"
                        value={newJob.company}
                        onChange={(e) =>
                          setNewJob({ ...newJob, company: e.target.value })
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Location
                      </label>

                      <input
                        type="text"
                        value={newJob.location}
                        onChange={(e) =>
                          setNewJob({ ...newJob, location: e.target.value })
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Job Type
                      </label>

                      <select
                        value={newJob.type}
                        onChange={(e) =>
                          setNewJob({ ...newJob, type: e.target.value })
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        {jobTypes
                          .filter((type) => type !== "All")
                          .map((type) => (
                            <option key={type} value={type}>
                              {type}
                            </option>
                          ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Salary Range
                    </label>

                    <input
                      type="text"
                      value={newJob.salary}
                      onChange={(e) =>
                        setNewJob({ ...newJob, salary: e.target.value })
                      }
                      placeholder="e.g., $80,000 - $100,000"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Job Description
                    </label>

                    <textarea
                      value={newJob.description}
                      onChange={(e) =>
                        setNewJob({ ...newJob, description: e.target.value })
                      }
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Requirements
                    </label>

                    <textarea
                      value={newJob.requirements}
                      onChange={(e) =>
                        setNewJob({ ...newJob, requirements: e.target.value })
                      }
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Benefits
                    </label>

                    <textarea
                      value={newJob.benefits}
                      onChange={(e) =>
                        setNewJob({ ...newJob, benefits: e.target.value })
                      }
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div className="flex gap-3 pt-4">
                    <button
                      type="button"
                      onClick={() => setShowCreateForm(false)}
                      className="flex-1 bg-gray-100 text-gray-700 py-2 rounded-lg hover:bg-gray-200 transition-colors"
                    >
                      Cancel
                    </button>

                    <button
                      type="submit"
                      className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Post Job
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}

        {/* Featured Jobs */}

        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
            <Star className="w-5 h-5 mr-2 text-yellow-500" />
            Featured Jobs
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredJobs
              .filter((job) => job.featured)
              .map((job) => (
                <div
                  key={job.id}
                  className="bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-200 rounded-xl p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center space-x-3">
                      <span className="text-3xl">{job.logo}</span>

                      <div>
                        <h3 className="text-lg font-bold text-gray-900">
                          {job.title}
                        </h3>

                        <p className="text-gray-600">{job.company}</p>
                      </div>
                    </div>

                    <button
                      onClick={() => handleSaveJob(job.id)}
                      className={`p-2 rounded-lg transition-colors ${
                        isSaved(job.id)
                          ? "text-yellow-500 bg-yellow-100"
                          : "text-gray-400 hover:text-yellow-500 hover:bg-yellow-100"
                      }`}
                    >
                      {isSaved(job.id) ? (
                        <CheckCircle2 className="w-5 h-5" />
                      ) : (
                        <Bookmark className="w-5 h-5" />
                      )}
                    </button>
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="w-4 h-4 mr-1" />

                      {job.location}
                    </div>

                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="w-4 h-4 mr-1" />

                      {job.type}
                    </div>

                    <div className="flex items-center text-sm text-gray-600">
                      <DollarSign className="w-4 h-4 mr-1" />

                      {job.salary}
                    </div>
                  </div>

                  <p className="text-gray-700 text-sm mb-4 line-clamp-2">
                    {job.description}
                  </p>

                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-500">
                      {getDaysSincePosted(job.postedDate)}
                    </span>

                    <button
                      onClick={() => handleApplyJob(job.id)}
                      disabled={isApplied(job.id)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        isApplied(job.id)
                          ? "bg-green-100 text-green-700 cursor-not-allowed"
                          : "bg-blue-600 text-white hover:bg-blue-700"
                      }`}
                    >
                      {isApplied(job.id) ? "Applied" : "Apply Now"}
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* All Jobs */}

        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            All Job Opportunities
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredJobs.map((job) => (
              <div
                key={job.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{job.logo}</span>

                      <div>
                        <h3 className="text-lg font-bold text-gray-900">
                          {job.title}
                        </h3>

                        <p className="text-gray-600">{job.company}</p>
                      </div>
                    </div>

                    <button
                      onClick={() => handleSaveJob(job.id)}
                      className={`p-2 rounded-lg transition-colors ${
                        isSaved(job.id)
                          ? "text-yellow-500 bg-yellow-100"
                          : "text-gray-400 hover:text-yellow-500 hover:bg-yellow-100"
                      }`}
                    >
                      {isSaved(job.id) ? (
                        <CheckCircle2 className="w-5 h-5" />
                      ) : (
                        <Bookmark className="w-5 h-5" />
                      )}
                    </button>
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="w-4 h-4 mr-1" />

                      {job.location}
                    </div>

                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="w-4 h-4 mr-1" />

                      {job.type}
                    </div>

                    <div className="flex items-center text-sm text-gray-600">
                      <DollarSign className="w-4 h-4 mr-1" />

                      {job.salary}
                    </div>
                  </div>

                  <p className="text-gray-700 text-sm mb-4 line-clamp-3">
                    {job.description}
                  </p>

                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-500">
                      {getDaysSincePosted(job.postedDate)}
                    </span>

                    <button
                      onClick={() => handleApplyJob(job.id)}
                      disabled={isApplied(job.id)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        isApplied(job.id)
                          ? "bg-green-100 text-green-700 cursor-not-allowed"
                          : "bg-blue-600 text-white hover:bg-blue-700"
                      }`}
                    >
                      {isApplied(job.id) ? "Applied" : "Apply Now"}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {filteredJobs.length === 0 && (
          <div className="text-center py-12">
            <Briefcase className="w-16 h-16 text-gray-300 mx-auto mb-4" />

            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              No jobs found
            </h3>

            <p className="text-gray-500">Try adjusting your search criteria</p>
          </div>
        )}
      </div>
    </div>
  );
}
