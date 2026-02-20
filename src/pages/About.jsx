// About.jsx - Enhanced with animations
import React, { useEffect, useRef } from 'react';

const About = () => {
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-slide-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const skills = [
    { 
      category: "Languages", 
      items: ["Python", "JavaScript", "TypeScript", "HTML5", "CSS3", "SQL"], 
      icon: "💻",
      gradient: "from-blue-500 to-cyan-500"
    },
    { 
      category: "Frameworks", 
      items: ["Django", "React.js", "React Native", "Next.js", "Tailwind CSS", "Node.js"], 
      icon: "⚡",
      gradient: "from-indigo-500 to-purple-500"
    },
    { 
      category: "Cloud & Database", 
      items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "AWS", "Firebase"], 
      icon: "☁️",
      gradient: "from-orange-500 to-pink-500"
    },
    { 
      category: "Tools", 
      items: ["Git", "Docker", "VS Code", "Postman", "Linux", "Figma"], 
      icon: "🛠️",
      gradient: "from-green-500 to-emerald-500"
    }
  ];

  const timeline = [
    { 
      type: "work", 
      title: "Full Stack Developer", 
      place: "Achudha Enterprises Private Limited", 
      date: "Feb 2025 - Present", 
      desc: "Developing responsive web applications, managing SQL databases, optimizing queries, and deploying Django apps on Render.",
      achievements: ["3+ Projects Deployed", "40% Performance Boost", "Team Lead"]
    },
    { 
      type: "cert", 
      title: "Full Stack Python Developer", 
      place: "Besant Technologies", 
      date: "June 2024 - Jan 2025", 
      desc: "Gained strong backend experience with Python/Django and frontend skills with React. Built multiple full stack projects.",
      achievements: ["15+ Projects", "MERN Stack", "Django Expert"]
    },
    { 
      type: "edu", 
      title: "B.Com with Computer Application", 
      place: "MGR College, Hosur", 
      date: "2021 - 2024", 
      desc: "Graduated with a CGPA of 6.5. Specialized in computer applications and business analytics.",
      achievements: ["CGPA 6.5", "Programming Club", "Hackathon Winner"]
    }
  ];

  return (
    <div className="relative min-h-screen py-20 px-6 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-indigo-50/30">
      
      {/* Animated Background Elements */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-indigo-400/20 rounded-full mix-blend-multiply filter blur-[120px] animate-pulse-slow"></div>
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-gradient-to-r from-violet-400/20 to-purple-400/20 rounded-full mix-blend-multiply filter blur-[120px] animate-pulse-slow animation-delay-1000"></div>
      
      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
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

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div ref={el => sectionRefs.current[0] = el} className="text-center mb-20 opacity-0">
          <h1 className="text-6xl md:text-7xl font-black mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-indigo-600 to-violet-600 bg-[length:200%_200%] animate-gradient-shift">
              Experience & Expertise
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium leading-relaxed">
            Bridging the gap between robust backend architecture and 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600 font-black"> seamless frontend experiences</span>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Timeline Section */}
          <div className="lg:col-span-5 relative">
            <h2 ref={el => sectionRefs.current[1] = el} className="text-3xl font-black text-gray-900 mb-8 ml-4 opacity-0">
              <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                My Journey
              </span>
            </h2>
            
            <div className="absolute left-[23px] top-[70px] bottom-0 w-[2px] bg-gradient-to-b from-blue-500 via-violet-400 to-transparent animate-glow-line"></div>

            <div className="space-y-10 relative">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  ref={el => sectionRefs.current[index + 2] = el}
                  className="relative pl-14 group opacity-0 cursor-default"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  {/* Animated Timeline Dot */}
                  <div className="absolute left-4 top-1.5">
                    <div className="relative">
                      <div className="w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-violet-500 group-hover:scale-150 transition-all duration-300 z-10 animate-pulse-slow"></div>
                      <div className="absolute inset-0 w-4 h-4 rounded-full bg-violet-500 animate-ping opacity-20"></div>
                    </div>
                  </div>
                  
                  {/* Timeline Card */}
                  <div className="bg-white/70 backdrop-blur-xl p-6 rounded-2xl border border-white/80 shadow-xl group-hover:shadow-2xl group-hover:-translate-y-2 group-hover:rotate-1 transition-all duration-500">
                    <div className="flex justify-between items-start mb-3 flex-wrap gap-2">
                      <h3 className="text-lg font-black text-gray-900 group-hover:text-violet-600 transition-colors">
                        {item.title}
                      </h3>
                      <span className="px-3 py-1.5 bg-gradient-to-r from-blue-50 to-violet-50 text-violet-700 text-xs font-black rounded-full border border-violet-100">
                        {item.date}
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-gray-500 mb-3 flex items-center gap-2">
                      <span>🏢</span> {item.place}
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed font-medium mb-4">{item.desc}</p>
                    
                    {/* Achievement Tags */}
                    <div className="flex flex-wrap gap-2">
                      {item.achievements.map((achievement, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-gradient-to-r from-gray-50 to-gray-100 text-gray-700 text-xs font-bold rounded-lg border border-gray-200"
                        >
                          {achievement}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Section */}
          <div className="lg:col-span-7">
            <h2 ref={el => sectionRefs.current[5] = el} className="text-3xl font-black text-gray-900 mb-8 opacity-0">
              <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                Technical Arsenal
              </span>
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {skills.map((skillGroup, index) => (
                <div
                  key={index}
                  ref={el => sectionRefs.current[index + 6] = el}
                  className={`group bg-white/70 backdrop-blur-xl p-6 rounded-3xl border border-white/80 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 opacity-0 ${
                    index === 0 ? 'sm:col-span-2 sm:flex sm:items-center sm:gap-8' : ''
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`${index === 0 ? 'sm:w-1/3' : 'mb-6'}`}>
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${skillGroup.gradient} flex items-center justify-center mb-4 shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                      <span className="text-3xl">{skillGroup.icon}</span>
                    </div>
                    <h3 className="text-xl font-black text-gray-900">{skillGroup.category}</h3>
                  </div>
                  
                  <div className={`flex flex-wrap gap-2 ${index === 0 ? 'sm:w-2/3 mt-4 sm:mt-0' : ''}`}>
                    {skillGroup.items.map((item, i) => (
                      <span
                        key={i}
                        className="px-4 py-2.5 bg-white text-gray-900 text-sm font-bold rounded-xl border border-gray-200 hover:bg-gradient-to-r hover:from-blue-600 hover:to-violet-600 hover:text-white hover:border-transparent hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-sm cursor-default group/skill"
                      >
                        <span className="flex items-center gap-2">
                          {item}
                          <span className="opacity-0 group-hover/skill:opacity-100 transition-opacity text-xs">✨</span>
                        </span>
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Stats Banner */}
            <div ref={el => sectionRefs.current[10] = el} className="mt-8 opacity-0">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-blue-600 rounded-3xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
                <div className="relative bg-gradient-to-r from-violet-600 to-blue-600 rounded-3xl p-8 text-white overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20 animate-pulse-slow"></div>
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl -ml-20 -mb-20 animate-pulse-slow animation-delay-1000"></div>
                  
                  <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="text-center">
                      <div className="text-4xl font-black mb-1">15+</div>
                      <div className="text-violet-100 text-sm font-bold uppercase tracking-wider">Projects</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-black mb-1">3+</div>
                      <div className="text-violet-100 text-sm font-bold uppercase tracking-wider">Live Apps</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-black mb-1">11+</div>
                      <div className="text-violet-100 text-sm font-bold uppercase tracking-wider">Months Exp</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-black mb-1">∞</div>
                      <div className="text-violet-100 text-sm font-bold uppercase tracking-wider">Learning</div>
                    </div>
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

export default About;