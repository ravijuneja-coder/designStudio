export default function Work() {
  const projects = [
    { id: 1, title: 'Project One', category: 'Web Design' },
    { id: 2, title: 'Project Two', category: 'Branding' },
    { id: 3, title: 'Project Three', category: 'Product Design' },
    { id: 4, title: 'Project Four', category: 'Web Design' },
    { id: 5, title: 'Project Five', category: 'Mobile App' },
    { id: 6, title: 'Project Six', category: 'Brand Design' },
  ];

  return (
    <section id="work" className="work">
      <div className="container">
        <h2 className="section-title">Work that speaks for itself</h2>
        <p className="section-subtitle">Take a look at what we've created</p>

        <div className="work-grid">
          {projects.map(project => (
            <div key={project.id} className="work-item">
              <div className="work-image-placeholder"></div>
              <h3 className="work-title">{project.title}</h3>
              <p className="work-category">{project.category}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
