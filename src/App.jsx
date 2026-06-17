import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  Briefcase, 
  GraduationCap, 
  Code2, 
  Award, 
  ExternalLink, 
  CheckCircle2, 
  Music, 
  Brain,
  Terminal,
  Trophy,
  Sliders,
  ChevronRight,
  Menu,
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Custom Brand Icons (since Lucide-react doesn't package external brands in newer releases)
const GithubIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const KaggleIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M18.82 2.457a.35.35 0 0 0-.469-.029L9.432 10.15 4.793 4.25a.35.35 0 0 0-.547.018l-1.636 2.08a.35.35 0 0 0 .041.47l5.962 5.097-5.996 5.378a.35.35 0 0 0-.012.497l1.794 1.932a.35.35 0 0 0 .506.012l4.896-4.996 8.784 7.625c.16.14.402.107.522-.073l2.002-3.003a.35.35 0 0 0-.074-.467L13.882 12.87l4.97-4.14 2.122-3.41c.105-.17.065-.39-.092-.511l-2.062-1.353z" />
  </svg>
);

export default function App() {
  const [activeTab, setActiveTab] = useState('all');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Resume Data
  const personalInfo = {
    name: "Sruthi R",
    role: "AI / ML Developer & Full Stack Engineer",
    college: "Sri Eshwar College of Engineering",
    education: "B.E. Computer Science & Engineering (AI & ML)",
    phone: "9345125327",
    email: "sruthi.r.analyst@gmail.com",
    links: {
      linkedin: "https://www.linkedin.com/in/sruthi-r-6b2768322/",
      github: "https://github.com/sruthi-analyst/",
      kaggle: "https://www.kaggle.com/sruthir"
    }
  };

  const codingStats = [
    { platform: "Skill Rack", metric: "1100+ Problems Solved", detail: "13 Certificates | 300+ Bronzes", color: "from-amber-500 to-orange-600" },
    { platform: "LeetCode", metric: "90+ Problems Solved", detail: "Global Rank: 186,353", color: "from-yellow-500 to-amber-600" },
    { platform: "CodeChef", metric: "Global Rank: 183,179", detail: "3 Gold Badges | Country Rank: 175,924", color: "from-emerald-500 to-teal-600" },
    { platform: "Smart India Hackathon (SIH)", metric: "SIH Finalist 2025", detail: "Team Leader & Logistics Developer", color: "from-blue-500 to-indigo-600" }
  ];

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Terminal className="w-5 h-5 text-indigo-400" />,
      skills: ["C", "Python", "C++", "Java"]
    },
    {
      title: "AI / ML & GenAI",
      icon: <Brain className="w-5 h-5 text-teal-400" />,
      skills: ["Agentic AI", "RAG", "Generative AI", "Machine Learning", "Deep Learning", "NLP"]
    },
    {
      title: "Technologies & Frameworks",
      icon: <Code2 className="w-5 h-5 text-teal-400" />,
      skills: ["React", "Supabase", "SQL", "PostgreSQL", "HTML", "CSS", "JavaScript"]
    },
    {
      title: "Tools & Analytics",
      icon: <Sliders className="w-5 h-5 text-fuchsia-400" />,
      skills: ["Power BI", "VS Code", "GitHub", "Figma", "Canva", "IntelliJ", "Microsoft Excel"]
    }
  ];

  const projects = [
    {
      title: "Navaura",
      subtitle: "AI powered Logistics Optimizer",
      tag: "AI / Logistics",
      date: "Dec 2025",
      desc: "Developed for Steel Authority of India Limited (SAIL) under SIH'25. Solves complex vehicle routing and supply chain optimization challenges using intelligent scheduling algorithms.",
      tech: ["Python", "AI Algorithms", "Optimization", "SAIL"]
    },
    {
      title: "Smart Power Strip",
      subtitle: "MSME 5.0 Initiative",
      tag: "IoT / Hardware",
      date: "Aug 2025",
      desc: "An intelligent power-saving hardware integration aimed at monitoring appliance electricity usage and controlling output remotely to avoid energy wastage.",
      tech: ["IoT", "Hardware Integration", "Energy Management"]
    },
    {
      title: "Carpe Diem",
      subtitle: "GenAI Hackathon Financial Website",
      tag: "Web / GenAI",
      date: "Aug 2025",
      desc: "Built a smart financial assistant site for the GenAI Hackathon leveraging IBM Granite 3.3 model, React frontend, and Firebase background management.",
      tech: ["React", "Firebase", "IBM Granite 3.3", "GenAI"]
    },
    {
      title: "APEP",
      subtitle: "Emotional Well-being Productivity App",
      tag: "Mobile App",
      date: "Apr 2025",
      desc: "Designed and engineered an emotional productivity tracking application designed to improve mental well-being through integrated daily schedules and mood tracking.",
      tech: ["Kotlin", "XML", "Figma", "Android Studio"]
    },
    {
      title: "Creatathon Portfolio",
      subtitle: "Responsive Personal Site",
      tag: "Web App",
      date: "Dec 2024",
      desc: "Created a modern and interactive landing page design displaying professional achievements and technical skills using raw web technologies.",
      tech: ["HTML5", "CSS3", "JavaScript"]
    },
    {
      title: "C Conclave",
      subtitle: "Inventory Management System",
      tag: "System Software",
      date: "Dec 2024",
      desc: "Constructed a comprehensive command-line and local store stock tracker and management software utilizing efficient low-level C programming structures.",
      tech: ["C Programming", "Data Structures", "File Management"]
    }
  ];

  const internships = [
    {
      role: "ERP Development Intern",
      company: "Sodexix India, Pvt. Ltd.",
      location: "Puducherry",
      duration: "Dec 2025 - Jan 2026",
      desc: "Gained hands-on experience in business suite software configuration and customization using Odoo ERP framework. Handled backend python controller setups, database schemas, and tailored customer relationship management integrations."
    }
  ];

  const certificates = [
    { title: "Microsoft Power BI Data Analyst", source: "Coursera", date: "Apr 2026" },
    { title: "Design Thinking - A Premier (Elite Silver)", source: "IITM (NPTEL)", date: "Mar 2026" },
    { title: "SIH-2025 Grand Finale Participation", source: "Smart India Hackathon", date: "Dec 2025" },
    { title: "Introduction to SQL", source: "SoloLearn", date: "Oct 2025" },
    { title: "Java Oracle Badge", source: "Oracle Learning Explorer", date: "Sept 2025" },
    { title: "Introduction to Generative AI", source: "IBM SkillsBuild", date: "Aug 2025" },
    { title: "C, AI, DS, DL and NLP Certifications", source: "InfySpringboard", date: "Jun 2025" },
    { title: "Mastering Data Structures & Algorithms", source: "Abdul Bari (Udemy)", date: "May 2025" },
    { title: "C & CPP Training Certificate", source: "Spoken Tutorial (IIT Bombay)", date: "Dec 2024" }
  ];

  const achievements = [
    { title: "Vice President Education (VPE)", organization: "Toastmasters International (SETC Chapter 2)", date: "Jul 2026 - Dec 2026" },
    { title: "3rd Prize - Table Topics Contest", organization: "Toastmasters SETC Chapter 2", date: "Mar 2026" },
    { title: "Sergeant at Arms (SAA)", organization: "Toastmasters International (SETC Chapter 2)", date: "Jan 2026 - Jun 2026" },
    { title: "SIH Finalist 2025 - Team Leader", organization: "Smart India Hackathon", date: "Dec 2025" },
    { title: "3rd Prize - Evaluation Contest", organization: "Toastmasters SETC Chapter 2", date: "Sept 2025" },
    { title: "GenAI Hackathon - Top 10 Finalist", organization: "SmartInternz at Sri Eshwar College", date: "Aug 2025" },
    { title: "Second Prize - Inter College Instruments (Flute)", organization: "Non-Technical Contest", date: "Oct 2024" }
  ];

  const education = [
    { degree: "B.E (CSE-AIML)", school: "Sri Eshwar College of Engineering", score: "CGPA: 8.45 (Sem III)", duration: "2024 - 2028" },
    { degree: "HSC (Higher Secondary Certificate)", school: "Arsha Vidya Mandir", score: "84.8%", duration: "2023 - 2024" },
    { degree: "SSLC (Secondary School Leaving Certificate)", school: "Arsha Vidya Mandir", score: "94.4%", duration: "2021 - 2022" }
  ];

  return (
    <div className="relative min-h-screen overflow-x-hidden font-sans selection:bg-indigo-600 selection:text-white bg-slate-950">
      
      {/* Background Aura Gradients */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-indigo-500/10 blur-[120px] pointer-events-none"></div>
      <div className="absolute top-[30%] right-10 w-[400px] h-[400px] rounded-full bg-teal-500/10 blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-[20%] left-10 w-[600px] h-[600px] rounded-full bg-purple-500/10 blur-[130px] pointer-events-none"></div>

      {/* Floating Header / Navbar */}
      <header className="sticky top-4 z-50 max-w-6xl mx-auto px-4 md:px-6">
        <nav className="flex items-center justify-between px-6 py-4 rounded-2xl border border-slate-800/80 bg-slate-900/60 backdrop-blur-xl shadow-lg shadow-indigo-950/20">
          <a href="#" className="flex items-center space-x-3 text-xl font-bold tracking-tight bg-gradient-to-r from-indigo-400 via-teal-400 to-emerald-400 bg-clip-text text-transparent">
            <img src="/avatar.png" alt="Sruthi R logo" className="w-7 h-7 rounded-full object-cover border border-indigo-500/40 inline" />
            <span>Sruthi R.</span>
          </a>

          {/* Desktop Nav Items */}
          <ul className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-300">
            <li><a href="#about" className="hover:text-indigo-400 transition-colors">About</a></li>
            <li><a href="#skills" className="hover:text-indigo-400 transition-colors">Skills & Stats</a></li>
            <li><a href="#experience" className="hover:text-indigo-400 transition-colors">Experience</a></li>
            <li><a href="#projects" className="hover:text-indigo-400 transition-colors">Projects</a></li>
            <li><a href="#achievements" className="hover:text-indigo-400 transition-colors">Achievements</a></li>
          </ul>

          <div className="hidden md:block">
            <a 
              href="#contact" 
              className="px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-300 border border-slate-700 bg-slate-800/50 hover:bg-indigo-600 hover:border-indigo-500 hover:shadow-indigo-500/20 hover:shadow-md"
            >
              Get In Touch
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-slate-300 hover:text-white">
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden absolute top-20 left-4 right-4 p-6 rounded-2xl border border-slate-800 bg-slate-900/95 shadow-xl"
            >
              <ul className="flex flex-col space-y-4 text-center font-medium text-slate-300">
                <li><a onClick={() => setMobileMenuOpen(false)} href="#about" className="block py-2 hover:text-indigo-400">About</a></li>
                <li><a onClick={() => setMobileMenuOpen(false)} href="#skills" className="block py-2 hover:text-indigo-400">Skills & Stats</a></li>
                <li><a onClick={() => setMobileMenuOpen(false)} href="#experience" className="block py-2 hover:text-indigo-400">Experience</a></li>
                <li><a onClick={() => setMobileMenuOpen(false)} href="#projects" className="block py-2 hover:text-indigo-400">Projects</a></li>
                <li><a onClick={() => setMobileMenuOpen(false)} href="#achievements" className="block py-2 hover:text-indigo-400">Achievements</a></li>
                <li><a onClick={() => setMobileMenuOpen(false)} href="#contact" className="block py-2 text-indigo-400 font-semibold">Contact</a></li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content Area */}
      <main className="max-w-6xl mx-auto px-4 md:px-6 pt-12 pb-24 space-y-28">

        {/* Hero Section */}
        <section id="hero" className="flex flex-col md:flex-row items-center justify-between gap-12 pt-8 md:pt-16">
          <div className="flex-1 space-y-6 text-center md:text-left">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-medium border border-indigo-500/30 bg-indigo-500/10 text-indigo-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Available for Collaborations</span>
            </div>

            <div className="space-y-3">
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
                Hi, I'm <span className="bg-gradient-to-r from-indigo-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">{personalInfo.name}</span>
              </h1>
              <h2 className="text-xl md:text-2xl font-semibold text-slate-300 font-mono">
                {personalInfo.role}
              </h2>
            </div>

            <p className="text-slate-400 leading-relaxed max-w-xl text-base md:text-lg">
              Currently pursuing my B.E. at <span className="text-indigo-300 font-medium">{personalInfo.college}</span>. Passionate about applying AI and machine learning techniques to solve real-world problems and building performant web products.
            </p>

            {/* Quick Stats Grid */}
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <div className="px-4 py-2 rounded-xl bg-slate-900/60 border border-slate-800/80">
                <span className="text-xs text-slate-500 block">Current Focus</span>
                <span className="text-sm font-semibold text-teal-300">CSE (AI & ML)</span>
              </div>
              <div className="px-4 py-2 rounded-xl bg-slate-900/60 border border-slate-800/80">
                <span className="text-xs text-slate-500 block">Coding Platform</span>
                <span className="text-sm font-semibold text-amber-300">1100+ Solved</span>
              </div>
              <div className="px-4 py-2 rounded-xl bg-slate-900/60 border border-slate-800/80">
                <span className="text-xs text-slate-500 block">Toastmasters</span>
                <span className="text-sm font-semibold text-purple-300">VP Education</span>
              </div>
            </div>

            {/* Social & Contact Actions */}
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start pt-2">
              <a 
                href="#projects" 
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold bg-indigo-600 hover:bg-indigo-500 transition-all text-center text-white shadow-lg shadow-indigo-600/20 hover:shadow-indigo-600/35 hover:-translate-y-0.5"
              >
                View Projects
              </a>
              <div className="flex items-center space-x-3">
                <a href={personalInfo.links.github} target="_blank" rel="noreferrer" className="p-3 rounded-xl border border-slate-800 bg-slate-900/40 hover:bg-slate-800 hover:text-white transition-colors" title="GitHub">
                  <GithubIcon className="w-5 h-5" />
                </a>
                <a href={personalInfo.links.linkedin} target="_blank" rel="noreferrer" className="p-3 rounded-xl border border-slate-800 bg-slate-900/40 hover:bg-slate-800 hover:text-indigo-400 transition-colors" title="LinkedIn">
                  <LinkedinIcon className="w-5 h-5" />
                </a>
                <a href={`mailto:${personalInfo.email}`} className="p-3 rounded-xl border border-slate-800 bg-slate-900/40 hover:bg-slate-800 hover:text-teal-400 transition-colors" title="Email">
                  <Mail className="w-5 h-5" />
                </a>
                <a href={`tel:${personalInfo.phone}`} className="p-3 rounded-xl border border-slate-800 bg-slate-900/40 hover:bg-slate-800 hover:text-emerald-400 transition-colors" title="Call">
                  <Phone className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* AI Image / Avatar Grid */}
          <div className="flex-1 flex justify-center relative">
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-3xl overflow-hidden border-2 border-indigo-500/20 shadow-2xl shadow-indigo-950/50 group">
              {/* Profile Image */}
              <img 
                src="/avatar.png" 
                alt="Sruthi R" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Glass Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
              
              {/* Custom Bottom Label */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl border border-white/10 bg-slate-900/80 backdrop-blur-md">
                <span className="text-xs font-mono text-indigo-400 font-semibold uppercase tracking-wider block">AI / ML Student</span>
                <span className="text-sm text-slate-200 font-bold">Solving problems with code</span>
              </div>
            </div>

            {/* Orbit / Floating badges */}
            <div className="absolute -top-4 -right-4 bg-slate-900 border border-slate-800 px-3.5 py-1.5 rounded-2xl shadow-lg flex items-center space-x-2 animate-bounce">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500"></span>
              <span className="text-xs font-medium font-mono text-slate-300">React Developer</span>
            </div>
            <div className="absolute bottom-10 -left-6 bg-slate-900 border border-slate-800 px-3.5 py-1.5 rounded-2xl shadow-lg flex items-center space-x-2">
              <Brain className="w-4 h-4 text-teal-400" />
              <span className="text-xs font-medium font-mono text-slate-300">GenAI Hackathon</span>
            </div>
          </div>
        </section>

        {/* Section Divider */}
        <hr className="border-slate-900" />

        {/* About / Education Section */}
        <section id="about" className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1 space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-wider text-indigo-400 font-mono">Academic Background</h2>
            <h3 className="text-3xl font-extrabold">Education & Goals</h3>
            <p className="text-slate-400 leading-relaxed">
              Equipped with a solid foundation in computer science and algorithmic thinking, currently specializing in Artificial Intelligence and Machine Learning to model future-ready analytical tools.
            </p>
            <div className="p-5 rounded-2xl border border-slate-800/80 bg-slate-900/30 space-y-3">
              <h4 className="font-bold text-slate-200">Non-Technical highlight</h4>
              <p className="text-sm text-slate-400">
                Talented <span className="text-teal-400 font-medium">Flutist</span> who has performed on numerous college stages including Freshwariites, Dhrona, and Thiran, in addition to securing 2nd prize in the Inter-College Instruments Competition.
              </p>
              <div className="flex items-center space-x-2 text-xs text-indigo-400 font-medium pt-1">
                <Music className="w-4 h-4" />
                <span>Flute Player (Oct 2024)</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-6">
            {education.map((item, idx) => (
              <div 
                key={idx}
                className="group relative flex flex-col md:flex-row justify-between p-6 rounded-2xl border border-slate-800 bg-slate-900/20 hover:bg-slate-900/50 hover:border-slate-700/80 transition-all duration-300"
              >
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <GraduationCap className="w-5 h-5 text-indigo-400" />
                    <h4 className="text-lg font-bold text-slate-100 group-hover:text-indigo-400 transition-colors">{item.degree}</h4>
                  </div>
                  <p className="text-slate-400 text-sm md:text-base">{item.school}</p>
                </div>
                <div className="mt-3 md:mt-0 flex flex-col items-start md:items-end justify-between">
                  <span className="text-xs font-mono text-slate-500 font-medium">{item.duration}</span>
                  <span className="mt-1 px-3 py-1 rounded-full text-xs font-bold bg-teal-500/10 border border-teal-500/20 text-teal-300">{item.score}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section Divider */}
        <hr className="border-slate-900" />

        {/* Skills & Coding Stats Section */}
        <section id="skills" className="space-y-12">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <h2 className="text-xs font-bold uppercase tracking-wider text-indigo-400 font-mono">Expertise Dashboard</h2>
            <h3 className="text-3xl font-extrabold">Technical Stacks & Metrics</h3>
            <p className="text-slate-400">
              A comprehensive breakdown of technical skills, developer toolkits, and achievements across competitive programming portals.
            </p>
          </div>

          {/* Platform Performance Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {codingStats.map((stat, idx) => (
              <div 
                key={idx}
                className="relative overflow-hidden p-6 rounded-2xl border border-slate-850 bg-slate-900/40 hover:bg-slate-900/80 transition-colors group"
              >
                {/* Glowing border/background hover effect */}
                <div className={`absolute top-0 right-0 w-32 h-32 rounded-full bg-gradient-to-tr ${stat.color} opacity-5 group-hover:opacity-10 blur-xl transition-all`}></div>
                
                <h4 className="text-xs font-bold font-mono text-slate-400 uppercase tracking-wide">{stat.platform}</h4>
                <div className="mt-4 space-y-1">
                  <p className="text-xl font-extrabold text-slate-100">{stat.metric}</p>
                  <p className="text-sm text-slate-500">{stat.detail}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Detailed Categorized Skills */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
            {skillCategories.map((cat, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl border border-slate-800/80 bg-slate-900/30 flex flex-col space-y-4"
              >
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-xl bg-slate-900 border border-slate-800">
                    {cat.icon}
                  </div>
                  <h4 className="text-base font-bold text-slate-200">{cat.title}</h4>
                </div>
                <div className="flex flex-wrap gap-2 pt-2">
                  {cat.skills.map((skill, sIdx) => (
                    <span 
                      key={sIdx}
                      className="px-3.5 py-1.5 rounded-xl text-xs font-medium bg-slate-900/90 hover:bg-slate-800 hover:text-white border border-slate-800 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section Divider */}
        <hr className="border-slate-900" />

        {/* Work / Internship Experience */}
        <section id="experience" className="space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-3">
              <h2 className="text-xs font-bold uppercase tracking-wider text-teal-400 font-mono">Professional History</h2>
              <h3 className="text-3xl font-extrabold">Internship & Experience</h3>
            </div>
            <p className="text-slate-400 max-w-md text-sm md:text-base">
              Applying technical concepts in professional enterprise environments, building workflows and scalable systems.
            </p>
          </div>

          <div className="relative pl-6 md:pl-8 border-l border-slate-800 space-y-12">
            {internships.map((job, idx) => (
              <div key={idx} className="relative group">
                {/* Timeline node */}
                <div className="absolute -left-[31px] md:-left-[39px] top-1.5 w-4.5 h-4.5 rounded-full border-4 border-slate-950 bg-teal-400 group-hover:scale-125 transition-transform"></div>
                
                <div className="space-y-3">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-1">
                    <div>
                      <h4 className="text-xl font-bold text-slate-100 group-hover:text-teal-400 transition-colors">{job.role}</h4>
                      <p className="text-sm font-medium text-slate-400">{job.company} — <span className="text-slate-500 font-normal">{job.location}</span></p>
                    </div>
                    <span className="text-xs font-mono text-slate-500 font-bold bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-xl self-start md:self-center">
                      {job.duration}
                    </span>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed max-w-3xl">
                    {job.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section Divider */}
        <hr className="border-slate-900" />

        {/* Projects Section */}
        <section id="projects" className="space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3">
              <h2 className="text-xs font-bold uppercase tracking-wider text-indigo-400 font-mono">My Portfolio</h2>
              <h3 className="text-3xl font-extrabold">Recent Technical Work</h3>
            </div>

            {/* Filter buttons */}
            <div className="flex flex-wrap gap-2">
              {['all', 'AI / Logistics', 'Web / GenAI', 'IoT / Hardware', 'Mobile App'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                    activeTab === tab 
                      ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/10' 
                      : 'border border-slate-850 bg-slate-900/30 text-slate-400 hover:text-white hover:bg-slate-900/60'
                  }`}
                >
                  {tab === 'all' ? 'All Work' : tab}
                </button>
              ))}
            </div>
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects
              .filter(p => activeTab === 'all' || p.tag === activeTab)
              .map((project, idx) => (
                <div 
                  key={idx}
                  className="flex flex-col justify-between p-6 rounded-2xl border border-slate-850 bg-slate-900/40 hover:bg-slate-900/80 hover:border-slate-700/65 transition-all duration-300 group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 rounded-full text-2xs font-mono font-bold bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                        {project.tag}
                      </span>
                      <span className="text-2xs font-mono text-slate-500">{project.date}</span>
                    </div>

                    <div className="space-y-1">
                      <h4 className="text-lg font-bold text-slate-100 group-hover:text-indigo-400 transition-colors">
                        {project.title}
                      </h4>
                      <p className="text-xs text-slate-400 font-medium">
                        {project.subtitle}
                      </p>
                    </div>

                    <p className="text-slate-500 text-sm leading-relaxed line-clamp-4">
                      {project.desc}
                    </p>
                  </div>

                  <div className="pt-6 space-y-4">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((t, tIdx) => (
                        <span 
                          key={tIdx}
                          className="px-2 py-0.5 rounded bg-slate-900 text-slate-400 text-2xs font-medium"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
            ))}
          </div>
        </section>

        {/* Section Divider */}
        <hr className="border-slate-900" />

        {/* Achievements & Certifications */}
        <section id="achievements" className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Toastmasters & Achievements */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <Trophy className="w-6 h-6 text-amber-400" />
              <h3 className="text-2xl font-extrabold">Achievements</h3>
            </div>
            <div className="space-y-4">
              {achievements.map((ach, idx) => (
                <div 
                  key={idx}
                  className="p-4 rounded-xl border border-slate-900 bg-slate-900/20 flex items-start space-x-3.5"
                >
                  <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400 mt-0.5">
                    <Award className="w-4 h-4" />
                  </div>
                  <div className="flex-1 space-y-1">
                    <h4 className="text-sm font-bold text-slate-200">{ach.title}</h4>
                    <p className="text-xs text-slate-500">{ach.organization} — <span className="font-mono">{ach.date}</span></p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications list */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <CheckCircle2 className="w-6 h-6 text-emerald-400" />
              <h3 className="text-2xl font-extrabold">Certifications</h3>
            </div>
            <div className="space-y-4">
              {certificates.map((cert, idx) => (
                <div 
                  key={idx}
                  className="p-4 rounded-xl border border-slate-900 bg-slate-900/20 flex items-start space-x-3.5"
                >
                  <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div className="flex-1 space-y-1">
                    <h4 className="text-sm font-bold text-slate-200">{cert.title}</h4>
                    <p className="text-xs text-slate-500">{cert.source} — <span className="font-mono">{cert.date}</span></p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section Divider */}
        <hr className="border-slate-900" />

        {/* Contact Info Footer / CTA */}
        <section id="contact" className="p-8 md:p-12 rounded-3xl border border-slate-800 bg-gradient-to-b from-indigo-950/20 to-slate-950 relative overflow-hidden text-center space-y-8">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.05),transparent_60%)]"></div>
          
          <div className="space-y-3 max-w-xl mx-auto relative">
            <h2 className="text-xs font-bold uppercase tracking-wider text-teal-400 font-mono">Get In Touch</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold">Let's build something together</h3>
            <p className="text-slate-400 leading-relaxed">
              If you want to discuss a project, need a developer, or just want to connect, feel free to reach out directly.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 max-w-md mx-auto gap-4 relative">
            <a 
              href={`mailto:${personalInfo.email}`} 
              className="flex items-center justify-center space-x-3 p-4 rounded-xl border border-slate-800 bg-slate-900/40 hover:bg-slate-850 hover:border-slate-700 transition-colors"
            >
              <Mail className="w-5 h-5 text-indigo-400" />
              <span className="text-sm font-semibold text-slate-200">{personalInfo.email}</span>
            </a>
            <a 
              href={`tel:${personalInfo.phone}`} 
              className="flex items-center justify-center space-x-3 p-4 rounded-xl border border-slate-800 bg-slate-900/40 hover:bg-slate-850 hover:border-slate-700 transition-colors"
            >
              <Phone className="w-5 h-5 text-teal-400" />
              <span className="text-sm font-semibold text-slate-200">{personalInfo.phone}</span>
            </a>
          </div>

          <div className="flex justify-center space-x-6 pt-4 relative">
            <a href={personalInfo.links.linkedin} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-indigo-400 transition-colors flex items-center space-x-1.5 text-sm font-medium">
              <LinkedinIcon className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
            <a href={personalInfo.links.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors flex items-center space-x-1.5 text-sm font-medium">
              <GithubIcon className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <a href={personalInfo.links.kaggle} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-amber-500 transition-colors flex items-center space-x-1.5 text-sm font-medium">
              <KaggleIcon className="w-4 h-4" />
              <span>Kaggle</span>
            </a>
          </div>
        </section>

      </main>

      {/* Mini footer */}
      <footer className="border-t border-slate-900 bg-slate-950 py-8 text-center text-xs text-slate-600">
        <p>© {new Date().getFullYear()} Sruthi R. All rights reserved. Crafted with React & Tailwind CSS.</p>
      </footer>

    </div>
  );
}
