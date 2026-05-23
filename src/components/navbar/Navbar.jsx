// import "./Navbar.css"
// import { Link } from "react-router-dom"

// function Navbar() {

//     return(
//         <div>
//             <h1>Cars Nzuri</h1>
//             <ul>
//                 <Link to="carsinstock"> Cars In Stock</Link>
//                 <Link to="incomingcars"> Incoming Cars </Link>
//                 <Link to="finance"> Finance </Link>
//                 <Link to="importservices"> Import Services </Link>
//                 <Link to="autocare"> Auto Care </Link>
//                 <Link to="contactus"> Contact Us </Link>
//             </ul>
//         </div>
//     )

// }

// export default Navbar



import "./Navbar.css"
import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav className="navbar-wrapper">
      <div className="navbar-container">
        {/* Left Column: Brand Logo */}
        <div className="navbar-left">
          <Link to="/" className="navbar-brand">
            <h1>Cars Nzuri</h1>
          </Link>
        </div>
        
        {/* Right Column: Navigation Links */}
        <div className="navbar-right">
          <ul className="navbar-links">
            <li><Link to="carsinstock">Cars In Stock</Link></li>
            <li><Link to="incomingcars">Incoming Cars</Link></li>
            <li><Link to="finance">Finance</Link></li>
            <li><Link to="importservices">Import Services</Link></li>
            <li><Link to="autocare">Auto Care</Link></li>
            <li><Link to="contactus">Contact Us</Link></li>
            
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar