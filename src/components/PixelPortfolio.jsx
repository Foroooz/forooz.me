import React, { useState, useEffect } from 'react';
import { Code, Globe, Gamepad2, Mail, Github, Linkedin, ExternalLink, User } from 'lucide-react';

const ForoozMinimal = () => {
  const [projectsCompleted] = useState(12);
  const [yearsExperience] = useState(5);
  const [skillProgress] = useState(85);

  // SEO: Set document title and meta description
  useEffect(() => {
    document.title = "Forooz - Full-Stack Developer | WordPress Expert | Game Creator";
    
    // Create or update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = "Forooz - Expert Full-Stack Developer specializing in WordPress development, web applications, and game creation. 5+ years experience building digital solutions.";

    // Add canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = 'https://forooz.me';

    // Add Open Graph meta tags
    const ogTags = [
      { property: 'og:title', content: 'Forooz - Full-Stack Developer | WordPress Expert' },
      { property: 'og:description', content: 'Expert Full-Stack Developer specializing in WordPress development, web applications, and game creation. Contact Forooz for your next project.' },
      { property: 'og:url', content: 'https://forooz.me' },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: 'Forooz.Me' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Forooz - Full-Stack Developer' },
      { name: 'twitter:description', content: 'Expert WordPress developer and full-stack engineer. Building exceptional digital experiences.' }
    ];

    ogTags.forEach(tag => {
      let meta = document.querySelector(`meta[${tag.property ? 'property' : 'name'}="${tag.property || tag.name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        if (tag.property) meta.setAttribute('property', tag.property);
        if (tag.name) meta.setAttribute('name', tag.name);
        document.head.appendChild(meta);
      }
      meta.content = tag.content;
    });

    // Add structured data (JSON-LD)
    let structuredData = document.querySelector('script[type="application/ld+json"]');
    if (!structuredData) {
      structuredData = document.createElement('script');
      structuredData.type = 'application/ld+json';
      document.head.appendChild(structuredData);
    }
    
    structuredData.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Forooz",
      "url": "https://forooz.me",
      "sameAs": [
        "https://github.com/forooz",
        "https://linkedin.com/in/forooz"
      ],
      "jobTitle": "Full-Stack Developer",
      "worksFor": {
        "@type": "Organization",
        "name": "Forooz.Me"
      },
      "knowsAbout": [
        "WordPress Development",
        "Full-Stack Development", 
        "Web Applications",
        "Game Development",
        "React",
        "Node.js",
        "PHP"
      ],
      "email": "hello@forooz.me",
      "description": "Expert Full-Stack Developer specializing in WordPress development, web applications, and game creation with 5+ years of experience."
    });

    // Add keywords meta tag
    let keywords = document.querySelector('meta[name="keywords"]');
    if (!keywords) {
      keywords = document.createElement('meta');
      keywords.name = 'keywords';
      document.head.appendChild(keywords);
    }
    keywords.content = "Forooz, Forooz developer, WordPress developer, full-stack developer, web development, game development, React developer, PHP developer, Node.js";

  }, []);

  const styles = {
    container: {
      backgroundColor: '#ebebeb',
      minHeight: '100vh',
      padding: '40px',
      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", Arial, sans-serif'
    },

    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '20px',
      maxWidth: '600px',
      margin: '0 auto'
    },

    card: {
      backgroundColor: 'white',
      borderRadius: '24px',
      padding: '32px',
      boxShadow: '0 2px 20px rgba(0, 0, 0, 0.08)',
      border: 'none',
      cursor: 'pointer',
      transition: 'transform 0.2s ease'
    },

    cardLarge: {
      gridColumn: 'span 2',
      backgroundColor: 'white',
      borderRadius: '24px',
      padding: '32px',
      boxShadow: '0 2px 20px rgba(0, 0, 0, 0.08)',
      marginTop: '20px',
      maxWidth: '600px',
      width: '100%',
      margin: '20px auto 0 auto'
    },

    iconContainer: {
      width: '56px',
      height: '56px',
      backgroundColor: '#333333',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '20px',
      color: 'white'
    },

    cardTitle: {
      fontSize: '18px',
      fontWeight: '500',
      color: '#333333',
      marginBottom: '8px',
      lineHeight: '1.2'
    },

    cardSubtitle: {
      fontSize: '14px',
      color: '#999999',
      fontWeight: '400',
      margin: 0
    },

    progressContainer: {
      marginTop: '32px'
    },

    progressHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '16px'
    },

    progressLabel: {
      fontSize: '16px',
      fontWeight: '500',
      color: '#333333'
    },

    progressValue: {
      fontSize: '16px',
      fontWeight: '500',
      color: '#333333'
    },

    progressBar: {
      width: '100%',
      height: '12px',
      backgroundColor: '#e5e5e5',
      borderRadius: '6px',
      overflow: 'hidden'
    },

    progressFill: {
      height: '100%',
      backgroundColor: '#333333',
      borderRadius: '6px',
      width: `${skillProgress}%`,
      transition: 'width 0.3s ease'
    },

    statsContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '32px'
    },

    statsText: {
      fontSize: '26px',
      fontWeight: '600',
      color: '#333333',
      margin: 0
    },

    statsSubtext: {
      fontSize: '14px',
      color: '#999999',
      margin: 0
    },

    socialContainer: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px'
    },

    socialIcon: {
      width: '48px',
      height: '48px',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      backgroundColor: '#f0f0f0',
      color: '#666666',
      textDecoration: 'none'
    },

    socialIconActive: {
      backgroundColor: '#333333',
      color: 'white'
    },

    contactText: {
      fontSize: '16px',
      fontWeight: '500',
      color: '#333333',
      marginLeft: '12px'
    },

    srOnly: {
      position: 'absolute',
      width: '1px',
      height: '1px',
      padding: 0,
      margin: '-1px',
      overflow: 'hidden',
      clip: 'rect(0, 0, 0, 0)',
      whiteSpace: 'nowrap',
      border: 0
    }
  };

  const handleCardClick = (action) => {
    switch(action) {
      case 'portfolio':
        window.open('#portfolio', '_self');
        break;
      case 'contact':
        window.open('mailto:hello@forooz.me', '_blank');
        break;
      case 'github':
        window.open('https://github.com/forooz', '_blank');
        break;
      case 'linkedin':
        window.open('https://linkedin.com/in/forooz', '_blank');
        break;
      default:
        break;
    }
  };

  return (
    <div style={styles.container}>
      {/* SEO: Hidden H1 for main keyword */}
      <h1 style={styles.srOnly}>Forooz - Expert Full-Stack Developer and WordPress Specialist</h1>
      
      {/* SEO: Structured content with proper headings */}
      <header role="banner">
        <div style={styles.srOnly}>
          <p>Welcome to Forooz.Me - Your trusted partner for WordPress development, web applications, and game creation.</p>
        </div>
      </header>

      <main role="main" aria-label="Forooz Portfolio Content">
        <div style={styles.grid}>
          {/* WordPress Development Card */}
          <article 
            style={styles.card}
            onClick={() => handleCardClick('portfolio')}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            aria-label="WordPress Development Services by Forooz"
            role="button"
            tabIndex={0}
          >
            <div style={styles.iconContainer} aria-hidden="true">
              <Globe size={24} />
            </div>
            <h2 style={styles.cardTitle}>WordPress Development</h2>
            <p style={styles.cardSubtitle}>Custom themes & plugins by Forooz</p>
          </article>

          {/* Contact Card */}
          <article 
            style={styles.card}
            onClick={() => handleCardClick('contact')}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            aria-label="Contact Forooz"
            role="button"
            tabIndex={0}
          >
            <div style={styles.iconContainer} aria-hidden="true">
              <Mail size={24} />
            </div>
            <h2 style={styles.cardTitle}>Contact Forooz</h2>
            <p style={styles.cardSubtitle}>hello@forooz.me</p>
          </article>
        </div>

        {/* About Forooz Card */}
        <section style={styles.cardLarge} aria-label="About Forooz">
          <div style={{display: 'flex', alignItems: 'center', marginBottom: '24px'}}>
            <div style={{
              width: '48px',
              height: '48px',
              backgroundColor: '#333333',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: '16px',
              color: 'white'
            }} aria-hidden="true">
              <User size={20} />
            </div>
            <div>
              <h2 style={{
                fontSize: '24px',
                fontWeight: '600',
                color: '#333333',
                margin: 0,
                lineHeight: '1.2'
              }}>Forooz - Full-Stack Developer</h2>
              <p style={{
                fontSize: '14px',
                color: '#999999',
                margin: 0
              }}>Building exceptional digital experiences</p>
            </div>
          </div>

          <div style={styles.progressContainer}>
            <div style={styles.progressHeader}>
              <span style={styles.progressLabel}>Forooz's Skill Level</span>
              <span style={styles.progressValue}>Expert Developer</span>
            </div>
            <div style={styles.progressBar} role="progressbar" aria-valuenow={skillProgress} aria-valuemin={0} aria-valuemax={100} aria-label="Forooz skill level progress">
              <div style={styles.progressFill}></div>
            </div>
          </div>
        </section>

        {/* Forooz Experience Card */}
        <section style={styles.cardLarge} aria-label="Forooz Experience and Social Links">
          <div style={styles.statsContainer}>
            <div>
              <h2 style={styles.statsText}>{yearsExperience} years experience</h2>
              <p style={styles.statsSubtext}>{projectsCompleted} projects completed by Forooz</p>
            </div>
            <div style={{
              width: '48px',
              height: '48px',
              color: '#cccccc'
            }} aria-hidden="true">
              <Code size={48} />
            </div>
          </div>

          <nav style={styles.socialContainer} aria-label="Connect with Forooz on social media">
            <a
              href="https://github.com/forooz"
              target="_blank"
              rel="noopener noreferrer"
              style={{...styles.socialIcon, ...styles.socialIconActive}}
              aria-label="Forooz on GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/forooz"
              target="_blank"
              rel="noopener noreferrer"
              style={{...styles.socialIcon, ...styles.socialIconActive}}
              aria-label="Forooz on LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="#portfolio"
              style={styles.socialIcon}
              aria-label="View Forooz Portfolio"
            >
              <ExternalLink size={20} />
            </a>
            <span style={styles.contactText}>Connect with Forooz</span>
          </nav>
        </section>

        {/* Forooz Skills Grid */}
        <section style={{...styles.grid, marginTop: '20px'}} aria-label="Forooz Technical Skills">
          <article style={styles.card} aria-label="Forooz Web Application Development">
            <div style={styles.iconContainer} aria-hidden="true">
              <Code size={24} />
            </div>
            <h3 style={styles.cardTitle}>Web Applications by Forooz</h3>
            <p style={styles.cardSubtitle}>React • Node.js • PHP</p>
          </article>

          <article style={styles.card} aria-label="Forooz Game Development">
            <div style={styles.iconContainer} aria-hidden="true">
              <Gamepad2 size={24} />
            </div>
            <h3 style={styles.cardTitle}>Game Development by Forooz</h3>
            <p style={styles.cardSubtitle}>HTML5 Canvas • JavaScript</p>
          </article>
        </section>
      </main>

      {/* SEO: Footer with additional context */}
      <footer role="contentinfo" style={styles.srOnly}>
        <p>© 2024 Forooz.Me - Professional WordPress Developer and Full-Stack Engineer. Specializing in custom web development, WordPress themes, plugins, web applications, and game development. Contact Forooz for your next project at hello@forooz.me</p>
      </footer>

      <style>{`
        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          padding: 0;
        }

        @media (max-width: 640px) {
          .grid {
            grid-template-columns: 1fr !important;
          }
          .card-large {
            grid-column: span 1 !important;
          }
          .container {
            padding: 20px !important;
          }
          .card, .card-large {
            padding: 24px !important;
          }
        }

        .card:hover {
          transform: scale(1.02) !important;
        }

        .card:active {
          transform: scale(0.98) !important;
        }

        .social-icon:hover {
          transform: scale(1.05);
        }

        .social-icon:active {
          transform: scale(0.95);
        }
      `}</style>
    </div>
  );
};

export default ForoozMinimal;