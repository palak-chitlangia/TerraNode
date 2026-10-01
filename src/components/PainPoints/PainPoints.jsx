import './PainPoints.css';

const painPoints = [
  { n: '01', title: 'One number at a time', body: 'Most dials go to voicemail or ring out. Calling one by one leaves you with a handful of conversations a day.', fix: 'Parallel dialing rings up to five numbers at once and connects you the moment someone picks up.' },
  { n: '02', title: 'Unknown numbers get ignored', body: 'Prospects don’t answer out-of-state numbers, and a flagged caller ID quietly kills your connect rate.', fix: 'Local presence numbers match the prospect’s area code, and spam-flag protection keeps your numbers clean.' },
  { n: '03', title: 'Voicemails eat your day', body: 'Leaving the same message fifty times and texting follow-ups by hand doesn’t leave much time to sell.', fix: 'AI voicemail drop leaves a pre-recorded message in one click, and SMS follow-ups go out automatically.' },
  { n: '04', title: 'No record of what worked', body: 'Without recordings or numbers, it’s hard to tell which pitch landed or coach a new hire.', fix: 'Every call is recorded and transcribed, with analytics and coaching views for the whole team.' }
];

const PainPoints = () => {
  return (
    <section className="pain-section">
      <div className="pain-container">
        
        <div className="section-head">
          <span className="section-eyebrow">The early-stage problem</span>
          <h2 className="section-title">Manual Dialing Doesn't Scale With a Two-Person Team</h2>
          <p className="section-subtitle">
            Every hour spent waiting on rings and typing notes is an hour you're not talking to buyers.
          </p>
        </div>

        <div className="pain-grid">
          {painPoints.map((p, i) => (
            <div key={i} className="pain-card">
              <span className="pain-num">{p.n}</span>
              <h3 className="pain-title">{p.title}</h3>
              <p className="pain-body">{p.body}</p>
              
              <div className="pain-fix">
                <span className="fix-label">The TerraNode fix</span>
                <span className="fix-text">{p.fix}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PainPoints;
