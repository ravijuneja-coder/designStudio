export default function WhyChooseUs() {
  const reasons = [
    { id: 1, title: 'Creative Thinking', description: "We don't do boring templates. Every design is custom, conceptualized to stand out." },
    { id: 2, title: 'Professional Quality', description: 'Sharp attention to grid alignments, print separations, color metrics, and typography spacing.' },
    { id: 3, title: 'Fast Turnaround', description: 'Consistent and predictable project timelines with streamlined conceptual checkpoints.' },
  ];

  const stats = [
    { id: 1, value: '100+', label: 'Completed Projects' },
    { id: 2, value: '50+', label: 'Happy Global Clients' },
    { id: 3, value: '10+', label: 'Design Categories' },
    { id: 4, value: '5★', label: 'Client Experience Rating' },
  ];

  return (
    <section className="why-choose-us">
      <div className="container why-grid">
        <div className="why-left">
          <span className="eyebrow eyebrow-outline">The Difference</span>
          <h2 className="why-title">WHY WORK WITH US?</h2>
          <p className="why-intro">We operate at the intersection of creative graphic design and brand strategy. We design to solve problems, captivate audiences, and grow businesses.</p>

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
            <p className="stats-heading">Numbers that represent<br />excellence.</p>
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
