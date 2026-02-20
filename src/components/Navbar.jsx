// Navbar.jsx - Enhanced with animations
import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const desktopLinkStyle = ({ isActive }) =>
    `relative text-base font-black transition-all duration-300 ease-out ${
      isActive ? 'text-white scale-110' : 'text-blue-100 hover:text-white hover:scale-105'
    } before:absolute before:-bottom-1.5 before:left-0 before:w-full before:h-0.5 before:bg-gradient-to-r before:from-white before:to-blue-200 before:transition-transform before:duration-300 before:rounded-full ${
      isActive ? 'before:scale-x-100' : 'before:scale-x-0 hover:before:scale-x-100'
    }`;

  const mobileLinkStyle = ({ isActive }) =>
    `block px-4 py-3 rounded-xl text-base font-black transition-all duration-300 ${
      isActive
        ? 'bg-white/20 text-white shadow-lg border border-white/30 transform scale-105'
        : 'text-blue-100 hover:bg-white/10 hover:text-white border border-transparent'
    }`;

  return (
    <nav className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 backdrop-blur-xl border-b border-white/20 sticky top-0 z-50 shadow-lg shadow-indigo-500/30">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo with Animation */}
          <Link 
            to="/" 
            className="text-2xl font-black tracking-tight hover:scale-110 active:scale-95 transition-all duration-300 drop-shadow-md group"
            onClick={() => setIsOpen(false)}
          >
            <span className="text-white group-hover:animate-pulse">Sharon</span>
            <span className="text-blue-200 group-hover:text-white transition-colors">.dev</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            <NavLink to="/" className={desktopLinkStyle}>Home</NavLink>
            <NavLink to="/about" className={desktopLinkStyle}>About</NavLink>
            <NavLink to="/projects" className={desktopLinkStyle}>Projects</NavLink>
            <NavLink to="/contact" className={desktopLinkStyle}>Contact</NavLink>
            
            {/* Resume Button */}
            <a 
              href="/Sharon_S_Resume_Final.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-6 py-2.5 rounded-full bg-white hover:bg-gray-50 text-violet-700 text-sm font-black tracking-wide transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.4)] hover:shadow-[0_0_25px_rgba(255,255,255,0.7)] hover:-translate-y-1 hover:scale-105 active:scale-95 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Resume
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                </svg>
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none p-2 rounded-xl hover:bg-white/20 active:scale-90 transition-all duration-300"
            >
              <svg className={`h-7 w-7 drop-shadow-md transition-all duration-500 ${isOpen ? 'rotate-180' : 'rotate-0'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden absolute w-full bg-gradient-to-b from-violet-600/95 to-blue-700/95 backdrop-blur-2xl border-b border-white/20 rounded-b-3xl transition-all duration-500 origin-top ${
          isOpen ? 'opacity-100 scale-y-100 visible shadow-2xl' : 'opacity-0 scale-y-0 invisible h-0'
        }`}
      >
        <div className="px-6 pt-4 pb-8 space-y-3">
          <NavLink to="/" onClick={() => setIsOpen(false)} className={mobileLinkStyle}>Home</NavLink>
          <NavLink to="/about" onClick={() => setIsOpen(false)} className={mobileLinkStyle}>About</NavLink>
          <NavLink to="/projects" onClick={() => setIsOpen(false)} className={mobileLinkStyle}>Projects</NavLink>
          <NavLink to="/contact" onClick={() => setIsOpen(false)} className={mobileLinkStyle}>Contact</NavLink>
          
          {/* Mobile Resume Button */}
          <a 
            href="/Sharon_S_Resume_Final.pdf" 
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center mt-6 px-4 py-3.5 rounded-full bg-white text-violet-700 hover:bg-gray-50 text-base font-black shadow-lg hover:shadow-xl hover:-translate-y-1 active:scale-95 transition-all duration-300"
          >
            Download Resume
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;