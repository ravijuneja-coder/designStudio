export default function WhyChooseUs() {
  const reasons = [
    {
      id: 1,
      title: 'Award-Winning Team',
      description: 'Our designers have won multiple international design awards'
    },
    {
      id: 2,
      title: 'Strategic Thinking',
      description: 'We focus on solving problems, not just making things look good'
    },
    {
      id: 3,
      title: 'Collaborative Process',
      description: 'You\'re involved every step of the way'
    }
  ];

  return (
    <section className="why-choose-us">
      <div className="container">
        <h2 className="section-title">Why work with us?</h2>

        <div className="reasons-grid">
          {reasons.map(reason => (
            <div key={reason.id} className="reason-card">
              <div className="reason-number">{reason.id}</div>
              <h3 className="reason-title">{reason.title}</h3>
              <p className="reason-description">{reason.description}</p>
            </div>
          ))}
        </div>

        <div className="testimonial">
          <p className="testimonial-text">"Working with this studio was a game-changer for our brand. They understood our vision and exceeded all expectations."</p>
          <div className="testimonial-author">
            <div className="author-avatar"></div>
            <div>
              <p className="author-name">Sarah Johnson</p>
              <p className="author-title">CEO, Tech Startup</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
