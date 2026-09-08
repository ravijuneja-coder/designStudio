import { useState } from 'react'
import auraImg from '../assets/images/work-aura-cosmetics.jpg'
import originCoffeeImg from '../assets/images/work-origin-coffee.jpg'
import metropolisImg from '../assets/images/work-metropolis-art.jpg'
import bistroImg from '../assets/images/work-bistro.jpg'

export default function Work() {
  const filters = ['All', 'Branding', 'Web', 'Packaging', 'Print'];
  const [active, setActive] = useState('All');

  const projects = [
    { id: 1, title: 'Aura Cosmetics Identity System', category: 'Branding', image: auraImg },
    { id: 2, title: 'Origin Coffee Structural Box', category: 'Packaging', image: originCoffeeImg },
    { id: 3, title: 'Metropolis Art Exhibition Series', category: 'Print', image: metropolisImg },
    { id: 4, title: "L'Avenue Bistro Collateral", category: 'Branding', image: bistroImg },
  ];

  const visible = active === 'All' ? projects : projects.filter(p => p.category === active);

  return (
    <section id="work" className="work">
      <div className="container">
        <span className="eyebrow center">Portfolio</span>
        <h2 className="section-title">Work that speaks for itself.</h2>

        <div className="work-filters">
          {filters.map(f => (
            <button
              key={f}
              className={`filter-pill ${active === f ? 'active' : ''}`}
              onClick={() => setActive(f)}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="work-grid">
          {visible.map(project => (
            <div key={project.id} className="work-item">
              <img className="work-image-placeholder" src={project.image} alt={project.title} />
              <div className="work-overlay">
                <h3 className="work-title">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
