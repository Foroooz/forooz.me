import React, { useState } from 'react';
import { Code, Globe, Gamepad2, Mail, Github, Linkedin, ExternalLink, User } from 'lucide-react';

const ForoozMinimal = () => {
  const [projectsCompleted] = useState(12);
  const [yearsExperience] = useState(5);
  const [skillProgress] = useState(85); // 85% skill level

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
      color: '#666666'
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

    // Mobile responsive
    '@media (max-width: 640px)': {
      container: {
        padding: '20px'
      },
      grid: {
        gridTemplateColumns: '1fr',
        gap: '16px'
      },
      card: {
        padding: '24px'
      },
      cardLarge: {
        gridColumn: 'span 1',
        padding: '24px'
      }
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
        window.open('https://github.com', '_blank');
        break;
      case 'linkedin':
        window.open('https://linkedin.com', '_blank');
        break;
      default:
        break;
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.grid}>
        {/* WordPress Development Card */}
        <div 
          style={styles.card}
          onClick={() => handleCardClick('portfolio')}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          <div style={styles.iconContainer}>
            <Globe size={24} />
          </div>
          <h3 style={styles.cardTitle}>WordPress Development</h3>
          <p style={styles.cardSubtitle}>Custom themes & plugins</p>
        </div>

        {/* Contact Card */}
        <div 
          style={styles.card}
          onClick={() => handleCardClick('contact')}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          <div style={styles.iconContainer}>
            <Mail size={24} />
          </div>
          <h3 style={styles.cardTitle}>Get in touch</h3>
          <p style={styles.cardSubtitle}>hello@forooz.me</p>
        </div>
      </div>

      {/* About Me Card */}
      <div style={styles.cardLarge}>
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
          }}>
            <User size={20} />
          </div>
          <div>
            <h2 style={{
              fontSize: '24px',
              fontWeight: '600',
              color: '#333333',
              margin: 0,
              lineHeight: '1.2'
            }}>Full-Stack Developer</h2>
            <p style={{
              fontSize: '14px',
              color: '#999999',
              margin: 0
            }}>Building digital experiences</p>
          </div>
        </div>

        <div style={styles.progressContainer}>
          <div style={styles.progressHeader}>
            <span style={styles.progressLabel}>Skill Level</span>
            <span style={styles.progressValue}>Expert</span>
          </div>
          <div style={styles.progressBar}>
            <div style={styles.progressFill}></div>
          </div>
        </div>
      </div>

      {/* Experience & Portfolio Card - Full Width Row */}
      <div style={styles.cardLarge}>
        <div style={styles.statsContainer}>
          <div>
            <h2 style={styles.statsText}>{yearsExperience} years experience</h2>
            <p style={styles.statsSubtext}>{projectsCompleted} projects completed</p>
          </div>
          <div style={{
            width: '48px',
            height: '48px',
            color: '#cccccc'
          }}>
            <Code size={48} />
          </div>
        </div>

        <div style={styles.socialContainer}>
          <div
            style={{...styles.socialIcon, ...styles.socialIconActive}}
            onClick={() => handleCardClick('github')}
          >
            <Github size={20} />
          </div>
          <div
            style={{...styles.socialIcon, ...styles.socialIconActive}}
            onClick={() => handleCardClick('linkedin')}
          >
            <Linkedin size={20} />
          </div>
          <div
            style={styles.socialIcon}
            onClick={() => handleCardClick('portfolio')}
          >
            <ExternalLink size={20} />
          </div>
          <span style={styles.contactText}>Connect</span>
        </div>
      </div>

      {/* Skills Grid */}
      <div style={{...styles.grid, marginTop: '20px'}}>
        <div style={styles.card}>
          <div style={styles.iconContainer}>
            <Code size={24} />
          </div>
          <h3 style={styles.cardTitle}>Web Applications</h3>
          <p style={styles.cardSubtitle}>React • Node.js • PHP</p>
        </div>

        <div style={styles.card}>
          <div style={styles.iconContainer}>
            <Gamepad2 size={24} />
          </div>
          <h3 style={styles.cardTitle}>Game Development</h3>
          <p style={styles.cardSubtitle}>HTML5 Canvas • JavaScript</p>
        </div>
      </div>

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