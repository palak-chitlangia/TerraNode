import './HowItWorks.css';

const steps = [
  { n: '1', title: 'Import your contacts', body: 'Upload a CSV or connect your CRM. TerraNode pulls in names, numbers and account details.' },
  { n: '2', title: 'Start a dialing session', body: 'Choose how many lines to dial in parallel and hit start. You only hear calls where a person answers.' },
  { n: '3', title: 'Talk, log and follow up', body: 'Notes, recordings and outcomes sync to your CRM. Missed contacts get a voicemail drop or SMS.' }
];

const HowItWorks = () => {
  return (
    <section id="how" className="how-section">
      <div className="how-container">
        
        <div className="section-head">
          <span className="section-eyebrow">How it works</span>
          <h2 className="section-title">From Contact List to Conversations in Minutes</h2>
        </div>

        <div className="how-grid">
          {steps.map((s, i) => (
            <div key={i} className="how-card">
              <span className="how-step">{s.n}</span>
              <h3 className="how-title">{s.title}</h3>
              <p className="how-body">{s.body}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;
