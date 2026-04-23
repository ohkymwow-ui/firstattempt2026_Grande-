import React, { useState, useEffect, useRef, useCallback } from "react";
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
  Send,
  Phone,
  Video,
  MoreVertical,
  Plus,
} from "lucide-react";
import { useAuth } from "./AuthContext";

export default function Messages() {
  const { user, logout } = useAuth();
  const [conversations, setConversations] = useState([
    {
      id: 1,
      participant: {
        name: "Sarah Johnson",
        avatar: "👩‍💼",
        position: "Senior Product Manager",
        company: "Tech Corp",
        lastSeen: "2 hours ago",
        isOnline: true,
      },
      lastMessage: {
        text: "Hey! Are you attending the networking event next week?",
        timestamp: "2026-04-18T14:30:00Z",
        isFromUser: false,
      },
      unreadCount: 2,
      messages: [
        {
          id: 1,
          text: "Hi Sarah! How have you been?",
          timestamp: "2026-04-18T10:00:00Z",
          isFromUser: true,
        },
        {
          id: 2,
          text: "Great! Just got promoted to Senior PM. How about you?",
          timestamp: "2026-04-18T10:15:00Z",
          isFromUser: false,
        },
        {
          id: 3,
          text: "Congratulations! That's amazing. I'm still at the same role but loving it.",
          timestamp: "2026-04-18T10:20:00Z",
          isFromUser: true,
        },
        {
          id: 4,
          text: "Hey! Are you attending the networking event next week?",
          timestamp: "2026-04-18T14:30:00Z",
          isFromUser: false,
        },
      ],
    },
    {
      id: 2,
      participant: {
        name: "Mike Chen",
        avatar: "👨‍💻",
        position: "Software Engineer",
        company: "Startup Inc",
        lastSeen: "1 day ago",
        isOnline: false,
      },
      lastMessage: {
        text: "Thanks for the introduction! Looking forward to connecting.",
        timestamp: "2026-04-17T16:45:00Z",
        isFromUser: true,
      },
      unreadCount: 0,
      messages: [
        {
          id: 1,
          text: "Hi Mike, I wanted to introduce you to Sarah from Tech Corp.",
          timestamp: "2026-04-17T15:00:00Z",
          isFromUser: true,
        },
        {
          id: 2,
          text: "Thanks for the introduction! Looking forward to connecting.",
          timestamp: "2026-04-17T16:45:00Z",
          isFromUser: true,
        },
      ],
    },
    {
      id: 3,
      participant: {
        name: "Dr. Emily Rodriguez",
        avatar: "👩‍🔬",
        position: "Professor",
        company: "University",
        lastSeen: "5 minutes ago",
        isOnline: true,
      },
      lastMessage: {
        text: "The research paper you mentioned sounds fascinating!",
        timestamp: "2026-04-18T15:20:00Z",
        isFromUser: false,
      },
      unreadCount: 1,
      messages: [
        {
          id: 1,
          text: "Professor Rodriguez, I read your latest research paper on AI ethics.",
          timestamp: "2026-04-18T14:00:00Z",
          isFromUser: true,
        },
        {
          id: 2,
          text: "Thank you! I'm glad you found it interesting.",
          timestamp: "2026-04-18T14:30:00Z",
          isFromUser: false,
        },
        {
          id: 3,
          text: "The research paper you mentioned sounds fascinating!",
          timestamp: "2026-04-18T15:20:00Z",
          isFromUser: false,
        },
      ],
    },
  ]);

  const [selectedConversation, setSelectedConversation] = useState(null);
  const [messageText, setMessageText] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const messagesEndRef = useRef(null);

  // Initialize first conversation
  useEffect(() => {
    if (conversations.length > 0 && !selectedConversation) {
      setSelectedConversation(conversations[0]);
    }
  }, []);

  // Scroll to bottom when messages change
  useEffect(() => {
    const timer = setTimeout(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 0);
    return () => clearTimeout(timer);
  }, [selectedConversation?.messages]);

  const filteredConversations = conversations.filter(
    (conversation) =>
      conversation.participant.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      conversation.participant.position
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      conversation.participant.company
        .toLowerCase()
        .includes(searchTerm.toLowerCase()),
  );

  const handleSendMessage = useCallback(() => {
    if (!messageText.trim() || !selectedConversation) return;

    const newMessage = {
      id: Date.now(),
      text: messageText,
      timestamp: new Date().toISOString(),
      isFromUser: true,
    };

    // Create new conversation object with updated messages
    const updatedConversation = {
      ...selectedConversation,
      messages: [...selectedConversation.messages, newMessage],
      lastMessage: newMessage,
      unreadCount: 0,
    };

    // Update conversations list
    setConversations((prevConversations) =>
      prevConversations.map((conv) =>
        conv.id === selectedConversation.id ? updatedConversation : conv,
      ),
    );

    // Update selected conversation
    setSelectedConversation(updatedConversation);
    setMessageText("");
  }, [messageText, selectedConversation]);

  const handleSelectConversation = (conversation) => {
    setSelectedConversation(conversation);
    // Mark as read
    setConversations((prevConversations) =>
      prevConversations.map((conv) =>
        conv.id === conversation.id ? { ...conv, unreadCount: 0 } : conv,
      ),
    );
  };

  const formatTime = (timestamp) => {
    try {
      const date = new Date(timestamp);
      const now = new Date();
      const diffInHours = (now - date) / (1000 * 60 * 60);

      if (diffInHours < 24) {
        return date.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });
      } else {
        return date.toLocaleDateString();
      }
    } catch (err) {
      console.error("Error formatting time:", err);
      return "Invalid date";
    }
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
            <div className="flex items-center space-x-8 overflow-x-auto">
              <Link
                to="/dashboard"
                className="flex items-center text-gray-700 hover:text-blue-600 whitespace-nowrap"
              >
                <Home className="w-5 h-5 mr-1" />
                Dashboard
              </Link>
              <Link
                to="/profile"
                className="flex items-center text-gray-700 hover:text-blue-600 whitespace-nowrap"
              >
                <User className="w-5 h-5 mr-1" />
                Profile
              </Link>
              <Link
                to="/events"
                className="flex items-center text-gray-700 hover:text-blue-600 whitespace-nowrap"
              >
                <Calendar className="w-5 h-5 mr-1" />
                Events
              </Link>
              <Link
                to="/network"
                className="flex items-center text-gray-700 hover:text-blue-600 whitespace-nowrap"
              >
                <Users className="w-5 h-5 mr-1" />
                Network
              </Link>
              <Link
                to="/messages"
                className="flex items-center text-blue-600 whitespace-nowrap"
              >
                <MessageCircle className="w-5 h-5 mr-1" />
                Messages
              </Link>
              <Link
                to="/jobs"
                className="flex items-center text-gray-700 hover:text-blue-600 whitespace-nowrap"
              >
                <Briefcase className="w-5 h-5 mr-1" />
                Jobs
              </Link>
              <Link
                to="/directory"
                className="flex items-center text-gray-700 hover:text-blue-600 whitespace-nowrap"
              >
                <GraduationCap className="w-5 h-5 mr-1" />
                Directory
              </Link>
              <Link
                to="/news"
                className="flex items-center text-gray-700 hover:text-blue-600 whitespace-nowrap"
              >
                <Newspaper className="w-5 h-5 mr-1" />
                News
              </Link>
              <Link
                to="/settings"
                className="flex items-center text-gray-700 hover:text-blue-600 whitespace-nowrap"
              >
                <Settings className="w-5 h-5 mr-1" />
                Settings
              </Link>
              <button
                onClick={logout}
                className="flex items-center text-gray-700 hover:text-red-600 whitespace-nowrap"
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
        <div className="bg-white rounded-xl shadow-lg h-[calc(100vh-12rem)] flex">
          {/* Conversations Sidebar */}
          <div className="w-1/3 border-r border-gray-200 flex flex-col">
            {/* Header */}
            <div className="p-4 border-b border-gray-200">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-gray-900">Messages</h2>
                <button
                  className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                  aria-label="New conversation"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>

              {/* Search */}
              <div className="relative">
                <Search
                  className="absolute left-3 top-3 w-4 h-4 text-gray-400 pointer-events-none"
                  aria-hidden="true"
                />
                <input
                  type="text"
                  placeholder="Search conversations..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                />
              </div>
            </div>

            {/* Conversations List */}
            <div className="flex-1 overflow-y-auto">
              {filteredConversations.length > 0 ? (
                filteredConversations.map((conversation) => (
                  <button
                    key={conversation.id}
                    onClick={() => handleSelectConversation(conversation)}
                    className={`w-full p-4 border-b border-gray-100 hover:bg-gray-50 transition-colors text-left focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 ${
                      selectedConversation?.id === conversation.id
                        ? "bg-blue-50 border-r-2 border-r-blue-600"
                        : ""
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="relative flex-shrink-0">
                        <span className="text-2xl">
                          {conversation.participant.avatar}
                        </span>
                        {conversation.participant.isOnline && (
                          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-start gap-2">
                          <h3 className="font-semibold text-gray-900 truncate">
                            {conversation.participant.name}
                          </h3>
                          <span className="text-xs text-gray-500 flex-shrink-0">
                            {formatTime(conversation.lastMessage.timestamp)}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 truncate">
                          {conversation.participant.position} at{" "}
                          {conversation.participant.company}
                        </p>
                        <p
                          className={`text-sm truncate ${
                            conversation.lastMessage.isFromUser
                              ? "text-gray-600"
                              : "text-gray-900 font-medium"
                          }`}
                        >
                          {conversation.lastMessage.isFromUser ? "You: " : ""}
                          {conversation.lastMessage.text}
                        </p>
                      </div>
                      {conversation.unreadCount > 0 && (
                        <div className="bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0 font-semibold">
                          {conversation.unreadCount}
                        </div>
                      )}
                    </div>
                  </button>
                ))
              ) : (
                <div className="p-4 text-center text-gray-500">
                  No conversations found
                </div>
              )}
            </div>
          </div>

          {/* Chat Area */}
          <div className="flex-1 flex flex-col">
            {selectedConversation ? (
              <>
                {/* Chat Header */}
                <div className="p-4 border-b border-gray-200 flex justify-between items-center">
                  <div className="flex items-center space-x-3">
                    <div className="relative">
                      <span className="text-3xl">
                        {selectedConversation.participant.avatar}
                      </span>
                      {selectedConversation.participant.isOnline && (
                        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
                      )}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        {selectedConversation.participant.name}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {selectedConversation.participant.isOnline
                          ? "Online"
                          : `Last seen ${selectedConversation.participant.lastSeen}`}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      className="p-2 text-gray-400 hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                      aria-label="Call"
                    >
                      <Phone className="w-5 h-5" />
                    </button>
                    <button
                      className="p-2 text-gray-400 hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                      aria-label="Video call"
                    >
                      <Video className="w-5 h-5" />
                    </button>
                    <button
                      className="p-2 text-gray-400 hover:text-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                      aria-label="More options"
                    >
                      <MoreVertical className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {selectedConversation.messages &&
                  selectedConversation.messages.length > 0 ? (
                    <>
                      {selectedConversation.messages.map((message) => (
                        <div
                          key={message.id}
                          className={`flex ${message.isFromUser ? "justify-end" : "justify-start"}`}
                        >
                          <div
                            className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg break-words ${
                              message.isFromUser
                                ? "bg-blue-600 text-white"
                                : "bg-gray-200 text-gray-900"
                            }`}
                          >
                            <p className="text-sm">{message.text}</p>
                            <p
                              className={`text-xs mt-1 ${
                                message.isFromUser
                                  ? "text-blue-100"
                                  : "text-gray-500"
                              }`}
                            >
                              {formatTime(message.timestamp)}
                            </p>
                          </div>
                        </div>
                      ))}
                      <div ref={messagesEndRef} />
                    </>
                  ) : (
                    <div className="flex items-center justify-center h-full">
                      <p className="text-gray-500">
                        No messages yet. Start the conversation!
                      </p>
                    </div>
                  )}
                </div>

                {/* Message Input */}
                <div className="p-4 border-t border-gray-200">
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      value={messageText}
                      onChange={(e) => setMessageText(e.target.value)}
                      onKeyPress={(e) =>
                        e.key === "Enter" && handleSendMessage()
                      }
                      placeholder="Type a message..."
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    />
                    <button
                      onClick={handleSendMessage}
                      disabled={!messageText.trim()}
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                      aria-label="Send message"
                    >
                      <Send className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <div className="flex-1 flex items-center justify-center">
                <div className="text-center">
                  <MessageCircle
                    className="w-16 h-16 text-gray-300 mx-auto mb-4"
                    aria-hidden="true"
                  />
                  <h3 className="text-xl font-semibold text-gray-600 mb-2">
                    Select a conversation
                  </h3>
                  <p className="text-gray-500">
                    Choose a conversation from the sidebar to start messaging
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
