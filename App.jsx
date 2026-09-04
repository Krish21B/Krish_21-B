qimport React, { useState, useEffect } from 'react';
import { 
  Sun, Moon, Home, User, Briefcase, Mail, 
  MapPin, ExternalLink, Code2, GraduationCap, ChevronRight,
  Terminal, Sparkles, Send, LayoutGrid
} from 'lucide-react';

import './index.css';

// --- Custom Brand SVG Icons ---
const Github = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
    <path d="M9 18c-4.51 2-5-2-7-2"></path>
  </svg>
);

const Linkedin = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

// --- Navigation Data ---
const navItems = [
  { id: 'home', label: 'Home', icon: <Home size={18} /> },
  { id: 'about', label: 'About', icon: <User size={18} /> },
  { id: 'projects', label: 'Projects', icon: <Briefcase size={18} /> },
  { id: 'contact', label: 'Contact', icon: <Mail size={18} /> }
];

// --- Sub-Components ---
const TopBar = ({ darkMode, toggleTheme, onNavigate }) => {
  return (
    <div className="fixed top-0 w-full z-40 px-4 md:px-6 py-4 flex justify-between items-center transition-colors backdrop-blur-md bg-white/10 dark:bg-slate-900/10">
      <a 
        href="#home" 
        onClick={(e) => onNavigate(e, 'home')}
        className="text-lg md:text-xl font-bold tracking-tighter flex items-center gap-2 text-slate-900 dark:text-white glass px-3.5 py-1.5 md:px-4 md:py-2 rounded-full cursor-pointer touch-manipulation"
      >
        <LayoutGrid size={18} className="text-indigo-500" />
        Biswa<span className="text-indigo-500">.</span>
      </a>
      <div className="flex items-center gap-3 md:gap-4">
        <a 
          href="#contact" 
          onClick={(e) => onNavigate(e, 'contact')}
          className="hidden md:flex px-5 py-2.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-sm font-semibold rounded-full hover:scale-105 transition-transform shadow-lg cursor-pointer touch-manipulation"
        >
          Available for Hire
        </a>
        <button 
          onClick={toggleTheme}
          aria-label="Toggle Theme"
          className="p-2.5 rounded-full glass text-slate-700 dark:text-slate-300 hover:text-indigo-500 dark:hover:text-indigo-400 transition-all focus:outline-none touch-manipulation"
        >
          {darkMode ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </div>
    </div>
  );
};

const FloatingDock = ({ activeSection, onNavigate }) => {
  return (
    <div className="fixed bottom-4 md:bottom-6 left-1/2 transform -translate-x-1/2 z-50 max-w-[95vw]">
      <div className="flex items-center p-1.5 rounded-full glass shadow-2xl transition-all duration-300">
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => onNavigate(e, item.id)}
              className={`relative flex items-center gap-2 px-3.5 py-2.5 md:px-4 md:py-3 rounded-full transition-all duration-300 cursor-pointer touch-manipulation ${
                isActive 
                  ? 'bg-indigo-500 text-white shadow-md' 
                  : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/50 dark:hover:bg-slate-800/50'
              }`}
            >
              <span className={`transition-transform duration-300 ${isActive ? 'scale-110' : 'scale-100'}`}>
                {item.icon}
              </span>
              <span className={`text-sm font-semibold hidden md:block transition-all duration-300 ${
                isActive ? 'max-w-[100px] opacity-100 ml-1' : 'max-w-0 opacity-0 overflow-hidden'
              }`}>
                {item.label}
              </span>
            </a>
          );
        })}
      </div>
    </div>
  );
};

const Hero = ({ onNavigate }) => {
  return (
    <section id="home" className="min-h-[100dvh] scroll-mt-24 flex items-center pt-20 pb-12 px-6 section-spy relative">
      <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-8 lg:gap-8 items-center z-10">
        
        {/* Left: Text Content */}
        <div className="order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left">
          <div className="reveal glass inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs md:text-sm font-semibold text-slate-700 dark:text-slate-300 mb-6">
            <Sparkles size={16} className="text-indigo-500" /> Building Digital Experiences
          </div>
          
          <h1 className="reveal delay-100 text-4xl sm:text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.1] mb-6">
            Hi, I'm <br />
            <span className="text-gradient">
              Biswadeep.
            </span>
          </h1>
          
          <p className="reveal delay-200 text-base md:text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-lg leading-relaxed">
            An IT student and full-stack developer blending clean code with elegant design to build scalable software solutions.
          </p>

          <div className="reveal delay-300 flex flex-wrap gap-4 justify-center lg:justify-start">
            <a 
              href="#projects" 
              onClick={(e) => onNavigate(e, 'projects')}
              className="px-6 py-3.5 md:px-8 md:py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold rounded-full hover:scale-105 transition-transform flex items-center gap-2 shadow-xl shadow-slate-900/20 dark:shadow-white/10 cursor-pointer touch-manipulation text-sm md:text-base"
            >
              Explore Work <ChevronRight size={18} />
            </a>
            <div className="flex gap-3">
              <a href="https://github.com/Krish21B" className="p-3.5 md:p-4 rounded-full glass text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all touch-manipulation">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/biswadeep-biswas-77965a2b6" className="p-3.5 md:p-4 rounded-full glass text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all touch-manipulation">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Right: Profile Picture */}
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end reveal delay-200">
          <div className="photo-wrapper shadow-2xl shadow-indigo-500/20">
            <div className="relative w-52 h-52 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full overflow-hidden bg-slate-100 dark:bg-slate-900 z-10">
              <img 
                src="https://drive.google.com/thumbnail?id=1-Qa9Pr91-jM1eHAIkV8w4XdrtRjYB07L&sz=w1000"
                alt="Biswadeep Biswas" 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

const Marquee = () => {
  const techStack = [
    { name: "React", icon: <Code2 size={16} /> },
    { name: "Node.js", icon: <Terminal size={16} /> },
    { name: "TypeScript", icon: <Code2 size={16} /> },
    { name: "Python", icon: <Terminal size={16} /> },
    { name: "Java", icon: <Code2 size={16} /> },
    { name: "Tailwind", icon: <LayoutGrid size={16} /> },
    { name: "MongoDB", icon: <Terminal size={16} /> },
    { name: "Git", icon: <Code2 size={16} /> },
  ];
  
  const scrollContent = [...techStack, ...techStack, ...techStack];

  return (
    <div className="py-6 w-full overflow-hidden">
      <div className="marquee-container">
        <div className="marquee-content">
          {scrollContent.map((tech, idx) => (
            <div key={idx} className="glass px-5 py-2.5 md:px-6 md:py-3 rounded-full flex items-center gap-2 text-slate-700 dark:text-slate-300 font-medium text-sm whitespace-nowrap shadow-sm">
              <span className="text-indigo-500">{tech.icon}</span>
              {tech.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const BentoAbout = () => {
  return (
    <section id="about" className="py-20 md:py-24 px-6 max-w-6xl mx-auto section-spy scroll-mt-20">
      <div className="reveal mb-8 md:mb-12">
        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tight mb-4">About Me</h2>
        <div className="w-12 h-1.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-min">
        <div className="reveal md:col-span-2 glass glass-hover rounded-[2rem] p-6 md:p-10 transition-all duration-300 flex flex-col justify-center">
          <Terminal className="text-indigo-500 mb-4 md:mb-6" size={32} />
          <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-4">Engineering the Future</h3>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-base md:text-lg mb-4">
            Currently pursuing my B.Tech in Information Technology. I have a deep passion for understanding complex systems and building applications that are not just functional, but highly performant and intuitive.
          </p>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-base md:text-lg">
            Whether I'm writing backend logic, designing a responsive UI, or managing databases, I focus on clean code and scalable architecture.
          </p>
        </div>

        <div className="flex flex-col gap-6 md:col-span-1">
          <div className="reveal delay-100 flex-1 glass glass-hover rounded-[2rem] p-6 md:p-8 transition-all duration-300 flex flex-col items-center justify-center text-center">
            <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-indigo-50 dark:bg-indigo-500/10 flex items-center justify-center mb-4">
              <MapPin className="text-indigo-500" size={26} />
            </div>
            <h4 className="text-lg font-bold text-slate-900 dark:text-white">Kolkata, India</h4>
            <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Available Globally</p>
          </div>

          <div className="reveal delay-200 flex-1 glass glass-hover rounded-[2rem] p-6 md:p-8 transition-all duration-300 flex flex-col items-center justify-center text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 blur-2xl rounded-full"></div>
            <GraduationCap className="text-purple-500 mb-4 relative z-10" size={30} />
            <h4 className="text-xl font-bold text-slate-900 dark:text-white relative z-10">B.Tech IT</h4>
            <p className="text-slate-500 dark:text-slate-400 text-sm mt-1 relative z-10">Graduating 2027</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "zenithXpress E-Commerce",
      desc: "A modern e-commerce platform built with the MERN stack, featuring user authentication, product management, and a seamless checkout experience.",
      tech: ["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB"],
      link: "http://127.0.0.1:5500/E-commerce/Home.html"
    },
    {
      title: "Sastha-Setu Ai Powered Telemedicine Platform",
      desc: "A telemedicine platform that connects patients with healthcare providers, offering AI-driven symptom analysis, virtual consultations, and electronic health record management.",
      tech: ["React", "Node.js", "Express", "MongoDB", "AI Integration"],
      link: "#"
    },
    {
      title: "My-Finance Tracker",
      desc: "A personal finance management app that allows users to track expenses, set budgets, and visualize spending habits through interactive charts.",
      tech: ["React", "Firebase", "Chart.js"],
      link: "#"
    },
    {
      title: "Disaster Management System",
      desc: "A comprehensive solution for predicting natural disasters, risk analysis and management, provide support system to rescue and relief efforts, featuring real-time communication and resource allocation.",
      tech: ["React", "Python", "Django", "API Integration", "Machine Learning", "Deep Learning", "PostgreSQL", "Docker", "AWS"],
      link: "#"
    },
    {
      title: "AI-Powered Chatbot",
      desc: "An intelligent chatbot that leverages natural language processing to provide customer support, answer queries, and assist users in navigating websites or applications.",
      tech: ["Python", "PyTorch", "NLP", "Flask"],
      link: "#"
    },
    {
      title: "TravelGuide Pro",
      desc: "A travel planning application that provides personalized itineraries, local recommendations, and real-time weather updates for travelers.",
      tech: ["React", "Node.js", "MongoDB", "API Integration"],
      link: "#"
    },
  ];

  return (
    <section id="projects" className="py-20 md:py-24 px-6 max-w-6xl mx-auto section-spy scroll-mt-20">
      <div className="reveal mb-8 md:mb-12">
        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tight mb-4">Selected Work</h2>
        <div className="w-12 h-1.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, idx) => (
          <div 
            key={idx} 
            className={`reveal delay-${(idx + 1) * 100} group glass glass-hover rounded-[2rem] p-6 flex flex-col h-full transition-all duration-300`}
          >
            <div className="w-full h-40 md:h-48 rounded-2xl bg-slate-100 dark:bg-slate-800/50 mb-6 flex items-center justify-center relative overflow-hidden border border-slate-200 dark:border-slate-700/50">
               <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 group-hover:scale-110 transition-transform duration-500"></div>
               <Code2 size={40} className="text-slate-300 dark:text-slate-600 relative z-10 group-hover:text-indigo-500 transition-colors duration-300" />
            </div>
            
            <div className="flex-grow flex flex-col">
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-500 group-hover:to-purple-500 transition-all">
                {project.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                {project.desc}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t, i) => (
                  <span key={i} className="text-xs font-semibold text-slate-700 dark:text-slate-300 bg-white/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 px-2.5 py-1 rounded-full">
                    {t}
                  </span>
                ))}
              </div>
              
              <a 
                href={project.link} 
                className="mt-auto inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-semibold text-sm group-hover:bg-indigo-500 group-hover:text-white transition-colors touch-manipulation"
              >
                View Project <ExternalLink size={16} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 md:py-32 px-6 section-spy relative scroll-mt-20">
      <div className="max-w-4xl mx-auto glass rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-16 text-center relative overflow-hidden shadow-2xl reveal">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-b from-indigo-500/10 to-purple-500/10 pointer-events-none"></div>
        
        <div className="relative z-10">
          <h2 className="text-3xl md:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6">Let's connect.</h2>
          <p className="text-slate-600 dark:text-slate-400 text-base md:text-xl mb-8 md:mb-10 max-w-xl mx-auto leading-relaxed">
            I'm actively seeking entry-level IT roles, software development positions, and exciting new projects.
          </p>
          
          <a href="mailto:hello@example.com" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 md:px-8 md:py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full font-bold text-base md:text-lg hover:scale-105 transition-transform shadow-xl touch-manipulation">
            <Send size={18} /> Send an Email
          </a>
          
          <div className="mt-10 md:mt-12 pt-8 border-t border-slate-200 dark:border-slate-800/50 flex flex-wrap justify-center gap-6 md:gap-8">
            <a href="#" className="flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors font-medium text-sm md:text-base touch-manipulation">
              <Linkedin size={18} /> LinkedIn
            </a>
            <a href="#" className="flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors font-medium text-sm md:text-base touch-manipulation">
              <Github size={18} /> GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-8 text-center pb-24 md:pb-8 relative z-10">
      <p className="text-slate-500 dark:text-slate-400 text-xs md:text-sm font-medium">
        © {new Date().getFullYear()} Biswadeep Biswas. Designed & Built with React.
      </p>
    </footer>
  );
};

// --- Main App Component ---
export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Robust Mobile-Friendly Scroll Handler with Header Offset
  const scrollToSection = (e, id) => {
    if (e) e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const topOffset = 70; // Height of mobile top navbar + spacing
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Dark Mode System Preference Detector
  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Reveal Animation Observer (Lower threshold for small screens)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.01 }
    );
    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));
    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  // Section Observer tuned for narrow mobile viewports
  useEffect(() => {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -40% 0px', threshold: 0.05 }
    );
    const sections = document.querySelectorAll('.section-spy');
    sections.forEach((section) => sectionObserver.observe(section));
    return () => sections.forEach((section) => sectionObserver.unobserve(section));
  }, []);

  return (
    <div className="min-h-[100dvh] text-slate-900 dark:text-slate-100 transition-colors duration-500 selection:bg-indigo-500/30 selection:text-indigo-900 dark:selection:text-indigo-100 overflow-x-hidden">
      
      {/* Background Elements */}
      <div className="ambient-bg"></div>
      <div className="bg-grid-pattern"></div>
      <div className="ambient-glow"></div>
      <div className="ambient-glow-2"></div>

      <TopBar 
        darkMode={darkMode} 
        toggleTheme={() => setDarkMode(!darkMode)} 
        onNavigate={scrollToSection}
      />
      <FloatingDock 
        activeSection={activeSection} 
        onNavigate={scrollToSection}
      />
      
      <main className="relative z-10">
        <Hero onNavigate={scrollToSection} />
        <Marquee />
        <BentoAbout />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}