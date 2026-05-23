import "./FeaturedVehicles.css"

const VEHICLES_DATA = [
  { 
    id: 1, 
    brand: "Toyota", 
    model: "Land Cruiser ZX", 
    year: 2024, 
    price: "KSh 14,950,000", 
    fuel: "Diesel", 
    transmission: "Automatic", 
    engine: "3300cc", 
    inStock: true, 
    img: "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcTnqYIFcJN1HqXBQbNY8kHSElhh4mmxS0Vl2aKswAvUWof2VWjdiJp3UsHECTRrgIO4-Hgrm4dsoMdRw00" 
  },
  { 
    id: 2, 
    brand: "Mercedes-Benz", 
    model: "AMG G63", 
    year: 2023, 
    price: "KSh 23,380,000", 
    fuel: "Petrol", 
    transmission: "Automatic", 
    engine: "4000cc",
    inStock: true,
    img: "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcQKdeo1Oc7PijeUq084tfM8ZQzp1X8csGgztduD26YDY7ZgGM9oWY6V0z_Eugsu1-91hvp1dPtr52wQTF4" 
  },
  { 
    id: 3, 
    brand: "Subaru", 
    model: "WRX STI", 
    year: 2022, 
    price: "KSh 5,395,000", 
    fuel: "Petrol", 
    transmission: "Manual", 
    engine: "2500cc",
    inStock: false, 
    img: "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcR5hC3BOSDRtFZfeDT9xpKFAU6EkLWVWeHEaQbhs3v1YiLXcUBbaQsZ_33V1gpHdUQuXxYNkz09krClmKA" 
  },
  { 
    id: 4, 
    brand: "BMW", 
    model: "M4 Competition", 
    year: 2024, 
    price: "KSh 12,480,000", 
    fuel: "Petrol", 
    transmission: "Automatic", 
    engine: "3000cc",
    inStock: true,
    img: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQnbkJUvCnd0SFzORM6dsXPsvev_8WSkDsXyn_wlDwpJwBFrIbyhMDY_suMByaf-mmWV3PbUUjZWPS_nkI" 
  },
  { 
    id: 5, 
    brand: "Audi", 
    model: "RS6 Avant", 
    year: 2023, 
    price: "KSh 15,860,000", 
    fuel: "Hybrid", 
    transmission: "Automatic", 
    engine: "4000cc",
    inStock: true,
    img: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQ3xF0Z9LU2OmPjIKrWz_9JAOyNuigA9OXLda1FH3GYkUahzzvxtuajR6HglymBhf9mz1NBVS8aMQDGWbA" 
  },
  { 
    id: 6, 
    brand: "Nissan", 
    model: "GT-R Premium", 
    year: 2022, 
    price: "KSh 14,750,000", 
    fuel: "Petrol", 
    transmission: "Automatic", 
    engine: "3800cc",
    inStock: false,
    img: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcT0DGH_ZHR5emUkPY91pXnhmquXVJgvyfscgJ-lmII80wuCiqAwbb5bWI48YHmgKLiz3pm5TgotvQV4wmA" 
  },
  { 
    id: 7, 
    brand: "Land Rover", 
    model: "Defender 110", 
    year: 2024, 
    price: "KSh 10,920,000", 
    fuel: "Diesel", 
    transmission: "Automatic", 
    engine: "3000cc",
    inStock: true,
    img: "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcRGA6GPDYXxxrAhpd7xU8Vasg0EzxbJ6ORlHWwUlq3t7ViofYWfHpcf3cb9X_ETULNlIwSh1X4WL_i6nns" 
  },
  { 
    id: 8, 
    brand: "Ford", 
    model: "Ranger Raptor", 
    year: 2023, 
    price: "KSh 8,840,000", 
    fuel: "Diesel", 
    transmission: "Automatic", 
    engine: "3000cc",
    inStock: true,
    img: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcRiR6-xfKDDmhpYyWe9WP3aHqfe1z8_IOLl67p1fRog87k9PbJQ-3Zu1pBRCkmeqcQCsAXAZa20e8L8Hlg" 
  },
  { 
    id: 9, 
    brand: "Porsche", 
    model: "911 Carrera S", 
    year: 2023, 
    price: "KSh 17,030,000", 
    fuel: "Petrol", 
    transmission: "Automatic", 
    engine: "3000cc",
    inStock: false,
    img: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQZ_e0vhBNXJ3U_sAYD3grvyoCmTRxEucTiUR6Q-SzaSBn_ezPH6gqfcjIncNE_o9KEjqLhrFtbGUCHho8" 
  },
];

const FeaturedVehicles = () => {
  return (
    <section className="featured-section">
      <div className="featured-container">
        
        <div className="featured-header">
          <h2>Featured Cars & Vehicles</h2>
          <p>Handpicked premium additions to our showroom floor</p>
        </div>

        <div className="featured-flex-grid">
          {VEHICLES_DATA.map((car) => (
            <div key={car.id} className="vehicle-card">
              
              <div className="vehicle-image-wrapper">
                {car.img ? (
                  <img src={car.img} alt={`${car.brand} ${car.model}`} className="vehicle-img" />
                ) : (
                  <div className="vehicle-img-fallback">
                    <span>{car.brand} Showcase</span>
                  </div>
                )}
                
                <div className="vehicle-badge-container">
                  <span className="vehicle-badge-year">{car.year}</span>
                  <span className="vehicle-badge-stock">
                    {car.inStock ? "In Stock" : "Sold Out"}
                  </span>
                </div>
              </div>

              <div className="vehicle-details">
                <span className="vehicle-brand-tag">{car.brand}</span>
                <h3 className="vehicle-title">{car.model}</h3>
                
                {/* Specs Row 1: Primary Transmission & Fuel */}
                <div className="vehicle-specs-row">
                  <span className="spec-pill">{car.transmission}</span>
                  <span className="spec-pill">{car.fuel}</span>
                </div>

                {/* New Specs Row 2: Standardized formatting label applied dynamically */}
                <div className="vehicle-engine-row">
                  <span className="engine-pill">Engine: {car.engine}</span>
                </div>

                <hr className="card-divider" />

                <div className="vehicle-footer-row">
                  <span className="vehicle-price">{car.price}</span>
                  <button className="vehicle-view-btn" aria-label={`View details for ${car.brand} ${car.model}`}>
                    View Details
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default FeaturedVehicles;