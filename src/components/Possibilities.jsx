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
    { id: 5, label: 'Custom Sticker Sheet', image: stickerImg },
    { id: 6, label: 'Editorial Brochure', image: brochureImg },
    { id: 7, label: 'Social Kit', image: socialImg },
    { id: 8, label: 'Digital Experience', image: webImg },
  ];

  return (
    <section className="possibilities">
      <div className="container">
        <span className="eyebrow center">Versatility</span>
        <h2 className="section-title">One brand. Endless possibilities.</h2>

        <div className="possibilities-grid">
          {items.map(item => (
            <div key={item.id} className="possibility-item">
              <img className="possibility-thumb" src={item.image} alt={item.label} />
              <p className="possibility-label">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
