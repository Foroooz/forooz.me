import React, { useState, useEffect } from 'react';
import { Mail, Github, Linkedin, Twitter, ExternalLink, Code, Gamepad2, Globe, ChevronDown, Menu, X } from 'lucide-react';

// Pixel art style CSS variables
const PixelPortfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Handle scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'portfolio', 'skills', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const portfolioItems = [
    {
      id: 1,
      title: "E-Commerce WordPress Site",
      category: "WordPress",
      description: "Modern e-commerce website with custom theme and WooCommerce integration",
      technologies: ["WordPress", "PHP", "CSS3", "JavaScript"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
      link: "#",
      icon: <Globe className="w-5 h-5" />
    },
    {
      id: 2,
      title: "Task Management App",
      category: "Application",
      description: "React-based productivity app with drag-and-drop functionality",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
      link: "#",
      icon: <Code className="w-5 h-5" />
    },
    {
      id: 3,
      title: "Pixel Adventure Game",
      category: "Game",
      description: "2D platformer game built with HTML5 Canvas and JavaScript",
      technologies: ["JavaScript", "HTML5 Canvas", "CSS3"],
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=500&h=300&fit=crop",
      link: "#",
      icon: <Gamepad2 className="w-5 h-5" />
    },
    {
      id: 4,
      title: "Restaurant WordPress Theme",
      category: "WordPress",
      description: "Custom responsive theme for restaurants with online ordering",
      technologies: ["WordPress", "PHP", "SCSS", "jQuery"],
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500&h=300&fit=crop",
      link: "#",
      icon: <Globe className="w-5 h-5" />
    },
    {
      id: 5,
      title: "Weather Dashboard",
      category: "Application",
      description: "Real-time weather app with location-based forecasts",
      technologies: ["React", "API Integration", "Chart.js"],
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop",
      link: "#",
      icon: <Code className="w-5 h-5" />
    },
    {
      id: 6,
      title: "Retro Puzzle Game",
      category: "Game",
      description: "Browser-based puzzle game with pixel art graphics",
      technologies: ["JavaScript", "Canvas API", "Local Storage"],
      image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=500&h=300&fit=crop",
      link: "#",
      icon: <Gamepad2 className="w-5 h-5" />
    }
  ];

  const skills = [
    { category: "Frontend", items: ["React", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "SCSS"] },
    { category: "Backend", items: ["Node.js", "PHP", "Python", "Express.js", "MongoDB", "MySQL"] },
    { category: "CMS & Tools", items: ["WordPress", "Git", "Figma", "Adobe Creative Suite", "VS Code"] },
    { category: "Game Development", items: ["HTML5 Canvas", "Phaser.js", "Unity Basics", "Pixel Art"] }
  ];

  return (
    <div className="min-h-screen bg-[#f0efed] font-mono">
      {/* Navigation Header */}
      <header className="fixed top-0 w-full bg-[#f0efed] border-b-2 border-gray-800 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-bold text-gray-800 cursor-pointer" onClick={() => scrollToSection('home')}>
            &lt;Dev/&gt;
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {['Home', 'About', 'Portfolio', 'Skills', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`px-3 py-1 border-2 border-transparent hover:border-gray-800 transition-colors ${
                  activeSection === item.toLowerCase() ? 'border-gray-800 bg-gray-100' : ''
                }`}
              >
                {item}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 border-2 border-gray-800"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#f0efed] border-t-2 border-gray-800">
            <nav className="container mx-auto px-4 py-4 space-y-2">
              {['Home', 'About', 'Portfolio', 'Skills', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left px-3 py-2 border-2 border-transparent hover:border-gray-800 transition-colors"
                >
                  {item}
                </button>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className="mb-8">
            {/* Pixel art style avatar placeholder */}
            <div className="w-32 h-32 mx-auto bg-gradient-to-br from-[#ff6f61] to-[#4a90e2] border-4 border-gray-800 mb-6 pixelated"></div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
            Hello, I'm <span className="text-[#ff6f61]">Alex</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Full-Stack Developer & Game Creator
          </p>
          
          <p className="text-gray-600 mb-12 max-w-xl mx-auto">
            I craft digital experiences through web development, create engaging applications, 
            and bring ideas to life through games and interactive media.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="px-6 py-3 bg-[#ff6f61] text-white border-2 border-gray-800 hover:bg-[#e55a4f] transition-colors"
            >
              View My Work
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-6 py-3 bg-transparent border-2 border-gray-800 hover:bg-gray-100 transition-colors"
            >
              Get In Touch
            </button>
          </div>

          <div className="flex justify-center space-x-6">
            <a href="#" className="text-gray-600 hover:text-[#4a90e2] transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-600 hover:text-[#4a90e2] transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-600 hover:text-[#4a90e2] transition-colors">
              <Twitter className="w-6 h-6" />
            </a>
          </div>

          <div className="mt-12 animate-bounce">
            <ChevronDown className="w-8 h-8 mx-auto text-gray-400" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-white border-t-4 border-gray-800">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                I'm a passionate full-stack developer with a love for creating both functional 
                web applications and entertaining games. My journey started with WordPress development, 
                where I learned to craft custom themes and plugins for clients.
              </p>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                Over the years, I've expanded into modern web technologies like React and Node.js, 
                building scalable applications that solve real-world problems. Game development 
                became my creative outlet, allowing me to combine technical skills with artistic vision.
              </p>
              
              <p className="text-gray-600 leading-relaxed">
                When I'm not coding, you can find me sketching pixel art, exploring new technologies, 
                or playing the latest indie games for inspiration.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="border-2 border-gray-800 p-6 bg-gradient-to-r from-[#ff6f61]/10 to-transparent">
                <h3 className="font-bold text-lg mb-2">WordPress Specialist</h3>
                <p className="text-gray-600">Custom themes, plugins, and e-commerce solutions</p>
              </div>
              
              <div className="border-2 border-gray-800 p-6 bg-gradient-to-r from-[#4a90e2]/10 to-transparent">
                <h3 className="font-bold text-lg mb-2">Full-Stack Developer</h3>
                <p className="text-gray-600">Modern web applications with React and Node.js</p>
              </div>
              
              <div className="border-2 border-gray-800 p-6 bg-gradient-to-r from-[#f5a623]/10 to-transparent">
                <h3 className="font-bold text-lg mb-2">Game Creator</h3>
                <p className="text-gray-600">Interactive experiences and pixel art games</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            My Work
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item) => (
              <div 
                key={item.id}
                className="bg-white border-2 border-gray-800 overflow-hidden hover:shadow-lg transition-shadow group"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-48 object-cover pixelated group-hover:scale-105 transition-transform"
                  />
                  <div className="absolute top-4 left-4">
                    <div className="bg-white border-2 border-gray-800 p-2">
                      {item.icon}
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-bold text-lg">{item.title}</h3>
                    <span className="text-sm bg-gray-100 border border-gray-800 px-2 py-1">
                      {item.category}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 mb-4 text-sm">{item.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="text-xs bg-gray-800 text-white px-2 py-1"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <a 
                    href={item.link}
                    className="inline-flex items-center gap-2 text-[#4a90e2] hover:text-[#3a7bc8] transition-colors"
                  >
                    View Project <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 bg-white border-t-4 border-gray-800">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            Skills & Technologies
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skillGroup, index) => (
              <div key={skillGroup.category} className="text-center">
                <div className={`w-16 h-16 mx-auto mb-4 border-2 border-gray-800 flex items-center justify-center
                  ${index % 4 === 0 ? 'bg-[#ff6f61]' : 
                    index % 4 === 1 ? 'bg-[#4a90e2]' : 
                    index % 4 === 2 ? 'bg-[#f5a623]' : 'bg-gray-600'}`}>
                  <div className="w-8 h-8 bg-white"></div>
                </div>
                
                <h3 className="font-bold text-lg mb-4">{skillGroup.category}</h3>
                
                <div className="space-y-2">
                  {skillGroup.items.map((skill) => (
                    <div 
                      key={skill}
                      className="bg-gray-100 border border-gray-800 px-3 py-1 text-sm"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            Let's Work Together
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold mb-6">Get In Touch</h3>
              <p className="text-gray-600 mb-8">
                I'm always interested in new opportunities and exciting projects. 
                Whether you need a custom WordPress solution, a web application, 
                or want to discuss a game idea, let's chat!
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 border-2 border-gray-800 bg-white">
                  <Mail className="w-6 h-6 text-[#ff6f61]" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-gray-600">hello@example.com</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <a 
                    href="#" 
                    className="flex-1 p-4 border-2 border-gray-800 bg-white hover:bg-gray-50 transition-colors text-center"
                  >
                    <Github className="w-6 h-6 mx-auto mb-2" />
                    <p className="text-sm">GitHub</p>
                  </a>
                  
                  <a 
                    href="#" 
                    className="flex-1 p-4 border-2 border-gray-800 bg-white hover:bg-gray-50 transition-colors text-center"
                  >
                    <Linkedin className="w-6 h-6 mx-auto mb-2" />
                    <p className="text-sm">LinkedIn</p>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <label className="block font-medium mb-2">Name</label>
                <input 
                  type="text"
                  className="w-full p-3 border-2 border-gray-800 bg-white focus:outline-none focus:border-[#4a90e2]"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label className="block font-medium mb-2">Email</label>
                <input 
                  type="email"
                  className="w-full p-3 border-2 border-gray-800 bg-white focus:outline-none focus:border-[#4a90e2]"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label className="block font-medium mb-2">Project Type</label>
                <select className="w-full p-3 border-2 border-gray-800 bg-white focus:outline-none focus:border-[#4a90e2]">
                  <option>WordPress Development</option>
                  <option>Web Application</option>
                  <option>Game Development</option>
                  <option>Other</option>
                </select>
              </div>
              
              <div>
                <label className="block font-medium mb-2">Message</label>
                <textarea 
                  rows={4}
                  className="w-full p-3 border-2 border-gray-800 bg-white focus:outline-none focus:border-[#4a90e2] resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              
              <button 
                className="w-full py-3 bg-[#4a90e2] text-white border-2 border-gray-800 hover:bg-[#3a7bc8] transition-colors"
                onClick={() => alert('Contact form submitted! (This is a demo)')}
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 px-4">
        <div className="container mx-auto text-center">
          <div className="mb-6">
            <div className="text-2xl font-bold mb-4">&lt;Dev/&gt;</div>
            <div className="flex justify-center space-x-6">
              <a href="#" className="hover:text-[#ff6f61] transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-[#ff6f61] transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-[#ff6f61] transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-6">
            <p className="text-gray-400">
              © 2024 Alex Developer. Built with React & pixel-perfect attention to detail.
            </p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        .pixelated {
          image-rendering: pixelated;
          image-rendering: -moz-crisp-edges;
          image-rendering: crisp-edges;
        }
      `}</style>
    </div>
  );
};

export default PixelPortfolio;