import "./Banner.css"

const Banner = () => {
  const bannerImg = "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcRInT5N9lvqwGrKcrjViQDOLPC7jJ3fszEbjdn1OCEnBQFd5MWOHTvdekETExS49aKHeW0MCjuL3fQ6uLk";

  return (
    <div 
      className="hero-banner" 
      style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(${bannerImg})` }}
    >
      <div className="banner-content">
        <span className="banner-subtitle">Welcome to CarNzuri Wheels in Kenya</span>
        <h1 className="banner-title">Find Your Ultimate Luxury Drive</h1>
        <p className="banner-text">
          Explore our handpicked collection of high-performance sports cars, rugged off-roaders, and premium luxury SUVs.
        </p>
        <div className="banner-actions">
          <button className="banner-btn primary-btn">Explore Showroom</button>
          <button className="banner-btn secondary-btn">Book Consultation</button>
        </div>
      </div>
    </div>
  )
}

export default Banner;
