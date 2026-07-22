import { ArrowDownRight, ArrowUpRight, Check, Code2, Github, Layers3, Linkedin, Send, Sparkles, TerminalSquare, Workflow } from 'lucide-react';
import './PixelPortfolio.css';

const projects = [
  { index: '01', title: 'Run & Conquer', category: 'Product engineering', description: 'A location-based experience that turns every run into territory, progress, and competition.', stack: ['React', 'Maps', 'Game mechanics'], url: 'https://skyrun-alpha.vercel.app/', accent: 'project-lime' },
  { index: '02', title: 'Company Now', category: 'Business platform', description: 'A focused company-formation experience designed to turn complex services into a clear journey.', stack: ['WordPress', 'UX', 'Automation'], url: 'https://www.companynow.net/', accent: 'project-blue' },
  { index: '03', title: 'SailFi', category: 'Web3 product', description: 'An interactive maritime concept where users adopt a ship, follow its journey, and compete.', stack: ['Web3', 'React', 'Product design'], url: 'https://ndata-flax.vercel.app/', accent: 'project-violet' },
  { index: '04', title: 'AST Studio', category: 'Creative website', description: 'A refined digital home for a creative studio, balancing expressive visuals with clarity.', stack: ['WordPress', 'Responsive UI', 'Performance'], url: 'https://studioast.com/', accent: 'project-orange' },
  { index: '05', title: 'MyParvin', category: 'Education portal', description: 'A practical digital portal connecting school operations, information, and families.', stack: ['Portal', 'WordPress', 'Information architecture'], url: 'https://myparvin.ir/', accent: 'project-cyan' },
];

const services = [
  { icon: Layers3, number: '01', title: 'Product & interface', description: 'Clear product thinking, scalable design systems, and interfaces built around real user goals.' },
  { icon: Code2, number: '02', title: 'Full-stack development', description: 'Modern, maintainable web applications—from frontend details to APIs and production delivery.' },
  { icon: Workflow, number: '03', title: 'WordPress engineering', description: 'Custom themes, integrations, performance work, and business workflows beyond page builders.' },
];

const capabilities = ['React & JavaScript', 'Node.js & APIs', 'WordPress & PHP', 'UI/UX implementation', 'Technical SEO', 'Vercel & deployment', 'Web3 products', 'Automation systems'];

function PixelPortfolio() {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Forooz — home"><span className="brand-mark" aria-hidden="true">F</span><span>Forooz<span className="brand-dot">.</span></span></a>
        <nav className="desktop-nav" aria-label="Primary navigation"><a href="#work">Work</a><a href="#services">Services</a><a href="#about">About</a></nav>
        <a className="header-cta" href="https://t.me/foroozd" target="_blank" rel="noreferrer">Start a project <ArrowUpRight size={16} aria-hidden="true" /></a>
      </header>

      <main id="main-content">
        <section className="hero" id="top" aria-labelledby="hero-title">
          <div className="hero-kicker reveal reveal-1"><span className="availability-dot" aria-hidden="true" />Available for selected projects</div>
          <div className="hero-grid">
            <div className="hero-copy">
              <h1 id="hero-title" className="reveal reveal-2">I build digital products that feel <span>considered.</span></h1>
              <p className="hero-intro reveal reveal-3">I’m <strong>Forooz</strong>, a full-stack developer with 18 years of experience turning complex ideas into fast, focused, and dependable web products.</p>
              <div className="hero-actions reveal reveal-4">
                <a className="button button-primary" href="#work">Explore selected work <ArrowDownRight size={18} aria-hidden="true" /></a>
                <a className="text-link" href="https://github.com/Foroooz" target="_blank" rel="noreferrer">View GitHub <ArrowUpRight size={16} aria-hidden="true" /></a>
              </div>
            </div>
            <aside className="hero-panel reveal reveal-4" aria-label="Professional overview">
              <div className="code-window">
                <div className="window-bar"><span /><span /><span /><small>forooz.profile</small></div>
                <div className="code-body" aria-hidden="true">
                  <p><span className="code-purple">const</span> developer = {'{'}</p>
                  <p className="indent">name: <span className="code-green">'Forooz'</span>,</p>
                  <p className="indent">experience: <span className="code-orange">18</span>,</p>
                  <p className="indent">focus: [</p><p className="indent-2"><span className="code-green">'product'</span>,</p><p className="indent-2"><span className="code-green">'craft'</span>,</p><p className="indent-2"><span className="code-green">'results'</span></p><p className="indent">],</p>
                  <p className="indent">status: <span className="code-green">'building'</span></p><p>{'}'};</p>
                </div>
              </div>
              <div className="panel-footer"><div><span className="panel-label">Based in</span><strong>Iran · Working globally</strong></div><Sparkles size={22} aria-hidden="true" /></div>
            </aside>
          </div>
          <div className="hero-metrics reveal reveal-4" aria-label="Key metrics">
            <div><strong>18</strong><span>Years of experience</span></div><div><strong>12+</strong><span>Products delivered</span></div><div><strong>01</strong><span>Careful developer</span></div>
            <p>Strategy, design sensibility, and engineering discipline—combined in one accountable partner.</p>
          </div>
        </section>

        <section className="section work-section" id="work" aria-labelledby="work-title">
          <div className="section-heading"><div><span className="eyebrow">Selected work</span><h2 id="work-title">Built to solve, not just to show.</h2></div><p>A selection of products and websites shaped around usability, business value, and clean execution.</p></div>
          <div className="project-list">
            {projects.map((project) => (
              <a className={`project-row ${project.accent}`} href={project.url} target="_blank" rel="noreferrer" key={project.title} aria-label={`View ${project.title} project`}>
                <div className="project-meta"><span>{project.index}</span><span>{project.category}</span></div>
                <div className="project-main"><h3>{project.title}</h3><p>{project.description}</p><ul aria-label={`${project.title} technologies`}>{project.stack.map((item) => <li key={item}>{item}</li>)}</ul></div>
                <span className="project-arrow" aria-hidden="true"><ArrowUpRight size={24} /></span>
              </a>
            ))}
          </div>
        </section>

        <section className="section services-section" id="services" aria-labelledby="services-title">
          <div className="section-heading light-heading"><div><span className="eyebrow">How I can help</span><h2 id="services-title">From loose idea to reliable product.</h2></div><p>I work best where product decisions and technical decisions need to move together.</p></div>
          <div className="service-grid">{services.map(({ icon: Icon, number, title, description }) => <article className="service-card" key={title}><div className="service-top"><Icon size={24} aria-hidden="true" /><span>{number}</span></div><h3>{title}</h3><p>{description}</p></article>)}</div>
          <div className="process-bar">{['Understand', 'Design', 'Build', 'Refine', 'Ship'].map((step, index) => <div key={step}><span>{String(index + 1).padStart(2, '0')}</span>{step}</div>)}</div>
        </section>

        <section className="section about-section" id="about" aria-labelledby="about-title">
          <div className="about-grid">
            <div className="about-sticky"><span className="eyebrow">About Forooz</span><h2 id="about-title">Engineering with business context.</h2></div>
            <div className="about-content">
              <p className="about-lead">Good software is more than code that works. It should make the product clearer, the operation simpler, and the next decision easier.</p>
              <p>I bring 18 years of hands-on experience across WordPress, full-stack development, product interfaces, automation, and emerging web technologies. I communicate directly, challenge weak assumptions early, and stay responsible through delivery.</p>
              <div className="principles"><div><Check size={18} aria-hidden="true" /><span><strong>Clarity first</strong>Simple decisions beat unnecessary complexity.</span></div><div><Check size={18} aria-hidden="true" /><span><strong>Built to last</strong>Maintainable systems over fragile shortcuts.</span></div><div><Check size={18} aria-hidden="true" /><span><strong>Visible progress</strong>Frequent communication and tangible outcomes.</span></div></div>
              <div className="capability-block"><h3>Core capabilities</h3><ul>{capabilities.map((item) => <li key={item}>{item}</li>)}</ul></div>
            </div>
          </div>
        </section>

        <section className="contact-section" aria-labelledby="contact-title">
          <div className="contact-icon"><TerminalSquare size={30} aria-hidden="true" /></div><span className="eyebrow">Have something ambitious in mind?</span><h2 id="contact-title">Let’s make it real.</h2><p>Tell me what you’re building, where it stands, and what a successful outcome looks like.</p>
          <a className="button button-light" href="https://t.me/foroozd" target="_blank" rel="noreferrer">Start a conversation <Send size={17} aria-hidden="true" /></a>
        </section>
      </main>

      <footer className="site-footer"><a className="brand footer-brand" href="#top"><span className="brand-mark" aria-hidden="true">F</span><span>Forooz<span className="brand-dot">.</span></span></a><p>Independent full-stack developer building thoughtful digital products.</p><div className="footer-links"><a href="https://github.com/Forooz" target="_blank" rel="noreferrer" aria-label="Forooz on GitHub"><Github size={18} /></a><a href="https://www.linkedin.com/in/forooz/" target="_blank" rel="noreferrer" aria-label="Forooz on LinkedIn"><Linkedin size={18} /></a><a href="https://t.me/foroozd" target="_blank" rel="noreferrer" aria-label="Contact Forooz on Telegram"><Send size={18} /></a></div><small>© {new Date().getFullYear()} Forooz. All rights reserved.</small></footer>
    </div>
  );
}

export default PixelPortfolio;
