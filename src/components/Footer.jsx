// Footer.jsx - Enhanced with animations
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-blue-600/95 via-indigo-600/95 to-violet-600/95 backdrop-blur-xl border-t border-white/20 mt-12 relative z-10 shadow-[0_-4px_30px_rgba(0,0,0,0.1)]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-12">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 mb-12">
          
          {/* Brand Section */}
          <div className="md:col-span-1 group">
            <Link to="/" className="text-2xl font-black tracking-tight inline-block mb-4 drop-shadow-md hover:scale-105 transition-transform">
              <span className="text-white">Sharon</span>
              <span className="text-blue-200 group-hover:text-white transition-colors">.dev</span>
            </Link>
            <p className="text-blue-100 font-medium leading-relaxed">
              Full Stack Developer specializing in building robust Django backends and seamless React interfaces.
            </p>
            <div className="flex gap-3 mt-4">
              <span className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white hover:bg-white hover:text-violet-600 transition-all hover:scale-110 cursor-default">
                🐍
              </span>
              <span className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white hover:bg-white hover:text-violet-600 transition-all hover:scale-110 cursor-default">
                ⚛️
              </span>
              <span className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white hover:bg-white hover:text-violet-600 transition-all hover:scale-110 cursor-default">
                🎯
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h3 className="text-sm font-black text-white uppercase tracking-wider mb-4 drop-shadow-sm relative inline-block">
              Quick Links
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-white/30 rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              {['Home', 'About', 'Projects', 'Contact'].map((item, index) => (
                <li key={item}>
                  <Link 
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
                    className="text-blue-100 hover:text-white font-bold transition-all hover:translate-x-2 inline-block"
                  >
                    <span className="flex items-center gap-2">
                      <span className="opacity-0 group-hover:opacity-100 text-sm">→</span>
                      {item}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div className="md:col-span-1">
            <h3 className="text-sm font-black text-white uppercase tracking-wider mb-4 drop-shadow-sm relative inline-block">
              Connect
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-white/30 rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="mailto:sharonzane795@gmail.com" className="text-blue-100 hover:text-white font-bold transition-all hover:translate-x-2 inline-block flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-sm">📧</span>
                  Email Me
                </a>
              </li>
              <li>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-blue-100 hover:text-white font-bold transition-all hover:translate-x-2 inline-block flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-sm">⌨️</span>
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-100 hover:text-white font-bold transition-all hover:translate-x-2 inline-block flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-sm">💼</span>
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-blue-200 text-sm font-bold">
            © {currentYear} Sharon S. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <p className="text-blue-200 text-sm font-bold flex items-center gap-1">
              Built with <span className="text-white animate-pulse">❤️</span> using
            </p>
            <div className="flex gap-2">
              <span className="px-2 py-1 bg-white/10 rounded-lg text-white text-xs font-bold">React</span>
              <span className="px-2 py-1 bg-white/10 rounded-lg text-white text-xs font-bold">Tailwind</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;