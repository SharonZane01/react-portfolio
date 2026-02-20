// Home.jsx - Enhanced with auto-typing and dynamic animations
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Home = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [delta, setDelta] = useState(100);
  
  const roles = [
    'Full Stack Developer',
    'Django Expert',
    'React Architect',
    'UI/UX Enthusiast',
    'Problem Solver'
  ];
  
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
  }, [text, delta]);

  const tick = () => {
    let i = loopNum % roles.length;
    let fullText = roles[i];
    let updatedText = isDeleting 
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => 50);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(200);
    }
  };

  const floatingOrbs = [...Array(6)].map((_, i) => (
    <div
      key={i}
      className={`absolute w-${[72, 96, 64, 80, 48, 56][i]} h-${[72, 96, 64, 80, 48, 56][i]} 
        bg-gradient-to-br ${[
          'from-blue-400/30 to-indigo-400/30',
          'from-violet-400/30 to-purple-400/30',
          'from-cyan-400/30 to-blue-400/30',
          'from-indigo-400/30 to-violet-400/30',
          'from-purple-400/30 to-pink-400/30',
          'from-blue-500/30 to-cyan-400/30'
        ][i]} rounded-full mix-blend-multiply filter blur-[100px] 
        animate-float-${i + 1} pointer-events-none`}
      style={{
        top: `${[10, 70, 30, 80, 20, 60][i]}%`,
        left: `${[5, 85, 20, 90, 70, 40][i]}%`,
        animationDelay: `${i * 0.5}s`,
        animationDuration: `${8 + i * 2}s`
      }}
    ></div>
  ));

  return (
    <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden px-6 py-12 bg-gradient-to-br from-slate-50 via-white to-indigo-50/30">
      
      {/* Dynamic Background Orbs */}
      {floatingOrbs}

      {/* Animated Grid Background */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        
        {/* Animated Badge */}
        <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/70 backdrop-blur-xl border border-white/50 shadow-lg mb-8 animate-bounce-subtle group cursor-default hover:scale-105 transition-all duration-300">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
          <span className="text-sm font-black text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-blue-600">
            ✨ Available for Opportunities
          </span>
          <span className="ml-1 text-lg animate-wave">👋</span>
        </div>

        {/* Main Title with Gradient Animation */}
        <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
          <span className="text-gray-900 mr-2 animate-fade-slide-up">Hi, I'm</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-[length:200%_200%] animate-gradient-shift inline-block">
            Sharon S
          </span>
        </h1>
        
        {/* Auto-typing Effect */}
        <div className="h-16 md:h-20 mb-8">
          <h2 className="text-2xl md:text-4xl font-extrabold text-gray-700 drop-shadow-sm">
            <span className="text-gray-900 mr-3">I'm a</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600 border-r-4 border-violet-600 pr-2 animate-pulse-cursor">
              {text}
            </span>
          </h2>
        </div>
        
        {/* Enhanced Description */}
        <p className="text-lg md:text-2xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto font-medium animate-fade-slide-up animation-delay-200">
          <span className="inline-block animate-float-text">🚀</span> 
          Building scalable web and mobile applications from robust Django backends 
          to seamless React interfaces. 
          <span className="relative inline-block ml-2 group">
            Turning complex problems into elegant digital solutions.
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-violet-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
          </span>
        </p>
        
        {/* Enhanced CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-slide-up animation-delay-400">
          <Link 
            to="/projects" 
            className="group relative px-10 py-5 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 text-white font-black text-lg overflow-hidden transition-all hover:scale-110 hover:rotate-1 shadow-[0_10px_30px_rgba(139,92,246,0.4)] hover:shadow-[0_20px_40px_rgba(139,92,246,0.6)]"
          >
            <span className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
            <span className="relative flex items-center gap-3">
              <span className="text-2xl">✨</span>
              View My Work 
              <svg className="w-5 h-5 group-hover:translate-x-2 group-hover:-translate-y-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </span>
          </Link>
          <Link 
            to="/contact" 
            className="group px-10 py-5 rounded-full bg-white/90 backdrop-blur-md text-violet-700 border-2 border-violet-200 font-black text-lg hover:bg-white hover:text-blue-600 transition-all hover:scale-110 hover:-rotate-1 shadow-lg hover:shadow-2xl hover:shadow-violet-500/20"
          >
            <span className="flex items-center gap-3">
              <span className="text-2xl">💬</span>
              Let's Talk
            </span>
          </Link>
        </div>

        {/* Enhanced Tech Stack Section */}
        <div className="mt-24 pt-12 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-violet-200/20 to-transparent h-px"></div>
          <p className="text-sm font-black text-violet-400 uppercase tracking-[0.3em] mb-8 animate-pulse">
            Core Technologies
          </p>
          <div className="flex flex-wrap justify-center gap-4 perspective-1000">
            {[
              { name: 'Python', icon: '🐍', color: 'from-blue-500 to-cyan-500' },
              { name: 'Django', icon: '🎯', color: 'from-green-500 to-emerald-500' },
              { name: 'React', icon: '⚛️', color: 'from-cyan-500 to-blue-500' },
              { name: 'React Native', icon: '📱', color: 'from-indigo-500 to-purple-500' },
              { name: 'PostgreSQL', icon: '🐘', color: 'from-blue-600 to-indigo-600' },
              { name: 'Tailwind', icon: '🎨', color: 'from-teal-500 to-cyan-500' }
            ].map((tech, index) => (
              <div
                key={tech.name}
                className="group relative animate-float-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${tech.color} rounded-2xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-500`}></div>
                <div className="relative px-6 py-4 bg-white/80 backdrop-blur-xl border-2 border-white/60 text-violet-900 rounded-2xl text-base font-bold shadow-xl hover:shadow-2xl hover:-translate-y-2 hover:rotate-1 hover:bg-white transition-all duration-300 cursor-default flex items-center gap-3">
                  <span className="text-2xl">{tech.icon}</span>
                  <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                    {tech.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Home;