import posterImg from '../assets/images/collage-poster.png'
import webImg from '../assets/images/collage-web.png'
import stickersImg from '../assets/images/collage-stickers.png'

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1 className="hero-title">
          WE DESIGN IDEAS <em>that get</em> NOTICED.
        </h1>
        <p className="hero-subtitle">
          Creative design studio crafting brands, digital experiences and visuals that leave a lasting impression.
        </p>
        <div className="hero-actions">
          <button className="btn-primary btn-large">Get Started</button>
          <button className="btn-outline btn-large">View Our Work</button>
        </div>
      </div>
      <div className="hero-image">
        <div className="hero-collage">
          <img className="collage-item collage-1" src={webImg} alt="" />
          <img className="collage-item collage-2" src={stickersImg} alt="" />
          <img className="collage-item collage-3" src={posterImg} alt="" />
        </div>
      </div>
    </section>
  )
}
