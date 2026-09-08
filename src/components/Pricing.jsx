export default function Pricing() {
  const plans = [
    {
      id: 1,
      name: 'Starter',
      price: '$899',
      duration: 'one-time',
      features: [
        'Logo Design',
        '3 Revisions',
        'Brand Guidelines',
        'Email Support'
      ]
    },
    {
      id: 2,
      name: 'Business',
      price: '$2,499',
      duration: 'one-time',
      featured: true,
      features: [
        'Everything in Starter',
        'Web Design',
        'Unlimited Revisions',
        'Priority Support',
        'Branding Package'
      ]
    },
    {
      id: 3,
      name: 'Brand Master',
      price: '$5,999',
      duration: 'one-time',
      features: [
        'Everything in Business',
        'Full Brand Strategy',
        'Web & App Design',
        'Dedicated Account Manager',
        'Ongoing Support'
      ]
    }
  ];

  return (
    <section id="pricing" className="pricing">
      <div className="container">
        <span className="eyebrow center">Pricing</span>
        <h2 className="section-title">Choose your design tier</h2>
        <p className="section-subtitle">Transparent pricing for every budget</p>

        <div className="pricing-grid">
          {plans.map(plan => (
            <div key={plan.id} className={`pricing-card ${plan.featured ? 'featured' : ''}`}>
              {plan.featured && <span className="popular-badge">Most Popular</span>}
              <h3 className="plan-name">{plan.name}</h3>
              <div className="plan-price">{plan.price}</div>
              <p className="plan-duration">{plan.duration}</p>
              <button className={`btn-plan ${plan.featured ? 'btn-primary' : 'btn-secondary'}`}>
                Get Started
              </button>
              <ul className="plan-features">
                {plan.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
