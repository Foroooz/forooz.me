import React, { useState, useEffect } from 'react';
import { Mail, Github, Linkedin, Twitter, ExternalLink, Code, Gamepad2, Globe, ChevronDown, Menu, X } from 'lucide-react';

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
      icon: <Globe style={{width: '20px', height: '20px'}} />
    },
    {
      id: 2,
      title: "Task Management App",
      category: "Application",
      description: "React-based productivity app with drag-and-drop functionality",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
      link: "#",
      icon: <Code style={{width: '20px', height: '20px'}} />
    },
    {
      id: 3,
      title: "Pixel Adventure Game",
      category: "Game",
      description: "2D platformer game built with HTML5 Canvas and JavaScript",
      technologies: ["JavaScript", "HTML5 Canvas", "CSS3"],
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=500&h=300&fit=crop",
      link: "#",
      icon: <Gamepad2 style={{width: '20px', height: '20px'}} />
    },
    {
      id: 4,
      title: "Restaurant WordPress Theme",
      category: "WordPress",
      description: "Custom responsive theme for restaurants with online ordering",
      technologies: ["WordPress", "PHP", "SCSS", "jQuery"],
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500&h=300&fit=crop",
      link: "#",
      icon: <Globe style={{width: '20px', height: '20px'}} />
    },
    {
      id: 5,
      title: "Weather Dashboard",
      category: "Application",
      description: "Real-time weather app with location-based forecasts",
      technologies: ["React", "API Integration", "Chart.js"],
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop",
      link: "#",
      icon: <Code style={{width: '20px', height: '20px'}} />
    },
    {
      id: 6,
      title: "Retro Puzzle Game",
      category: "Game",
      description: "Browser-based puzzle game with pixel art graphics",
      technologies: ["JavaScript", "Canvas API", "Local Storage"],
      image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=500&h=300&fit=crop",
      link: "#",
      icon: <Gamepad2 style={{width: '20px', height: '20px'}} />
    }
  ];

  const skills = [
    { category: "Frontend", items: ["React", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "SCSS"] },
    { category: "Backend", items: ["Node.js", "PHP", "Python", "Express.js", "MongoDB", "MySQL"] },
    { category: "CMS & Tools", items: ["WordPress", "Git", "Figma", "Adobe Creative Suite", "VS Code"] },
    { category: "Game Development", items: ["HTML5 Canvas", "Phaser.js", "Unity Basics", "Pixel Art"] }
  ];

  const styles = {
    // Base styles
    body: {
      minHeight: '100vh',
      backgroundColor: '#f0efed',
      fontFamily: 'monospace',
      margin: 0,
      padding: 0
    },
    
    // Header styles
    header: {
      position: 'fixed',
      top: 0,
      width: '100%',
      backgroundColor: '#f0efed',
      borderBottom: '2px solid #333',
      zIndex: 50,
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    },
    
    headerContainer: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '16px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    
    logo: {
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#333',
      cursor: 'pointer'
    },
    
    nav: {
      display: 'flex',
      gap: '32px'
    },
    
    navHidden: {
      display: 'none'
    },
    
    navButton: {
      padding: '8px 12px',
      border: '2px solid transparent',
      backgroundColor: 'transparent',
      cursor: 'pointer',
      fontFamily: 'monospace',
      transition: 'all 0.3s ease'
    },
    
    navButtonActive: {
      border: '2px solid #333',
      backgroundColor: '#e5e5e5'
    },
    
    mobileMenuButton: {
      display: 'none',
      padding: '8px',
      border: '2px solid #333',
      backgroundColor: 'transparent',
      cursor: 'pointer'
    },
    
    // Mobile navigation
    mobileNav: {
      backgroundColor: '#f0efed',
      borderTop: '2px solid #333',
      padding: '16px'
    },
    
    // Section styles
    section: {
      padding: '64px 16px'
    },
    
    sectionWhite: {
      backgroundColor: 'white',
      borderTop: '4px solid #333'
    },
    
    container: {
      maxWidth: '1200px',
      margin: '0 auto'
    },
    
    // Hero section
    hero: {
      paddingTop: '96px',
      paddingBottom: '64px',
      textAlign: 'center'
    },
    
    avatar: {
      width: '128px',
      height: '128px',
      margin: '0 auto 24px',
      background: 'linear-gradient(135deg, #ff6f61, #4a90e2)',
      border: '4px solid #333',
      imageRendering: 'pixelated'
    },
    
    heroTitle: {
      fontSize: 'clamp(2rem, 8vw, 4rem)',
      fontWeight: 'bold',
      color: '#333',
      marginBottom: '16px'
    },
    
    heroSubtitle: {
      fontSize: 'clamp(1.25rem, 4vw, 2rem)',
      color: '#666',
      marginBottom: '32px'
    },
    
    heroDescription: {
      color: '#666',
      marginBottom: '48px',
      maxWidth: '600px',
      margin: '0 auto 48px',
      lineHeight: '1.6'
    },
    
    buttonGroup: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '16px',
      marginBottom: '48px'
    },
    
    buttonPrimary: {
      padding: '12px 24px',
      backgroundColor: '#ff6f61',
      color: 'white',
      border: '2px solid #333',
      cursor: 'pointer',
      fontFamily: 'monospace',
      transition: 'background-color 0.3s ease'
    },
    
    buttonSecondary: {
      padding: '12px 24px',
      backgroundColor: 'transparent',
      border: '2px solid #333',
      cursor: 'pointer',
      fontFamily: 'monospace',
      transition: 'background-color 0.3s ease'
    },
    
    socialLinks: {
      display: 'flex',
      justifyContent: 'center',
      gap: '24px',
      marginBottom: '48px'
    },
    
    socialLink: {
      color: '#666',
      transition: 'color 0.3s ease',
      cursor: 'pointer'
    },
    
    // Grid layouts
    grid2: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '48px',
      alignItems: 'center'
    },
    
    grid3: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '32px'
    },
    
    grid4: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '32px'
    },
    
    // Card styles
    card: {
      backgroundColor: 'white',
      border: '2px solid #333',
      overflow: 'hidden',
      transition: 'box-shadow 0.3s ease'
    },
    
    cardImage: {
      width: '100%',
      height: '192px',
      objectFit: 'cover',
      imageRendering: 'pixelated',
      transition: 'transform 0.3s ease'
    },
    
    cardContent: {
      padding: '24px'
    },
    
    cardHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: '12px'
    },
    
    cardTitle: {
      fontWeight: 'bold',
      fontSize: '18px'
    },
    
    categoryBadge: {
      fontSize: '12px',
      backgroundColor: '#f5f5f5',
      border: '1px solid #333',
      padding: '4px 8px'
    },
    
    techStack: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '8px',
      marginBottom: '16px'
    },
    
    techBadge: {
      fontSize: '12px',
      backgroundColor: '#333',
      color: 'white',
      padding: '4px 8px'
    },
    
    // Skills section
    skillCategory: {
      textAlign: 'center'
    },
    
    skillIcon: {
      width: '64px',
      height: '64px',
      margin: '0 auto 16px',
      border: '2px solid #333',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    
    skillList: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px'
    },
    
    skillItem: {
      backgroundColor: '#f5f5f5',
      border: '1px solid #333',
      padding: '8px 12px',
      fontSize: '14px'
    },
    
    // Contact section
    contactGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '48px'
    },
    
    contactInfo: {
      border: '2px solid #333',
      padding: '16px',
      backgroundColor: 'white',
      display: 'flex',
      alignItems: 'center',
      gap: '16px'
    },
    
    formGroup: {
      marginBottom: '24px'
    },
    
    label: {
      display: 'block',
      fontWeight: 'bold',
      marginBottom: '8px'
    },
    
    input: {
      width: '100%',
      padding: '12px',
      border: '2px solid #333',
      backgroundColor: 'white',
      fontFamily: 'monospace',
      boxSizing: 'border-box'
    },
    
    textarea: {
      width: '100%',
      padding: '12px',
      border: '2px solid #333',
      backgroundColor: 'white',
      fontFamily: 'monospace',
      resize: 'none',
      boxSizing: 'border-box'
    },
    
    // Footer
    footer: {
      backgroundColor: '#333',
      color: 'white',
      padding: '32px 16px',
      textAlign: 'center'
    },
    
    // Section titles
    sectionTitle: {
      fontSize: 'clamp(2rem, 6vw, 3rem)',
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: '48px',
      color: '#333'
    },
    
    // About section specific
    aboutCard: {
      border: '2px solid #333',
      padding: '24px',
      marginBottom: '24px'
    },
    
    // Responsive styles
    '@media (max-width: 768px)': {
      nav: {
        display: 'none'
      },
      mobileMenuButton: {
        display: 'block'
      }
    }
  };

  return (
    <div style={styles.body}>
      {/* Navigation Header */}
      <header style={styles.header}>
        <div style={styles.headerContainer}>
          {/* Logo */}
          <div style={styles.logo} onClick={() => scrollToSection('home')}>
            &lt;Dev/&gt;
          </div>

          {/* Desktop Navigation */}
          <nav style={window.innerWidth > 768 ? styles.nav : styles.navHidden}>
            {['Home', 'About', 'Portfolio', 'Skills', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                style={{
                  ...styles.navButton,
                  ...(activeSection === item.toLowerCase() ? styles.navButtonActive : {})
                }}
                onMouseEnter={(e) => {
                  if (activeSection !== item.toLowerCase()) {
                    e.target.style.border = '2px solid #333';
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeSection !== item.toLowerCase()) {
                    e.target.style.border = '2px solid transparent';
                  }
                }}
              >
                {item}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            style={window.innerWidth <= 768 ? styles.mobileMenuButton : {display: 'none'}}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X style={{width: '20px', height: '20px'}} /> : <Menu style={{width: '20px', height: '20px'}} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div style={styles.mobileNav}>
            <nav style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
              {['Home', 'About', 'Portfolio', 'Skills', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  style={{...styles.navButton, width: '100%', textAlign: 'left'}}
                >
                  {item}
                </button>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" style={styles.hero}>
        <div style={styles.container}>
          <div style={styles.avatar}></div>
          
          <h1 style={styles.heroTitle}>
            Hello, I'm <span style={{color: '#ff6f61'}}>Alex</span>
          </h1>
          
          <p style={styles.heroSubtitle}>
            Full-Stack Developer & Game Creator
          </p>
          
          <p style={styles.heroDescription}>
            I craft digital experiences through web development, create engaging applications, 
            and bring ideas to life through games and interactive media.
          </p>

          <div style={styles.buttonGroup}>
            <button 
              onClick={() => scrollToSection('portfolio')}
              style={styles.buttonPrimary}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#e55a4f'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#ff6f61'}
            >
              View My Work
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              style={styles.buttonSecondary}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#f5f5f5'}
              onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
            >
              Get In Touch
            </button>
          </div>

          <div style={styles.socialLinks}>
            <a href="#" style={styles.socialLink}>
              <Github style={{width: '24px', height: '24px'}} />
            </a>
            <a href="#" style={styles.socialLink}>
              <Linkedin style={{width: '24px', height: '24px'}} />
            </a>
            <a href="#" style={styles.socialLink}>
              <Twitter style={{width: '24px', height: '24px'}} />
            </a>
          </div>

          <div style={{marginTop: '48px', animation: 'bounce 2s infinite'}}>
            <ChevronDown style={{width: '32px', height: '32px', margin: '0 auto', color: '#999'}} />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" style={{...styles.section, ...styles.sectionWhite}}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>About Me</h2>
          
          <div style={styles.grid2}>
            <div>
              <p style={{color: '#666', marginBottom: '24px', lineHeight: '1.6'}}>
                I'm a passionate full-stack developer with a love for creating both functional 
                web applications and entertaining games. My journey started with WordPress development, 
                where I learned to craft custom themes and plugins for clients.
              </p>
              
              <p style={{color: '#666', marginBottom: '24px', lineHeight: '1.6'}}>
                Over the years, I've expanded into modern web technologies like React and Node.js, 
                building scalable applications that solve real-world problems. Game development 
                became my creative outlet, allowing me to combine technical skills with artistic vision.
              </p>
              
              <p style={{color: '#666', lineHeight: '1.6'}}>
                When I'm not coding, you can find me sketching pixel art, exploring new technologies, 
                or playing the latest indie games for inspiration.
              </p>
            </div>
            
            <div>
              <div style={{...styles.aboutCard, background: 'linear-gradient(90deg, rgba(255,111,97,0.1), transparent)'}}>
                <h3 style={{fontWeight: 'bold', fontSize: '18px', marginBottom: '8px'}}>WordPress Specialist</h3>
                <p style={{color: '#666'}}>Custom themes, plugins, and e-commerce solutions</p>
              </div>
              
              <div style={{...styles.aboutCard, background: 'linear-gradient(90deg, rgba(74,144,226,0.1), transparent)'}}>
                <h3 style={{fontWeight: 'bold', fontSize: '18px', marginBottom: '8px'}}>Full-Stack Developer</h3>
                <p style={{color: '#666'}}>Modern web applications with React and Node.js</p>
              </div>
              
              <div style={{...styles.aboutCard, background: 'linear-gradient(90deg, rgba(245,166,35,0.1), transparent)', marginBottom: 0}}>
                <h3 style={{fontWeight: 'bold', fontSize: '18px', marginBottom: '8px'}}>Game Creator</h3>
                <p style={{color: '#666'}}>Interactive experiences and pixel art games</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" style={styles.section}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>My Work</h2>
          
          <div style={styles.grid3}>
            {portfolioItems.map((item) => (
              <div 
                key={item.id}
                style={styles.card}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.1)';
                  const img = e.currentTarget.querySelector('img');
                  if (img) img.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = 'none';
                  const img = e.currentTarget.querySelector('img');
                  if (img) img.style.transform = 'scale(1)';
                }}
              >
                <div style={{position: 'relative', overflow: 'hidden'}}>
                  <img 
                    src={item.image} 
                    alt={item.title}
                    style={styles.cardImage}
                  />
                  <div style={{position: 'absolute', top: '16px', left: '16px'}}>
                    <div style={{backgroundColor: 'white', border: '2px solid #333', padding: '8px'}}>
                      {item.icon}
                    </div>
                  </div>
                </div>
                
                <div style={styles.cardContent}>
                  <div style={styles.cardHeader}>
                    <h3 style={styles.cardTitle}>{item.title}</h3>
                    <span style={styles.categoryBadge}>
                      {item.category}
                    </span>
                  </div>
                  
                  <p style={{color: '#666', marginBottom: '16px', fontSize: '14px'}}>{item.description}</p>
                  
                  <div style={styles.techStack}>
                    {item.technologies.map((tech) => (
                      <span 
                        key={tech}
                        style={styles.techBadge}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <a 
                    href={item.link}
                    style={{display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#4a90e2', textDecoration: 'none'}}
                  >
                    View Project <ExternalLink style={{width: '16px', height: '16px'}} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" style={{...styles.section, ...styles.sectionWhite}}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>Skills & Technologies</h2>
          
          <div style={styles.grid4}>
            {skills.map((skillGroup, index) => (
              <div key={skillGroup.category} style={styles.skillCategory}>
                <div style={{
                  ...styles.skillIcon,
                  backgroundColor: index % 4 === 0 ? '#ff6f61' : 
                    index % 4 === 1 ? '#4a90e2' : 
                    index % 4 === 2 ? '#f5a623' : '#666'
                }}>
                  <div style={{width: '32px', height: '32px', backgroundColor: 'white'}}></div>
                </div>
                
                <h3 style={{fontWeight: 'bold', fontSize: '18px', marginBottom: '16px'}}>{skillGroup.category}</h3>
                
                <div style={styles.skillList}>
                  {skillGroup.items.map((skill) => (
                    <div 
                      key={skill}
                      style={styles.skillItem}
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
      <section id="contact" style={styles.section}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>Let's Work Together</h2>
          
          <div style={styles.contactGrid}>
            <div>
              <h3 style={{fontSize: '20px', fontWeight: 'bold', marginBottom: '24px'}}>Get In Touch</h3>
              <p style={{color: '#666', marginBottom: '32px', lineHeight: '1.6'}}>
                I'm always interested in new opportunities and exciting projects. 
                Whether you need a custom WordPress solution, a web application, 
                or want to discuss a game idea, let's chat!
              </p>
              
              <div style={{marginBottom: '16px'}}>
                <div style={styles.contactInfo}>
                  <Mail style={{width: '24px', height: '24px', color: '#ff6f61'}} />
                  <div>
                    <p style={{fontWeight: 'bold', margin: 0}}>Email</p>
                    <p style={{color: '#666', margin: 0}}>hello@example.com</p>
                  </div>
                </div>
              </div>
              
              <div style={{display: 'flex', gap: '16px'}}>
                <a 
                  href="#" 
                  style={{
                    flex: 1,
                    padding: '16px',
                    border: '2px solid #333',
                    backgroundColor: 'white',
                    textAlign: 'center',
                    textDecoration: 'none',
                    color: 'inherit',
                    transition: 'background-color 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#f5f5f5'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = 'white'}
                >
                  <Github style={{width: '24px', height: '24px', margin: '0 auto 8px'}} />
                  <p style={{fontSize: '14px', margin: 0}}>GitHub</p>
                </a>
                
                <a 
                  href="#" 
                  style={{
                    flex: 1,
                    padding: '16px',
                    border: '2px solid #333',
                    backgroundColor: 'white',
                    textAlign: 'center',
                    textDecoration: 'none',
                    color: 'inherit',
                    transition: 'background-color 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#f5f5f5'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = 'white'}
                >
                  <Linkedin style={{width: '24px', height: '24px', margin: '0 auto 8px'}} />
                  <p style={{fontSize: '14px', margin: 0}}>LinkedIn</p>
                </a>
              </div>
            </div>
            
            <div>
              <div style={styles.formGroup}>
                <label style={styles.label}>Name</label>
                <input 
                  type="text"
                  style={styles.input}
                  placeholder="Your name"
                />
              </div>
              
              <div style={styles.formGroup}>
                <label style={styles.label}>Email</label>
                <input 
                  type="email"
                  style={styles.input}
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div style={styles.formGroup}>
                <label style={styles.label}>Project Type</label>
                <select style={styles.input}>
                  <option>WordPress Development</option>
                  <option>Web Application</option>
                  <option>Game Development</option>
                  <option>Other</option>
                </select>
              </div>
              
              <div style={styles.formGroup}>
                <label style={styles.label}>Message</label>
                <textarea 
                  rows={4}
                  style={styles.textarea}
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              
              <button 
                style={{
                  width: '100%',
                  padding: '12px',
                  backgroundColor: '#4a90e2',
                  color: 'white',
                  border: '2px solid #333',
                  cursor: 'pointer',
                  fontFamily: 'monospace',
                  transition: 'background-color 0.3s ease'
                }}
                onClick={() => alert('Contact form submitted! (This is a demo)')}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#3a7bc8'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#4a90e2'}
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.container}>
          <div style={{marginBottom: '24px'}}>
            <div style={{fontSize: '24px', fontWeight: 'bold', marginBottom: '16px'}}>&lt;Dev/&gt;</div>
            <div style={{display: 'flex', justifyContent: 'center', gap: '24px'}}>
              <a href="#" style={{color: 'white', transition: 'color 0.3s ease'}} onMouseEnter={(e) => e.target.style.color = '#ff6f61'} onMouseLeave={(e) => e.target.style.color = 'white'}>
                <Github style={{width: '20px', height: '20px'}} />
              </a>
              <a href="#" style={{color: 'white', transition: 'color 0.3s ease'}} onMouseEnter={(e) => e.target.style.color = '#ff6f61'} onMouseLeave={(e) => e.target.style.color = 'white'}>
                <Linkedin style={{width: '20px', height: '20px'}} />
              </a>
              <a href="#" style={{color: 'white', transition: 'color 0.3s ease'}} onMouseEnter={(e) => e.target.style.color = '#ff6f61'} onMouseLeave={(e) => e.target.style.color = 'white'}>
                <Twitter style={{width: '20px', height: '20px'}} />
              </a>
            </div>
          </div>
          
          <div style={{borderTop: '1px solid #666', paddingTop: '24px'}}>
            <p style={{color: '#999', margin: 0}}>
              © 2024 Alex Developer. Built with React & pixel-perfect attention to detail.
            </p>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes bounce {
          0%, 20%, 53%, 80%, 100% {
            transform: translateY(0);
          }
          40%, 43% {
            transform: translateY(-30px);
          }
          70% {
            transform: translateY(-15px);
          }
          90% {
            transform: translateY(-4px);
          }
        }

        * {
          box-sizing: border-box;
        }
        
        body {
          margin: 0;
          padding: 0;
        }

        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-btn {
            display: block !important;
          }
        }

        @media (min-width: 769px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-menu-btn {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
};

export default PixelPortfolio;