import { useState } from 'react';
import './FAQ.css';

const faqs = [
  { id: 0, question: 'Is there a free plan?', answer: 'Yes. The Free plan includes 20 minutes of calling every month, with no credit card required.' },
  { id: 1, question: 'What is parallel dialing?', answer: 'TerraNode rings up to five numbers at the same time and connects you to the first person who answers. Unanswered lines can get a voicemail drop automatically.' },
  { id: 2, question: 'Do I need a phone or any hardware?', answer: 'No. TerraNode runs in your browser. You only need a laptop, a headset and an internet connection.' },
  { id: 3, question: 'Which CRMs do you integrate with?', answer: 'Salesforce, HubSpot, Zoho and Pipedrive. Calls, recordings and outcomes sync to the contact record.' },
  { id: 4, question: 'Are there contracts or setup fees?', answer: 'No. All plans are month to month with no setup fees. You can upgrade, downgrade or cancel anytime.' }
];

const FAQ = () => {
  const [openId, setOpenId] = useState(0);

  return (
    <section id="faq" className="faq-section">
      <div className="faq-container">
        
        <div className="section-head left">
          <span className="section-eyebrow">FAQ</span>
          <h2 className="section-title">Questions from Startup Teams</h2>
          <p className="section-subtitle">
            Still unsure? Start on the free plan and try it on your own list.
          </p>
        </div>

        <div className="faq-list">
          {faqs.map((faq) => (
            <div key={faq.id} className={`faq-item ${openId === faq.id ? 'open' : ''}`}>
              <button 
                className="faq-question" 
                onClick={() => setOpenId(openId === faq.id ? -1 : faq.id)}
              >
                {faq.question}
                <svg className="faq-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              <div className="faq-answer-wrapper">
                <p className="faq-answer">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQ;
