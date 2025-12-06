import React, { useState, useEffect } from 'react';

const App = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Scroll Reveal Animation Logic
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="app-wrapper">
      {/* --- CSS STYLES --- */}
      <style>{`
        /* IMPORT FONTS */
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700;900&display=swap');

        /* --- VARIABLES --- */
        :root {
            --bg-color: #000000;
            --text-primary: #ffffff;
            --text-secondary: rgba(255, 255, 255, 0.7);
            --glass-bg: rgba(20, 20, 20, 0.6);
            --glass-border: rgba(255, 255, 255, 0.1);
            --accent-gradient: linear-gradient(135deg, #2997ff, #ad00ff);
            --sidebar-width: 280px;
            --mobile-header-height: 70px;
            --ease-apple: cubic-bezier(0.25, 1, 0.5, 1);
        }

        /* --- RESET & BASE --- */
        * { margin: 0; padding: 0; box-sizing: border-box; }
        
        body {
            background-color: var(--bg-color);
            color: var(--text-primary);
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
            overflow-x: hidden;
            line-height: 1.6;
            -webkit-font-smoothing: antialiased;
        }

        html { scroll-behavior: smooth; }

        /* --- LAYOUT STRUCTURE --- */
        .app-wrapper {
            display: flex;
            min-height: 100vh;
            position: relative;
        }

        /* --- SIDEBAR (Desktop) --- */
        .sidebar {
            position: fixed;
            top: 0;
            left: 0;
            width: var(--sidebar-width);
            height: 100vh;
            background: rgba(10, 10, 10, 0.7);
            backdrop-filter: blur(40px);
            -webkit-backdrop-filter: blur(40px);
            border-right: 1px solid var(--glass-border);
            padding: 40px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            z-index: 100;
            transition: transform 0.3s ease;
        }

        /* --- MOBILE HEADER (Hidden on Desktop) --- */
        .mobile-header {
            display: none; /* Hidden by default */
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: var(--mobile-header-height);
            background: rgba(10, 10, 10, 0.8);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            border-bottom: 1px solid var(--glass-border);
            z-index: 1000;
            padding: 0 20px;
            align-items: center;
            justify-content: space-between;
        }

        /* --- MAIN CONTENT AREA --- */
        .main-content {
            flex: 1;
            margin-left: var(--sidebar-width); /* Push content right */
            padding: 0;
            position: relative;
            z-index: 1;
            min-height: 100vh;
        }

        /* --- LOGO STYLES (Shared) --- */
        .brand-logo {
            text-decoration: none;
            display: block;
            margin-bottom: 60px;
        }

        /* Glass "RR" Logo Container */
        .logo-box {
            width: 60px;
            height: 60px;
            background: rgba(255, 255, 255, 0.03);
            border: 1px solid rgba(255, 255, 255, 0.15);
            border-radius: 16px;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 4px 20px rgba(0,0,0,0.3);
            transition: all 0.3s ease;
        }

        .brand-logo:hover .logo-box {
            background: rgba(255, 255, 255, 0.08);
            border-color: rgba(0, 243, 255, 0.3);
            box-shadow: 0 0 25px rgba(0, 243, 255, 0.15);
            transform: scale(1.02);
        }

        .logo-text {
            font-family: 'Inter', sans-serif;
            font-weight: 900;
            font-size: 1.8rem;
            letter-spacing: -2px;
            line-height: 1;
            background: linear-gradient(135deg, #ffffff 0%, #a0d8ff 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            padding-right: 4px; /* Optical balance */
        }

        /* --- NAVIGATION LINKS (Sidebar) --- */
        .nav-menu {
            list-style: none;
            display: flex;
            flex-direction: column;
            gap: 20px;
        }

        .nav-item a {
            display: block;
            color: rgba(255, 255, 255, 0.6);
            text-decoration: none;
            font-size: 1.1rem;
            font-weight: 500;
            transition: all 0.3s ease;
            padding: 10px 0;
            position: relative;
        }

        .nav-item a:hover {
            color: #fff;
            transform: translateX(10px);
        }

        .nav-item a::before {
            content: '';
            position: absolute;
            left: -20px;
            top: 50%;
            transform: translateY(-50%);
            width: 6px;
            height: 6px;
            background: #2997ff;
            border-radius: 50%;
            opacity: 0;
            transition: 0.3s;
        }

        .nav-item a:hover::before {
            opacity: 1;
            left: -15px;
        }

        /* --- FOOTER INFO (Sidebar) --- */
        .sidebar-footer {
            margin-top: auto;
            font-size: 0.8rem;
            color: rgba(255, 255, 255, 0.3);
        }

        .social-link {
            color: #2997ff;
            text-decoration: none;
            display: block;
            margin-bottom: 10px;
            font-weight: 600;
        }

        /* --- CONTENT SECTIONS --- */
        .container {
            max-width: 1000px;
            margin: 0 auto;
            padding: 50px 30px; /* Generous padding for desktop */
        }

        /* Hero Specifics */
        .hero-section {
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start; /* Align left for this layout */
            padding: 0 60px;
        }

        .hero-title {
            font-size: clamp(3rem, 6vw, 5.5rem);
            font-weight: 800;
            line-height: 1.1;
            margin-bottom: 24px;
            background: linear-gradient(180deg, #fff 0%, rgba(255,255,255,0.7) 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        .hero-subtitle {
            font-size: 1.3rem;
            color: var(--text-secondary);
            max-width: 600px;
            margin-bottom: 40px;
            border-left: 3px solid #2997ff;
            padding-left: 20px;
        }

        .section-title {
            font-size: 2.5rem;
            margin-bottom: 20px;
            color: #fff;
            position: relative;
            display: inline-block;
        }
        
        .section-title::after {
            content: '';
            position: absolute;
            bottom: -10px; left: 0;
            width: 100%; /* CHANGED: Full width */
            height: 3px;
            background: #2997ff; /* CHANGED: Solid blue */
            box-shadow: 0 0 10px rgba(41, 151, 255, 0.5); /* Added glow */
            border-radius: 2px;
        }

        /* --- GLASS CARDS (Standardized) --- */
        .glass-card {
            background: var(--glass-bg);
            border: 1px solid var(--glass-border);
            border-radius: 20px;
            padding: 30px;
            margin-bottom: 10px;
            transition: transform 0.3s ease;
        }
        
        .glass-card:hover {
            border-color: rgba(255, 255, 255, 0.2);
            transform: translateY(-5px);
        }

        /* --- MOBILE BURGER --- */
        .burger-btn {
            width: 30px;
            height: 20px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            background: none;
            border: none;
            cursor: pointer;
        }
        .burger-bar {
            width: 100%; height: 2px; background: #fff; transition: 0.3s;
        }
        .burger-btn.open .bar-1 { transform: rotate(45deg) translate(5px, 6px); }
        .burger-btn.open .bar-2 { opacity: 0; }
        .burger-btn.open .bar-3 { transform: rotate(-45deg) translate(5px, -6px); }

        /* --- MOBILE MENU OVERLAY --- */
        .mobile-nav-overlay {
            position: fixed;
            top: var(--mobile-header-height);
            left: 0;
            width: 100%;
            height: calc(100vh - var(--mobile-header-height));
            background: #000;
            z-index: 999;
            padding: 40px;
            transform: translateX(100%);
            transition: transform 0.4s var(--ease-apple);
        }
        .mobile-nav-overlay.open { transform: translateX(0); }

        /* --- RESPONSIVE BREAKPOINTS --- */
        @media (max-width: 1024px) {
            /* Switch to Mobile Layout */
            .sidebar { display: none; }
            .mobile-header { display: flex; }
            
            .main-content {
                margin-left: 0;
                padding-top: var(--mobile-header-height); /* Essential prevent overlap */
            }

            .hero-section {
                min-height: auto; /* Allow content to flow naturally */
                padding: 100px 24px 60px 24px; /* Top padding to clear header */
                align-items: center;
                text-align: center;
            }

            .container { padding: 60px 24px; }
            
            .hero-subtitle {
                border-left: none;
                border-top: 3px solid #2997ff;
                padding-left: 0;
                padding-top: 20px;
                margin: 0 auto 40px auto;
            }
            
            .brand-logo { margin-bottom: 0; }
            .logo-box { width: 40px; height: 40px; border-radius: 10px; }
            .logo-text { font-size: 1.2rem; }
        }

        /* --- ANIMATIONS --- */
        .orb { position: fixed; border-radius: 50%; filter: blur(80px); opacity: 0.5; z-index: 0; animation: float 20s infinite alternate; }
        .orb-1 { width: 50vw; height: 50vw; background: #0044ff; top: -10%; left: -10%; }
        .orb-2 { width: 40vw; height: 40vw; background: #8800ff; bottom: 0; right: 0; }
        
        .reveal { opacity: 0; transform: translateY(30px); transition: 1s var(--ease-apple); }
        .reveal.active { opacity: 1; transform: translateY(0); }
        
        @keyframes float { 0% { transform: translate(0,0); } 100% { transform: translate(20px, 40px); } }
      `}</style>

      {/* --- BACKGROUND AMBIENCE --- */ }
      <div className="orb orb-1"></div>
      <div className="orb orb-2"></div>

      {/* --- DESKTOP SIDEBAR --- */}
      <aside className="sidebar">
        <div>
            <a href="#" className="brand-logo">
                <div className="logo-box">
                    <span className="logo-text">RR</span>
                </div>
            </a>
            
            <ul className="nav-menu">
                <li className="nav-item"><a href="#hero">Start</a></li>
                <li className="nav-item"><a href="#about">About</a></li>
                <li className="nav-item"><a href="#skills">Skills</a></li>
                <li className="nav-item"><a href="#projects">Projects</a></li>
                <li className="nav-item"><a href="#experience">Experience</a></li>
                <li className="nav-item"><a href="#contact">Contact</a></li>
            </ul>
        </div>

        <div className="sidebar-footer">
            <a href="https://www.linkedin.com/in/rohan-radeeh/" target="_blank" className="social-link">LinkedIn Profile</a>
            <p>&copy; 2025 Rohan Radeeh</p>
        </div>
      </aside>

      {/* --- MOBILE HEADER --- */}
      <header className="mobile-header">
        <a href="#" className="brand-logo">
            <div className="logo-box">
                <span className="logo-text">RR</span>
            </div>
        </a>
        <button 
            className={`burger-btn ${isMobileMenuOpen ? 'open' : ''}`}
            onClick={toggleMobileMenu}
        >
            <span className="burger-bar bar-1"></span>
            <span className="burger-bar bar-2"></span>
            <span className="burger-bar bar-3"></span>
        </button>
      </header>

      {/* --- MOBILE MENU OVERLAY --- */}
      <div className={`mobile-nav-overlay ${isMobileMenuOpen ? 'open' : ''}`}>
        <ul className="nav-menu" style={{ fontSize: '1.5rem', textAlign: 'center', gap: '40px' }}>
            <li className="nav-item"><a href="#hero" onClick={toggleMobileMenu}>Start</a></li>
            <li className="nav-item"><a href="#about" onClick={toggleMobileMenu}>About</a></li>
            <li className="nav-item"><a href="#skills" onClick={toggleMobileMenu}>Skills</a></li>
            <li className="nav-item"><a href="#projects" onClick={toggleMobileMenu}>Projects</a></li>
            <li className="nav-item"><a href="#contact" onClick={toggleMobileMenu}>Contact</a></li>
        </ul>
      </div>

      {/* --- MAIN CONTENT --- */}
      <main className="main-content">
        
        <section id="hero" className="hero-section">
            <h1 className="hero-title reveal">Rohan Radeeh</h1>
            <p className="hero-subtitle reveal">
                Aspiring Cybersecurity Analyst specializing in <span style={{ color: '#fff', fontWeight: 600 }}>Blockchain Technologies</span>.
                Building the secure infrastructure of tomorrow.
            </p>
            <div className="reveal">
                <a href="#projects" style={{ 
                    padding: '12px 30px', 
                    border: '1px solid #2997ff', 
                    color: '#2997ff', 
                    textDecoration: 'none', 
                    borderRadius: '50px',
                    fontWeight: '600'
                }}>Explore Work</a>
            </div>
        </section>

        <section id="about" className="container">
            <h2 className="section-title reveal">About Me</h2>
            <div className="glass-card reveal">
                <p style={{ fontSize: '1.1rem', color: '#ccc' }}>
                    I am a <strong>B.Tech Computer Science</strong> graduate with a specialization in <strong>Blockchain Technologies</strong> from <strong>VIT Vellore</strong> (CGPA 8.97).
                    <br /><br />
                    Motivated and enthusiastic, I am proficient in network security, digital forensics, and threat intelligence. I aspire to build a career as a Cybersecurity Analyst, contributing to the advancement of secure digital infrastructures.
                </p>
            </div>
        </section>

        <section id="skills" className="container">
            <h2 className="section-title reveal">Technical Skills</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
                <div className="glass-card reveal">
                    <h3 style={{ color: '#2997ff', marginBottom: '15px' }}>Programming</h3>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                        {['Python', 'C++', 'Java', 'JavaScript'].map(s => (
                            <span key={s} style={{ background: 'rgba(255,255,255,0.1)', padding: '5px 12px', borderRadius: '8px', fontSize: '0.9rem' }}>{s}</span>
                        ))}
                    </div>
                </div>
                <div className="glass-card reveal">
                    <h3 style={{ color: '#2997ff', marginBottom: '15px' }}>Cloud & Security</h3>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                        {['AWS (Certified)', 'MetaMask', 'Smart Contracts', 'Cryptography'].map(s => (
                            <span key={s} style={{ background: 'rgba(255,255,255,0.1)', padding: '5px 12px', borderRadius: '8px', fontSize: '0.9rem' }}>{s}</span>
                        ))}
                    </div>
                </div>
                <div className="glass-card reveal">
                    <h3 style={{ color: '#2997ff', marginBottom: '15px' }}>Web & Data</h3>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                        {['React.js', 'Node.js', 'MySQL', 'Firebase'].map(s => (
                            <span key={s} style={{ background: 'rgba(255,255,255,0.1)', padding: '5px 12px', borderRadius: '8px', fontSize: '0.9rem' }}>{s}</span>
                        ))}
                    </div>
                </div>
            </div>
        </section>

        <section id="projects" className="container">
            <h2 className="section-title reveal">Academic Projects</h2>
            
            <div className="glass-card reveal">
                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', marginBottom: '15px' }}>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: '700' }}>Counterfeit Goods Detection System</h3>
                    <span style={{ color: '#2997ff', fontSize: '0.9rem', fontWeight: '600' }}>ETHEREUM // SOLIDITY</span>
                </div>
                <p style={{ color: '#ccc', marginBottom: '20px' }}>
                    Developed a Blockchain-based system to ensure transparent and tamper-proof product authentication. 
                    Users scan QR codes to verify authenticity, increasing supply chain transparency.
                </p>
                <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '15px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                    <div>
                        <span style={{ display: 'block', fontSize: '0.8rem', color: '#888' }}>KEY FEATURE</span>
                        <span>Tamper-Proof Tracking</span>
                    </div>
                    <div>
                        <span style={{ display: 'block', fontSize: '0.8rem', color: '#888' }}>IMPACT</span>
                        <span>Brand Protection</span>
                    </div>
                </div>
            </div>

            <div className="glass-card reveal">
                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', marginBottom: '15px' }}>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: '700' }}>AI Healthcare Chatbot</h3>
                    <span style={{ color: '#2997ff', fontSize: '0.9rem', fontWeight: '600' }}>PYTHON // NLP</span>
                </div>
                <p style={{ color: '#ccc', marginBottom: '20px' }}>
                    Developed an AI-based chatbot using NLP and Machine Learning to provide instant medical assistance, 
                    symptom guidance, and smart hospital recommendations.
                </p>
            </div>
        </section>

        <section id="experience" className="container">
            <h2 className="section-title reveal">Experience</h2>
            
            <div className="glass-card reveal" style={{ border: '1px solid #2997ff', boxShadow: '0 0 20px rgba(41, 151, 255, 0.15)' }}>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '5px' }}>Head of Department Mechatronics</h3>
                <p style={{ color: '#888', marginBottom: '15px', fontSize: '0.9rem' }}>Team Kshatriya Electric (SAE E-BAJA Team) | Apr 2024 - Apr 2025</p>
                <p style={{ color: '#ccc' }}>
                    Led the mechatronics department. Secured 6th place out of 100 teams in overall build for static events (BAJA SAE 2024) and 5th place in endurance racing.
                </p>
            </div>

            <div className="glass-card reveal" style={{ border: '1px solid #2997ff', boxShadow: '0 0 20px rgba(41, 151, 255, 0.15)' }}>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '5px' }}>Braking System Analyst</h3>
                <p style={{ color: '#888', marginBottom: '15px', fontSize: '0.9rem' }}>Team Kshatriya (SAE BAJA Team) | Apr 2022 - Apr 2024</p>
                <p style={{ color: '#ccc' }}>
                    Developed a MATLAB-based simulation for ATV braking. Achieved 11% simulated improvement and 5% real-world improvement in braking performance.
                </p>
            </div>
        </section>

        <section id="contact" className="container" style={{ textAlign: 'center', paddingBottom: '100px' }}>
            <h2 className="section-title reveal">Let's Connect</h2>
            <p className="reveal" style={{ fontSize: '1.2rem', marginBottom: '40px', color: '#ccc' }}>
                Ready to build secure systems for the future?
            </p>
            <a href="https://www.linkedin.com/in/rohan-radeeh/" target="_blank" className="reveal" style={{ 
                padding: '16px 40px', 
                background: '#fff', 
                color: '#000', 
                textDecoration: 'none', 
                borderRadius: '50px',
                fontWeight: '700',
                fontSize: '1.1rem'
            }}>
                Connect on LinkedIn
            </a>
            <div style={{ marginTop: '60px', color: '#555', fontSize: '0.9rem' }}>
                &copy; 2025 Rohan Radeeh. All systems go.
            </div>
        </section>

      </main>
    </div>
  );
};

export default App;