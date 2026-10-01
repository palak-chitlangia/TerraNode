import './footer.css';

const Footer = () => {
  return (
    <footer className="tn-footer">
      <div className="tn-footer-container">
        <div className="tn-footer-brand">
          <span className="tn-footer-title">TerraNode</span>
          <span className="tn-footer-copyright">© 2026 TerraNode</span>
        </div>
        
        <div className="tn-footer-links">
          <a href="#pricing">Pricing</a>
          <a href="#integrations">Integrations</a>
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
        </div>
      </div>
      
      <div className="tn-footer-address">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
        </svg>
        <span>3rd Floor, Shivalik Shilp, Iscon Cross Road, S.G. Highway, Ahmedabad, Gujarat 380015, India</span>
      </div>
    </footer>
  );
};

export default Footer;
