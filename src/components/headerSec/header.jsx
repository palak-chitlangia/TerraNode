import { useState, useEffect } from 'react';
import './header.css';

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const openSidebar = () => setSidebarOpen(true);
  const closeSidebar = () => setSidebarOpen(false);

  // Lock body scroll when sidebar is open
  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [sidebarOpen]);

  return (
    <>
      {/* ─── Main Header ─────────────────────────── */}
      <header className="tn-header">
        <div className="tn-header-container">

          <a href="#" className="tn-brand-logo">
            <span className="tn-logo-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
            </span>
            <span className="tn-brand-title">TerraNode</span>
          </a>

          <nav className="tn-nav">
            <a href="#how" className="tn-nav-link">How It Works</a>
            <a href="#pricing" className="tn-nav-link">Pricing</a>
            <a href="#integrations" className="tn-nav-link">Integrations</a>
            <a href="#faq" className="tn-nav-link">FAQ</a>
          </nav>

          <div className="tn-header-actions">
            <a href="#pricing" className="btn-ghost">Log in</a>
            <a href="#pricing" className="btn-primary">Start Dialing Free</a>

            {/* Hamburger — visible on mobile only */}
            <button
              className="tn-hamburger"
              onClick={openSidebar}
              aria-label="Open menu"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
            </button>
          </div>

        </div>
      </header>

      {/* ─── Overlay ─────────────────────────────── */}
      <div
        className={`sidebar-overlay${sidebarOpen ? ' is-open' : ''}`}
        onClick={closeSidebar}
        aria-hidden="true"
      />

      {/* ─── Sidebar ─────────────────────────────── */}
      <aside className={`mobile-sidebar${sidebarOpen ? ' is-open' : ''}`}>

        <div className="sidebar-header">
          <a href="#" className="tn-brand-logo" onClick={closeSidebar}>
            <span className="tn-logo-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
            </span>
            <span className="tn-brand-title">TerraNode</span>
          </a>

          <button
            className="sidebar-close"
            onClick={closeSidebar}
            aria-label="Close menu"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>

        <nav className="sidebar-nav">
          <ul>
            <li><a href="#how" className="sidebar-link" onClick={closeSidebar}>How It Works</a></li>
            <li><a href="#pricing" className="sidebar-link" onClick={closeSidebar}>Pricing</a></li>
            <li><a href="#integrations" className="sidebar-link" onClick={closeSidebar}>Integrations</a></li>
            <li><a href="#faq" className="sidebar-link" onClick={closeSidebar}>FAQ</a></li>
          </ul>
        </nav>

        <div className="sidebar-ctas">
          <a href="#pricing" className="btn-ghost" onClick={closeSidebar}>Log in</a>
          <a href="#pricing" className="btn-primary" onClick={closeSidebar}>Start Dialing Free</a>
        </div>

      </aside>
    </>
  );
};

export default Header;
