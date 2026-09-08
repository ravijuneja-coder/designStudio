export default function Process() {
  const steps = [
    { id: '01', title: 'Discover', description: 'We learn about your brand, goals and audience to uncover the right creative direction.' },
    { id: '02', title: 'Concept', description: 'We sketch ideas and explore directions, narrowing in on the strongest concept.' },
    { id: '03', title: 'Design', description: 'We refine the chosen concept into polished, production-ready designs.' },
    { id: '04', title: 'Deliver', description: 'We hand off final files and assets, ready for you to launch with confidence.' },
  ];

  return (
    <section className="process">
      <div className="container">
        <div className="process-header">
          <span className="eyebrow eyebrow-outline eyebrow-dark center">Our Method</span>
          <h2 className="process-title">From idea to final design</h2>
          <p className="process-subtitle">A structured, transparent four-step workflow designed to translate pure vision into strategic, beautiful execution.</p>
        </div>

        <div className="process-grid">
          {steps.map(step => (
            <div key={step.id} className="process-step">
              <span className="process-number">{step.id}</span>
              <h3 className="process-step-title">{step.title}</h3>
              <p className="process-step-description">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
