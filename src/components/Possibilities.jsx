import logoImg from '../assets/images/possibility-logo.jpg'
import cardsImg from '../assets/images/possibility-cards.jpg'
import stationeryImg from '../assets/images/possibility-stationery.jpg'
import packagingImg from '../assets/images/possibility-packaging.jpg'
import stickerImg from '../assets/images/possibility-sticker.jpg'
import brochureImg from '../assets/images/possibility-brochure.jpg'
import socialImg from '../assets/images/possibility-social.jpg'
import webImg from '../assets/images/possibility-web.jpg'

export default function Possibilities() {
  const items = [
    { id: 1, label: 'Logo Concept', image: logoImg },
    { id: 2, label: 'Business Cards', image: cardsImg },
    { id: 3, label: 'Stationery Suite', image: stationeryImg },
    { id: 4, label: 'Brand Packaging', image: packagingImg },
    { id: 5, label: 'Custom Sticker Seal', image: stickerImg },
    { id: 6, label: 'Editorial Brochure', image: brochureImg },
    { id: 7, label: 'Social Story System', image: socialImg },
    { id: 8, label: 'Immersive E-Commerce', image: webImg },
  ];

  return (
    <section className="possibilities">
      <div className="container">
        <div className="possibilities-header">
          <div>
            <span className="eyebrow eyebrow-outline">Studio Brand Case</span>
            <h2 className="possibilities-title">One brand. Endless<br />possibilities.</h2>
          </div>
          <p className="possibilities-subtitle">An immersive look into a complete brand identity designed by PixelCraft Studio for a luxury home fragrance label, showcasing modularity and print precision.</p>
        </div>

        <div className="possibilities-grid">
          {items.map((item, index) => (
            <div key={item.id} className="possibility-item">
              <img className="possibility-thumb" src={item.image} alt={item.label} />
              <p className="possibility-label">{index + 1}. {item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
