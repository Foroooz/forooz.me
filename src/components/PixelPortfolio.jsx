import React, { useState, useEffect } from 'react';
import { Mail, Github, Linkedin, Twitter, ExternalLink, Code, Gamepad2, Globe, ChevronDown, Menu, X } from 'lucide-react';

const ForoozPortfolio = () => {
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
      description: "Modern e-commerce platform with custom theme and seamless user experience",
      technologies: ["WordPress", "PHP", "CSS3", "JavaScript"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
      link: "#",
      icon: <Globe style={{width: '20px', height: '20px'}} />
    },
    {
      id: 2,
      title: "Task Management App",
      category: "Application",
      description: "Intuitive productivity app with drag-and-drop functionality",
      technologies: ["React", "Node.js", "MongoDB"],
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop",
      link: "#",
      icon: <Code style={{width: '20px', height: '20px'}} />
    },
    {
      id: 3,
      title: "Pixel Adventure Game",
      category: "Game",
      description: "2D platformer with retro aesthetics and smooth gameplay",
      technologies: ["JavaScript", "HTML5 Canvas"],
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&h=300&fit=crop",
      link: "#",
      icon: <Gamepad2 style={{width: '20px', height: '20px'}} />
    },
    {
      id: 4,
      title: "Restaurant WordPress Theme",
      category: "WordPress",
      description: "Elegant restaurant website with online ordering system",
      technologies: ["WordPress", "PHP", "SCSS"],
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop",
      link: "#",
      icon: <Globe style={{width: '20px', height: '20px'}} />
    },
    {
      id: 5,
      title: "Weather Dashboard",
      category: "Application",
      description: "Real-time weather tracking with beautiful data visualization",
      technologies: ["React", "API Integration"],
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=300&fit=crop",
      link: "#",
      icon: <Code style={{width: '20px', height: '20px'}} />
    },
    {
      id: 6,
      title: "Puzzle Game Collection",
      category: "Game",
      description: "Browser-based puzzle games with minimalist design",
      technologies: ["JavaScript", "Canvas API"],
      image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=400&h=300&fit=crop",
      link: "#",
      icon: <Gamepad2 style={{width: '20px', height: '20px'}} />
    }
  ];

  const skills = [
    { category: "Frontend", items: ["React", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"] },
    { category: "Backend", items: ["Node.js", "PHP", "Python", "Express.js", "MongoDB"] },
    { category: "CMS & Tools", items: ["WordPress", "Git", "Figma", "VS Code"] },
    { category: "Game Development", items: ["HTML5 Canvas", "Phaser.js", "Pixel Art"] }
  ];

  const styles = {
    // Global styles
    body: {
      margin: 0,
      padding: 0,
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      backgroundColor: '#fafafa',
      color: '#333',
      lineHeight: '1.6'
    },

    // Header
    header: {
      position: 'fixed',
      top: 0,
      width: '100%',
      backgroundColor: 'rgba(250, 250, 250, 0.95)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid rgba(0, 0, 0, 0.05)',
      zIndex: 1000,
      padding: '20px 0'
    },

    headerContainer: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 32px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },

    logo: {
      fontSize: '24px',
      fontWeight: '700',
      color: '#333',
      cursor: 'pointer',
      letterSpacing: '-0.5px'
    },

    nav: {
      display: 'flex',
      gap: '40px'
    },

    navButton: {
      background: 'none',
      border: 'none',
      fontSize: '16px',
      color: '#666',
      cursor: 'pointer',
      padding: '8px 0',
      transition: 'color 0.2s ease',
      fontWeight: '500'
    },

    navButtonActive: {
      color: '#333',
      borderBottom: '2px solid #333'
    },

    mobileMenuButton: {
      display: 'none',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: '8px'
    },

    // Card component
    card: {
      backgroundColor: 'white',
      borderRadius: '16px',
      padding: '32px',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
      transition: 'all 0.3s ease',
      border: '1px solid rgba(0, 0, 0, 0.05)'
    },

    cardHover: {
      transform: 'translateY(-4px)',
      boxShadow: '0 8px 40px rgba(0, 0, 0, 0.12)'
    },

    // Hero section
    hero: {
      paddingTop: '120px',
      paddingBottom: '80px',
      textAlign: 'center',
      maxWidth: '800px',
      margin: '0 auto',
      padding: '120px 32px 80px'
    },

    heroTitle: {
      fontSize: 'clamp(48px, 8vw, 72px)',
      fontWeight: '800',
      color: '#333',
      marginBottom: '24px',
      letterSpacing: '-2px',
      lineHeight: '1.1'
    },

    heroSubtitle: {
      fontSize: '24px',
      color: '#666',
      marginBottom: '32px',
      fontWeight: '400'
    },

    heroDescription: {
      fontSize: '18px',
      color: '#888',
      marginBottom: '48px',
      maxWidth: '600px',
      margin: '0 auto 48px'
    },

    buttonPrimary: {
      backgroundColor: '#333',
      color: 'white',
      border: 'none',
      padding: '16px 32px',
      borderRadius: '12px',
      fontSize: '16px',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      marginRight: '16px'
    },

    buttonSecondary: {
      backgroundColor: 'transparent',
      color: '#333',
      border: '2px solid #333',
      padding: '14px 30px',
      borderRadius: '12px',
      fontSize: '16px',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.2s ease'
    },

    // Sections
    section: {
      padding: '80px 32px',
      maxWidth: '1200px',
      margin: '0 auto'
    },

    sectionTitle: {
      fontSize: '48px',
      fontWeight: '800',
      color: '#333',
      textAlign: 'center',
      marginBottom: '64px',
      letterSpacing: '-1px'
    },

    // Grid layouts
    grid: {
      display: 'grid',
      gap: '32px'
    },

    grid2: {
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))'
    },

    grid3: {
      gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))'
    },

    // Portfolio card specific
    portfolioCard: {
      backgroundColor: 'white',
      borderRadius: '20px',
      overflow: 'hidden',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
      transition: 'all 0.3s ease',
      border: '1px solid rgba(0, 0, 0, 0.05)'
    },

    portfolioImage: {
      width: '100%',
      height: '240px',
      objectFit: 'cover'
    },

    portfolioContent: {
      padding: '32px'
    },

    portfolioHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: '16px'
    },

    portfolioTitle: {
      fontSize: '20px',
      fontWeight: '700',
      color: '#333',
      marginBottom: '8px'
    },

    categoryBadge: {
      backgroundColor: '#f5f5f5',
      color: '#666',
      padding: '6px 12px',
      borderRadius: '20px',
      fontSize: '12px',
      fontWeight: '600',
      textTransform: 'uppercase',
      letterSpacing: '0.5px'
    },

    portfolioDescription: {
      color: '#666',
      marginBottom: '20px',
      fontSize: '15px'
    },

    techStack: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '8px',
      marginBottom: '24px'
    },

    techBadge: {
      backgroundColor: '#333',
      color: 'white',
      padding: '4px 10px',
      borderRadius: '12px',
      fontSize: '12px',
      fontWeight: '500'
    },

    projectLink: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      color: '#333',
      textDecoration: 'none',
      fontWeight: '600',
      fontSize: '14px'
    },

    // Skills section
    skillCard: {
      backgroundColor: 'white',
      borderRadius: '16px',
      padding: '32px',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
      textAlign: 'center',
      border: '1px solid rgba(0, 0, 0, 0.05)'
    },

    skillIcon: {
      width: '60px',
      height: '60px',
      backgroundColor: '#333',
      borderRadius: '16px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 auto 20px',
      color: 'white'
    },

    skillTitle: {
      fontSize: '18px',
      fontWeight: '700',
      color: '#333',
      marginBottom: '20px'
    },

    skillList: {
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    },

    skillItem: {
      backgroundColor: '#f8f8f8',
      padding: '12px 16px',
      borderRadius: '10px',
      fontSize: '14px',
      color: '#666',
      fontWeight: '500'
    },

    // Contact section
    contactContainer: {
      maxWidth: '800px',
      margin: '0 auto',
      textAlign: 'center'
    },

    contactGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '48px',
      marginTop: '48px'
    },

    contactCard: {
      backgroundColor: 'white',
      borderRadius: '16px',
      padding: '40px',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
      border: '1px solid rgba(0, 0, 0, 0.05)'
    },

    contactInfo: {
      display: 'flex',
      alignItems: 'center',
      gap: '16px',
      marginBottom: '24px',
      padding: '20px',
      backgroundColor: '#f8f8f8',
      borderRadius: '12px'
    },

    formGroup: {
      marginBottom: '24px',
      textAlign: 'left'
    },

    label: {
      display: 'block',
      fontSize: '14px',
      fontWeight: '600',
      color: '#333',
      marginBottom: '8px'
    },

    input: {
      width: '100%',
      padding: '16px',
      border: '1px solid #e0e0e0',
      borderRadius: '12px',
      fontSize: '16px',
      backgroundColor: 'white',
      transition: 'border-color 0.2s ease',
      boxSizing: 'border-box'
    },

    textarea: {
      width: '100%',
      padding: '16px',
      border: '1px solid #e0e0e0',
      borderRadius: '12px',
      fontSize: '16px',
      backgroundColor: 'white',
      resize: 'vertical',
      minHeight: '120px',
      transition: 'border-color 0.2s ease',
      boxSizing: 'border-box'
    },

    // Footer
    footer: {
      backgroundColor: 'white',
      borderTop: '1px solid rgba(0, 0, 0, 0.05)',
      padding: '48px 32px',
      textAlign: 'center'
    },

    footerContent: {
      maxWidth: '1200px',
      margin: '0 auto'
    },

    socialLinks: {
      display: 'flex',
      justifyContent: 'center',
      gap: '24px',
      marginBottom: '32px'
    },

    socialLink: {
      width: '48px',
      height: '48px',
      backgroundColor: '#f5f5f5',
      borderRadius: '12px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#666',
      textDecoration: 'none',
      transition: 'all 0.2s ease'
    }
  };

  return (
    <div style={styles.body}>
      {/* Header */}
      <header style={styles.header}>
        <div style={styles.headerContainer}>
          <div style={styles.logo} onClick={() => scrollToSection('home')}>
            Forooz.Me
          </div>

          <nav style={window.innerWidth > 768 ? styles.nav : {display: 'none'}}>
            {['Home', 'About', 'Portfolio', 'Skills', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                style={{
                  ...styles.navButton,
                  ...(activeSection === item.toLowerCase() ? styles.navButtonActive : {})
                }}
                onMouseEnter={(e) => e.target.style.color = '#333'}
                onMouseLeave={(e) => {
                  if (activeSection !== item.toLowerCase()) {
                    e.target.style.color = '#666';
                  }
                }}
              >
                {item}
              </button>
            ))}
          </nav>

          <button
            style={styles.mobileMenuButton}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div style={{
            backgroundColor: 'white',
            borderTop: '1px solid rgba(0, 0, 0, 0.05)',
            padding: '20px 32px'
          }}>
            {['Home', 'About', 'Portfolio', 'Skills', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                style={{
                  display: 'block',
                  width: '100%',
                  textAlign: 'left',
                  padding: '12px 0',
                  background: 'none',
                  border: 'none',
                  fontSize: '16px',
                  color: '#333',
                  cursor: 'pointer'
                }}
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" style={styles.hero}>
        <h1 style={styles.heroTitle}>
          Hello, I'm <span style={{color: '#666'}}>Forooz</span>
        </h1>
        
        <p style={styles.heroSubtitle}>
          Full-Stack Developer & Game Creator
        </p>
        
        <p style={styles.heroDescription}>
          I craft digital experiences through web development, create engaging applications, 
          and bring ideas to life through games and interactive media.
        </p>

        <div style={{marginBottom: '64px'}}>
          <button 
            onClick={() => scrollToSection('portfolio')}
            style={styles.buttonPrimary}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#000';
              e.target.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = '#333';
              e.target.style.transform = 'translateY(0)';
            }}
          >
            View My Work
          </button>
          
          <button 
            onClick={() => scrollToSection('contact')}
            style={styles.buttonSecondary}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#333';
              e.target.style.color = 'white';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'transparent';
              e.target.style.color = '#333';
            }}
          >
            Get In Touch
          </button>
        </div>

        <div style={styles.socialLinks}>
          <a href="#" style={styles.socialLink}>
            <Github size={20} />
          </a>
          <a href="#" style={styles.socialLink}>
            <Linkedin size={20} />
          </a>
          <a href="#" style={styles.socialLink}>
            <Twitter size={20} />
          </a>
        </div>

        <div style={{marginTop: '64px', opacity: 0.5}}>
          <ChevronDown size={32} style={{color: '#999'}} />
        </div>
      </section>

      {/* About Section */}
      <section id="about" style={styles.section}>
        <h2 style={styles.sectionTitle}>About Me</h2>
        
        <div style={{...styles.grid, ...styles.grid2}}>
          <div style={styles.card}>
            <h3 style={{fontSize: '24px', fontWeight: '700', marginBottom: '20px', color: '#333'}}>
              My Journey
            </h3>
            <p style={{color: '#666', marginBottom: '20px'}}>
              I'm a passionate full-stack developer with a love for creating both functional 
              web applications and entertaining games. My journey started with WordPress development, 
              where I learned to craft custom themes and plugins for clients.
            </p>
            <p style={{color: '#666', marginBottom: '20px'}}>
              Over the years, I've expanded into modern web technologies like React and Node.js, 
              building scalable applications that solve real-world problems.
            </p>
            <p style={{color: '#666'}}>
              Game development became my creative outlet, allowing me to combine 
              technical skills with artistic vision.
            </p>
          </div>
          
          <div style={{display: 'flex', flexDirection: 'column', gap: '24px'}}>
            <div style={{...styles.card, background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white'}}>
              <h3 style={{fontSize: '20px', fontWeight: '700', marginBottom: '12px'}}>WordPress Specialist</h3>
              <p style={{opacity: 0.9}}>Custom themes, plugins, and e-commerce solutions</p>
            </div>
            
            <div style={{...styles.card, background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', color: 'white'}}>
              <h3 style={{fontSize: '20px', fontWeight: '700', marginBottom: '12px'}}>Full-Stack Developer</h3>
              <p style={{opacity: 0.9}}>Modern web applications with React and Node.js</p>
            </div>
            
            <div style={{...styles.card, background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)', color: 'white'}}>
              <h3 style={{fontSize: '20px', fontWeight: '700', marginBottom: '12px'}}>Game Creator</h3>
              <p style={{opacity: 0.9}}>Interactive experiences and pixel art games</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" style={styles.section}>
        <h2 style={styles.sectionTitle}>My Work</h2>
        
        <div style={{...styles.grid, ...styles.grid3}}>
          {portfolioItems.map((item) => (
            <div 
              key={item.id}
              style={styles.portfolioCard}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 12px 48px rgba(0, 0, 0, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
              }}
            >
              <img 
                src={item.image} 
                alt={item.title}
                style={styles.portfolioImage}
              />
              
              <div style={styles.portfolioContent}>
                <div style={styles.portfolioHeader}>
                  <div>
                    <h3 style={styles.portfolioTitle}>{item.title}</h3>
                  </div>
                  <span style={styles.categoryBadge}>
                    {item.category}
                  </span>
                </div>
                
                <p style={styles.portfolioDescription}>{item.description}</p>
                
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
                  style={styles.projectLink}
                  onMouseEnter={(e) => e.target.style.color = '#666'}
                  onMouseLeave={(e) => e.target.style.color = '#333'}
                >
                  View Project <ExternalLink size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" style={styles.section}>
        <h2 style={styles.sectionTitle}>Skills & Technologies</h2>
        
        <div style={{...styles.grid, gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))'}}>
          {skills.map((skillGroup, index) => (
            <div key={skillGroup.category} style={styles.skillCard}>
              <div style={{
                ...styles.skillIcon,
                backgroundColor: index % 4 === 0 ? '#667eea' : 
                  index % 4 === 1 ? '#f093fb' : 
                  index % 4 === 2 ? '#4facfe' : '#764ba2'
              }}>
                <Code size={24} />
              </div>
              
              <h3 style={styles.skillTitle}>{skillGroup.category}</h3>
              
              <div style={styles.skillList}>
                {skillGroup.items.map((skill) => (
                  <div key={skill} style={styles.skillItem}>
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={styles.section}>
        <div style={styles.contactContainer}>
          <h2 style={styles.sectionTitle}>Let's Work Together</h2>
          <p style={{fontSize: '18px', color: '#666', marginBottom: '48px'}}>
            Ready to bring your ideas to life? Let's create something amazing together.
          </p>
          
          <div style={styles.contactGrid}>
            <div style={styles.contactCard}>
              <h3 style={{fontSize: '24px', fontWeight: '700', marginBottom: '24px'}}>Get In Touch</h3>
              
              <div style={styles.contactInfo}>
                <Mail size={24} style={{color: '#667eea'}} />
                <div style={{textAlign: 'left'}}>
                  <p style={{fontWeight: '600', margin: 0}}>Email</p>
                  <p style={{color: '#666', margin: 0}}>hello@forooz.me</p>
                </div>
              </div>
              
              <div style={{display: 'flex', gap: '12px'}}>
                <a href="#" style={styles.socialLink}>
                  <Github size={20} />
                </a>
                <a href="#" style={styles.socialLink}>
                  <Linkedin size={20} />
                </a>
                <a href="#" style={styles.socialLink}>
                  <Twitter size={20} />
                </a>
              </div>
            </div>
            
            <div style={styles.contactCard}>
              <div style={styles.formGroup}>
                <label style={styles.label}>Name</label>
                <input 
                  type="text"
                  style={styles.input}
                  placeholder="Your name"
                  onFocus={(e) => e.target.style.borderColor = '#667eea'}
                  onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
                />
              </div>
              
              <div style={styles.formGroup}>
                <label style={styles.label}>Email</label>
                <input 
                  type="email"
                  style={styles.input}
                  placeholder="your.email@example.com"
                  onFocus={(e) => e.target.style.borderColor = '#667eea'}
                  onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
                />
              </div>
              
              <div style={styles.formGroup}>
                <label style={styles.label}>Project Type</label>
                <select 
                  style={styles.input}
                  onFocus={(e) => e.target.style.borderColor = '#667eea'}
                  onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
                >
                  <option>WordPress Development</option>
                  <option>Web Application</option>
                  <option>Game Development</option>
                  <option>Other</option>
                </select>
              </div>
              
              <div style={styles.formGroup}>
                <label style={styles.label}>Message</label>
                <textarea 
                  style={styles.textarea}
                  placeholder="Tell me about your project..."
                  onFocus={(e) => e.target.style.borderColor = '#667eea'}
                  onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
                ></textarea>
              </div>
              
              <button 
                style={{
                  ...styles.buttonPrimary,
                  width: '100%',
                  marginRight: 0
                }}
                onClick={() => alert('Message sent! (This is a demo)')}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#000';
                  e.target.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = '#333';
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.footerContent}>
          <div style={{marginBottom: '24px'}}>
            <div style={{fontSize: '24px', fontWeight: '700', marginBottom: '16px'}}>Forooz.Me</div>
            <div style={styles.socialLinks}>
              <a 
                href="#" 
                style={styles.socialLink}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#333';
                  e.target.style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = '#f5f5f5';
                  e.target.style.color = '#666';
                }}
              >
                <Github size={20} />
              </a>
              <a 
                href="#" 
                style={styles.socialLink}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#333';
                  e.target.style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = '#f5f5f5';
                  e.target.style.color = '#666';
                }}
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="#" 
                style={styles.socialLink}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#333';
                  e.target.style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = '#f5f5f5';
                  e.target.style.color = '#666';
                }}
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div style={{borderTop: '1px solid rgba(0, 0, 0, 0.05)', paddingTop: '24px'}}>
            <p style={{color: '#999', margin: 0, fontSize: '14px'}}>
              © 2024 Forooz. Built with React & crafted with attention to detail.
            </p>
          </div>
        </div>
      </footer>

      {/* Additional CSS for responsive design */}
      <style>{`
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

        @media (max-width: 640px) {
          .hero-title {
            font-size: 36px !important;
          }
          .section-title {
            font-size: 32px !important;
          }
          .section {
            padding: 60px 20px !important;
          }
          .header-container {
            padding: 0 20px !important;
          }
          .hero {
            padding: 100px 20px 60px !important;
          }
        }

        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }

        /* Focus styles for accessibility */
        button:focus,
        input:focus,
        textarea:focus,
        select:focus {
          outline: 2px solid #667eea;
          outline-offset: 2px;
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: #f1f1f1;
        }

        ::-webkit-scrollbar-thumb {
          background: #c1c1c1;
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: #a8a8a8;
        }
      `}</style>
    </div>
  );
};

export default ForoozPortfolio;