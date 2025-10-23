import React, { useState, useEffect } from 'react';
import { Code, Globe, Gamepad2, User, Github, Linkedin, ExternalLink, Send } from 'lucide-react';

const ForoozMinimal = () => {
  const [projectsCompleted] = useState(12);
  const [yearsExperience] = useState(5);
  const [skillProgress] = useState(85);

  useEffect(() => {
    document.title = "Forooz - Full-Stack Developer | WordPress Expert | Game Creator";
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = "Forooz - Expert Full-Stack Developer specializing in WordPress development, web applications, and game creation. 5+ years experience building digital solutions.";

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = 'https://forooz.me';

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
        "https://github.com/Foroooz",
        "https://www.linkedin.com/in/forooz/"
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
      "email": "@foroozd",
      "description": "Expert Full-Stack Developer specializing in WordPress development, web applications, and game creation with 5+ years of experience."
    });

    let keywords = document.querySelector('meta[name="keywords"]');
    if (!keywords) {
      keywords = document.createElement('meta');
      keywords.name = 'keywords';
      document.head.appendChild(keywords);
    }
    keywords.content = "Forooz, Forooz developer, WordPress developer, full-stack developer, web development, game development, React developer, PHP developer, Node.js, @foroozd telegram";

  }, []);

  const handleCardClick = (action) => {
    switch(action) {
      case 'portfolio':
        window.open('#portfolio', '_self');
        break;
      case 'contact':
        window.open('https://t.me/foroozd', '_blank');
        break;
      case 'github':
        window.open('https://github.com/Foroooz', '_blank');
        break;
      case 'linkedin':
        window.open('https://www.linkedin.com/in/forooz/', '_blank');
        break;
      default:
        break;
    }
  };

  return (
    <div className="forooz-container">
      <h1 className="sr-only">Forooz - Expert Full-Stack Developer and WordPress Specialist</h1>
      
      <header role="banner">
        <div className="sr-only">
          <p>Welcome to Forooz.Me - Your trusted partner for WordPress development, web applications, and game creation.</p>
        </div>
      </header>

      <main role="main" aria-label="Forooz Portfolio Content">
        <div className="grid-container">
          {/* WordPress Development Card */}
          <article 
            className="card"
            onClick={() => handleCardClick('portfolio')}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            aria-label="WordPress Development Services by Forooz"
            role="button"
            tabIndex={0}
          >
            <div className="icon-container" aria-hidden="true">
              <Globe size={24} />
            </div>
            <h2 className="card-title">WordPress Development</h2>
            <p className="card-subtitle">Custom themes & plugins by Forooz</p>
          </article>

          {/* Contact Card */}
          <article 
            className="card"
            onClick={() => handleCardClick('contact')}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            aria-label="Contact Forooz"
            role="button"
            tabIndex={0}
          >
            <div className="icon-container" aria-hidden="true">
              <Send size={24} />
            </div>
            <h2 className="card-title">Contact Forooz</h2>
            <p className="card-subtitle">@foroozd</p>
          </article>
        </div>

        {/* About Forooz Card */}
        <section className="card card-large" aria-label="About Forooz">
          <div className="about-header">
            <div className="about-icon" aria-hidden="true">
              <User size={20} />
            </div>
            <div>
              <h2 className="about-title">Forooz - Full-Stack Developer</h2>
              <p className="about-subtitle">Building exceptional digital experiences</p>
            </div>
          </div>

          <div className="progress-container">
            <div className="progress-header">
              <span className="progress-label">Forooz's Skill Level</span>
              <span className="progress-value">Expert Developer</span>
            </div>
            <div className="progress-bar" role="progressbar" aria-valuenow={skillProgress} aria-valuemin={0} aria-valuemax={100} aria-label="Forooz skill level progress">
              <div className="progress-fill" style={{ width: `${skillProgress}%` }}></div>
            </div>
          </div>
        </section>

        {/* Forooz Experience Card */}
        <section className="card card-large" aria-label="Forooz Experience and Social Links">
          <div className="stats-container">
            <div>
              <h2 className="stats-text">{yearsExperience} years experience</h2>
              <p className="stats-subtext">{projectsCompleted} projects completed by Forooz</p>
            </div>
            <div className="stats-icon" aria-hidden="true">
              <Code size={48} />
            </div>
          </div>

          <nav className="social-container" aria-label="Connect with Forooz on social media">
            <a
              href="https://github.com/Foroooz"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon social-icon-active"
              aria-label="Forooz on GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/forooz/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon social-icon-active"
              aria-label="Forooz on LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="#portfolio"
              className="social-icon"
              aria-label="View Forooz Portfolio"
            >
              <ExternalLink size={20} />
            </a>
            <span className="contact-text">Connect with Forooz</span>
          </nav>
        </section>

        {/* Forooz Skills Grid */}
        <section className="grid-container skills-grid" aria-label="Forooz Technical Skills">
          <article className="card" aria-label="Forooz Web Application Development">
            <div className="icon-container" aria-hidden="true">
              <Code size={24} />
            </div>
            <h3 className="card-title">Web Applications by Forooz</h3>
            <p className="card-subtitle">React • Node.js • PHP</p>
          </article>

          <article className="card" aria-label="Forooz Game Development">
            <div className="icon-container" aria-hidden="true">
              <Gamepad2 size={24} />
            </div>
            <h3 className="card-title">Game Development by Forooz</h3>
            <p className="card-subtitle">HTML5 Canvas • JavaScript</p>
          </article>
        </section>
      </main>

      <footer role="contentinfo" className="sr-only">
        <p>© 2024 Forooz.Me - Professional WordPress Developer and Full-Stack Engineer. Specializing in custom web development, WordPress themes, plugins, web applications, and game development. Contact Forooz for your next project at @foroozd on Telegram</p>
      </footer>

      <style>{`
        * {
          box-sizing: border-box;
        }

        html, body {
          margin: 0;
          padding: 0;
          width: 100%;
          height: 100%;
        }

        .forooz-container {
          background-color: #ebebeb;
          min-height: 100vh;
          width: 100%;
          padding: 40px 20px;
          font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", Arial, sans-serif;
        }

        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border: 0;
        }

        .grid-container {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
          max-width: 600px;
          margin: 0 auto;
        }

        .card {
          background-color: white;
          border-radius: 24px;
          padding: 32px;
          box-shadow: 0 2px 20px rgba(0, 0, 0, 0.08);
          border: none;
          cursor: pointer;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .card:hover {
          transform: scale(1.02);
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.12);
        }

        .card:active {
          transform: scale(0.98);
        }

        .card-large {
          grid-column: span 2;
          margin-top: 20px;
        }

        .icon-container {
          width: 56px;
          height: 56px;
          background-color: #333333;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
          color: white;
        }

        .card-title {
          font-size: 18px;
          font-weight: 500;
          color: #333333;
          margin-bottom: 8px;
          line-height: 1.2;
        }

        .card-subtitle {
          font-size: 14px;
          color: #999999;
          font-weight: 400;
          margin: 0;
        }

        .about-header {
          display: flex;
          align-items: center;
          margin-bottom: 24px;
        }

        .about-icon {
          width: 48px;
          height: 48px;
          background-color: #333333;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 16px;
          color: white;
          flex-shrink: 0;
        }

        .about-title {
          font-size: 24px;
          font-weight: 600;
          color: #333333;
          margin: 0;
          line-height: 1.2;
        }

        .about-subtitle {
          font-size: 14px;
          color: #999999;
          margin: 4px 0 0 0;
        }

        .progress-container {
          margin-top: 32px;
        }

        .progress-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
        }

        .progress-label {
          font-size: 16px;
          font-weight: 500;
          color: #333333;
        }

        .progress-value {
          font-size: 16px;
          font-weight: 500;
          color: #333333;
        }

        .progress-bar {
          width: 100%;
          height: 12px;
          background-color: #e5e5e5;
          border-radius: 6px;
          overflow: hidden;
        }

        .progress-fill {
          height: 100%;
          background-color: #333333;
          border-radius: 6px;
          transition: width 0.3s ease;
        }

        .stats-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 32px;
        }

        .stats-text {
          font-size: 26px;
          font-weight: 600;
          color: #333333;
          margin: 0;
        }

        .stats-subtext {
          font-size: 14px;
          color: #999999;
          margin: 8px 0 0 0;
        }

        .stats-icon {
          width: 48px;
          height: 48px;
          color: #cccccc;
          flex-shrink: 0;
        }

        .social-container {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .social-icon {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
          background-color: #f0f0f0;
          color: #666666;
          text-decoration: none;
          flex-shrink: 0;
        }

        .social-icon:hover {
          transform: scale(1.05);
        }

        .social-icon:active {
          transform: scale(0.95);
        }

        .social-icon-active {
          background-color: #333333;
          color: white;
        }

        .contact-text {
          font-size: 16px;
          font-weight: 500;
          color: #333333;
          margin-left: 12px;
          white-space: nowrap;
        }

        .skills-grid {
          margin-top: 20px;
        }

        /* Tablet Responsive (768px and below) */
        @media (max-width: 768px) {
          .forooz-container {
            padding: 32px 16px;
          }

          .grid-container {
            gap: 16px;
            max-width: 100%;
          }

          .card {
            padding: 28px;
          }

          .card-large {
            padding: 28px;
          }

          .about-title {
            font-size: 22px;
          }

          .stats-text {
            font-size: 24px;
          }

          .progress-label,
          .progress-value {
            font-size: 15px;
          }
        }

        /* Mobile Responsive (640px and below) */
        @media (max-width: 640px) {
          .forooz-container {
            padding: 24px 16px;
          }

          .grid-container {
            grid-template-columns: 1fr;
            gap: 16px;
            max-width: 100%;
          }

          .card-large {
            grid-column: span 1;
            margin-top: 16px;
          }

          .card {
            padding: 24px;
            border-radius: 20px;
          }

          .icon-container {
            width: 52px;
            height: 52px;
            margin-bottom: 16px;
          }

          .card-title {
            font-size: 17px;
            margin-bottom: 6px;
          }

          .card-subtitle {
            font-size: 13px;
          }

          .about-header {
            margin-bottom: 20px;
          }

          .about-icon {
            width: 44px;
            height: 44px;
            margin-right: 12px;
            border-radius: 10px;
          }

          .about-title {
            font-size: 20px;
            margin-bottom: 4px;
          }

          .about-subtitle {
            font-size: 13px;
          }

          .progress-container {
            margin-top: 24px;
          }

          .progress-header {
            margin-bottom: 12px;
          }

          .progress-label,
          .progress-value {
            font-size: 14px;
          }

          .progress-bar {
            height: 10px;
          }

          .stats-container {
            margin-bottom: 24px;
          }

          .stats-text {
            font-size: 22px;
          }

          .stats-subtext {
            font-size: 13px;
          }

          .stats-icon {
            width: 44px;
            height: 44px;
          }

          .social-container {
            gap: 10px;
          }

          .social-icon {
            width: 44px;
            height: 44px;
          }

          .contact-text {
            font-size: 14px;
            margin-left: 8px;
          }

          .skills-grid {
            margin-top: 16px;
          }
        }

        /* Small Mobile (480px and below) */
        @media (max-width: 480px) {
          .forooz-container {
            padding: 20px 12px;
          }

          .grid-container {
            gap: 14px;
          }

          .card {
            padding: 20px;
            border-radius: 18px;
          }

          .icon-container {
            width: 48px;
            height: 48px;
          }

          .card-title {
            font-size: 16px;
          }

          .card-subtitle {
            font-size: 12px;
          }

          .about-icon {
            width: 40px;
            height: 40px;
          }

          .about-title {
            font-size: 18px;
          }

          .stats-text {
            font-size: 20px;
          }

          .stats-icon {
            width: 40px;
            height: 40px;
          }

          .social-icon {
            width: 40px;
            height: 40px;
          }

          .contact-text {
            display: none;
          }

          .social-container {
            gap: 8px;
            margin-left: 8px;
          }
        }
      `}</style>
    </div>
  );
};

export default ForoozMinimal;