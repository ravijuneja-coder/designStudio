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
    { id: 1, title: 'Sticker Design', image: stickerImg, description: 'Custom die-cut designs that make your brand stick, literally. Perfect for merchandise and packaging flare.' },
    { id: 2, title: 'Brochure Design', image: brochureImg, description: 'Clean, foldable layouts that turn your story into something people want to pick up and read.' },
    { id: 3, title: 'Visiting Card Design', image: visitingCardImg, description: 'Premium, memorable cards that make the right first impression every time you hand one over.' },
    { id: 4, title: 'Flyer Design', image: flyerImg, description: 'Bold, eye-catching flyers built to grab attention and get your message across fast.' },
    { id: 5, title: 'Website Design', image: websiteImg, description: 'Modern, responsive interfaces that look great and guide visitors toward action.' },
    { id: 6, title: 'Logo Design', image: logoImg, description: 'Distinctive marks crafted to capture your brand\'s identity in a single glance.' },
    { id: 7, title: 'Social Media Design', image: socialImg, description: 'Cohesive, scroll-stopping visuals tailored for every platform your brand shows up on.' },
    { id: 8, title: 'Poster Design', image: posterImg, description: 'Striking large-format artwork designed to command attention from across the room.' },
    { id: 9, title: 'Packaging Design', image: packagingImg, description: 'Shelf-ready packaging that protects your product and sells it at the same time.' },
    { id: 10, title: 'Menu Design', image: menuImg, description: 'Elegant, easy-to-read menus that elevate the dining experience before the first bite.' },
    { id: 11, title: 'Invitation Design', image: invitationImg, description: 'Beautifully crafted invites that set the tone for your event before it even begins.' },
    { id: 12, title: 'Presentation Design', image: presentationImg, description: 'Polished slide decks that make your ideas clear, credible, and easy to sell.' },
    { id: 13, title: 'Certificate & Award Design', image: certificateImg, description: 'Formal, elegant certificates that give recognition the weight it deserves.' },
    { id: 14, title: 'Banner & Standee Design', image: bannerImg, description: 'High-impact banners and standees built to stand out at any event or storefront.' },
    { id: 15, title: 'Infographic Design', image: infographicImg, description: 'Clear, visually engaging breakdowns that turn complex data into a quick read.' },
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="services-header">
          <div>
            <span className="eyebrow">Our Expertise</span>
            <h2 className="services-title">Design services for<br />every need</h2>
          </div>
          <p className="services-subtitle">From concept to creation, we deliver design solutions for every corner of your brand</p>
        </div>

        <div className="services-grid">
          {services.map(service => (
            <div key={service.id} className="service-card">
              <img className="service-thumb" src={service.image} alt={service.title} />
              <div className="service-body">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <a href="#contact" className="service-link">Explore Service →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
