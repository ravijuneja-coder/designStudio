import bannerImg from '../assets/images/banner-create-inspire.jpg'

export default function CTA() {
  return (
    <section className="cta" id="contact" style={{ backgroundImage: `url(${bannerImg})` }}>
      <div className="cta-overlay"></div>
      <div className="container">
        <div className="cta-content">
          <h2 className="cta-title">Have an idea? Let's design it <em>together</em>.</h2>
          <p className="cta-subtitle">Tell us what you need and we'll turn your raw ideas into production-ready designs that grab client attention.</p>
          <div className="cta-actions">
            <button className="btn-primary btn-large">Start Your Project →</button>
            <button className="btn-outline btn-large btn-outline-dark">Get a Free Quote</button>
          </div>
        </div>
      </div>
    </section>
  )
}
