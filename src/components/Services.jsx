import stickerImg from '../assets/images/service-sticker.jpg'
import brochureImg from '../assets/images/service-brochure.jpg'
import visitingCardImg from '../assets/images/service-visiting-card.jpg'
import flyerImg from '../assets/images/service-flyer.jpg'
import websiteImg from '../assets/images/service-website.jpg'
import logoImg from '../assets/images/service-logo.jpg'
import socialImg from '../assets/images/service-social.jpg'
import posterImg from '../assets/images/service-poster.jpg'
import packagingImg from '../assets/images/service-packaging.jpg'
import menuImg from '../assets/images/service-menu.jpg'
import invitationImg from '../assets/images/service-invitation.jpg'
import presentationImg from '../assets/images/service-presentation.jpg'
import certificateImg from '../assets/images/service-certificate.jpg'
import bannerImg from '../assets/images/service-banner.jpg'
import infographicImg from '../assets/images/service-infographic.jpg'

export default function Services() {
  const services = [
    { id: 1, title: 'Sticker Design', image: stickerImg },
    { id: 2, title: 'Brochure Design', image: brochureImg },
    { id: 3, title: 'Visiting Card Design', image: visitingCardImg },
    { id: 4, title: 'Flyer Design', image: flyerImg },
    { id: 5, title: 'Website Design', image: websiteImg },
    { id: 6, title: 'Logo Design', image: logoImg },
    { id: 7, title: 'Social Media Design', image: socialImg },
    { id: 8, title: 'Poster Design', image: posterImg },
    { id: 9, title: 'Packaging Design', image: packagingImg },
    { id: 10, title: 'Menu Design', image: menuImg },
    { id: 11, title: 'Invitation Design', image: invitationImg },
    { id: 12, title: 'Presentation Design', image: presentationImg },
    { id: 13, title: 'Certificate & Award Design', image: certificateImg },
    { id: 14, title: 'Banner & Standee Design', image: bannerImg },
    { id: 15, title: 'Infographic Design', image: infographicImg },
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="services-header">
          <div>
            <span className="eyebrow">Our Expertise</span>
            <h2 className="services-title">Design services for every need</h2>
          </div>
          <p className="services-subtitle">From concept to creation, we deliver design solutions for every corner of your brand</p>
        </div>

        <div className="services-grid">
          {services.map(service => (
            <div key={service.id} className="service-card">
              <img className="service-thumb" src={service.image} alt={service.title} />
              <h3 className="service-title">{service.title}</h3>
              <a href="#contact" className="service-link">Learn more →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
