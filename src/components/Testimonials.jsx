import avatar1 from '../assets/images/testimonial-1.jpg'
import avatar2 from '../assets/images/testimonial-2.jpg'
import avatar3 from '../assets/images/testimonial-3.jpg'

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      quote: 'PixelCraft completely transformed our product packaging. Sales on our web store increased by 40% in the first three months because the designs finally matched our premium ingredients.',
      name: 'Amara Okereke',
      title: 'CEO, Aura Organic Skincare',
      avatar: avatar1,
    },
    {
      id: 2,
      quote: 'The brochure and visiting card designs they built for our brand summits are pure visual art. We regularly receive compliments from institutional distributors and investors.',
      name: 'Simon Vance',
      title: 'Founder, Origin Coffee Co.',
      avatar: avatar2,
    },
    {
      id: 3,
      quote: 'The poster typography they engineered for our grand winter showcase became an instant classic. They understand paper stock and technical print setups flawlessly.',
      name: 'Chloe Dupont',
      title: 'Exhibitions Chief, Paris Fine Arts',
      avatar: avatar3,
    },
  ];

  return (
    <section className="testimonials">
      <div className="container">
        <div className="testimonials-header">
          <div>
            <span className="eyebrow eyebrow-outline">Client Reviews</span>
            <h2 className="testimonials-title">WHAT OUR CLIENTS SAY</h2>
          </div>
          <div className="testimonials-nav">
            <button className="nav-arrow" aria-label="Previous">‹</button>
            <button className="nav-arrow nav-arrow-active" aria-label="Next">›</button>
          </div>
        </div>

        <div className="testimonials-grid">
          {testimonials.map(t => (
            <div key={t.id} className="testimonial-card">
              <div className="testimonial-stars">★★★★★</div>
              <p className="testimonial-quote">"{t.quote}"</p>
              <div className="testimonial-author">
                <img className="author-avatar" src={t.avatar} alt={t.name} />
                <div>
                  <p className="author-name">{t.name}</p>
                  <p className="author-title">{t.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
