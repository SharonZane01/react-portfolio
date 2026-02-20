// Projects.jsx - Enhanced with dynamic cards
import React, { useState } from 'react';

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const projectList = [
    {
      title: "FirstBuyHouse",
      type: "Real Estate Marketplace",
      description: "A live marketplace platform connecting buyers with property sellers. Features dynamic property listings, image uploads, and advanced search/filtering with real-time updates.",
      tech: ["Django", "MySQL", "HTML/CSS", "Render", "Redis"],
      link: "https://firstbuyhouse.com",
      gradient: "from-blue-500 to-indigo-500",
      icon: "🏠",
      stats: ["100+ Listings", "50+ Users", "Real-time"]
    },
    {
      title: "Docalc",
      type: "Expense Management App",
      description: "Responsive Android application with a REST backend. Includes Brevo integration for auth/transactional emails and Cloudinary for optimized image storage with real-time sync.",
      tech: ["React Native", "Django", "PostgreSQL", "Cloudinary", "Redux"],
      link: "#",
      gradient: "from-indigo-500 to-purple-500",
      icon: "💰",
      stats: ["1k+ Downloads", "4.5★ Rating", "Offline Mode"]
    },
    {
      title: "Connectly",
      type: "Social Media Web App",
      description: "A social platform enabling user registration, profile management, photo sharing, and dynamic post interactions with real-time notifications and chat features.",
      tech: ["Django", "PostgreSQL", "HTMX", "WebSocket", "Tailwind"],
      link: "#",
      gradient: "from-purple-500 to-pink-500",
      icon: "🌐",
      stats: ["Real-time Chat", "Push Notifications", "Media Upload"]
    },
    {
      title: "Lawarity",
      type: "Legal Connection Platform",
      description: "A specialized lawyer-to-customer linking platform designed to connect clients with legal professionals efficiently with AI-powered matching and secure consultations.",
      tech: ["React", "Django", "PostgreSQL", "Redux", "Stripe"],
      link: "#",
      gradient: "from-pink-500 to-rose-500",
      icon: "⚖️",
      stats: ["AI Matching", "Secure", "Video Consult"]
    },
    {
      title: "EcoTrack",
      type: "Sustainability App",
      description: "Track your carbon footprint with this eco-friendly application that provides insights and recommendations for a greener lifestyle with gamification elements.",
      tech: ["React Native", "Node.js", "MongoDB", "Chart.js", "Express"],
      link: "#",
      gradient: "from-green-500 to-emerald-500",
      icon: "🌱",
      stats: ["Carbon Calculator", "Challenges", "Leaderboard"]
    },
    {
      title: "MediCare Pro",
      type: "Healthcare Platform",
      description: "Complete healthcare management system with appointment scheduling, electronic health records, and telemedicine integration for seamless patient care.",
      tech: ["Django", "React", "PostgreSQL", "WebRTC", "Redis"],
      link: "#",
      gradient: "from-cyan-500 to-blue-500",
      icon: "🏥",
      stats: ["Telemedicine", "EHR System", "Appointments"]
    }
  ];

  return (
    <div className="relative min-h-screen py-20 px-6 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-indigo-50/30">
      
      {/* Animated Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-indigo-400/20 rounded-full mix-blend-multiply filter blur-[120px] animate-pulse-slow"></div>
        <div className="absolute bottom-20 left-1/4 w-96 h-96 bg-gradient-to-r from-violet-400/20 to-purple-400/20 rounded-full mix-blend-multiply filter blur-[120px] animate-pulse-slow animation-delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 animate-fade-slide-up">
          <h1 className="text-6xl md:text-7xl font-black mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-[length:200%_200%] animate-gradient-shift">
              Featured Work
            </span>
          </h1>
          <p className="text-xl text-gray-600 font-medium max-w-2xl mx-auto">
            A selection of my recent full-stack applications and platforms that solve real-world problems
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-2000">
          {projectList.map((project, index) => (
            <div
              key={index}
              className="group relative animate-fade-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Card Container with 3D Effect */}
              <div className={`relative bg-white/70 backdrop-blur-xl rounded-3xl border border-white/80 shadow-xl overflow-hidden transition-all duration-700 ${
                hoveredIndex === index ? 'rotate-y-6 scale-105 shadow-2xl z-20' : ''
              }`}>
                
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                {/* Top Accent Bar */}
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${project.gradient} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
                
                {/* Icon Section */}
                <div className="relative p-8 pb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                    <span className="text-3xl">{project.icon}</span>
                  </div>
                  
                  <span className="text-sm font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-blue-600 uppercase mb-2 block">
                    {project.type}
                  </span>
                  
                  <h2 className="text-2xl font-black text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-violet-600 transition-all duration-300">
                    {project.title}
                  </h2>
                  
                  <p className="text-gray-600 leading-relaxed mb-6 font-medium">
                    {project.description}
                  </p>
                  
                  {/* Stats Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.stats.map((stat, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 bg-gradient-to-r from-gray-50 to-gray-100 text-gray-700 text-xs font-bold rounded-lg border border-gray-200"
                      >
                        {stat}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tech Stack & Link Section */}
                <div className="p-8 pt-0">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((techItem, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 bg-white border-2 border-gray-100 text-gray-700 text-xs font-bold rounded-lg hover:bg-gradient-to-r hover:from-blue-600 hover:to-violet-600 hover:text-white hover:border-transparent transition-all duration-300"
                      >
                        {techItem}
                      </span>
                    ))}
                  </div>
                  
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-gradient-to-r ${project.gradient} text-white font-bold hover:shadow-xl hover:-translate-y-1 transition-all duration-300 w-full justify-center group/link`}
                  >
                    <span>View Project</span>
                    <svg className="w-5 h-5 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </a>
                </div>

                {/* Decorative Corner */}
                <div className={`absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl ${project.gradient} opacity-10 rounded-tl-[100px] group-hover:opacity-20 transition-opacity duration-500`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;