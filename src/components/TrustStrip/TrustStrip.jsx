import './TrustStrip.css';

const trustItems = [
  'No contracts',
  'No setup fees',
  'No hardware',
  'Free plan included'
];

const TrustStrip = () => {
  return (
    <section className="trust-section">
      <div className="trust-container">
        {trustItems.map((item, idx) => (
          <div key={idx} className="trust-item">
            <svg className="trust-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
            </svg>
            <span className="trust-text">{item}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustStrip;
