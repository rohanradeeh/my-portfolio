import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code, 
  User, 
  Briefcase, 
  Send,
  ChevronDown,
  Menu,
  X,
  Terminal,
  Cpu,
  Globe
} from 'lucide-react';

// --- DATA CONFIGURATION ---
// Edit these sections to customize the website with your own info!

const PERSONAL_INFO = {
  name: "Rohan Radeeh",
  title: "Full Stack Developer & Blockchain Ethusiast",
  about: "A CS engineer who loves turning crazy ideas into working tech.I build everything from blockchain stuff to AI tools, mostly fueled by caffeine and curiosity.If there’s a complex problem, I’m probably already trying to solve it (or breaking it to fix it better).I’m here to create cool things, learn fast, and leave every project smarter than I found it.",
  email: "rohanradeeh@gmail.com",
  socials: {
    linkedin: "https://www.linkedin.com/in/rohan-radeeh/",
    twitter: "https://x.com/radeeh_rohan"
  }
};

const SKILLS = [
  "React", "TypeScript", "Node.js", "Smart contracts", "PostgreSQL", "AWS", "UI/UX Design", "RedHat"
];

const PROJECTS = [
  {
    id: 1,
    title: "EcoTrack Analytics",
    description: "A comprehensive dashboard for tracking carbon footprints for small businesses. Features real-time data visualization and exportable reports.",
    tags: ["React", "D3.js", "Firebase"],
    link: "#",
    repo: "#",
    icon: <Globe className="w-10 h-10 text-emerald-400" />,
    color: "from-emerald-900/50 to-teal-900/50"
  },
  {
    id: 2,
    title: "Nebula Chat",
    description: "A real-time messaging application with end-to-end encryption, supporting diverse media types and group channels.",
    tags: ["Socket.io", "Express", "MongoDB"],
    link: "#",
    repo: "#",
    icon: <Terminal className="w-10 h-10 text-purple-400" />,
    color: "from-purple-900/50 to-indigo-900/50"
  },
  {
    id: 3,
    title: "TaskMaster AI",
    description: "Productivity application that uses AI to prioritize tasks based on deadlines and user habits. Includes a smart calendar integration.",
    tags: ["Python", "FastAPI", "React Native"],
    link: "#",
    repo: "#",
    icon: <Cpu className="w-10 h-10 text-blue-400" />,
    color: "from-blue-900/50 to-cyan-900/50"
  }
];

// --- COMPONENTS ---

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      const offset = 80; // Adjusts for fixed header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setIsOpen(false);
    }
  };

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/95 shadow-lg backdrop-blur-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <a href="#" className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
              {PERSONAL_INFO.name}
            </a>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-slate-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all transform hover:scale-105"
              >
                Hire Me
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-white p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-800 absolute w-full border-t border-slate-700">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-slate-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-slate-900 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600/20 rounded-full mix-blend-screen filter blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/20 rounded-full mix-blend-screen filter blur-3xl opacity-30 translate-x-1/2 translate-y-1/2"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <h2 className="text-blue-400 font-semibold tracking-wide uppercase mb-4 animate-fade-in-up">
          Hello, I'm
        </h2>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
          {PERSONAL_INFO.name}
        </h1>
        <p className="mt-4 text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto mb-10">
          {PERSONAL_INFO.title}
        </p>
        
        <div className="flex justify-center gap-4">
          <a href="#projects" className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all transform hover:-translate-y-1 shadow-lg shadow-blue-600/25">
            View My Work
          </a>
          <a href="#contact" className="px-8 py-3 bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 rounded-lg font-medium transition-all transform hover:-translate-y-1">
            Contact Me
          </a>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-slate-500">
          <ChevronDown size={32} />
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-slate-900 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="w-full md:w-1/2">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-lg opacity-30"></div>
              <div className="relative bg-slate-800 rounded-2xl p-8 border border-slate-700 shadow-2xl">
                <Code className="w-12 h-12 text-blue-400 mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">The Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {SKILLS.map((skill, index) => (
                    <span key={index} className="px-3 py-1 bg-slate-700 text-blue-200 text-sm rounded-full font-medium border border-slate-600">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <User className="text-blue-500" />
              About Me
            </h2>
            <p className="text-lg text-slate-300 leading-relaxed mb-6">
              {PERSONAL_INFO.about}
            </p>
            <div className="flex gap-4">
              <a href={PERSONAL_INFO.socials.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                <Github size={24} />
              </a>
              <a href={PERSONAL_INFO.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                <Linkedin size={24} />
              </a>
              <a href={`mailto:${PERSONAL_INFO.email}`} className="text-slate-400 hover:text-white transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4 flex items-center justify-center gap-3">
            <Briefcase className="text-purple-500" />
            Featured Projects
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A selection of projects that demonstrate my passion for building clean, performant web applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <div key={project.id} className="group relative bg-slate-900 rounded-xl overflow-hidden border border-slate-800 hover:border-slate-600 transition-all duration-300 hover:-translate-y-2">
              <div className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                <div className="transform group-hover:scale-110 transition-transform duration-300">
                  {project.icon}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-slate-400 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-xs font-medium text-slate-300 bg-slate-800 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between mt-auto">
                  <a href={project.repo} className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors">
                    <Github size={16} /> Code
                  </a>
                  <a href={project.link} className="flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors">
                    <ExternalLink size={16} /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [formStatus, setFormStatus] = useState('idle'); // idle, sending, success

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('sending');
    // Simulate API call
    setTimeout(() => {
      setFormStatus('success');
      e.target.reset();
      setTimeout(() => setFormStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-800 rounded-2xl p-8 md:p-12 border border-slate-700 shadow-2xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white mb-4">Get In Touch</h2>
            <p className="text-slate-400">
              Have a project in mind or just want to say hi? I'd love to hear from you.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">Message</label>
              <textarea
                id="message"
                required
                rows={4}
                className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="Tell me about your project..."
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={formStatus === 'sending' || formStatus === 'success'}
              className={`w-full py-4 rounded-lg font-bold text-white flex items-center justify-center gap-2 transition-all transform hover:-translate-y-1 ${
                formStatus === 'success' 
                  ? 'bg-green-600 hover:bg-green-700' 
                  : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700'
              }`}
            >
              {formStatus === 'idle' && (
                <>
                  Send Message <Send size={20} />
                </>
              )}
              {formStatus === 'sending' && 'Sending...'}
              {formStatus === 'success' && 'Message Sent!'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-950 py-8 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-slate-500 text-sm">
          © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
        </p>
        <div className="mt-4 flex justify-center gap-6">
           <a href="#" className="text-slate-600 hover:text-slate-400 text-sm">Privacy Policy</a>
           <a href="#" className="text-slate-600 hover:text-slate-400 text-sm">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

const App = () => {
  return (
    <div className="bg-slate-900 min-h-screen text-slate-100 font-sans selection:bg-blue-500/30">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;