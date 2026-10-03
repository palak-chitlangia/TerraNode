import { useState, useEffect } from 'react';
import './Hero.css';

const linesData = [
  { n: 1, name: 'Priya Raman', company: 'Loopwise', phone: '(415) 555-0142', status: 'Connected', statusClass: 'status-connected' },
  { n: 2, name: 'Daniel Ortiz', company: 'Fieldnote', phone: '(212) 555-0187', status: 'Ringing', statusClass: 'status-ringing' },
  { n: 3, name: 'Maya Chen', company: 'Stackform', phone: '(646) 555-0119', status: 'Voicemail dropped', statusClass: 'status-voicemail' },
  { n: 4, name: 'Jonas Weber', company: 'Brightpath', phone: '(512) 555-0163', status: 'Ringing', statusClass: 'status-ringing' },
  { n: 5, name: 'Aisha Khan', company: 'Parcelry', phone: '(303) 555-0128', status: 'No answer', statusClass: 'status-no-answer' }
];

const Hero = () => {
  const [timer, setTimer] = useState(872);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (totalSeconds) => {
    const h = Math.floor(totalSeconds / 3600);
    const m = Math.floor((totalSeconds % 3600) / 60);
    const s = totalSeconds % 60;
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <section className="hero-section">
      <div className="hero-bg"></div>
      <div className="hero-container">
        
        <div className="hero-row">
          
          <div className="hero-content">
            <div className="hero-badge">
              <span className="pulse-dot"></span>
              TerraNode for Startups
            </div>
            
            <h1 className="hero-title">
              Make More Calls Before You Make Your Next Hire
            </h1>
            
            <p className="hero-subtitle">
              TerraNode dials five numbers at once and connects you only when a person answers. Founders and first sales hires reach more prospects per hour without contracts, setup fees or extra hardware.
            </p>
            
            <div className="hero-actions">
              <a href="#pricing" className="btn-primary-lg">Start Dialing Free</a>
              <a href="#pricing" className="btn-outline-lg">View Pricing</a>
            </div>
            
            <div className="hero-bullets">
              <span className="hero-bullet">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
                20 free minutes monthly
              </span>
              <span className="hero-bullet">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
                No credit card
              </span>
              <span className="hero-bullet">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
                Runs in your browser
              </span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="browser-mock">
              <div className="browser-header">
                <div className="browser-dots">
                  <span className="b-dot b-dot-red"></span>
                  <span className="b-dot b-dot-yellow"></span>
                  <span className="b-dot b-dot-green"></span>
                </div>
                <div className="browser-url-bar">
                  app.terranode.com/dialer
                </div>
              </div>
              
              <div className="dialer-body">
                <div className="dialer-header">
                  <div className="dialer-meta">
                    <span className="dialer-tag">Session &middot; Seed SaaS founders</span>
                    <span className="dialer-title">Dialing 5 lines &middot; 42 of 300</span>
                  </div>
                  <div className="dialer-live">
                    <span className="pulse-dot"></span>
                    Live {formatTime(timer)}
                  </div>
                </div>

                <div className="dialer-table">
                  {linesData.map((l) => (
                    <div key={l.n} className={`dialer-row ${l.statusClass}-row`}>
                      <span className="dialer-row-num">L{l.n}</span>
                      <div className="dialer-row-contact">
                        <span className="dialer-name">{l.name}</span>
                        <span className="dialer-company">{l.company}</span>
                      </div>
                      <span className="dialer-phone">{l.phone}</span>
                      <span className={`dialer-status ${l.statusClass}`}>
                        {l.status}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="dialer-stats">
                  <div className="stat-box">
                    <span className="stat-label">Connects</span>
                    <span className="stat-val">9</span>
                  </div>
                  <div className="stat-box">
                    <span className="stat-label">Voicemails dropped</span>
                    <span className="stat-val">17</span>
                  </div>
                  <div className="stat-box">
                    <span className="stat-label">Meetings booked</span>
                    <span className="stat-val red">3</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
