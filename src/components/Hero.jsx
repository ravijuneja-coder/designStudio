import posterImg from '../assets/images/collage-poster.png'
import packagingImg from '../assets/images/collage-packaging.png'
import bizcardsImg from '../assets/images/collage-bizcards.png'
import webImg from '../assets/images/collage-web.png'
import stickersImg from '../assets/images/collage-stickers.png'

export default function Hero() {
  const cards = [
    { id: 1, tag: 'PRINT DESIGN', image: posterImg, caption: 'Sticker & Badge Design' },
    { id: 2, tag: 'BRANDING', image: packagingImg, caption: 'Brochure & Flyer Art' },
    { id: 3, tag: 'PRINT DESIGN', image: bizcardsImg, caption: 'Business Card Design' },
    { id: 4, tag: 'WEB DESIGN', image: webImg, caption: 'Digital & Social Assets' },
    { id: 5, tag: 'DIGITAL DESIGN', image: stickersImg, caption: 'Premium Packaging' },
  ];

  return (
    <section className="hero" id="home">
      <div className="container">
        <span className="hero-eyebrow">— PREMIUM GRAPHIC DESIGN STUDIO</span>
        <h1 className="hero-title">
          WE DESIGN IDEAS <em>that get</em><br />NOTICED.
        </h1>
        <div className="hero-bottom">
          <p className="hero-subtitle">
            Creative graphic design solutions for brands, businesses and individuals — from stunning print designs to engaging digital experiences. We elevate your storytelling.
          </p>
          <div className="hero-actions">
            <button className="btn-primary btn-large">Start a Project →</button>
            <button className="btn-outline btn-large">View Our Work</button>
          </div>
        </div>

        <div className="hero-showcase">
          <div className="hero-showcase-grid">
            {cards.map(card => (
              <div key={card.id} className="showcase-card">
                <span className="showcase-card-tag">{card.tag}</span>
                <img src={card.image} alt={card.tag} />
                {card.caption && <span className="showcase-card-caption">✦ {card.caption}</span>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
