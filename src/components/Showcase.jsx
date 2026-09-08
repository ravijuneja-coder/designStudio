import curlyImg from '../assets/images/showcase-curly-enterprise.jpg'
import censionImg from '../assets/images/showcase-cension.jpg'

export default function Showcase() {
  return (
    <section className="showcase">
      <div className="container">
        <h2 className="section-title">Good design changes everything.</h2>

        <div className="showcase-grid">
          <div className="showcase-item" style={{ backgroundImage: `url(${curlyImg})` }}>
            <span className="showcase-tag">Curly Enterprise</span>
          </div>
          <div className="showcase-item" style={{ backgroundImage: `url(${censionImg})` }}>
            <span className="showcase-tag">Cension</span>
          </div>
        </div>
      </div>
    </section>
  )
}
