import "./PopularCarBrands.css"

const BRANDS_DATA = [
  { name: "Toyota", slug: "toyota-657453", count: 142 },
  { name: "Nissan", slug: "nissan-982134", count: 98 },
  { name: "Mazda", slug: "mazda-764312", count: 76 },
  { name: "Subaru", slug: "subaru-543210", count: 54 },
  { name: "Honda", slug: "honda-896543", count: 89 },
  { name: "BMW", slug: "bmw-432109", count: 43 },
  { name: "Aston Martin", slug: "aston-martin-102938", count: 12 },
  { name: "Audi", slug: "audi-564738", count: 37 },
  { name: "Ferrari", slug: "ferrari-889900", count: 5 },
  { name: "Ford", slug: "ford-112233", count: 61 },
  { name: "Isuzu", slug: "isuzu-445566", count: 24 },
  { name: "Jeep", slug: "jeep-778899", count: 19 },
  { name: "Lamborghini", slug: "lamborghini-334455", count: 3 },
  { name: "Land Rover", slug: "land-rover-667788", count: 29 },
  { name: "Lexus", slug: "lexus-990011", count: 31 },
  { name: "Mercedes-Benz", slug: "mercedes-benz-223344", count: 52 },
  { name: "Mitsubishi", slug: "mitsubishi-556677", count: 47 },
  { name: "Mobius", slug: "mobius-889911", count: 8 },
  { name: "Peugeot", slug: "peugeot-224466", count: 14 },
  { name: "Porsche", slug: "porsche-775533", count: 11 },
  { name: "Suzuki", slug: "suzuki-993311", count: 40 },
  { name: "Volkswagen", slug: "volkswagen-442288", count: 35 },
  { name: "Volvo", slug: "volvo-115599", count: 22 }
];

const PopularCarBrands = () => {
  return (
    <section className="brands-section">
      <div className="brands-container">
        
        <div className="brands-header">
          <h2>Popular Car Brands</h2>
          <p>Select a tag to explore our current inventory</p>
        </div>

        {/* The wrapper layout for your pill tags */}
        <div className="brands-badge-wrapper">
          {BRANDS_DATA.map((brand, index) => (
            <a 
              key={index}
              className="brand-pill-link" 
              aria-label={`Browse ${brand.name} vehicles`} 
              href={`/vehicles?make=${brand.slug}`}
            >
              {brand.name} <span className="brand-pill-count">({brand.count})</span>
            </a>
          ))}
        </div>

      </div>
    </section>
  )
}

export default PopularCarBrands