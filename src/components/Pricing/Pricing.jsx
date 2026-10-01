import './Pricing.css';

const plans = [
  { name: 'Free', description: 'Try TerraNode on your own list.', price: '$0', cta: 'Start Dialing Free', popular: false, features: ['20 minutes of calling per month', '5x parallel dialing', 'CRM integrations', 'Call analytics'] },
  { name: 'Starter', description: 'For founders and first sales hires.', price: '$99', cta: 'Start Dialing Free', popular: true, features: ['1,000 minutes per month', 'Everything in Free', 'AI voicemail drop', 'Local presence numbers', 'Call recording & transcripts'] },
  { name: 'Unlimited', description: 'For teams calling every day.', price: '$199', cta: 'Get Started', popular: false, features: ['Unlimited calling', 'Everything in Starter', 'Spam-flag protection', 'SMS follow-ups', 'Analytics & coaching'] }
];

const Pricing = () => {
  return (
    <section id="pricing" className="pricing-section">
      <div className="pricing-container">
        
        <div className="section-head">
          <span className="section-eyebrow">Pricing</span>
          <h2 className="section-title">Start Free, Upgrade When You're Booking Meetings</h2>
          <p className="section-subtitle">
            Monthly plans with no contracts and no setup fees. Cancel anytime.
          </p>
        </div>

        <div className="pricing-grid">
          {plans.map((p, i) => (
            <div key={i} className={`pricing-card ${p.popular ? 'popular' : ''}`}>
              {p.popular && <div className="popular-badge">Most Popular</div>}
              
              <h3 className="plan-name">{p.name}</h3>
              <p className="plan-desc">{p.description}</p>
              
              <div className="plan-price-wrapper">
                <span className="plan-price">{p.price}</span>
                <span className="plan-unit">/ month</span>
              </div>
              
              <div className="plan-features">
                {p.features.map((f, j) => (
                  <div key={j} className="plan-feature">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>{f}</span>
                  </div>
                ))}
              </div>
              
              <a href="#" className={`plan-action ${p.popular ? 'btn-primary-lg' : 'btn-outline-lg'}`}>
                {p.cta}
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Pricing;
