import avatar1 from '../assets/images/testimonial-1.jpg'
import avatar2 from '../assets/images/testimonial-2.jpg'
import avatar3 from '../assets/images/testimonial-3.jpg'

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      quote: 'Pixelcraft completely transformed our brand identity. The team understood our vision from day one and delivered beyond expectations.',
      name: 'Hannah Roberts',
      title: 'Founder, Aura Cosmetics',
      avatar: avatar1,
    },
    {
      id: 2,
      quote: 'Professional, creative, and fast. Every deliverable felt custom-made for us, not a template stretched to fit.',
      name: 'James Carter',
      title: 'Marketing Lead, Origin Coffee',
      avatar: avatar2,
    },
    {
      id: 3,
      quote: 'The best design partner we\'ve worked with. Clear communication and stunning results at every stage of the process.',
      name: 'Priya Mehta',
      title: 'CEO, Metropolis Gallery',
      avatar: avatar3,
    },
  ];

  return (
    <section className="testimonials">
      <div className="container">
        <span className="eyebrow center">Testimonials</span>
        <h2 className="section-title">What our clients say</h2>

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
