import { useState } from 'react'

export default function FAQ() {
  const [openId, setOpenId] = useState(null);

  const faqs = [
    {
      id: 1,
      question: 'What is your typical project timeline?',
      answer: 'Most projects take 4-8 weeks depending on scope and complexity. We\'ll provide a detailed timeline during the discovery phase.'
    },
    {
      id: 2,
      question: 'Do you offer revisions?',
      answer: 'Yes! All our packages include revisions. The number depends on the plan you choose.'
    },
    {
      id: 3,
      question: 'Can you work with our existing branding?',
      answer: 'Absolutely. We can work with your existing assets or create something completely new.'
    },
    {
      id: 4,
      question: 'What\'s your process?',
      answer: 'We start with discovery and research, move to concepts, then refinement, and finally delivery with full documentation.'
    },
    {
      id: 5,
      question: 'Do you provide ongoing support?',
      answer: 'Yes, we offer post-launch support packages to help maintain and update your designs.'
    },
    {
      id: 6,
      question: 'What if I\'m not happy with the work?',
      answer: 'Your satisfaction is our priority. We offer unlimited revisions until you\'re completely happy with the result.'
    }
  ];

  return (
    <section className="faq">
      <div className="container">
        <span className="eyebrow center">FAQ</span>
        <h2 className="section-title">Frequently asked questions</h2>

        <div className="faq-list">
          {faqs.map(faq => (
            <div key={faq.id} className="faq-item">
              <button
                className="faq-question"
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
              >
                <span>{faq.question}</span>
                <span className={`faq-icon ${openId === faq.id ? 'open' : ''}`}>+</span>
              </button>
              {openId === faq.id && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
