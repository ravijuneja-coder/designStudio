export default function CTA() {
  return (
    <section className="cta">
      <div className="container">
        <div className="cta-content">
          <h2 className="cta-title">Have an idea? Let's create something great.</h2>
          <p className="cta-subtitle">Tell us about your project and we'll get back to you within 24 hours</p>
          <form className="cta-form">
            <input type="email" placeholder="your@email.com" required />
            <textarea placeholder="Tell us about your project..." rows="4" required></textarea>
            <button type="submit" className="btn-primary">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  )
}
