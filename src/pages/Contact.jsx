// Contact.jsx - Enhanced with animations
import React, { useState } from 'react';

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('sharonzane795@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative min-h-[85vh] flex items-center justify-center px-6 py-16 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-indigo-50/30">
      
      {/* Animated Background Orbs */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full mix-blend-multiply filter blur-[120px] animate-float-slow"></div>
      <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full mix-blend-multiply filter blur-[120px] animate-float-slow animation-delay-2000"></div>
      
      {/* Floating Particles */}
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full animate-float-particle"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${5 + Math.random() * 10}s`
          }}
        ></div>
      ))}

      <div className="max-w-5xl w-full mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12 animate-fade-slide-up">
          <h1 className="text-6xl md:text-7xl font-black mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-[length:200%_200%] animate-gradient-shift">
              Let's Connect
            </span>
          </h1>
          <p className="text-xl text-gray-600 font-medium max-w-xl mx-auto leading-relaxed">
            Whether you have a question, a project idea, or just want to say hi, 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600 font-black"> my inbox is always open</span>
          </p>
        </div>

        {/* Contact Card */}
        <div className="relative group animate-fade-slide-up animation-delay-200">
          {/* Glow Effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-violet-600 rounded-[3rem] blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-700"></div>
          
          {/* Main Card */}
          <div className="relative bg-white/80 backdrop-blur-2xl p-10 md:p-14 rounded-[3rem] border-2 border-white/90 shadow-2xl overflow-hidden">
            
            {/* Animated Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-500 to-violet-500 rounded-full blur-3xl -mr-20 -mt-20 animate-pulse-slow"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-full blur-3xl -ml-20 -mb-20 animate-pulse-slow animation-delay-1000"></div>
            </div>

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12">
              
              {/* Left Column - Contact Info */}
              <div className="space-y-8">
                {/* Email */}
                <div className="group/contact relative">
                  <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl blur-md opacity-0 group-hover/contact:opacity-30 transition-opacity duration-500"></div>
                  <div className="relative flex items-start gap-5 p-5 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/80 hover:bg-white transition-all duration-500 cursor-pointer" onClick={copyEmail}>
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center text-white shadow-lg group-hover/contact:scale-110 group-hover/contact:rotate-3 transition-all duration-300">
                      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-sm font-black text-gray-400 uppercase tracking-wider mb-1">Email</h3>
                      <p className="text-lg font-bold text-gray-900 group-hover/contact:text-blue-600 transition-colors break-all">
                        sharonzane795@gmail.com
                      </p>
                      {copied && (
                        <span className="absolute top-2 right-2 text-xs font-black text-green-600 animate-fade-in">
                          Copied!
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="group/contact relative">
                  <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl blur-md opacity-0 group-hover/contact:opacity-30 transition-opacity duration-500"></div>
                  <a href="tel:+917871338759" className="relative flex items-start gap-5 p-5 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/80 hover:bg-white transition-all duration-500">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white shadow-lg group-hover/contact:scale-110 group-hover/contact:rotate-3 transition-all duration-300">
                      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-sm font-black text-gray-400 uppercase tracking-wider mb-1">Phone</h3>
                      <p className="text-lg font-bold text-gray-900 group-hover/contact:text-indigo-600 transition-colors">+91 787 133 8759</p>
                    </div>
                  </a>
                </div>

                {/* Location */}
                <div className="group/contact relative">
                  <div className="absolute -inset-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur-md opacity-0 group-hover/contact:opacity-30 transition-opacity duration-500"></div>
                  <div className="relative flex items-start gap-5 p-5 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/80 hover:bg-white transition-all duration-500">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white shadow-lg group-hover/contact:scale-110 group-hover/contact:rotate-3 transition-all duration-300">
                      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-sm font-black text-gray-400 uppercase tracking-wider mb-1">Location</h3>
                      <p className="text-lg font-bold text-gray-900">Hosur, Tamil Nadu</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Social & Quick Connect */}
              <div className="flex flex-col justify-between">
                <div>
                  <h3 className="text-sm font-black text-gray-400 uppercase tracking-wider mb-6">Digital Profiles</h3>
                  
                  <div className="space-y-4">
                    {/* Website */}
                    <a href="https://SharonZane01.com" target="_blank" rel="noopener noreferrer" className="group/link flex items-center gap-4 p-4 rounded-xl hover:bg-white/70 transition-all duration-300">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white shadow-md group-hover/link:scale-110 transition-transform">
                        <span className="text-xl">🌐</span>
                      </div>
                      <div>
                        <p className="text-lg font-bold text-gray-900 group-hover/link:text-blue-600 transition-colors">SharonZane01.com</p>
                        <p className="text-xs text-gray-400 font-bold">Portfolio & Blog</p>
                      </div>
                    </a>
                    
                    {/* GitHub */}
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="group/link flex items-center gap-4 p-4 rounded-xl hover:bg-white/70 transition-all duration-300">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-gray-800 to-gray-600 flex items-center justify-center text-white shadow-md group-hover/link:scale-110 transition-transform">
                        <span className="text-xl">⌨️</span>
                      </div>
                      <div>
                        <p className="text-lg font-bold text-gray-900 group-hover/link:text-gray-800 transition-colors">GitHub</p>
                        <p className="text-xs text-gray-400 font-bold">Open Source & Projects</p>
                      </div>
                    </a>
                    
                    {/* LinkedIn */}
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="group/link flex items-center gap-4 p-4 rounded-xl hover:bg-white/70 transition-all duration-300">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600 to-blue-400 flex items-center justify-center text-white shadow-md group-hover/link:scale-110 transition-transform">
                        <span className="text-xl">💼</span>
                      </div>
                      <div>
                        <p className="text-lg font-bold text-gray-900 group-hover/link:text-blue-700 transition-colors">LinkedIn</p>
                        <p className="text-xs text-gray-400 font-bold">Professional Network</p>
                      </div>
                    </a>
                  </div>
                </div>

                {/* Quick Response Badge */}
                <div className="mt-8 p-5 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-100">
                  <div className="flex items-center gap-3">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </span>
                    <p className="text-sm font-bold text-green-700">
                      Quick response within 24 hours
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;