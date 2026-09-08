export default function Services() {
  const services = [
    {
      id: 1,
      icon: '🎨',
      title: 'Brand Design',
      description: 'Logo, identity systems, and brand guidelines'
    },
    {
      id: 2,
      icon: '🖼️',
      title: 'Web Design',
      description: 'Beautiful and functional websites'
    },
    {
      id: 3,
      icon: '📱',
      title: 'Product Design',
      description: 'User-centered app and product design'
    },
    {
      id: 4,
      icon: '✨',
      title: 'Motion Design',
      description: 'Animations and interactive experiences'
    },
    {
      id: 5,
      icon: '🎯',
      title: 'UX Research',
      description: 'Understanding your users deeply'
    },
    {
      id: 6,
      icon: '💼',
      title: 'Consulting',
      description: 'Strategic design guidance'
    }
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <h2 className="section-title">Design services for every need</h2>
        <p className="section-subtitle">We create beautiful designs that solve real problems</p>

        <div className="services-grid">
          {services.map(service => (
            <div key={service.id} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
