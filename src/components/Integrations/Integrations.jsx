import './Integrations.css';

const crms = [
  { name: 'Salesforce', initial: 'S' },
  { name: 'HubSpot', initial: 'H' },
  { name: 'Zoho', initial: 'Z' },
  { name: 'Pipedrive', initial: 'P' }
];

const Integrations = () => {
  return (
    <section id="integrations" className="integrations-section">
      <div className="integrations-container">
        
        <div className="integrations-content">
          <div className="section-head left">
            <span className="section-eyebrow">Integrations</span>
            <h2 className="section-title">Every Call Logged in Your CRM</h2>
            <p className="section-subtitle">
              Connect once and TerraNode syncs calls, recordings, transcripts and outcomes to the contact record automatically.
            </p>
          </div>
          <a href="#" className="btn-outline-lg btn-integrations">See All Integrations</a>
        </div>

        <div className="integrations-grid">
          {crms.map((c, i) => (
            <div key={i} className="integration-card">
              <span className="integration-icon">{c.initial}</span>
              <div className="integration-info">
                <h3 className="integration-name">{c.name}</h3>
                <span className="integration-sync">Two-way sync</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Integrations;
