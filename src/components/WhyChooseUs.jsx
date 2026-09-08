export default function WhyChooseUs() {
  const reasons = [
    { id: 1, title: 'Creative Thinking', description: 'Original ideas tailored to your brand, not templates.' },
    { id: 2, title: 'Professional Quality', description: 'Polished, production-ready design in every deliverable.' },
    { id: 3, title: 'Fast Turnaround', description: 'Reliable timelines without compromising on quality.' },
  ];

  const stats = [
    { id: 1, value: '100+', label: 'Projects delivered' },
    { id: 2, value: '50+', label: 'Happy clients' },
    { id: 3, value: '10+', label: 'Years experience' },
    { id: 4, value: '5★', label: 'Average rating' },
  ];

  return (
    <section className="why-choose-us">
      <div className="container why-grid">
        <div className="why-left">
          <span className="eyebrow">Why Us</span>
          <h2 className="why-title">Why work with us?</h2>

          <ul className="reasons-list">
            {reasons.map(reason => (
              <li key={reason.id} className="reason-row">
                <span className="reason-check">✓</span>
                <div>
                  <h3 className="reason-title">{reason.title}</h3>
                  <p className="reason-description">{reason.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="why-right">
          <div className="stats-card">
            <p className="stats-heading">Numbers that represent excellence</p>
            <div className="stats-grid">
              {stats.map(stat => (
                <div key={stat.id} className="stat-item">
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
